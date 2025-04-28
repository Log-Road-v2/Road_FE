import { useState } from "react"
import styled from "@emotion/styled"
import ConfirmRoundButton from "../Button/RoundButton"
import { Color, Font } from "../../../styles"
import { useNavigate } from "react-router-dom"

const LoginNav = () => {
  const navigation = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavWrapper>
      {isLoggedIn ? (
        <UserName>{"임다영"}님</UserName>
      ) : (
        <ConfirmRoundButton
          text="로그인"
          onClick={() => navigation("/login")}
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