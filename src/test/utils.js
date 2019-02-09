// @flow
import type { JestMockT } from "jest";
import type { ShallowWrapper, ReactWrapper } from "enzyme";

import { unsafeCast } from "../utils";

export const mock = (fn: any): JestMockT => fn;

export const getInstance = <T>(
  wrapper: ShallowWrapper<*> | ReactWrapper<*>
): T => unsafeCast<T>(wrapper.instance());
