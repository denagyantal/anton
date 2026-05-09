# Story 6.1: PWA Installation & Service Worker Setup

Status: ready-for-dev

## Story

As a contractor,
I want to install QuoteCraft on my phone's home screen and have it load instantly,
so that it feels like a native app and is always one tap away.

## Acceptance Criteria

1. **Given** I visit QuoteCraft in a mobile browser
   **When** the app loads
   **Then** the browser can detect the installable PWA (valid manifest with name, icons, start_url, display: standalone)
   **And** Chrome/Edge shows a native "Add to Home Screen" install prompt on a return visit

2. **Given** I install the PWA and open it from my home screen
   **When** the app launches
   **Then** it opens in standalone mode (no browser chrome — no URL bar, no navigation buttons)
   **And** it loads within 1 second from the service worker cache (NFR4)

3. **Given** the service worker is registered
   **When** the app shell loads for the first time
   **Then** all static assets (JS bundles, CSS, fonts) are precached by the service worker
   **And** subsequent page loads serve assets from cache without network round-trips

4. **Given** the service worker is registered
   **When** the contractor navigates to any page
   **Then** the service worker intercepts `/api/templates*` requests and serves them with a StaleWhileRevalidate strategy
   **And** the templates are cached locally so they are available offline (required for Story 6.2)

5. **Given** I have the PWA installed and open it
   **When** my device is offline
   **Then** I see a clear visual indicator showing "Offline" status (amber fixed banner at the bottom of the screen)
   **And** the indicator disappears automatically when connectivity is restored

6. **Given** I am online and using the app normally
   **When** I view any page
   **Then** the offline indicator is NOT visible — it only appears when offline

## Tasks / Subtasks

