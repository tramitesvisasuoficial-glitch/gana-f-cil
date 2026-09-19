import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ApplicationState {
  applicationId: string | null;
  setApplicationId: (id: string) => void;
  clearApplication: () => void;
}

export const useApplicationStore = create<ApplicationState>()(
  persist(
    (set) => ({
      applicationId: null,
      setApplicationId: (id) => set({ applicationId: id }),
      clearApplication: () => set({ applicationId: null }),
    }),
    {
      name: 'avanza-application-storage',
    }
  )
);
