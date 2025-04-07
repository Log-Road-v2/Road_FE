import styled from "@emotion/styled";
import { Add } from "../../assets";
import { Color, Font } from "../../styles";
import { ShortcutData } from "./Data/NavigationData";

const AccessMessage = () => {

  return (
    <MessageList>
      {ShortcutData.map(({ id, title, description, href, icon, positionX, positionY }) => (
        <AccessMessageContainer key={id} positionX={positionX} positionY={positionY}>
          <IconWrapper>{icon}</IconWrapper>
          <Content>
            <DirectTitle>{title}</DirectTitle>
            <DirectDescription>{description}</DirectDescription>
          </Content>
          <Line></Line>
          <PlusWrapper>
            <AddText>더보기</AddText>
            <Add size={20} color={Color.gray500} />
          </PlusWrapper>
        </AccessMessageContainer>
      ))}
    </MessageList>
  )
}

const MessageList = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

const AccessMessageContainer = styled.div<{
  positionX: number,
  positionY: number
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 16px;
  border-radius: 16px;
  background-color: ${Color.white};
  box-shadow: 0 8 20 0 rgba(255, 255, 255, 0.2);

  position: absolute;
  top: ${({ positionY }) => `${positionY}%`};
  left: ${({ positionX }) => `${positionX}%`};
`

const IconWrapper = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${Color.gray100};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const DirectTitle = styled.p`
  ${Font.bold16}
`

const DirectDescription = styled.p`
  white-space: pre;
  color: ${Color.gray400};
  ${Font.medium12}
`

const Line = styled.div`
  width: 1px;
  height: 72px;
  background-color: ${Color.gray200};
`

const PlusWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`

const AddText = styled.p`
  color: ${Color.gray500};
  ${Font.semi12}
`

export default AccessMessage