import { useState } from "react"
import styled from "@emotion/styled"
import ConfirmRoundButton from "../Button/RoundButton"
import { Color, Font } from "../../../styles"

const LoginNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <UserName>{"임다영"}님</UserName>
      ) : (
        <ConfirmRoundButton text="로그인" />
      )}
    </>
  )
}

const UserName = styled.div`
  width: 100px;
  color: ${Color.gray300};
  ${Font.medium16}
`

export default LoginNav