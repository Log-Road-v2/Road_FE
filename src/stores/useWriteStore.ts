import { create } from 'zustand'

type AuthorCategory = 'PERSONAL' | 'TEAM';

interface Member {
  studentId: number;
}

interface InfoData {
  contestId: number;
  projectName: string;
  authorCategory: AuthorCategory | null;
  teamName: string;
  skills: string[];
  members: Member[];
  introduction: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  image: string;
  vedio: string;
}

interface WriteStoreType {
  info: InfoData;
  setInfo: (data: Partial<InfoData>) => void;
  reset: () => void;
}

const initialInfo: InfoData = {
  contestId: 0,
  projectName: '',
  authorCategory: null,
  teamName: '',
  skills: [],
  members: [],
  introduction: '',
  description: '',
  startDate: null,
  endDate: null,
  image: '',
  vedio: ''
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
