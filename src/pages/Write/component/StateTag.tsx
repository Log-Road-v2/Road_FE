import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";


export const StateTag = ({ state }: { state: 'PENDING' | 'APPROVAL' | 'REJECTED' }) => {
  const tagStyle = {
    PENDING: { text: '대기', color: Color.gray300 },
    APPROVAL: { text: '승인', color: Color.blue300 },
    REJECTED: { text: '반려', color: Color.red300 }
  };

  const { text, color } = tagStyle[state];

  return (
    <TagContainer color={color}>
      {text}
    </TagContainer>
  )
}

const TagContainer = styled.div<{ color: string }>`
  display: inline-block;
  padding: 4px 24px;
  border-radius: 999px;
  background-color: ${Color.white};
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color}; 

  ${Font.medium14}
`;