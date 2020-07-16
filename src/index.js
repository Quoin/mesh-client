import 'babel-regenerator-runtime';

export default (host, projectName) => {
  const cache = new Map();

  return Object.freeze({
    graphql: async (query) => {},
  });
};
