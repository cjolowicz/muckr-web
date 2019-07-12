// @flow
import addById from "./addById";
import indexById from "./indexById";

describe("addById", () => {
  const item = { id: 1, name: "foo" };
  const item2 = { id: 2, name: "bar" };
  const itemUpdate = { id: 1, name: "FOO" };

  it("adds to an empty collection", () => {
    const result = addById({}, item);
    const expected = indexById([item]);
    expect(result).toEqual(expected);
  });

  it("adds to a non-empty collection", () => {
    const collection = indexById([item]);
    const result = addById(collection, item2);
    const expected = indexById([item, item2]);
    expect(result).toEqual(expected);
  });

  it("updates an element with a matching ID", () => {
    const collection = indexById([item]);
    const result = addById(collection, itemUpdate);
    const expected = indexById([itemUpdate]);
    expect(result).toEqual(expected);
  });

  it("only updates an element with a matching ID", () => {
    const collection = indexById([item, item2]);
    const result = addById(collection, itemUpdate);
    const expected = indexById([itemUpdate, item2]);
    expect(result).toEqual(expected);
  });
});
