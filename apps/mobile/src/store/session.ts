// Session — auth holatini boshqarish. Token'lar secureStore'da.

import { create } from 'zustand';

import { secureStorage, STORAGE_KEYS } from '../lib/storage';

interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

interface SessionState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  hydrate: () => Promise<void>;
  signIn: (user: User, accessToken: string, refreshToken: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useSession = create<SessionState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  hydrate: async () => {
    try {
      const access = await secureStorage.get(STORAGE_KEYS.accessToken);
      // Real holatda token'dan user info ajratiladi (JWT decode)
      if (access) {
        set({
          user: {
            id: 'demo',
            firstName: 'Foydalanuvchi',
            phone: '+998 90 *** ** 00',
          },
          isAuthenticated: true,
          loading: false,
        });
      } else {
        set({ user: null, isAuthenticated: false, loading: false });
      }
    } catch {
      set({ loading: false });
    }
  },
  signIn: async (user, accessToken, refreshToken) => {
    await secureStorage.set(STORAGE_KEYS.accessToken, accessToken);
    await secureStorage.set(STORAGE_KEYS.refreshToken, refreshToken);
    set({ user, isAuthenticated: true });
  },
  signOut: async () => {
    await secureStorage.remove(STORAGE_KEYS.accessToken);
    await secureStorage.remove(STORAGE_KEYS.refreshToken);
    set({ user: null, isAuthenticated: false });
  },
}));
