import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "../axios";
import ApiError from "../axios/ApiError";

const path = '/vote'

interface VoteData {
  contestId: string;
  votes: {
    projectId: number;
    rank: number;
  }[];
}

export const getVotedProjects = (contestId: string) => {
  const { handleError } = ApiError();

  return useQuery({
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

export const submitVote = () => {
  const { handleError } = ApiError();

  return useMutation({
    mutationFn: async ({ contestId, votes }: VoteData) => {
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