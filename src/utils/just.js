// @flow
export default function just<T>(value: ?T): T {
  if (value === undefined) {
    throw new Error("value is undefined");
  }

  if (value === null) {
    throw new Error("value is null");
  }

  return value;
}
