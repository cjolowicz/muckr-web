// @flow
import unsafeCast from "../utils/unsafeCast";

export default function select<T>(element: Element, selector: string): ?T {
  const result = element.querySelector(selector);
  return result == null ? null : unsafeCast<T>(result);
}
