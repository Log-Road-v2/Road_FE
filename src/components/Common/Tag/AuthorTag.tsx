import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

export const AuthorTag = ({ isTeam }: { isTeam: boolean }) => {
  return <Container>{isTeam ? "팀" : "개인"}</Container>;
};

const Container = styled.button`
  width: 53px;
  height: 21px;
  background-color: ${Color.gray800};
  ${Font.medium12};
  color: ${Color.gray200};
  border: none;
  border-radius: 4px;
`;
