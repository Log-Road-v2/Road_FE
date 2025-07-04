import styled from "@emotion/styled"
import RoundButton from "../Button/RoundButton"
import { Color, Font } from "../../../styles"
import { useNavigate } from "react-router-dom"
import { useGetUserInfo } from "../../../apis/user"

const LoginNav = () => {
  const navigate = useNavigate();
  const { data: userInfo, isLoading, isError } = useGetUserInfo();

  const isLoggedIn = !!userInfo?.name;

  return (
    <NavWrapper>
      {isLoggedIn && !isLoading && !isError ? (
        <UserName onClick={() => navigate("/mypage")}>
          {userInfo?.name || "사용자"}님
        </UserName>
      ) : (
        <RoundButton
          text="로그인"
          onClick={() => navigate("/")}
        />
      )}
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const UserName = styled.div`
  max-width: 100px;
  justify-content: flex-end;
  color: ${Color.gray300};
  ${Font.medium16}
  cursor: pointer;

  &:hover {
    color: ${Color.gray700};
  }
`

export default LoginNav