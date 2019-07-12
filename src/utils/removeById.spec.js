// @flow
import removeById from "./removeById";
import indexById from "./indexById";

describe("removeById", () => {
  it("does nothing on an empty collection", () => {
    const result = removeById({}, 1);
    expect(result).toEqual({});
  });

  it("removes the only element", () => {
    const collection = indexById([{ id: 1 }]);
    const result = removeById(collection, 1);
    expect(result).toEqual({});
  });

  it("does nothing if the ID is not present", () => {
    const collection = indexById([{ id: 1 }]);
    const result = removeById(collection, 2);
    expect(result).toEqual(collection);
  });

  it("only removes the element with the specified ID", () => {
    const collection = indexById([{ id: 1 }, { id: 2 }]);
    const result = removeById(collection, 2);
    const expected = indexById([{ id: 1 }]);
    expect(result).toEqual(expected);
  });
});
