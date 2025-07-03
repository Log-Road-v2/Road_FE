import styled from "@emotion/styled";
import { AuthorTag } from "./Common/Tag/AuthorTag";
import { AwardTag } from "./Common/Tag/AwardTag";
import { Color, Font } from "../styles";
import ProjectEX from "../assets/Png/ProjectEX.png";

export const Ranking = () => {
  return (
    <Container>
      <RankNum>1</RankNum>
      <TextWrapper>
        <Title>프로젝트명</Title>
        <Content>
          대회 머시기한 이유로 만들어졌습니다. 대회 머시기한 이유로
          만들어졌습니다. 텍스트 대회 머시기한 이유로 만들어졌습니다. 대회
          머시기한 이유로 만들어졌습니다. 텍스트
        </Content>
        <TagWrapper>
          <AuthorTag isTeam={true} />
          <AwardTag text="adsf" />
        </TagWrapper>
      </TextWrapper>
      <Image src={ProjectEX} alt="프로젝트 사진 예시" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  height: 200px;
  border: 1px solid ${Color.gray300};
  background-color: ${Color.white};
  padding-left: 36px;
  border-radius: 8px;
  overflow: hidden;
`;

const RankNum = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background-color: ${Color.blue100};
  color: ${Color.blue500};
  ${Font.medium24}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 540px;
`;

const Title = styled.p`
  ${Font.semi16}
  color:${Color.black};
`;

const Content = styled.p`
  ${Font.regular14}
  color:${Color.gray500};
  margin-bottom: 16px;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Image = styled.img`
  width: 420px;
  height: 100%;
`;
