// MMKV asosida tezkor key-value storage — AsyncStorage o'rnida.
// Sezgir tokenlar uchun expo-secure-store ishlatamiz.

import { MMKV } from 'react-native-mmkv';
import * as SecureStore from 'expo-secure-store';

const mmkv = new MMKV({ id: 'ecom-app-v1' });

export const storage = {
  getString: (key: string): string | undefined => mmkv.getString(key),
  setString: (key: string, value: string): void => mmkv.set(key, value),
  delete: (key: string): void => mmkv.delete(key),
  // Zustand persist uchun adapter
  getItem: (name: string): string | null => mmkv.getString(name) ?? null,
  setItem: (name: string, value: string): void => mmkv.set(name, value),
  removeItem: (name: string): void => mmkv.delete(name),
};

// Sezgir ma'lumotlar uchun
export const secureStorage = {
  get: (key: string) => SecureStore.getItemAsync(key),
  set: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  remove: (key: string) => SecureStore.deleteItemAsync(key),
};

export const STORAGE_KEYS = {
  cart: 'ecom_cart_v1',
  wishlist: 'ecom_wishlist_v1',
  accessToken: 'ecom_access_token',
  refreshToken: 'ecom_refresh_token',
  onboarded: 'ecom_onboarded',
} as const;
