// @flow
import type { Collection, Item } from "./types";

const addById = <T: Item>(collection: Collection<T>, item: Item) => ({
  ...collection,
  [item.id]: item
});

export default addById;
