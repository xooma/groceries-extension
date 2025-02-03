import { storage } from "wxt/storage";
import { AbstractStorage } from "@/core/infrastructure/interfaces";

type Key =
  | `local:${string}`
  | `session:${string}`
  | `sync:${string}`
  | `managed:${string}`;

export class WxtStorage implements AbstractStorage {
  getItem<T>(key: Key): Promise<T | null> {
    return storage.getItem(key);
  }

  setItem<T>(key: Key, value: T): Promise<void> {
    return storage.setItem(key, value);
  }

  removeItem(key: Key): Promise<void> {
    return storage.removeItem(key);
  }
}
