import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from './schema';
import { migrations } from './migrations';
import PricebookItem from './models/pricebook-item';
import Customer from './models/customer';
import Quote from './models/quote';
import LineItem from './models/line-item';

const adapter = new LokiJSAdapter({
  schema,
  migrations,
  useWebWorker: false,
  useIncrementalIndexedDB: true,
});

export const database = new Database({
  adapter,
  modelClasses: [PricebookItem, Customer, Quote, LineItem],
});
