import { useState } from "react";
import { Arrow } from "../../assets";
import { Project } from "../../components/Project";
import CommonTag from "../../components/Common/Tag/CommonTag";
import { ContestButton } from "../../components/Common/Button/ContestButton";
import * as S from "./style";
import { Pagination } from "../../components/Common/Pagination";
import { ContestListModal } from "../../components/Common/Modal/ContestListModal";

const dummyProjects = new Array(130).fill(null); // 테스트용 30개 프로젝트

export const VotePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isVoted, setIsVoted] = useState(false);
  const projectsPerPage = 20;
  const totalPages = Math.ceil(dummyProjects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = dummyProjects.slice(startIndex, endIndex);

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.TitleBox>
          <S.Title onClick={() => setIsOpen((prev) => !prev)}>
            2024 교내 해커톤
            <Arrow />
          </S.Title>
          {isOpen && (
            <S.ModalWrapper>
              <ContestListModal />
            </S.ModalWrapper>
          )}
        </S.TitleBox>
        <ContestButton
          isVote={isVoted}
          onClick={() => setIsVoted((prev) => !prev)}
        />
      </S.TitleWrapper>
      <S.ContestInfo>
        <S.Date>
          <p>대회 일정</p>
          2024년 5월 12일 ~ 2024년 5월 24일
        </S.Date>
        <S.AwardList>
          상 목록
          <S.AwardWrapper>
            <CommonTag />
            <CommonTag />
            <CommonTag />
            <CommonTag />
            <CommonTag />
            <CommonTag />
          </S.AwardWrapper>
        </S.AwardList>
      </S.ContestInfo>
      <S.ProjectWrapper>
        {currentProjects.map((_, idx) => (
          <Project key={idx} />
        ))}
      </S.ProjectWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </S.Container>
  );
};
