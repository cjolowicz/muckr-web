// @flow
import type { JestMockT } from "jest";

const mock = (fn: any): JestMockT => fn;

export default mock;
