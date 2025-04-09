import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

const CommonTag = () => {
  return <Tag>태그</Tag>;
};

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
