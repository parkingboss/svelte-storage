# Svelte Storage

This gives you a svelte store used exactly like
`import { writable, readable } from 'svelte/store'` that is persisted longer
than your session by using store.js.

## Usage

 1. Install it: `npm i @parkingboss/svelte-storage`
 2. Import it: `import { readable, writable } from '@parkingboss/svelte-storage'`.
 3. Use them.

## API

The api was designed to be as similar to `svelte/storage` as possible, but using
storage keys intead of functions to back the store.

### readable

`readable(initial: any, storageKey: string): Readable<any>;`

The signature of `readable` is almost the same as the signature of `readable`
from Svelte. Unlike Svelte, however, this function just takes a string as its
second parameter. It uses that key with store.js to fetch and set longer term
storage for your store.

```
export const fromStorage = readable([], storageKey: 'app-readable');

fromStorage.subscribe(newVal => {
  console.log(newVal); // Logs `[]`
});

store.set('app-readable', [ 1, 2 3 ]); // Logs `[ 1, 2, 3 ]`
store.remove('app-readable'); // Logs `null`
```

### writable

`writable(initial: any, storageKey: string): Writable<any>`

The signature of `writable` is almost the same as the signature of `writable`
from Svelte, except the second parameter is required, and must be a string.
Under the hood this uses `readable` to create the subscription function and adds
helpers for setting and updating (like Svelte does). This is more redundant than
Svelte's `writable` because here you can just use `store.js` to update the value
and `readable` will pick up the changes.

```
export const fromStorage = writable([], storageKey: 'app-writable');

fromStorage.subscribe(newVal => {
  console.log(newVal); // Logs `[]`
});

fromStorage.update(x => x.concat([ 1, 2 3 ])); // Logs `[ 1, 2, 3 ]`
fromStorage.set([]); // Logs `null`
```
