import storage from './storage.legacy';
import { fromStorage } from './store';

export const { readable, writable } = fromStorage(storage);
