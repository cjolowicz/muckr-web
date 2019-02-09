// @flow
import type { JestMockT } from "jest";

import { unsafeCast } from "../utils";

export const mock = (fn: any): JestMockT => fn;

export const getInstance = <T>(wrapper: any): T =>
  unsafeCast<T>(wrapper.instance());
