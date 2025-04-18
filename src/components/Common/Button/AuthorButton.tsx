import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

export const AuthorButton = ({ isStudent }: { isStudent: boolean }) => {
  return <Container>{isStudent ? "학생" : "선생님"}</Container>;
};

const Container = styled.button`
  width: 360px;
  height: 44px;
  border: 1px solid ${Color.gray300};
  color: ${Color.gray300};
  ${Font.semi14}
  background-color: white;
  border-radius: 8px;
  padding: 12px 0px;

  &:hover {
    border: 1px solid ${Color.blue300};
    color: ${Color.blue500};
  }
  &:focus {
    border: 1px solid ${Color.blue300};
    color: ${Color.blue500};
  }
`;
