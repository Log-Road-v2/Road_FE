import styled from "@emotion/styled";
import { Notice } from "../../../assets";
import { Color, Font } from "../../../styles";

const data = [
  {
    state: 'PENDING',
    title: '프로젝트가 대기중입니다',
    info: '프로젝트가 선생님의 승인요청을 기다리고 있습니다. 조금만 더 기다려주세요',
    borderColor: Color.gray300,
    textColor: Color.gray500
  },
  {
    state: 'APPROVAL',
    title: '프로젝트가 승인되었습니다',
    info: '해당 프로젝트는 대회에 업로드되었습니다',
    borderColor: Color.blue300,
    textColor: Color.blue500
  },
  {
    state: 'REJECTED',
    title: '반려사유를 확인해주세요',
    info: '해당 프로젝트는 반려되었습니다. 아래 반려 문구를 확인하고 수정해서 다시 업로드해주세요!',
    borderColor: Color.red300,
    textColor: Color.red500
  },
] as const;

interface ProjectStateProps {
  state: 'PENDING' | 'APPROVAL' | 'REJECTED';
  feedback?: string;
}

export const ProjectState = ({ state, feedback }: ProjectStateProps) => {
  const content = data.find(item => item.state === state);

  if (!content) return null;

  return (
    <ProjectStateContainer $borderColor={content.borderColor}>
      <TitleWrap>
        <Notice color={content.borderColor} />
        <Title $textColor={content.textColor}>{content.title}</Title>
      </TitleWrap>
      <DescriptionWrap>
        <Description>{content.info}</Description>
        {state === 'REJECTED' && feedback && (
          <Description>{feedback}</Description>
        )}
      </DescriptionWrap>
    </ProjectStateContainer>
  );
};

const ProjectStateContainer = styled.div<{ $borderColor: string }>`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  gap: 16px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 8px;
`;

const TitleWrap = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const Title = styled.p<{ $textColor: string }>`
  color: ${({ $textColor }) => $textColor};
  ${Font.semi16}
`;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Description = styled.p`
  ${Font.medium14}
`;
