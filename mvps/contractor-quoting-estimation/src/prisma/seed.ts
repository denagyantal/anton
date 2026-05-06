import { PrismaClient, Trade } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

function createClient() {
  const connectionString = process.env.DATABASE_URL ?? "";
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

const prisma = createClient();

async function main() {
  await prisma.template.deleteMany({ where: { isSystem: true } });

  await prisma.template.create({
    data: {
      trade: Trade.PLUMBING,
      name: "Standard Plumbing",
      description: "Common plumbing services and materials",
      isSystem: true,
      items: {
        create: [
          { description: "Water Heater Installation", category: "Fixtures", suggestedPrice: 450.0, unit: "each", sortOrder: 0 },
          { description: "Toilet Installation", category: "Fixtures", suggestedPrice: 250.0, unit: "each", sortOrder: 1 },
          { description: "Faucet Installation", category: "Fixtures", suggestedPrice: 180.0, unit: "each", sortOrder: 2 },
          { description: "Sink Installation", category: "Fixtures", suggestedPrice: 200.0, unit: "each", sortOrder: 3 },
          { description: "Garbage Disposal Installation", category: "Fixtures", suggestedPrice: 220.0, unit: "each", sortOrder: 4 },
          { description: "Shower Installation", category: "Fixtures", suggestedPrice: 650.0, unit: "each", sortOrder: 5 },
          { description: "Bathtub Installation", category: "Fixtures", suggestedPrice: 750.0, unit: "each", sortOrder: 6 },
          { description: "Copper Pipe Supply/Install", category: "Pipe & Fittings", suggestedPrice: 45.0, unit: "per linear foot", sortOrder: 7 },
          { description: "Water Line Replacement", category: "Pipe & Fittings", suggestedPrice: 55.0, unit: "per linear foot", sortOrder: 8 },
          { description: "Sewer Line Repair", category: "Pipe & Fittings", suggestedPrice: 85.0, unit: "per linear foot", sortOrder: 9 },
          { description: "Drain Cleaning", category: "Service", suggestedPrice: 175.0, unit: "flat rate", sortOrder: 10 },
          { description: "Emergency Service Call", category: "Service", suggestedPrice: 225.0, unit: "flat rate", sortOrder: 11 },
          { description: "Toilet Repair", category: "Service", suggestedPrice: 125.0, unit: "flat rate", sortOrder: 12 },
          { description: "Water Pressure Regulator", category: "Service", suggestedPrice: 195.0, unit: "flat rate", sortOrder: 13 },
          { description: "Water Softener Installation", category: "Service", suggestedPrice: 850.0, unit: "flat rate", sortOrder: 14 },
          { description: "Plumbing Inspection", category: "Service", suggestedPrice: 125.0, unit: "flat rate", sortOrder: 15 },
        ],
      },
    },
  });

  await prisma.template.create({
    data: {
      trade: Trade.ELECTRICAL,
      name: "Standard Electrical",
      description: "Common electrical services and installations",
      isSystem: true,
      items: {
        create: [
          { description: "Outlet Installation", category: "Outlets & Switches", suggestedPrice: 125.0, unit: "each", sortOrder: 0 },
          { description: "GFCI Outlet Installation", category: "Outlets & Switches", suggestedPrice: 145.0, unit: "each", sortOrder: 1 },
          { description: "Switch Installation", category: "Outlets & Switches", suggestedPrice: 95.0, unit: "each", sortOrder: 2 },
          { description: "Dimmer Switch Installation", category: "Outlets & Switches", suggestedPrice: 115.0, unit: "each", sortOrder: 3 },
          { description: "Circuit Breaker Replacement", category: "Panels & Circuits", suggestedPrice: 175.0, unit: "each", sortOrder: 4 },
          { description: "New Circuit Installation", category: "Panels & Circuits", suggestedPrice: 350.0, unit: "flat rate", sortOrder: 5 },
          { description: "Panel Upgrade - 200 Amp", category: "Panels & Circuits", suggestedPrice: 2500.0, unit: "flat rate", sortOrder: 6 },
          { description: "Surge Protector Installation", category: "Panels & Circuits", suggestedPrice: 295.0, unit: "flat rate", sortOrder: 7 },
          { description: "Wiring - New Construction", category: "Panels & Circuits", suggestedPrice: 8.0, unit: "per linear foot", sortOrder: 8 },
          { description: "Light Fixture Installation", category: "Lighting", suggestedPrice: 150.0, unit: "each", sortOrder: 9 },
          { description: "Ceiling Fan Installation", category: "Lighting", suggestedPrice: 200.0, unit: "each", sortOrder: 10 },
          { description: "Recessed Lighting Installation", category: "Lighting", suggestedPrice: 175.0, unit: "each", sortOrder: 11 },
          { description: "Smoke / CO Detector Installation", category: "Lighting", suggestedPrice: 95.0, unit: "each", sortOrder: 12 },
          { description: "EV Charger Installation", category: "Service", suggestedPrice: 850.0, unit: "flat rate", sortOrder: 13 },
          { description: "Electrical Inspection", category: "Service", suggestedPrice: 200.0, unit: "flat rate", sortOrder: 14 },
          { description: "Emergency Service Call", category: "Service", suggestedPrice: 225.0, unit: "flat rate", sortOrder: 15 },
        ],
      },
    },
  });

  await prisma.template.create({
    data: {
      trade: Trade.HVAC,
      name: "Standard HVAC",
      description: "Common HVAC services and installations",
      isSystem: true,
      items: {
        create: [
          { description: "AC Unit Installation - 3 Ton", category: "Equipment", suggestedPrice: 4500.0, unit: "flat rate", sortOrder: 0 },
          { description: "Furnace Installation", category: "Equipment", suggestedPrice: 3200.0, unit: "flat rate", sortOrder: 1 },
          { description: "Heat Pump Installation", category: "Equipment", suggestedPrice: 5500.0, unit: "flat rate", sortOrder: 2 },
          { description: "Mini-Split Installation", category: "Equipment", suggestedPrice: 2800.0, unit: "flat rate", sortOrder: 3 },
          { description: "Indoor Air Quality System", category: "Equipment", suggestedPrice: 1500.0, unit: "flat rate", sortOrder: 4 },
          { description: "AC Tune-Up", category: "Maintenance", suggestedPrice: 145.0, unit: "flat rate", sortOrder: 5 },
          { description: "Furnace Tune-Up", category: "Maintenance", suggestedPrice: 125.0, unit: "flat rate", sortOrder: 6 },
          { description: "Refrigerant Recharge", category: "Maintenance", suggestedPrice: 275.0, unit: "flat rate", sortOrder: 7 },
          { description: "Air Filter Replacement", category: "Maintenance", suggestedPrice: 45.0, unit: "each", sortOrder: 8 },
          { description: "Condensate Drain Cleaning", category: "Maintenance", suggestedPrice: 95.0, unit: "flat rate", sortOrder: 9 },
          { description: "Blower Motor Replacement", category: "Maintenance", suggestedPrice: 650.0, unit: "flat rate", sortOrder: 10 },
          { description: "Compressor Replacement", category: "Maintenance", suggestedPrice: 1200.0, unit: "flat rate", sortOrder: 11 },
          { description: "Ductwork Repair", category: "Ductwork", suggestedPrice: 35.0, unit: "per linear foot", sortOrder: 12 },
          { description: "Duct Cleaning", category: "Ductwork", suggestedPrice: 450.0, unit: "flat rate", sortOrder: 13 },
          { description: "Thermostat Installation - Smart", category: "Installation", suggestedPrice: 285.0, unit: "each", sortOrder: 14 },
          { description: "HVAC Inspection", category: "Installation", suggestedPrice: 175.0, unit: "flat rate", sortOrder: 15 },
        ],
      },
    },
  });

  await prisma.template.create({
    data: {
      trade: Trade.PAINTING,
      name: "Standard Painting",
      description: "Common painting services and materials",
      isSystem: true,
      items: {
        create: [
          { description: "Interior Wall Painting", category: "Interior", suggestedPrice: 2.5, unit: "per sq ft", sortOrder: 0 },
          { description: "Ceiling Painting", category: "Interior", suggestedPrice: 2.0, unit: "per sq ft", sortOrder: 1 },
          { description: "Door Painting - Interior", category: "Interior", suggestedPrice: 85.0, unit: "each", sortOrder: 2 },
          { description: "Baseboard Painting", category: "Interior", suggestedPrice: 3.5, unit: "per linear foot", sortOrder: 3 },
          { description: "Cabinet Painting - Kitchen", category: "Interior", suggestedPrice: 950.0, unit: "flat rate", sortOrder: 4 },
          { description: "Crown Molding Painting", category: "Interior", suggestedPrice: 5.0, unit: "per linear foot", sortOrder: 5 },
          { description: "Exterior Wall Painting", category: "Exterior", suggestedPrice: 3.5, unit: "per sq ft", sortOrder: 6 },
          { description: "Door Painting - Exterior", category: "Exterior", suggestedPrice: 125.0, unit: "each", sortOrder: 7 },
          { description: "Window Trim Painting", category: "Exterior", suggestedPrice: 65.0, unit: "each", sortOrder: 8 },
          { description: "Deck Staining", category: "Exterior", suggestedPrice: 3.0, unit: "per sq ft", sortOrder: 9 },
          { description: "Fence Painting", category: "Exterior", suggestedPrice: 4.0, unit: "per linear foot", sortOrder: 10 },
          { description: "Surface Prep & Primer", category: "Prep & Specialty", suggestedPrice: 1.5, unit: "per sq ft", sortOrder: 11 },
          { description: "Wallpaper Removal", category: "Prep & Specialty", suggestedPrice: 2.0, unit: "per sq ft", sortOrder: 12 },
          { description: "Popcorn Ceiling Removal", category: "Prep & Specialty", suggestedPrice: 3.0, unit: "per sq ft", sortOrder: 13 },
          { description: "Drywall Repair - Small", category: "Prep & Specialty", suggestedPrice: 175.0, unit: "flat rate", sortOrder: 14 },
          { description: "Drywall Repair - Large", category: "Prep & Specialty", suggestedPrice: 350.0, unit: "flat rate", sortOrder: 15 },
          { description: "Epoxy Floor Coating", category: "Prep & Specialty", suggestedPrice: 4.5, unit: "per sq ft", sortOrder: 16 },
        ],
      },
    },
  });

  console.log("Seed completed: 4 trade templates created with 65 items total.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
