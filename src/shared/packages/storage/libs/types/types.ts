import { StorageKey } from "../../../../types/storage";

type Constructor = {
  storage: globalThis.Storage;
};

type StorageApi = {
  set(key: ValueOf<typeof StorageKey>, value: string): void;
  get<R = string>(key: ValueOf<typeof StorageKey>): R | null;
  drop(key: ValueOf<typeof StorageKey>): void;
  has(key: ValueOf<typeof StorageKey>): boolean;
  clear(): void;
};

export type {Constructor,StorageApi}
