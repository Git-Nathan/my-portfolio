import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SmileStore = {
  smiling: boolean;
  setSmiling: (smiling: boolean) => void;
};

export const useSmileStore = create<SmileStore>()(
  persist(
    (set) => ({
      smiling: false,
      setSmiling: (smiling: boolean) => set({ smiling }),
    }),
    {
      name: 'smile-storage',
    },
  ),
);
