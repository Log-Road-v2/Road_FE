import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

interface PropsType {
  text?: string
}

const CommonTag = ({ text }: PropsType) => {
  return (
    <Tag>{text}</Tag>
  )
}

const Tag = styled.div`
  display: flex;
  padding: 4px 20px;
  border: 1px solid ${Color.blue300};
  border-radius: 20px;
  background-color: ${Color.white};
  color: ${Color.blue300};
  ${Font.medium14}
`;

export default CommonTag;