export interface getUserProject {
  id: string,
  projectName: string,
  introduction: string,
  authorCategory: AuthorCategory,
  image: string,
}

export type AuthorCategory = 'PERSONAL' | 'TEAM';

export interface InfoData {
  projectId?: string;
  contestId: string;
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
  video: string; 
  imageFile?: File;
  videoFile?: File;
}
export interface MemberType {
  studentId: number,
  name?: string
}

export interface Contest {
  id: string,
  name: string,
  startDate: string,
  endDate: string
}

export interface Award {
  name: string;
}

export interface Project {
  id: string;
  projectName: string;
  authorCategory: AuthorCategory;
  introduction: string;
  image: string;
}

export interface VotedProjectsResponse {
  contestId: string;
  name: string;
  awards: Award[];
  projects: Project[];
}

export interface VotedProject {
  id: number;
  projectId: string;
  rank: number;
}

export interface MyVotedProjectsResponse {
  project: VotedProject[];
}

export interface VoteData {
  votes: Vote[]
}

export interface Vote {
  projectId: string;
  rank: number;
}