import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStore = {
  mainColor: string;
  setMainColor: (color: string) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mainColor: '#169eb4',
      setMainColor: (color: string) => set({ mainColor: color }),
    }),
    {
      name: 'theme-storage',
    },
  ),
);
