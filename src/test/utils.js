// @flow
import type { JestMockT } from "jest";

// eslint-disable-next-line import/prefer-default-export
export const mock = (fn: any): JestMockT => fn;