- [ ] Task 1: Read Next.js 16 docs and install PWA package (AC: #2, #3)
  - [ ] 1.1 **MANDATORY FIRST STEP** — Read `node_modules/next/dist/docs/` (as per AGENTS.md) to check for any Next.js 16-specific PWA or service worker guidance, configuration changes, or built-in support before installing any third-party package
  - [ ] 1.2 Check if any PWA or service worker package is already in `node_modules/` (look for `next-pwa`, `@ducanh2912/next-pwa`, `workbox-*`)
  - [ ] 1.3 Install `@ducanh2912/next-pwa` — the actively maintained fork of next-pwa that supports Next.js App Router:
    ```bash
    cd mvps/contractor-quoting-estimation/src && npm install @ducanh2912/next-pwa
    ```
    If this package fails to install or conflicts with Next.js 16.2.2, see the **Fallback** section in Dev Notes before proceeding.
  - [ ] 1.4 Update `next.config.ts` — wrap the existing config with the PWA plugin (preserve ALL existing config fields):
    ```typescript
    import type { NextConfig } from "next";
    import withPWA from "@ducanh2912/next-pwa";

    const nextConfig: NextConfig = {
      output: "standalone",
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*.r2.cloudflarestorage.com",
          },
        ],
      },
      serverExternalPackages: ["bcrypt", "@prisma/client", "pg", "@react-pdf/renderer", "twilio"],
    };

    export default withPWA({
      dest: "public",
      cacheOnFrontEndNav: true,
      aggressiveFrontEndNavCaching: true,
      reloadOnOnline: true,
      disable: process.env.NODE_ENV === "development",
      workboxOptions: {
        disableDevLogs: true,
        runtimeCaching: [
          {
            urlPattern: /\/api\/templates/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "trade-templates-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
            },
          },
        ],
      },
    })(nextConfig);
    ```
    *(Note: If `import withPWA` causes TypeScript errors, try `const withPWA = require("@ducanh2912/next-pwa").default` instead)*
  - [ ] 1.5 Add the generated service worker files to `.gitignore` (create if it doesn't exist):
    ```
    # PWA service worker (generated at build time)
    /public/sw.js
    /public/workbox-*.js
    /public/swe-worker-*.js
    ```

- [ ] Task 2: Create PWA web app manifest and icons (AC: #1, #2)
  - [ ] 2.1 Create `public/manifest.json`:
    ```json
    {
      "name": "QuoteCraft",
      "short_name": "QuoteCraft",
      "description": "Professional quoting for contractors — create quotes, win jobs, get paid faster.",
      "start_url": "/dashboard",
      "display": "standalone",
      "background_color": "#ffffff",
      "theme_color": "#2563EB",
      "orientation": "portrait-primary",
      "icons": [
        {
          "src": "/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any maskable"
        }
      ]
    }
    ```
  - [ ] 2.2 Generate PWA icon PNGs using the `sharp` package (available via Next.js's Image optimization dependencies):
    ```bash
    cd mvps/contractor-quoting-estimation/src && node -e "
    const sharp = require('sharp');
    const fs = require('fs');
    fs.mkdirSync('public/icons', { recursive: true });

    // Generate both icon sizes
    [192, 512].forEach(size => {
      // Create a blue (#2563EB) square PNG with text dimensions matching the size
      const svg = \`<svg width=\"\${size}\" height=\"\${size}\" xmlns=\"http://www.w3.org/2000/svg\">
        <rect width=\"\${size}\" height=\"\${size}\" rx=\"\${Math.floor(size * 0.2)}\" fill=\"#2563EB\"/>
        <text x=\"50%\" y=\"54%\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"white\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"\${Math.floor(size * 0.35)}\">QC</text>
      </svg>\`;
      sharp(Buffer.from(svg))
        .png()
        .toFile(\`public/icons/icon-\${size}x\${size}.png\`, err => {
          if (err) console.error(err);
          else console.log(\`Generated icon-\${size}x\${size}.png\`);
        });
    });
    "
    ```
    If `sharp` is not available (not in `node_modules` directly), see the **Icon Fallback** in Dev Notes.
  - [ ] 2.3 Verify both icon files were created and are valid PNGs:
    ```bash
    ls -la public/icons/
    file public/icons/icon-192x192.png
    file public/icons/icon-512x512.png
    ```
    Both should report "PNG image data"

- [ ] Task 3: Update root layout metadata for PWA (AC: #1, #2)
  - [ ] 3.1 Open `src/src/app/layout.tsx` (MODIFY — do NOT recreate)
  - [ ] 3.2 Update the `metadata` export to add PWA-specific fields:
    ```typescript
    export const metadata: Metadata = {
      title: "QuoteCraft – Professional Quoting for Contractors",
      description:
        "Create professional quotes, win more jobs, and get paid faster. Built for plumbers, electricians, HVAC, and painters.",
      manifest: "/manifest.json",
      themeColor: "#2563EB",
      appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "QuoteCraft",
      },
      icons: {
        apple: "/icons/icon-192x192.png",
      },
    };
    ```
    *(Next.js metadata API auto-generates the `<link rel="manifest">` and Apple PWA meta tags — do NOT add them manually in the HTML)*

- [ ] Task 4: Create `use-offline.ts` hook (AC: #5, #6)
  - [ ] 4.1 Create `src/src/hooks/use-offline.ts` (NEW file):
    ```typescript
    "use client";
    import { useState, useEffect } from "react";

    export function useOffline() {
      // Initialize to true (optimistic) — avoids SSR hydration mismatch
      const [isOnline, setIsOnline] = useState(true);

      useEffect(() => {
        // Sync with actual browser state on mount
        setIsOnline(navigator.onLine);

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
          window.removeEventListener("online", handleOnline);
          window.removeEventListener("offline", handleOffline);
        };
      }, []);

      return { isOnline };
    }
    ```

- [ ] Task 5: Create `offline-indicator.tsx` component (AC: #5, #6)
  - [ ] 5.1 Create `src/src/components/layout/` directory (new directory)
  - [ ] 5.2 Create `src/src/components/layout/offline-indicator.tsx` (NEW file):
    ```typescript
    "use client";
    import { useOffline } from "@/hooks/use-offline";

    export function OfflineIndicator() {
      const { isOnline } = useOffline();

      if (isOnline) {
        return null;
      }

      return (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-medium text-amber-800 shadow-md"
        >
          <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
          Offline — changes will sync when reconnected
        </div>
      );
    }
    ```

- [ ] Task 6: Add `OfflineIndicator` to root layout (AC: #5, #6)
  - [ ] 6.1 Update `src/src/app/layout.tsx` — import and render the indicator inside `<body>`:
    ```typescript
    import { OfflineIndicator } from "@/components/layout/offline-indicator";

    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
        <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
          <body className="min-h-full bg-gray-50">
            {children}
            <OfflineIndicator />
          </body>
        </html>
      );
    }
    ```
  - [ ] 6.2 Confirm `layout.tsx` does NOT have `"use client"` — it must remain a Server Component; `OfflineIndicator` is a Client Component leaf and does not require the parent to be a Client Component

- [ ] Task 7: Final verification (AC: all)
  - [ ] 7.1 `cd mvps/contractor-quoting-estimation/src && npm run build` — zero TypeScript errors, successful build
  - [ ] 7.2 `npm test` — all existing 125 tests across 15 test files still pass (zero regressions)
  - [ ] 7.3 Verify `public/manifest.json` exists and contains valid JSON with name, icons array, display: "standalone", start_url
  - [ ] 7.4 Verify `public/icons/icon-192x192.png` and `public/icons/icon-512x512.png` exist and are valid PNG files (`file public/icons/*.png` reports PNG image data)
  - [ ] 7.5 Verify `public/sw.js` was generated during the build (only in production build — not dev)
  - [ ] 7.6 Verify `src/src/hooks/use-offline.ts` has `"use client"` directive and uses only `useState` + `useEffect`
  - [ ] 7.7 Verify `src/src/components/layout/offline-indicator.tsx` has `"use client"` directive and `role="status"` + `aria-live="polite"` for accessibility
  - [ ] 7.8 Verify `OfflineIndicator` returns `null` when `isOnline === true` (no DOM element rendered when online)
  - [ ] 7.9 Verify `src/src/app/layout.tsx` does NOT have `"use client"` directive (must remain a Server Component)
  - [ ] 7.10 Verify `next.config.ts` still has `output: "standalone"` preserved inside the `withPWA` wrapping
  - [ ] 7.11 Run `npx tsc --noEmit` — zero TypeScript errors

## Dev Notes

### CRITICAL: Read Next.js 16 Docs First

As stated in `AGENTS.md` (located at `mvps/contractor-quoting-estimation/src/`): **"Read the relevant guide in `node_modules/next/dist/docs/` before writing any code."**

Next.js 16.2.2 has breaking changes from v15. Before implementing anything in this story, check `node_modules/next/dist/docs/` for:
- Any native PWA or service worker support built into Next.js 16
- Changes to the `next.config.ts` plugin wrapping pattern
- Any deprecations in the metadata API for manifest/themeColor

If Next.js 16 has built-in PWA support that supersedes `@ducanh2912/next-pwa`, use the native approach instead.

### Critical: Project Root and Directory Layout

The npm project root (where `package.json` lives):
```
mvps/contractor-quoting-estimation/src/
```

All `npm install`, `npm run build`, `npm test` commands must be run from this directory.

The Next.js application source:
```
mvps/contractor-quoting-estimation/src/src/
  app/
    layout.tsx                              ← MODIFY: add manifest metadata + OfflineIndicator
  components/
    layout/                                 ← CREATE this directory
      offline-indicator.tsx                 ← CREATE: offline status toast
  hooks/
    use-offline.ts                          ← CREATE: online/offline detection hook
```

Static files served at the root URL:
```
mvps/contractor-quoting-estimation/src/public/
  manifest.json                             ← CREATE: PWA manifest (served at /manifest.json)
  icons/                                    ← CREATE this directory
    icon-192x192.png                        ← CREATE: home screen icon
    icon-512x512.png                        ← CREATE: splash screen icon
  sw.js                                     ← AUTO-GENERATED by next-pwa at build time
  workbox-*.js                              ← AUTO-GENERATED by next-pwa at build time
```

Config file at project root:
```
mvps/contractor-quoting-estimation/src/
  next.config.ts                            ← MODIFY: wrap with withPWA()
```

### PWA Package: `@ducanh2912/next-pwa` vs Alternatives

The architecture doc specifies `next-pwa`, but the original `next-pwa` npm package is unmaintained (last updated 2023) and does not support Next.js App Router or Next.js 15+. Use `@ducanh2912/next-pwa` which is the actively maintained fork.

**If `@ducanh2912/next-pwa` does not install or fails to work with Next.js 16.2.2:**

Fallback option — custom Workbox service worker via `next/script`:
1. Install Workbox: `npm install workbox-window workbox-precaching workbox-routing workbox-strategies`
2. Create `public/sw-custom.js` manually with Workbox imports
3. Register via a `<Script>` component in layout

Only use the fallback if the primary approach fails. Document any fallback decision in the Dev Agent Record.

### Icon Generation — `sharp` Approach

Next.js uses `sharp` internally for image optimization. Check if it is importable:
```bash
cd mvps/contractor-quoting-estimation/src && node -e "require('sharp'); console.log('sharp available')"
```

If `sharp` is available, use the script in Task 2.2. If NOT available (it may only be in Next.js's internal dependencies):

**Alternative 1: Use Node.js built-in `Buffer` with a base64-encoded minimal PNG**

A valid 1x1 blue PNG (base64) that `sharp` would resize — but if sharp isn't available this won't work.

**Alternative 2: Write raw PNG binary directly**

The minimum valid PNG structure is well-known. Generate a solid-color PNG using raw bytes:
```javascript
// node generate-icons.js
const zlib = require('zlib');
const fs = require('fs');

function generateSolidColorPng(width, height, r, g, b) {
  // PNG signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(25);
  ihdr.writeUInt32BE(13, 0); // length
  ihdr.write('IHDR', 4);
  ihdr.writeUInt32BE(width, 8);
  ihdr.writeUInt32BE(height, 12);
  ihdr.writeUInt8(8, 16);  // bit depth
  ihdr.writeUInt8(2, 17);  // color type RGB
  ihdr.writeUInt8(0, 18);  // compression
  ihdr.writeUInt8(0, 19);  // filter
  ihdr.writeUInt8(0, 20);  // interlace
  // CRC omitted for brevity — use a proper CRC implementation in practice

  // Build raw image data: filter byte + RGB per row
  const rawData = Buffer.alloc(height * (1 + width * 3));
  for (let y = 0; y < height; y++) {
    rawData[y * (1 + width * 3)] = 0; // filter type None
    for (let x = 0; x < width; x++) {
      const offset = y * (1 + width * 3) + 1 + x * 3;
      rawData[offset] = r;
      rawData[offset + 1] = g;
      rawData[offset + 2] = b;
    }
  }
  // ... (this requires full PNG CRC implementation)
}
```

**Recommended simplest fallback**: Copy a pre-existing valid PNG from the internet and use it as a placeholder during development. For an MVP, a simple colored square is acceptable. The icons directory must exist with valid PNG files for the PWA manifest to validate.

**Even simpler**: If `sharp` is not directly importable, use `npx` to run it:
```bash
npx -y sharp-cli --input /dev/null --output public/icons/icon-192x192.png resize 192 192
```

Or check if the `canvas` package is available: `node -e "require('canvas')"`.

### `output: "standalone"` and Service Workers

The Dockerfile uses `output: "standalone"` and copies `public/` to the runtime container:
```dockerfile
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public  # ← manifest.json and icons are here
```

This means `manifest.json` and icons will be available in Docker. The `sw.js` generated by `next-pwa` also goes into `public/` and will be copied to the runtime image. Do NOT add `public/sw.js` to `.dockerignore` — it needs to be included.

The `disable: process.env.NODE_ENV === "development"` flag ensures service workers don't interfere with hot module reloading during local development.

### Metadata API in Next.js App Router

Next.js App Router uses the `metadata` export for `<head>` tags. Do NOT manually add `<link rel="manifest">` to the HTML — Next.js generates it automatically from `metadata.manifest`.

The `themeColor` field in `metadata` may show a TypeScript deprecation in favor of the viewport export in newer Next.js versions. If `metadata.themeColor` causes a type error in Next.js 16:
```typescript
// In layout.tsx, add this separate export alongside metadata:
export const viewport = {
  themeColor: "#2563EB",
};
// And remove themeColor from the metadata object
```

### `use-offline.ts` — SSR Safety Pattern

The hook initializes `isOnline` to `true` (not `navigator.onLine`) to prevent SSR/client hydration mismatch. The `useEffect` then immediately syncs with the actual browser state on mount. This means:
- Server render: `isOnline = true` → indicator hidden (no SSR flicker)
- Client mount: `isOnline` synced to actual `navigator.onLine` → indicator shows if offline
- The brief flash of "online" state on mount is acceptable (avoids hydration warnings)

### `OfflineIndicator` — Client Component in Server Layout

`layout.tsx` is a Server Component (no `"use client"` directive). `OfflineIndicator` is a Client Component (has `"use client"` directive). Next.js App Router supports this — a Server Component can render a Client Component as a leaf. The key rule: a Client Component cannot import Server Components, but a Server Component CAN import and render Client Components.

This is the correct pattern — do NOT add `"use client"` to `layout.tsx`.

### Stack Versions

- **Next.js 16.2.2** — Read `node_modules/next/dist/docs/` before any implementation. `params` in page/route components is `Promise<{...}>` — always `await` before use (not relevant to this story's components, but be aware).
- **React 19.2.4** — `useState`, `useEffect` work as expected; no breaking changes for hooks usage in this story
- **Tailwind CSS v4** — uses `@tailwindcss/postcss` NOT the v3 `tailwind.config.ts` pattern. Use standard utility classes (all classes in `offline-indicator.tsx` are standard Tailwind v4 compatible)
- **TypeScript strict mode** — all new files must pass `tsc --noEmit`
- **Vitest** — test runner (not Jest). This story has no unit tests — PWA configuration is verified via build artifacts and manual browser testing

### Testing Strategy

This story has no unit-testable logic. PWA setup is configuration + build-time artifact generation. Verification approach:

1. **Build verification**: `npm run build` succeeds → confirms TypeScript compiles and webpack/turbopack completes
2. **Artifact checks**: Verify `public/sw.js`, `public/manifest.json`, and icon files exist after build
3. **No regression**: 125 existing tests across 15 test files must still pass (`npm test`)
4. **Manual browser verification** (when possible): Chrome DevTools → Application tab → Service Workers, Manifest, Cache Storage

No new `.test.ts` files are needed for this story.

### What Must NOT Be Regressed

All 125 tests across 15 test files from Epics 1-5 must continue to pass. No changes to any existing API routes, hooks, components, or database schema are needed. The only changes are:
- `next.config.ts` (add PWA wrapping)
- `src/src/app/layout.tsx` (add metadata fields + import OfflineIndicator)

All other existing functionality is preserved.

### Tailwind CSS v4 Note

This project uses Tailwind CSS v4 (`"tailwindcss": "^4"` in `package.json`). The classes used in `offline-indicator.tsx` (`fixed`, `bottom-4`, `left-1/2`, `-translate-x-1/2`, `z-50`, `flex`, `items-center`, `gap-2`, `rounded-full`, `bg-amber-50`, `border`, `border-amber-200`, `px-4`, `py-2`, `text-sm`, `font-medium`, `text-amber-800`, `shadow-md`, `h-2`, `w-2`, `bg-amber-500`) are all standard utilities available in Tailwind v4. Do NOT use the v3 `tailwind.config.ts` configuration file — Tailwind v4 is configured via CSS.

### Anti-Patterns to Avoid

- **Never** use the unmaintained `next-pwa` package — use `@ducanh2912/next-pwa` or the fallback approach
- **Never** enable the PWA plugin when `NODE_ENV === "development"` — service workers cause confusing caching bugs during hot-module reload; the `disable` flag is mandatory
- **Never** commit `public/sw.js` or `public/workbox-*.js` to git — they are build artifacts regenerated on every production build
- **Never** add `"use client"` to `layout.tsx` — it must remain a Server Component
- **Never** use `navigator.onLine` at module scope or in server code — it only exists in browser contexts
- **Never** manually add `<link rel="manifest">` in JSX — use the Next.js `metadata.manifest` field
- **Never** put icons in a nested `src/public/` path — they must be at the top-level `public/icons/` so Next.js serves them at `/icons/`
- **Never** skip `aria-live="polite"` and `role="status"` on the offline indicator — these are required for WCAG 2.1 AA compliance (NFR19)

### Files to Create (NEW)

| File | Purpose |
|------|---------|
| `public/manifest.json` | PWA web app manifest (served at `/manifest.json`) |
| `public/icons/icon-192x192.png` | PWA home screen icon |
| `public/icons/icon-512x512.png` | PWA splash screen / install icon |
| `src/src/hooks/use-offline.ts` | Hook for detecting online/offline browser state |
| `src/src/components/layout/offline-indicator.tsx` | Fixed bottom toast showing offline status |

### Files to Modify (MODIFY — do NOT recreate)

| File | Change |
|------|--------|
| `next.config.ts` | Wrap config with `withPWA()` plugin; add `disable` and `workboxOptions` |
| `src/src/app/layout.tsx` | Add `manifest`, `themeColor`, `appleWebApp`, `icons.apple` to metadata; import + render `OfflineIndicator` |
| `package.json` | New dependency: `@ducanh2912/next-pwa` (added by `npm install`) |

### Project Structure Notes

- The `src/src/components/layout/` directory does not yet exist — create it
- Feature-based organization per architecture: layout components go in `src/src/components/layout/`
- The architecture doc lists `header.tsx`, `nav.tsx`, `offline-indicator.tsx`, `mobile-nav.tsx` in this directory — only `offline-indicator.tsx` is needed for this story; do not create the others speculatively
- No new database tables, API routes, or Prisma migrations needed for this story

### References

- [Source: planning/epics.md#Epic 6 — Story 6.1: PWA Installation & Service Worker Setup — FR51, FR52, FR54, NFR3, NFR4]
- [Source: planning/architecture.md#Offline Architecture — service worker via next-pwa, OfflineProvider context, offline indicator, app shell caching]
- [Source: planning/architecture.md#Project Structure — public/manifest.json, public/sw.js (generated), public/icons/, src/components/layout/offline-indicator.tsx, src/hooks/use-offline.ts]
- [Source: planning/architecture.md#NFR4 — Subsequent app loads under 1 second from service worker cache]
- [Source: planning/architecture.md#NFR19 — WCAG 2.1 AA for customer-facing pages; offline indicator needs aria-live for screen readers]
- [Source: planning/architecture.md#NFR20 — 44×44px minimum touch targets; offline banner must not permanently block interactive elements]
- [Source: planning/architecture.md#Infrastructure & Deployment — Vercel + next.config.js PWA plugin; output: standalone for Docker]
- [Source: src/next.config.ts — current config to wrap with withPWA(); preserve output: standalone and serverExternalPackages]
- [Source: src/src/app/layout.tsx — root layout to extend with manifest metadata and OfflineIndicator import]
- [Source: src/package.json — dependencies list; next-pwa not yet installed; verify @ducanh2912/next-pwa compatibility with Next.js 16.2.2]
- [Source: src/Dockerfile — output: standalone + public/ copied to runtime image; generated sw.js will be included]
- [Source: src/AGENTS.md — CRITICAL: Read node_modules/next/dist/docs/ before writing any code; Next.js 16.2.2 has breaking changes]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
