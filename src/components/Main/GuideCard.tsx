import styled from "@emotion/styled";
import { Exclamation } from "../../assets"
import { Color, Font } from "../../styles";

const GuideCard = () => {
  return (
    <Container>
      <InfoWrapper>
        <AlertWrapper>
          <ExclamationWrapper>
            <Exclamation size={18} color={Color.white} />
          </ExclamationWrapper>
          <AlertText>투표하기</AlertText>
        </AlertWrapper>
        <Content>
          <Title>2024 해커톤 대회</Title>
          <Description>해당 대회 일정에 맞춰 투표에 참여해주세요!!</Description>
        </Content>
      </InfoWrapper>
      <AccessButton>2024년 4월 27일 ~ 2024년 4월 30일</AccessButton>
    </Container>
  )
}

const Container = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  padding: 16px 32px 24px;
  gap: 24px;
  border-radius: 16px;
  background-color: ${Color.gray800};
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const AlertWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ExclamationWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${Color.gray600};
`

const AlertText = styled.p`
  color: ${Color.gray100};
  ${Font.medium12}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.p`
  color: ${Color.white};
  ${Font.semi20}
`

const Description = styled.p`
  color: ${Color.gray100};
  ${Font.regular12}
`

const AccessButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${Color.gray600};
  color: ${Color.gray100};
  ${Font.medium12}
`

export default GuideCard