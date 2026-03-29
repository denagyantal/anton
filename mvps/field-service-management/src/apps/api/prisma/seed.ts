import { PrismaClient, UnitType } from '@prisma/client';

const prisma = new PrismaClient();

interface TemplateItem {
  category: string;
  name: string;
  description: string;
  unitPrice: number;
  unitType: UnitType;
}

const hvacItems: TemplateItem[] = [
  { category: 'Diagnostics & Service Calls', name: 'AC Diagnostic', description: 'Standard air conditioning diagnostic and troubleshooting', unitPrice: 8900, unitType: 'FLAT' },
  { category: 'Diagnostics & Service Calls', name: 'Heating System Diagnostic', description: 'Furnace or heat pump diagnostic', unitPrice: 8900, unitType: 'FLAT' },
  { category: 'Diagnostics & Service Calls', name: 'Emergency Service Call', description: 'After-hours emergency diagnostic visit', unitPrice: 14900, unitType: 'FLAT' },
  { category: 'Refrigerant & Charging', name: 'Refrigerant Recharge (R-410A)', description: 'Per pound of R-410A refrigerant added', unitPrice: 7500, unitType: 'EACH' },
  { category: 'Refrigerant & Charging', name: 'Leak Detection & Repair', description: 'Electronic leak detection and minor repair', unitPrice: 25000, unitType: 'FLAT' },
  { category: 'Motors & Fans', name: 'Blower Motor Replacement', description: 'Replace indoor blower motor', unitPrice: 45000, unitType: 'FLAT' },
  { category: 'Motors & Fans', name: 'Condenser Fan Motor Replacement', description: 'Replace outdoor condenser fan motor', unitPrice: 35000, unitType: 'FLAT' },
  { category: 'Capacitors & Electrical', name: 'Capacitor Replacement', description: 'Replace run or start capacitor', unitPrice: 17500, unitType: 'FLAT' },
  { category: 'Capacitors & Electrical', name: 'Thermostat Installation', description: 'Install standard programmable thermostat', unitPrice: 25000, unitType: 'FLAT' },
  { category: 'Installation', name: 'Central AC System Installation', description: 'Complete central AC system', unitPrice: 550000, unitType: 'FLAT' },
  { category: 'Installation', name: 'Compressor Replacement', description: 'Replace AC or heat pump compressor', unitPrice: 250000, unitType: 'FLAT' },
  { category: 'Maintenance', name: 'AC Tune-Up', description: 'Seasonal AC maintenance and cleaning', unitPrice: 12900, unitType: 'FLAT' },
  { category: 'Maintenance', name: 'Furnace Tune-Up', description: 'Seasonal furnace maintenance and safety inspection', unitPrice: 12900, unitType: 'FLAT' },
];

const plumbingItems: TemplateItem[] = [
  { category: 'Drain Clearing', name: 'Drain Snake (Main Line)', description: 'Mechanical snake clearing of main sewer line', unitPrice: 25000, unitType: 'FLAT' },
  { category: 'Drain Clearing', name: 'Drain Snake (Secondary)', description: 'Snake clearing of sink, tub, or floor drain', unitPrice: 15000, unitType: 'FLAT' },
  { category: 'Drain Clearing', name: 'Hydro Jetting', description: 'High-pressure water jetting of drain lines', unitPrice: 55000, unitType: 'FLAT' },
  { category: 'Pipe Repair', name: 'Copper Pipe Repair', description: 'Repair or replace section of copper pipe', unitPrice: 35000, unitType: 'FLAT' },
  { category: 'Pipe Repair', name: 'Pipe Leak Repair', description: 'Locate and repair single pipe leak', unitPrice: 30000, unitType: 'FLAT' },
  { category: 'Fixture Installation', name: 'Faucet Install', description: 'Install kitchen or bathroom faucet', unitPrice: 22500, unitType: 'FLAT' },
  { category: 'Fixture Installation', name: 'Toilet Installation', description: 'Remove old and install new toilet', unitPrice: 30000, unitType: 'FLAT' },
  { category: 'Water Heater', name: 'Water Heater Replacement (Tank 40 gal)', description: 'Remove old and install 40-gallon tank water heater', unitPrice: 150000, unitType: 'FLAT' },
  { category: 'Water Heater', name: 'Tankless Water Heater Install', description: 'Install tankless/on-demand water heater', unitPrice: 350000, unitType: 'FLAT' },
  { category: 'Emergency Services', name: 'Emergency Service Call', description: 'After-hours emergency plumbing visit', unitPrice: 19900, unitType: 'FLAT' },
  { category: 'Emergency Services', name: 'Burst Pipe Emergency Repair', description: 'Emergency repair of burst water pipe', unitPrice: 40000, unitType: 'FLAT' },
  { category: 'Maintenance', name: 'Water Heater Flush', description: 'Drain and flush sediment from water heater', unitPrice: 12500, unitType: 'FLAT' },
  { category: 'Maintenance', name: 'Plumbing Inspection', description: 'Whole-home plumbing inspection and report', unitPrice: 15000, unitType: 'FLAT' },
];

