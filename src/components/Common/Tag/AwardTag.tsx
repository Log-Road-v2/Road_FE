import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

interface PropsType {
  text?: string;
}

export const AwardTag = ({ text }: PropsType) => {
  return <Tag>{text}</Tag>;
};

const Tag = styled.div`
  display: flex;
  padding: 2px 16px;
  border: 1px solid ${Color.blue500};
  border-radius: 4px;
  background-color: ${Color.white};
  color: ${Color.blue500};
  ${Font.medium12}
`;
