// @flow
export default function fromMaybe<T>(fallback: T, value: ?T): T {
  if (value == null) {
    return fallback;
  }

  return value;
}
