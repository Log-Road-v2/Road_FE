import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

export const AuthorButton = (isStudent: boolean) => {
  return <Container>{isStudent ? "학생" : "선생님"}</Container>;
};

const Container = styled.button`
  width: 100%;
  max-width: 360px;
  border: 11px solid ${Color.gray300};
  color: ${Color.gray300};
  ${Font.semi14}
  background-color: white;

  &:hover {
    border: 11px solid ${Color.blue300};
    color: ${Color.blue500};
  }
`;
