import { create } from 'zustand'
import { InfoData } from '../interface';

interface WriteStoreType {
  info: InfoData;
  setInfo: (data: Partial<InfoData>) => void;
  reset: () => void;
}

const initialInfo: InfoData = {
  contestId: 0,
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
  imageFile: null,
  video: '',
  videoFile: null
};

export const useWriteStore = create<WriteStoreType>((set) => ({
  info: initialInfo,

  setInfo: (data) =>
    set((state) => ({
      info: {
        ...state.info,
        ...data,
      },
    })),

  reset: () => set({ info: initialInfo }),
}));
