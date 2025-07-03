import { useQuery } from "@tanstack/react-query";
import instance from "../axios";
import ApiError from "../axios/ApiError";

const path = '/user'

export const useGetUserInfo = () => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['UserInfo'],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}`);
        return data
      } catch (error) {
        handleError(error);
        throw error;
      }
    }
  })
}

export const useJoinedProject = ({ enabled = true } = {}) => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['JoinedProject'],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/projects`);
        return data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
    enabled,
  });
};

export const useWrittenProject = ({ enabled = true } = {}) => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['WrittenProject'],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/submissions`);
        return data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
    enabled,
  });
};

export const useBookmarkedProject = ({ enabled = true } = {}) => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['BookmarkedProject'],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/mark`);
        return data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
    enabled,
  });
};
