// Resolves value from nested object property
export const resolvePath = (object, path, defaultValue) =>
  path.split(".").reduce((o, p) => o?.[p] || defaultValue, object);
