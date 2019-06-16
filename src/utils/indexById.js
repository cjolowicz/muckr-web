// @flow
import type { Item, Items } from "./types";

const indexById = <T: Item>(items: Items<T>) =>
  items.reduce((collection, item) => ({ ...collection, [item.id]: item }), {});

export default indexById;
