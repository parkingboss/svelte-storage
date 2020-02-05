import storage from 'store/dist/store.modern';
import storageObservePlugin from 'store/plugins/observe';
storage.addPlugin(storageObservePlugin);

export default storage;