// @flow
import just from "./just";

export { just };

export function fromMaybe<T>(fallback: T, value: ?T): T {
  if (value == null) {
    return fallback;
  }

  return value;
}

export function unsafeCast<T>(value: any): T {
  return (value: T);
}
