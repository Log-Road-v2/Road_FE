import { useMutation } from "@tanstack/react-query";
import instance from "../axios";
import ApiError from "../axios/ApiError";
import { useRegisterStore } from "../../stores/useRegisterStore";
import { setToken } from "../function/TokenManager";
import toast from "react-hot-toast";

const path = '/auth'

export const useSignUp = () => {
  const { handleError } = ApiError();
  
  const { role, email, password, code, name, grade, classNumber, studentNumber } = useRegisterStore();

  return useMutation({
    mutationFn: async () => {      
      const response = await instance.post(`${path}/signup`, {
        role,
        code,
        email,
        password,
        name,
        grade,
        classNumber,
        studentNumber
      });
      return response.data;
    },
    onError: (error) => {
      handleError(error);
    }
  });
}

export const useLogin = () => {
  const { handleError } = ApiError();

  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await instance.post(`${path}/login`, data);
      return response.data;
    },
    onError: (error) => {
      handleError(error);
    },
    onSuccess: (data) => {
      setToken(data.accessToken, data.refreshToken)
    }
  });
};

export const useSendVerificationCode = () => {
  const { handleError } = ApiError();

  return useMutation({
    mutationFn: async (email: string) => {
      await instance.post(`${path}/email`, { email });
    },
    onSuccess: () => {
      toast.success("이메일을 보냈습니다!")
    },
    onError: handleError,
  });
};