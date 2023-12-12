# cache-ts

## Simple and Efficient Cache Implementation for TypeScript

[![npm version](https://badge.fury.io/js/cache-ts.svg)](https://badge.fury.io/js/cache-ts)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

`cache-ts` is a straightforward cache implementation for TypeScript, extending the native Map object. It provides a simple and efficient way to manage key-value pairs with a specified capacity, automatically handling entries based on their usage.

### Features

- **Capacity Control:** Define the maximum number of entries the cache can hold.
- **Automatic Eviction:** Older entries are automatically removed when the cache reaches its capacity.
- **Efficient Usage:** Promotes recently used entries to enhance retrieval speed.

### Installation

```bash
npm install cache-ts
# or
yarn add cache-ts
```

### Usage

```typescript
import { Cache } from 'cache-ts';

// Create a cache with a maximum capacity of 100 entries
const myCache = new Cache<string, number>(100);

// Set a key-value pair in the cache
myCache.set('key1', 42);

// Retrieve the value associated with a key
const value = myCache.get('key1');
```

### API

#### `constructor(capacity: number)`

Creates a new `Cache` instance with a specified capacity.

```typescript
const myCache = new Cache<string, number>(100);
```

#### `set(key: TKey, value: TValue): Cache<TKey, TValue>`

Adds or updates a key-value pair in the cache. Automatically handles eviction if the cache reaches its capacity.

```typescript
myCache.set('key1', 42);
```

#### `get(key: TKey): TValue | undefined`

Retrieves the value associated with a key from the cache. If the key exists, it is promoted to the most recently used entry.

```typescript
const value = myCache.get('key1');
```

### License

`cache-ts` is licensed under the [MIT License](LICENSE). Feel free to use and contribute!

If you encounter any issues or have suggestions, please [open an issue](https://github.com/your-username/cache-ts/issues).

Happy caching! 🚀

## Authors

- Dmitrii Baranov <dmitrii.a.baranov@gmail.com>
