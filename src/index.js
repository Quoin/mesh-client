import { CACHE_KEYS } from './constants';

export default (host, projectName) => {
  const cache = new Map();
  cache.set(CACHE_KEYS.HOST, host);
  cache.set(CACHE_KEYS.PROJECT, projectName);

  return Object.freeze({
    graphql: async (query) => graphql(cache, query),
  });
};
