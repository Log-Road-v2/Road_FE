import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "../axios";
import ApiError from "../axios/ApiError";
import { VotedProjectsResponse, MyVotedProjectsResponse, VoteData } from "../../interface";

const path = '/vote'

// 투표 후보 조회
export const getVotingCandidates = (contestId: string) => {
  const { handleError } = ApiError();

  return useQuery<VotedProjectsResponse>({
    queryKey: ['',  contestId],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/${contestId}`);
        return data
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
    enabled: !!contestId 
  })
}

// 투표한 프로젝트 조회
export const getVotedProjects = (contestId: string) => {
  const { handleError } = ApiError();

  return useQuery<MyVotedProjectsResponse>({
    queryKey: ['VotedProjects', contestId],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/myvote/${contestId}`);
        return data
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
    enabled: !!contestId 
  })
}

// 투표하기
export const submitVote = (contestId: string) => {
  const { handleError } = ApiError();

  return useMutation({
    mutationFn: async ({ votes }: VoteData) => {
      try {
        await instance.put(`${path}/${contestId}`, {
          votes,
        });
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
  });
};