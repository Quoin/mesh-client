export const CACHE_KEYS = [
  'HOST',
  'JWT',
  'PROJECT',
].reduce((keys, key) => Object.freeze({
  ...keys,
  [key]: key,
}), {});
