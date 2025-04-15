import styled from "@emotion/styled";
import { AuthorTag } from "./Common/Tag/AuthorTag";
import { VoteButton } from "./Common/Button/VoteButton";
import ProjectEx from "../assets/ProjectEx.png";
import { Color, Font } from "../styles";
import { useState } from "react";
import { ProjectCheck } from "../assets/ProjectCheck";

export const Project = () => {
  const [isVoted] = useState(true);
  return (
    <Container isVoted={isVoted}>
      {isVoted && (
        <BlackBox>
          <ProjectCheck />
        </BlackBox>
      )}
      <Image src={ProjectEx} />
      <Wrapper>
        <Title>제목!</Title>
        <Content>
          한줄소개내용임니다람쥐한줄소개내용임니다람쥐한줄소개내용임니다람쥐
        </Content>
        <ButtonWrapper>
          <AuthorTag isTeam={true} />
          <VoteButton isVote={false} isDisabled={false} />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div<{ isVoted: boolean }>`
  width: 282px;
  height: 309px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(179, 180, 184, 0.2);
  border: ${({ isVoted }) => (isVoted ? `1px solid ${Color.gray800}` : "none")};
  position: relative;
`;

const BlackBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
  background-color: ${Color.gray800};
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 18px;
`;

const Image = styled.img`
  width: 280px;
  height: 180px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Wrapper = styled.div`
  width: 280px;
  height: 129px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 16px;
`;

const Title = styled.p`
  ${Font.bold16};
  color: ${Color.black};
`;

const Content = styled.p`
  ${Font.medium12};
  color: ${Color.gray300};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
