# Story 2.1: Trade Template & Line Item Library

Status: ready-for-dev

## Story

As a contractor,
I want to access pre-built line items for my trade with descriptions and suggested pricing,
so that I can build quotes quickly without typing everything from scratch.

## Acceptance Criteria

1. **Given** the system is initialized
   **When** the database is seeded with `npx prisma db seed`
   **Then** trade-specific template libraries exist for PLUMBING, ELECTRICAL, HVAC, and PAINTING
   **And** each trade has at least 15 categorized line items with descriptions, suggested prices, and appropriate units (each, per linear foot, per square foot, per hour, flat rate)
   **And** the seed script is idempotent — running it twice does not create duplicate templates

2. **Given** I am authenticated as a contractor
   **When** I send `GET /api/templates?trade=PLUMBING` (or any valid trade value)
   **Then** I receive `{ data: Template[] }` for that trade
   **And** the response is scoped to system templates (`isSystem: true`) only
   **And** unauthenticated requests return 401

3. **Given** I have a template ID
   **When** I send `GET /api/templates/[id]/items`
   **Then** I receive `{ data: TemplateItem[] }` for that template, ordered by `sortOrder`
   **And** unauthenticated requests return 401

4. **Given** I have a template ID and provide a search query
   **When** I send `GET /api/templates/[id]/items?search=water+heater`
   **Then** the response filters items whose `description` or `category` contains the search string (case-insensitive)
   **And** items not matching the search are excluded

5. **Given** the `LineItemPicker` component is rendered with a `trade` prop
   **When** the component mounts
   **Then** it fetches and displays line items for the matching system template, organized by category
   **And** each item shows its description, suggested price (formatted as currency), and unit

6. **Given** I am viewing the line item library
   **When** I type a search term in the search input
   **Then** the displayed items filter in real-time (client-side) to show only matching items
   **And** filtering happens with no network request (all items loaded upfront per template)

7. **Given** I see a line item in the picker
   **When** I tap the add button
   **Then** the `onAddItem` callback is called with the item's description, suggestedPrice, unit, and category
   **And** the picker remains open for further item additions

## Tasks / Subtasks

