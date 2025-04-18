import * as S from "./style";
import CommonTag from "../../components/Common/Tag/CommonTag";
import { ContestListModal } from "../../components/Common/Modal/ContestListModal";
import { useState } from "react";
import { Arrow } from "../../assets";
import { Ranking } from "../../components/Ranking";

export const RankingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      </S.TitleWrapper>
      <S.ContestInfo>
        <S.ContestDate>
          <p>대회 일정</p>
          2024년 5월 12일 ~ 2024년 5월 24일
        </S.ContestDate>
        <S.AwardList>
          상 목록
          <S.AwardWrapper>
            <CommonTag text="인기상" />
            <CommonTag text="은진쌤" />
            <CommonTag text="금상" />
            <CommonTag text="은상" />
            <CommonTag text="동상" />
            <CommonTag text="폐 손상" />
          </S.AwardWrapper>
        </S.AwardList>
      </S.ContestInfo>
      <Ranking />
      <Ranking />
      <Ranking />
      <Ranking />
      <Ranking />
    </S.Container>
  );
};
