import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

type ContestButtonType = {
  isVote: boolean;
};

export const ContestButton = ({ isVote }: ContestButtonType) => {
  return (
    <Container isVote={isVote}>{isVote ? "투표취소" : "투표완료"}</Container>
  );
};

const Container = styled.button<{ isVote: boolean }>`
  width: 132px;
  height: 46px;
  background-color: ${({ isVote }) => (isVote ? Color.gray200 : Color.blue500)};
  color: ${({ isVote }) => (isVote ? Color.gray400 : Color.white)};
  ${Font.semi16};
  border: none;
  border-radius: 8px;
`;