- [ ] Task 1: Create seed script with trade template data (AC: #1)
  - [ ] 1.1 Install `tsx` as a dev dependency: `npm install -D tsx` (needed to run TypeScript seed script)
  - [ ] 1.2 Add seed config to `package.json` under a `"prisma"` key: `{ "seed": "npx tsx prisma/seed.ts" }`
  - [ ] 1.3 Create `prisma/seed.ts` with idempotent seeding logic — delete existing system templates first, then recreate all 4 trade templates
  - [ ] 1.4 Add PLUMBING template with 16 items across categories: Fixtures, Pipe & Fittings, Service
  - [ ] 1.5 Add ELECTRICAL template with 16 items across categories: Outlets & Switches, Panels & Circuits, Lighting, Service
  - [ ] 1.6 Add HVAC template with 16 items across categories: Equipment, Maintenance, Ductwork, Installation
  - [ ] 1.7 Add PAINTING template with 17 items across categories: Interior, Exterior, Prep & Specialty
  - [ ] 1.8 Run `npx prisma db seed` and verify it completes without errors and creates all templates/items
  - [ ] 1.9 Run seed a second time to verify idempotency (no duplicate templates)

- [ ] Task 2: Create template API routes (AC: #2, #3, #4)
  - [ ] 2.1 Create `src/app/api/templates/route.ts` with `GET` handler that accepts `?trade=` query param
  - [ ] 2.2 Validate session with `auth()`, return 401 if unauthenticated
  - [ ] 2.3 Validate `trade` query param against the `Trade` enum values; return 400 for invalid values
  - [ ] 2.4 Query `prisma.template.findMany({ where: { trade, isSystem: true } })` — only system templates
  - [ ] 2.5 Return `{ data: templates }` with 200 status
  - [ ] 2.6 Create `src/app/api/templates/[id]/items/route.ts` with `GET` handler
  - [ ] 2.7 Validate session, return 401 if unauthenticated
  - [ ] 2.8 Accept optional `?search=` query parameter
  - [ ] 2.9 If `search` is provided, filter via Prisma `contains` with `mode: 'insensitive'` on `description` OR `category`
  - [ ] 2.10 Return items ordered by `sortOrder` ascending: `{ data: items }`

- [ ] Task 3: Create Zod validation schemas for templates (AC: #2, #3, #4)
  - [ ] 3.1 Create `src/lib/validations/template.ts`
  - [ ] 3.2 Add `templateQuerySchema` to validate `trade` as a union of valid Trade enum strings
  - [ ] 3.3 Add `templateItemsQuerySchema` to validate optional `search` string

- [ ] Task 4: Create SWR hook for templates (AC: #5)
  - [ ] 4.1 Create `src/hooks/use-templates.ts`
  - [ ] 4.2 Export `useTemplates(trade: string)` — SWR hook fetching `/api/templates?trade=${trade}`
  - [ ] 4.3 Export `useTemplateItems(templateId: string | null | undefined, search?: string)` — SWR hook fetching `/api/templates/${templateId}/items?search=...`, suspending when templateId is null/undefined (pass null to useSWR key to disable)

- [ ] Task 5: Create LineItemPicker component (AC: #5, #6, #7)
  - [ ] 5.1 Create `src/components/quotes/line-item-picker.tsx` as a client component (`"use client"`)
  - [ ] 5.2 Define `TemplateItemData` type (export it) with fields: `id, description, suggestedPrice, unit, category`
  - [ ] 5.3 Define component props: `trade: string`, `onAddItem: (item: TemplateItemData) => void`, optional `className?: string`
  - [ ] 5.4 Use `useTemplates(trade)` to fetch the template list, then use the first template's `id` with `useTemplateItems` to load all items (no search param — load all upfront)
  - [ ] 5.5 Maintain local `searchQuery` state (string) for client-side filtering
  - [ ] 5.6 Filter items in render: `items.filter(item => item.description.toLowerCase().includes(q) || item.category?.toLowerCase().includes(q))` where `q = searchQuery.toLowerCase()`
  - [ ] 5.7 Group filtered items by `category` using `Array.reduce()` to produce `Record<string, TemplateItemData[]>`
  - [ ] 5.8 Render a search `<input>` at top with `value={searchQuery}` and `onChange` updating state immediately (no debounce — items are already loaded)
  - [ ] 5.9 Render each category as a collapsible section header, items listed beneath
  - [ ] 5.10 Each item row shows: description, unit, `formatCurrency(suggestedPrice)`, and a "+" button (`aria-label="Add item"`)
  - [ ] 5.11 Tapping "+" calls `onAddItem({ id, description, suggestedPrice, unit, category })`
  - [ ] 5.12 Show skeleton/loading state while items are fetching (use simple text "Loading items…" or a spinner)
  - [ ] 5.13 Show "No items match your search" when filtered result is empty
  - [ ] 5.14 Ensure all interactive elements meet 44x44px minimum touch target (use `min-h-[44px]` on buttons)

- [ ] Task 6: Write tests (AC: #1–#7)
  - [ ] 6.1 Create `src/app/api/templates/route.test.ts` testing:
    - Returns 401 when no session
    - Returns 400 for invalid trade value
    - Returns array of system templates for valid trade
  - [ ] 6.2 Create `src/app/api/templates/[id]/items/route.test.ts` testing:
    - Returns 401 when no session
    - Returns items filtered by search term
  - [ ] 6.3 Create `src/lib/validations/template.test.ts` testing schema validation for valid/invalid inputs

- [ ] Task 7: Final verification (AC: #1–#7)
  - [ ] 7.1 Run `npm run build` — must succeed with zero TypeScript errors
  - [ ] 7.2 Run `npm test` — all new tests pass
  - [ ] 7.3 Run `npx prisma db seed` — verify all 4 templates created with 15+ items each
  - [ ] 7.4 Verify `GET /api/templates?trade=PLUMBING` returns templates (test with curl or browser)
  - [ ] 7.5 Verify `GET /api/templates/[id]/items?search=water` returns filtered items

## Dev Notes

### Critical: Project Structure Reminder

The project root is at `mvps/contractor-quoting-estimation/src/`. Run all commands (`npm`, `npx prisma`, etc.) from that directory.

```
mvps/contractor-quoting-estimation/
  src/                        ← project root (package.json lives here)
    prisma/
      schema.prisma           ← already exists with all models
    src/                      ← Next.js source (the nested src dir)
      app/api/templates/      ← new routes go here
      components/quotes/      ← new components go here
      hooks/                  ← new hooks go here
      lib/validations/        ← new validation schemas go here
```

### Prisma v7 Seed Setup

Prisma v7 uses `prisma.config.ts` (already exists). The seed command is configured in `package.json` under the `"prisma"` key:

```json
// package.json — add this top-level key
"prisma": {
  "seed": "npx tsx prisma/seed.ts"
}
```

Install `tsx` first: `npm install -D tsx`

Run with: `npx prisma db seed`

### Seed Script Pattern (Idempotent)

```typescript
// prisma/seed.ts
import { PrismaClient, Trade } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

function createClient() {
  const connectionString = process.env.DATABASE_URL ?? "";
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

const prisma = createClient();

async function main() {
  // Delete existing system templates to allow re-seeding
  await prisma.template.deleteMany({ where: { isSystem: true } });

  // Plumbing
  await prisma.template.create({
    data: {
      trade: Trade.PLUMBING,
      name: "Standard Plumbing",
      description: "Common plumbing services and materials",
      isSystem: true,
      items: {
        create: [
          // ... items array (see Seed Data Reference below)
        ],
      },
    },
  });
  // repeat for ELECTRICAL, HVAC, PAINTING
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
```

**Note:** The `createClient()` in the seed script cannot use `src/lib/db.ts` because that file uses `global` singleton which is for Next.js server context. The seed script runs as a standalone Node.js process via `tsx` — instantiate Prisma directly.

### Seed Data Reference

**PLUMBING (16 items):**

| description | category | suggestedPrice | unit | sortOrder |
|---|---|---|---|---|
| Water Heater Installation | Fixtures | 450.00 | each | 0 |
| Toilet Installation | Fixtures | 250.00 | each | 1 |
| Faucet Installation | Fixtures | 180.00 | each | 2 |
| Sink Installation | Fixtures | 200.00 | each | 3 |
| Garbage Disposal Installation | Fixtures | 220.00 | each | 4 |
| Shower Installation | Fixtures | 650.00 | each | 5 |
| Bathtub Installation | Fixtures | 750.00 | each | 6 |
| Copper Pipe Supply/Install | Pipe & Fittings | 45.00 | per linear foot | 7 |
| Water Line Replacement | Pipe & Fittings | 55.00 | per linear foot | 8 |
| Sewer Line Repair | Pipe & Fittings | 85.00 | per linear foot | 9 |
| Drain Cleaning | Service | 175.00 | flat rate | 10 |
| Emergency Service Call | Service | 225.00 | flat rate | 11 |
| Toilet Repair | Service | 125.00 | flat rate | 12 |
| Water Pressure Regulator | Service | 195.00 | flat rate | 13 |
| Water Softener Installation | Service | 850.00 | flat rate | 14 |
| Plumbing Inspection | Service | 125.00 | flat rate | 15 |

**ELECTRICAL (16 items):**

| description | category | suggestedPrice | unit | sortOrder |
|---|---|---|---|---|
| Outlet Installation | Outlets & Switches | 125.00 | each | 0 |
| GFCI Outlet Installation | Outlets & Switches | 145.00 | each | 1 |
| Switch Installation | Outlets & Switches | 95.00 | each | 2 |
| Dimmer Switch Installation | Outlets & Switches | 115.00 | each | 3 |
| Circuit Breaker Replacement | Panels & Circuits | 175.00 | each | 4 |
| New Circuit Installation | Panels & Circuits | 350.00 | flat rate | 5 |
| Panel Upgrade - 200 Amp | Panels & Circuits | 2500.00 | flat rate | 6 |
| Surge Protector Installation | Panels & Circuits | 295.00 | flat rate | 7 |
| Wiring - New Construction | Panels & Circuits | 8.00 | per linear foot | 8 |
| Light Fixture Installation | Lighting | 150.00 | each | 9 |
| Ceiling Fan Installation | Lighting | 200.00 | each | 10 |
| Recessed Lighting Installation | Lighting | 175.00 | each | 11 |
| Smoke / CO Detector Installation | Lighting | 95.00 | each | 12 |
| EV Charger Installation | Service | 850.00 | flat rate | 13 |
| Electrical Inspection | Service | 200.00 | flat rate | 14 |
| Emergency Service Call | Service | 225.00 | flat rate | 15 |

**HVAC (16 items):**

| description | category | suggestedPrice | unit | sortOrder |
|---|---|---|---|---|
| AC Unit Installation - 3 Ton | Equipment | 4500.00 | flat rate | 0 |
| Furnace Installation | Equipment | 3200.00 | flat rate | 1 |
| Heat Pump Installation | Equipment | 5500.00 | flat rate | 2 |
| Mini-Split Installation | Equipment | 2800.00 | flat rate | 3 |
| Indoor Air Quality System | Equipment | 1500.00 | flat rate | 4 |
| AC Tune-Up | Maintenance | 145.00 | flat rate | 5 |
| Furnace Tune-Up | Maintenance | 125.00 | flat rate | 6 |
| Refrigerant Recharge | Maintenance | 275.00 | flat rate | 7 |
| Air Filter Replacement | Maintenance | 45.00 | each | 8 |
| Condensate Drain Cleaning | Maintenance | 95.00 | flat rate | 9 |
| Blower Motor Replacement | Maintenance | 650.00 | flat rate | 10 |
| Compressor Replacement | Maintenance | 1200.00 | flat rate | 11 |
| Ductwork Repair | Ductwork | 35.00 | per linear foot | 12 |
| Duct Cleaning | Ductwork | 450.00 | flat rate | 13 |
| Thermostat Installation - Smart | Installation | 285.00 | each | 14 |
| HVAC Inspection | Installation | 175.00 | flat rate | 15 |

**PAINTING (17 items):**

| description | category | suggestedPrice | unit | sortOrder |
|---|---|---|---|---|
| Interior Wall Painting | Interior | 2.50 | per sq ft | 0 |
| Ceiling Painting | Interior | 2.00 | per sq ft | 1 |
| Door Painting - Interior | Interior | 85.00 | each | 2 |
| Baseboard Painting | Interior | 3.50 | per linear foot | 3 |
| Cabinet Painting - Kitchen | Interior | 950.00 | flat rate | 4 |
| Crown Molding Painting | Interior | 5.00 | per linear foot | 5 |
| Exterior Wall Painting | Exterior | 3.50 | per sq ft | 6 |
| Door Painting - Exterior | Exterior | 125.00 | each | 7 |
| Window Trim Painting | Exterior | 65.00 | each | 8 |
| Deck Staining | Exterior | 3.00 | per sq ft | 9 |
| Fence Painting | Exterior | 4.00 | per linear foot | 10 |
| Surface Prep & Primer | Prep & Specialty | 1.50 | per sq ft | 11 |
| Wallpaper Removal | Prep & Specialty | 2.00 | per sq ft | 12 |
| Popcorn Ceiling Removal | Prep & Specialty | 3.00 | per sq ft | 13 |
| Drywall Repair - Small | Prep & Specialty | 175.00 | flat rate | 14 |
| Drywall Repair - Large | Prep & Specialty | 350.00 | flat rate | 15 |
| Epoxy Floor Coating | Prep & Specialty | 4.50 | per sq ft | 16 |

### API Route Pattern (Follow Existing Code Style)

The existing API routes in this project use a slightly simplified error format (not the fully structured format in the architecture doc). Match the existing code style from `src/app/api/profile/route.ts`:

```typescript
// src/app/api/templates/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Trade } from "@prisma/client";

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const trade = searchParams.get("trade");

  if (!trade || !Object.values(Trade).includes(trade as Trade)) {
    return NextResponse.json(
      { error: "Invalid or missing trade parameter" },
      { status: 400 }
    );
  }

  try {
    const templates = await prisma.template.findMany({
      where: { trade: trade as Trade, isSystem: true },
    });
    return NextResponse.json({ data: templates });
  } catch (err) {
    console.error("Get templates error:", err);
    return NextResponse.json(
      { error: "Failed to fetch templates." },
      { status: 500 }
    );
  }
}
```

```typescript
// src/app/api/templates/[id]/items/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;  // params is a Promise in Next.js 16
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") ?? "";

  try {
    const items = await prisma.templateItem.findMany({
      where: {
        templateId: id,
        ...(search
          ? {
              OR: [
                { description: { contains: search, mode: "insensitive" } },
                { category: { contains: search, mode: "insensitive" } },
              ],
            }
          : {}),
      },
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json({ data: items });
  } catch (err) {
    console.error("Get template items error:", err);
    return NextResponse.json(
      { error: "Failed to fetch template items." },
      { status: 500 }
    );
  }
}
```

**CRITICAL: `params` is a Promise in Next.js 16.** Always `await params` before destructuring. This is a breaking change from Next.js 14/15.

### SWR Hook Pattern

```typescript
// src/hooks/use-templates.ts
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useTemplates(trade: string | null | undefined) {
  return useSWR(
    trade ? `/api/templates?trade=${trade}` : null,
    fetcher
  );
}

export function useTemplateItems(templateId: string | null | undefined) {
  return useSWR(
    templateId ? `/api/templates/${templateId}/items` : null,
    fetcher
  );
}
```

The client-side search filtering in `LineItemPicker` happens in render (not via API), so `useTemplateItems` loads all items once and filtering is purely local state. Do NOT pass `search` to the API from the hook — all items are loaded upfront and filtered client-side.

### LineItemPicker Component

```typescript
// src/components/quotes/line-item-picker.tsx
"use client";

import { useState } from "react";
import { useTemplates, useTemplateItems } from "@/hooks/use-templates";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

export type TemplateItemData = {
  id: string;
  description: string;
  suggestedPrice: number | null;
  unit: string;
  category: string | null;
};

type LineItemPickerProps = {
  trade: string;
  onAddItem: (item: TemplateItemData) => void;
  className?: string;
};

export function LineItemPicker({ trade, onAddItem, className }: LineItemPickerProps) {
  const [search, setSearch] = useState("");
  const { data: templatesData } = useTemplates(trade);
  const firstTemplateId = templatesData?.data?.[0]?.id ?? null;
  const { data: itemsData, isLoading } = useTemplateItems(firstTemplateId);

  const allItems: TemplateItemData[] = itemsData?.data ?? [];
  const q = search.toLowerCase();
  const filtered = q
    ? allItems.filter(
        (item) =>
          item.description.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q)
      )
    : allItems;

  // Group by category
  const grouped = filtered.reduce<Record<string, TemplateItemData[]>>(
    (acc, item) => {
      const cat = item.category ?? "Other";
      (acc[cat] ??= []).push(item);
      return acc;
    },
    {}
  );

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <input
        type="search"
        placeholder="Search items…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm min-h-[44px]"
      />
      {isLoading && <p className="text-sm text-gray-500">Loading items…</p>}
      {!isLoading && filtered.length === 0 && (
        <p className="text-sm text-gray-500">No items match your search.</p>
      )}
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h4 className="text-xs font-semibold uppercase text-gray-500 py-1">{category}</h4>
          <ul className="divide-y divide-gray-100">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-2 gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.description}</p>
                  <p className="text-xs text-gray-500">
                    {item.suggestedPrice != null ? formatCurrency(item.suggestedPrice) : "—"} · {item.unit}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={`Add ${item.description}`}
                  onClick={() => onAddItem(item)}
                  className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 text-xl font-bold"
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### Zod v4 Notes

This project uses Zod **v4** (`^4.3.6`). Key difference from v3:
- Error access: `err.issues[0]?.message` (not `err.errors`) — see existing `profile/route.ts` for reference
- `ZodError` import: `import { ZodError } from "zod"` (unchanged)
- `z.enum([...])` works the same way
- The `template.ts` validation schema is optional for this story — the API routes can validate the `trade` param directly against `Object.values(Trade)` from Prisma's generated types (simpler approach used in the route example above)

### Prisma v7 + PrismaPg Adapter

The `src/lib/db.ts` uses `@prisma/adapter-pg` (not the default Prisma client). This is already configured — **do not change `db.ts`**. Import and use it as-is:

```typescript
import { prisma } from "@/lib/db";
```

The seed script cannot use this singleton because it runs outside the Next.js context. Create a fresh Prisma client in the seed script using the same `PrismaPg` adapter pattern (see Seed Script Pattern above).

### Existing Utilities to Reuse

These are already implemented — import them, do NOT recreate:

- `formatCurrency(amount: number): string` — `@/lib/utils`
- `calculateTotal(lineItems, taxRate): { subtotal, tax, total }` — `@/lib/utils` (used in Story 2.2)
- `cn(...inputs: ClassValue[]): string` — `@/lib/utils` (Tailwind class merging)
- `fetcher` — `@/lib/fetcher` (SWR data fetching)
- `prisma` — `@/lib/db` (Prisma singleton)
- `auth()` — `@/lib/auth` (NextAuth session)
- `Button` — `@/components/ui/button` (with `variant`, `size`, `isLoading` props)
- `Input` — `@/components/ui/input`

### CRITICAL: Next.js 16 Breaking Changes

**Before writing any route handler code, check `node_modules/next/dist/docs/` for the latest API.**

Known breaking change relevant to this story:
- **Route params are a `Promise`** in Next.js 16. Always `await params`:
  ```typescript
  // CORRECT in Next.js 16:
  export async function GET(req, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
  }

  // WRONG (old pattern - will cause TypeScript errors):
  export async function GET(req, { params }: { params: { id: string } }) {
    const { id } = params; // BAD - params is a Promise
  }
  ```

### Testing Pattern (Vitest)

Tests use **Vitest** (not Jest). The test environment is `"node"` (see `vitest.config.ts`). The `@` alias is configured to resolve to `src/` in vitest config.

For API route tests, mock the `auth` module and `prisma` module:

```typescript
// route.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({
  auth: vi.fn(),
}));
vi.mock("@/lib/db", () => ({
  prisma: {
    template: {
      findMany: vi.fn(),
    },
  },
}));

import { GET } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

describe("GET /api/templates", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const req = new Request("http://localhost/api/templates?trade=PLUMBING");
    const res = await GET(req as any);
    expect(res.status).toBe(401);
  });

  it("returns 400 for invalid trade", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    const req = new Request("http://localhost/api/templates?trade=INVALID");
    const res = await GET(req as any);
    expect(res.status).toBe(400);
  });

  it("returns templates for valid trade", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.template.findMany).mockResolvedValue([
      { id: "tpl-1", trade: "PLUMBING", name: "Standard Plumbing", isSystem: true } as any,
    ]);
    const req = new Request("http://localhost/api/templates?trade=PLUMBING");
    const res = await GET(req as any);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data).toHaveLength(1);
  });
});
```

### Anti-Patterns to Avoid

- **Never** use raw SQL — always Prisma ORM
- **Never** put items in the database directly — always through Template relations
- **Never** call the API from the client with `fetch` directly — always use SWR hooks
- **Never** implement server-side search filtering in the `useTemplateItems` hook — load all items upfront, filter client-side in the component
- **Never** forget to `await params` in dynamic route handlers (Next.js 16 breaking change)
- **Never** hardcode trade labels — use the `Trade` enum from `@prisma/client`
- **Never** expose the entire database object directly — return only needed fields
- **Never** create the Prisma client in the seed script via `src/lib/db.ts` — instantiate it directly (see seed script pattern above)

### Files to Create in This Story

**New files:**
- `prisma/seed.ts` — Trade template seed data (4 trades, 65+ items total)
- `src/app/api/templates/route.ts` — GET templates by trade
- `src/app/api/templates/[id]/items/route.ts` — GET template items with optional search
- `src/hooks/use-templates.ts` — SWR hooks for templates and items
- `src/components/quotes/line-item-picker.tsx` — Browseable trade item picker component
- `src/app/api/templates/route.test.ts` — Tests for templates route
- `src/app/api/templates/[id]/items/route.test.ts` — Tests for items route

**Modified files:**
- `package.json` — Add `"prisma": { "seed": "npx tsx prisma/seed.ts" }` section

**Note:** `src/lib/validations/template.ts` is optional — the route-level validation using `Object.values(Trade)` is sufficient and matches the existing code style. Only create it if there's a compelling need for reusable schema.

### Project Structure Notes

- All paths follow the architecture document's feature-based organization
- `src/components/quotes/` directory — this story introduces the first component here
- Template items are read-only for contractors (seeded by system) — no write endpoints needed in this story
- The `LineItemPicker` component is designed to be embedded into the `QuoteBuilder` in Story 2.2 via the `onAddItem` callback
- The `TemplateItemData` type exported from `line-item-picker.tsx` will be reused in Story 2.2 when wiring up the quote builder

### References

- [Source: planning/epics.md#Epic 2 — Story 2.1: Trade Template & Line Item Library]
- [Source: planning/architecture.md#Data Architecture — Data Model (Template, TemplateItem models)]
- [Source: planning/architecture.md#API & Communication Patterns — Core API Endpoints (/api/templates)]
- [Source: planning/architecture.md#Frontend Architecture — Component Architecture]
- [Source: planning/architecture.md#Implementation Patterns — Naming Patterns]
- [Source: planning/architecture.md#Project Structure — Requirements to Structure Mapping (FR12–FR16)]
- [Source: stories/1-1-project-setup-from-starter-template.md — Project foundation, db.ts, Prisma schema]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
