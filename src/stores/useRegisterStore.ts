import { create } from "zustand";

interface RegisterState {
  email: string;
  role: 'STUDENT' | 'TEACHER';
  code: string;
  password: string;
  name: string;
  grade?: number | null;
  classNumber?: number | null;
  studentNumber?: number | null;

  setField: <K extends keyof RegisterState>(key: K, value: RegisterState[K]) => void;
  reset: () => void;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  email: "",
  role: 'STUDENT',
  code: "",
  password: "",
  name: "",
  grade: null,
  classNumber: null,
  studentNumber: null,

  setField: (key, value) => set((state) => ({ ...state, [key]: value })),
  reset: () =>
    set({
      email: "",
      role: 'STUDENT',
      code: "",
      password: "",
      name: "",
      grade: null,
      classNumber: null,
      studentNumber: null,
    }),
}));
