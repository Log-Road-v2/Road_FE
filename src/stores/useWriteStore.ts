import { create } from 'zustand';
import { InfoData } from '../interface';
import { persist } from 'zustand/middleware';

interface WriteStoreType {
  info: InfoData;
  setInfo: (data: Partial<InfoData>) => void;
  reset: () => void;
}

const initialInfo: InfoData = {
  contestId: '',
  projectName: '',
  authorCategory: 'PERSONAL',
  teamName: '',
  skills: [],
  members: [],
  introduction: '',
  description: '',
  startDate: '',
  endDate: '',
  image: '',
  imageFile: undefined,
  video: '',
  videoFile: undefined,
};

export const useWriteStore = create<WriteStoreType>()(
  persist(
    (set) => ({
      info: initialInfo,
      setInfo: (partial) => set((state) => ({ info: { ...state.info, ...partial } })),
      reset: () => set({ info: initialInfo }),
    }),
    {
      name: 'write-storage',
      partialize: (state) => ({
        info: {
          ...state.info,
          videoFile: undefined,
          imageFile: undefined,
        },
      }),
    }
  )
);