const electricalItems: TemplateItem[] = [
  { category: 'Panel Upgrades', name: '200A Panel Upgrade', description: 'Upgrade main electrical panel to 200 amps', unitPrice: 350000, unitType: 'FLAT' },
  { category: 'Panel Upgrades', name: 'Sub-Panel Installation', description: 'Install secondary electrical sub-panel', unitPrice: 175000, unitType: 'FLAT' },
  { category: 'Outlet & Switch', name: 'Outlet Installation', description: 'Install new standard electrical outlet', unitPrice: 17500, unitType: 'EACH' },
  { category: 'Outlet & Switch', name: 'GFCI Outlet Installation', description: 'Install ground-fault circuit interrupter outlet', unitPrice: 22500, unitType: 'EACH' },
  { category: 'Outlet & Switch', name: 'Light Switch Installation', description: 'Install standard single-pole light switch', unitPrice: 15000, unitType: 'EACH' },
  { category: 'Wiring', name: 'Circuit Run (New)', description: 'Run new dedicated circuit from panel to location', unitPrice: 35000, unitType: 'EACH' },
  { category: 'Wiring', name: 'EV Charger Circuit Installation', description: 'Install dedicated 240V circuit for EV charger', unitPrice: 85000, unitType: 'FLAT' },
  { category: 'Lighting', name: 'Ceiling Fan Install', description: 'Install ceiling fan (with existing wiring)', unitPrice: 22500, unitType: 'EACH' },
  { category: 'Lighting', name: 'Recessed Light Installation', description: 'Install LED recessed/can light', unitPrice: 17500, unitType: 'EACH' },
  { category: 'Breakers & Safety', name: 'Circuit Breaker Replacement', description: 'Replace standard single-pole circuit breaker', unitPrice: 17500, unitType: 'EACH' },
  { category: 'Breakers & Safety', name: 'Whole-House Surge Protector', description: 'Install whole-house surge protection device', unitPrice: 45000, unitType: 'FLAT' },
  { category: 'Inspections', name: 'Electrical Inspection', description: 'Comprehensive electrical safety inspection', unitPrice: 15000, unitType: 'FLAT' },
  { category: 'Inspections', name: 'Electrical Labor Rate', description: 'Standard hourly labor rate', unitPrice: 12500, unitType: 'HOUR' },
];

async function seedPricebookTemplates() {
  const allItems = [
    ...hvacItems.map((item, i) => ({ ...item, sortOrder: i })),
    ...plumbingItems.map((item, i) => ({ ...item, sortOrder: i })),
    ...electricalItems.map((item, i) => ({ ...item, sortOrder: i })),
  ];

  for (const item of allItems) {
    await prisma.pricebookItem.upsert({
      where: {
        id: `template-${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      },
      update: {},
      create: {
        id: `template-${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        accountId: '00000000-0000-0000-0000-000000000000',
        category: item.category,
        name: item.name,
        description: item.description,
        unitPrice: item.unitPrice,
        unitType: item.unitType,
        isTemplate: true,
        sortOrder: item.sortOrder,
      },
    });
  }

  console.log(`Seeded ${allItems.length} pricebook template items`);
}

async function main() {
  await seedPricebookTemplates();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
