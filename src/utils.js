// @flow
export function just<T>(value: ?T): T {
  if (value === undefined) {
    throw new Error("value is undefined");
  }

  if (value === null) {
    throw new Error("value is null");
  }

  return value;
}

export function fromMaybe<T>(fallback: T, value: ?T): T {
  if (value == null) {
    return fallback;
  }

  return value;
}

export function unsafeCast<T>(value: any): T {
  return (value: T);
}

export function jsonStringifyDedupe(object: Object, space: number) {
  let cache = [];

  const replacer = (key: any, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return JSON.parse(JSON.stringify(value)); // dedupe
      }

      cache.push(value);
    }

    return value;
  };

  return JSON.stringify(object, replacer, space);
}
