/**
 * Cache Class
 *
 * A simple cache implementation that extends the native Map object.
 *
 * @class Cache
 * @template TKey The type of keys in the cache.
 * @template TValue The type of values in the cache.
 * @extends Map
 */
export class Cache<TKey, TValue> extends Map<TKey, TValue> {
  /**
   * Creates a new Cache instance with a specified capacity.
   *
   * @constructor
   * @param capacity The maximum number of entries the cache can hold.
   */
  public constructor(public capacity: number) {
    super();
  }

  /**
   * Adds or updates a key-value pair in the cache.
   *
   * @param key The key to associate with the value.
   * @param value The value to store in the cache.
   * @returns The current Cache instance.
   */
  public set(key: TKey, value: TValue) {
    this.delete(key);
    if (value !== undefined) {
      super.set(key, value);
      if (super.size > this.capacity) {
        super.delete(super.keys().next().value);
      }
    }
    return this;
  }

  /**
   * Retrieves the value associated with a key from the cache.
   * If the key exists, it is promoted to the most recently used entry.
   *
   * @param key The key to retrieve the value for.
   * @returns The value associated with the key, or undefined if the key is not in the cache.
   */
  public get(key: TKey) {
    const value = super.get(key);
    if (value !== undefined) {
      this.set(key, value);
    }
    return value;
  }
}
