import storage from 'store';
import storageObservePlugin from 'store/plugins/observe';
storage.addPlugin(storageObservePlugin);

export default storage;