// @flow
import type { Collection, Item } from "./types";

const removeById = <T: Item>(collection: Collection<T>, id: number) =>
  Object.keys(collection).reduce((items, key) => {
    if (+key !== id) {
      return { ...items, [key]: collection[+key] };
    }

    return items;
  }, {});

export default removeById;
