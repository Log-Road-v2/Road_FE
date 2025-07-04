import { useQuery, useMutation } from "@tanstack/react-query";
import instance from "../axios";
import ApiError from "../axios/ApiError";
import { InfoData } from "../../interface";
import toast from "react-hot-toast";

const path = '/project'

export const getAchieve = (contestId: string, offset: number) => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['Achieve', contestId, offset],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/${contestId}?offset=${offset}`)
        return data
      } catch (error) {
        handleError(error);
        throw error; 
      }
    },
    enabled: !!contestId,
  })
}

export const getProjectDetail = (projectId : string, options?: { enabled?: boolean }) => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['ProjectDetail', projectId],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/detail/${projectId}`)
        return data;
      } catch (error) {
        handleError(error);
        throw error; 
      }
    },
    enabled: options?.enabled ?? true,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,  
  })
}

export const getSearchProject = (keyword: string, offset: number) => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['SearchProject', keyword, offset],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/search?keyword=${keyword}&offset=${offset}`)
        return data
      } catch (error) {
        handleError(error);
        throw error; 
      }
    },
    enabled: keyword.length > 0,
  })
}

export const createProject = () => {

  return useMutation({
    mutationFn: async (info: InfoData) => {
      const formData = new FormData();

      const json = {
        projectId: info.projectId ?? null,
        contestId: info.contestId,
        projectName: info.projectName,
        authorCategory: info.authorCategory,
        teamName: info.teamName || null,
        skills: JSON.stringify(info.skills),
        members: JSON.stringify(info.members),
        introduction: info.introduction,
        description: info.description,
        startDate: info.startDate,
        endDate: info.endDate,
      };

      formData.append("data", JSON.stringify(json));

      if (info.imageFile) {
        formData.append("image", info.imageFile);
      }
    
      if (info.videoFile) {
        formData.append("video", info.videoFile);
      }

      await instance.post(`${path}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    },
    onSuccess: () => {
      toast.success("프로젝트가 성공적으로 등록되었습니다!")
    },
    onError: (error: any) => {
      const errorMessage =
      error?.response?.data?.message || error?.message || '알 수 없는 오류가 발생했습니다';
    alert(errorMessage);
    }
  })
}

export const saveProjectDraft = () => {
  const { handleError } = ApiError();

  return useMutation({
    mutationFn: async (info: InfoData) => {
      const formData = new FormData();

      const json = {
        projectId: info.projectId ?? null,
        contestId: info.contestId,
        projectName: info.projectName,
        authorCategory: info.authorCategory,
        teamName: info.teamName || null,
        skills: JSON.stringify(info.skills),
        members: JSON.stringify(info.members),
        introduction: info.introduction,
        description: info.description,
        startDate: info.startDate,
        endDate: info.endDate,
      };

      formData.append("data", JSON.stringify(json));

      if (info.imageFile) {
        formData.append("image", info.imageFile);
      }

      if (info.videoFile) {
        formData.append("video", info.videoFile);
      }

      await instance.post(`${path}/storage`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      toast.success("프로젝트가 성공적으로 저장되었습니다!")
    },
    onError: (error) => {
      handleError(error);
    }
  });
}


export const getSaveProjectDraft = (projectId: number) => {
  const { handleError } = ApiError()

  return useQuery({
    queryKey: ['SaveProjectDraft'],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/storage/${projectId}`)
        return data;
      } catch (error) {
        handleError(error);
        throw error; 
      }
    }
  })
}

export const loadSavedData = (projectId: string) => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ["SavedProject", projectId],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/storage/${projectId}`);
        return data
      } catch (error) {
        handleError(error);
        throw error; 
      }
    }
  })
}

export const modifyProject = (projectId : string) => {
  const { handleError } = ApiError();

  return useMutation({
    mutationFn: async () => {
      await instance.patch(`${path}/${projectId}`);
    },
    onSuccess: () => {
      toast.success("프로젝트가 성공적으로 수정되었습니다!")
    },
    onError: (error) => {
      handleError(error);
    }
  })
}

export const getSearchStudent = (keyword : number | string) => {
  const { handleError } = ApiError();

  return useQuery({
    queryKey: ['SearchStudent', keyword],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`${path}/student?keyword=${keyword}`);
        return data;
      } catch (error) {
        handleError(error);
        throw error; 
      }
    },
    enabled: !!keyword && keyword.toString().length > 0,
  })
}

export const toggleBookmark = (projectId : number) => {
  const { handleError } = ApiError();

  return useMutation({
    mutationFn: async () => {
      await instance.post(`${path}/${projectId}/mark`);
    },
    onError: (error) => {
      handleError(error);
    }
  })
}

export const geminiService = () => {
  const { handleError } = ApiError();

  return useMutation({
    mutationFn: async (promptContent: string) => {
      const response = await instance.post(`${path}/gemini-description`, {
        promptContent,
      })
      return response.data
    },
    onError: (error) => {
      handleError(error)
    }
  })
}