// @flow
import { mapDispatchToProps } from "../Message";

describe("mapDispatchToProps", () => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch);

  afterEach(() => dispatch.mockClear());

  describe("onClose", () => {
    const { onClose } = props;

    describe("by default", () => {
      onClose();

      it("dispatches", () => {
        expect(dispatch).toHaveBeenCalled();
      });
    });

    describe("on clickaway", () => {
      onClose(undefined, "clickaway");

      it("does not dispatch", () => {
        expect(dispatch).not.toHaveBeenCalled();
      });
    });
  });
});
