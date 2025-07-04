import { useQuery } from "@tanstack/react-query";
import instance from "../axios";
import ApiError from "../axios/ApiError";

const path = '/project'

export const getRank = (contestId?: string) => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['Rank', contestId],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/rank/${contestId}`)
        return data
      } catch(error) {
        handleError(error);
        throw error;
      }
    },
    enabled: !!contestId,
  })
}