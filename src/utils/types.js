// @flow
export type Id = number;
export type Ids = Array<number>;
export type Item = { id: Id };
export type Items<T: Item> = Array<T>;
export type Collection<T: Item> = { [Id]: T };
