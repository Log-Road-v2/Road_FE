import { useQuery } from "@tanstack/react-query";
import instance from "../axios";
import ApiError from "../axios/ApiError";

const path = '/contest'

export const useContestList = () => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['ContestList'],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}`)
        return data
      } catch (error) {
        handleError(error)
        throw error;
      }
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,  
  })
}

export const useOngoingContest = () => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['OngoingContest'],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/present`)
        return data
      } catch (error) {
        handleError(error)
        throw error
      }
    }
  })
}