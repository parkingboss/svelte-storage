import storage from './storage';
import { fromStorage } from './store';

export const { readable, writable } = fromStorage(storage);
