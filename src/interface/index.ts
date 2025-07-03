export interface getUserProject {
  id: number,
  projectName: string,
  introduction: string,
  authorCategory: AuthorCategory,
  image: string,
}

export type AuthorCategory = 'PERSONAL' | 'TEAM';

export interface InfoData {
  projectId?: number;
  contestId: number;
  projectName: string;
  authorCategory: AuthorCategory;
  teamName?: string;
  skills: string[];
  members: MemberType[];
  introduction: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
  imageFile: File | null;
  video: string; 
  videoFile: File | null;
}
export interface MemberType {
  studentId: number,
  name?: string
}

export interface Contest {
  id: number,
  name: string,
  startDate: string,
  endDate: string
}