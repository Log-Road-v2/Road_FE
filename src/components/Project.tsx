import styled from "@emotion/styled";
import { AuthorTag } from "./Common/Tag/AuthorTag";
import { VoteButton } from "./Common/Button/VoteButton";
import { Color, Font } from "../styles";
import { ProjectCheck } from "../assets/ProjectCheck";
import { Bookmark } from "../assets";
import { useState } from "react";
import { toggleBookmark } from "../apis/project";
import { useNavigate } from "react-router-dom";
import { getUserProject } from "../interface";

interface ProjectProps extends getUserProject {
  isVoted?: boolean;
  initialBookmarked?: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

export const Project = ({
  id,
  projectName,
  introduction,
  authorCategory,
  image,
  isVoted = true,
  initialBookmarked = false,
  isSelected,
  onSelect
}: ProjectProps) => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const mutation = toggleBookmark(Number(id));

  const handleCardClick = () => navigate(`/project/${id}`);
  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    mutation.mutate(undefined, {
      onSuccess: () => setIsBookmarked((prev) => !prev),
    });
  };

  return (
    <Container isVoted={isVoted} onClick={handleCardClick}>
      {isVoted && (
        <CornerMark>
          <ProjectCheck />
        </CornerMark>
      )}
      <Thumbnail src={image} alt="project thumbnail" />
      <ContentWrapper>
        <Header>
          <Title>{projectName}</Title>
          <BookmarkWrapper onClick={handleBookmarkClick}>
            <Bookmark color={isBookmarked ? Color.blue500 : Color.gray200} />
          </BookmarkWrapper>
        </Header>
        <Intro>{introduction}</Intro>
        <Footer>
          <AuthorTag isTeam={authorCategory === "TEAM"} />
          {isVoted && <VoteButton isVote={false} isDisabled={false} />}
        </Footer>
      </ContentWrapper>
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

const CornerMark = styled.div`
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

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ContentWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 129px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  ${Font.bold16};
  color: ${Color.black};
`;

const BookmarkWrapper = styled.div`
  cursor: pointer;
`;

const Intro = styled.p`
  ${Font.medium12};
  color: ${Color.gray300};
  margin-top: 4px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;