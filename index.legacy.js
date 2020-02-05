import storage from 'store';
import storageObservePlugin from 'store/plugins/observe';

storage.addPlugin(storageObservePlugin);

function fromStorage(storage) {
  function readable(init, key) {
    if (storage.get(key) == null) storage.set(key, init);

    return {
      subscribe: function (fn) {
        fn(storage.get(key));

        const id = storage.observe(key, newVal => {
          fn(newVal);
        });

        return function () {
          storage.unobserve(id);
        };
      }
    };
  }

  function writable(init, key) {
    return Object.assign(readable(init, key), {
      set: function (val) {
        storage.set(key, val);
      },
      update: function (fn) {
        storage.set(key, fn(storage.get(key)));
      },
    });
  }
  return { readable, writable };
}

const { readable, writable } = fromStorage(storage);

export { readable, writable };
