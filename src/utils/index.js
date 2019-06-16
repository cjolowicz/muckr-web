// @flow
import just from "./just";
import fromMaybe from "./fromMaybe";

export { just, fromMaybe };

export function unsafeCast<T>(value: any): T {
  return (value: T);
}
