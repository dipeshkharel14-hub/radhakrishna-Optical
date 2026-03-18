// Add this interface above the others
interface StockItem {
  id?: number;
  modelName: string;
  category: 'Frame' | 'Lens' | 'Accessory';
  quantity: number;
  price: number;
}

// Update the db initialization
const db = new Dexie('RadhakrishnaDB') as Dexie & {
  bills: EntityTable<PatientBill, 'id'>;
  stock: EntityTable<StockItem, 'id'>; // New table
};

db.version(1).stores({ 
  bills: '++id, name, phone, date',
  stock: '++id, modelName, category' 
});
import Dexie, { type EntityTable } from 'dexie';

interface PatientBill {
  id?: number;
  name: string;
  phone: string;
  gender: string;
  prescription: {
    left: { sph: string; cyl: string; axis: string; add: string };
    right: { sph: string; cyl: string; axis: string; add: string };
  };
  frameModel: string;
  lensType: string;
  date: string;
  finance: { total: number; advance: number; balance: number; cost: number };
  signature: string;
}

const db = new Dexie('RadhakrishnaDB') as Dexie & {
  bills: EntityTable<PatientBill, 'id'>;
};

db.version(1).stores({ bills: '++id, name, phone, date' });

export { db };
