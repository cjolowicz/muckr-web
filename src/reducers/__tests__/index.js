// @flow
import rootReducer from "..";

describe("rootReducer", () => {
  it("handles initial state", () => {
    const stateBefore = undefined;
    const stateAfter = rootReducer(stateBefore, {});
    expect(stateAfter).not.toBeUndefined();
  });
});
