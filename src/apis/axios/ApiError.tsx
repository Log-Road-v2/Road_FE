import { useCallback } from "react";

type ErrorHandler = () => void

type HandleType = {
  [key: string]: ErrorHandler
}

const ApiError = () => {

  const handle400: ErrorHandler = () => {
    alert("400 잘못된 요청입니다")
  }

  const handle401: ErrorHandler = () => {
    alert("401 인증되지 않았습니다. 로그인 후 서비스를 이용해주세요")
  }

  const handle403: ErrorHandler = () => {
    alert("403 관리자 계정으로 서비스를 이용해주세요")
  }

  const handle404: ErrorHandler = () => {
    alert("404 페이지를 찾을 수 없습니다")
  }

  const handle500: ErrorHandler = () => {
    alert("500 요청을 처리하는 동안 문제가 발생했습니다. 네트워크 연결 상태를 확인해주세요")
  }

  const defaultHandlers: HandleType = {
    "400": handle400,
    "401": handle401,
    "403": handle403,
    "404": handle404,
    "500": handle500,
  }

  const handleError = useCallback((error: any) => {
    const httpStatus = error.response?.status

    if (httpStatus) {
      const selectErrorHandler: ErrorHandler = defaultHandlers[httpStatus] || defaultHandlers.default;
      selectErrorHandler();
    } else {
      alert(`오류가 발생했습니다 ${error.message}`);
    }
  }, [])

  return { handleError }
}

export default ApiError