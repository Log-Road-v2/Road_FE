import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

type VoteButtonType = {
  isVote: boolean;
  isDisabled: boolean;
};

export const VoteButton = ({ isVote, isDisabled }: VoteButtonType) => {
  return (
    <Container isVote={isVote} isDisabled={isDisabled}>
      {isVote ? "선택" : "투표하기"}
    </Container>
  );
};

const Container = styled.button`
  width: 74px;
  height: 25px;
  background-color: ${({ isVote, isDisabled }: VoteButtonType) =>
    isVote
      ? isDisabled
        ? Color.blue600
        : Color.blue500
      : isDisabled
      ? Color.gray300
      : Color.gray200};
  color: ${({ isVote }) => (isVote ? Color.gray200 : Color.gray400)};
  font: ${Font.regular12};
  border: none;
  border-radius: 8px;
`;
