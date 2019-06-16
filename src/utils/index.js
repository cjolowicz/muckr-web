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
