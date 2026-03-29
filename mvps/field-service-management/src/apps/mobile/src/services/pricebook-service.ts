import { Database } from '@nozbe/watermelondb';
import PricebookItem from '../db/models/pricebook-item';
type TradeType = 'HVAC' | 'PLUMBING' | 'ELECTRICAL';

interface PricebookTemplateItem {
  category: string;
  name: string;
  description?: string;
  unitPrice: number;
  unitType: string;
}

function getTemplateForTrade(tradeType: TradeType): PricebookTemplateItem[] {
  switch (tradeType) {
    case 'HVAC':
      return require('../data/pricebooks/hvac.json');
    case 'PLUMBING':
      return require('../data/pricebooks/plumbing.json');
    case 'ELECTRICAL':
      return require('../data/pricebooks/electrical.json');
    default:
      return [];
  }
}

export async function seedPricebook(
  database: Database,
  tradeType: TradeType,
  accountId: string,
): Promise<void> {
  const collection = database.get<PricebookItem>('pricebook_items');
  const existingCount = await collection.query().fetchCount();
  if (existingCount > 0) return;

  const templateData = getTemplateForTrade(tradeType);
  if (templateData.length === 0) return;

  await database.write(async () => {
    const records = templateData.map((item, index) =>
      collection.prepareCreate((record) => {
        record.accountId = accountId;
        record.category = item.category;
        record.name = item.name;
        record.description = item.description || '';
        record.unitPrice = item.unitPrice;
        record.unitType = item.unitType;
        record.isActive = true;
        record.sortOrder = index;
      }),
    );
    await database.batch(records);
  });
}
