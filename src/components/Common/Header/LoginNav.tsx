import { useState } from "react"
import styled from "@emotion/styled"
import ConfirmRoundButton from "../Button/ConfirmRoundButton"
import { Color, Font } from "../../../styles"

const LoginNav = () => {
  const [user, setUser] = useState(true);

  return (
    <>
      {user ? (
        <UserName>{ }님</UserName>
      ) : (
        <ConfirmRoundButton text="로그인" />
      )}
    </>
  )
}

const UserName = styled.div`
  color: ${Color.gray300};
  ${Font.semi16}
`

export default LoginNav