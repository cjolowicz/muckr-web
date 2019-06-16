// @flow
import type { Collection, Item, Ids } from "./types";

const getItemsById = <T: Item>(collection: Collection<T>, ids: Ids) =>
  ids.map<T>(id => collection[id]);

export default getItemsById;
