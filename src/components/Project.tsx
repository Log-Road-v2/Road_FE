import styled from "@emotion/styled";
import { AuthorTag } from "./Common/Tag/AuthorTag";
import { VoteButton } from "./Common/Button/VoteButton";
import { Color, Font } from "../styles";
import { ProjectCheck } from "../assets/ProjectCheck";
import { getUserProject } from "../interface";
import { Bookmark } from "../assets";
import { useState } from "react";
import { toggleBookmark } from "../apis/project"
import { useNavigate } from "react-router-dom";

export const Project = ({
  id,
  projectName,
  introduction,
  authorCategory,
  image,
  isVoted = true,
  initialBookmarked = false,
}: getUserProject & { isVoted?: boolean, initialBookmarked?: boolean }) => {
  const navigate = useNavigate();
  const projectId = Number(id)

  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const mutation = toggleBookmark(projectId);

  const handleCardClick = () => {
    navigate(`/project/${projectId}`);
  };

  const handleBookmarkClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    mutation.mutate(undefined, {
      onSuccess: () => {
        setIsBookmarked((prev) => !prev);
      },
    });
  };

  return (
    <Container isVoted={isVoted} onClick={handleCardClick}>
      {isVoted && (
        <BlackBox>
          <ProjectCheck />
        </BlackBox>
      )}
      <Image src={image} />
      <Wrapper>
        <TitleWrap>
          <Title>{projectName}</Title>
          <BookmarkWrapper onClick={handleBookmarkClick}>
            <Bookmark color={isBookmarked ? Color.blue500 : Color.gray200} />
          </BookmarkWrapper>
        </TitleWrap>
        <Content>{introduction}</Content>
        <ButtonWrapper>
          <AuthorTag isTeam={authorCategory === "TEAM"} />
          {isVoted && <VoteButton isVote={false} isDisabled={false} />}
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
  cursor: pointer;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BookmarkWrapper = styled.div`
  cursor: pointer;
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
