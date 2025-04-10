import * as S from "./style";
import DropDown from "../../components/Common/DropDown";
import Input from "../../components/Common/Input";
import TextArea from "../../components/Common/TextArea";
import CalendarInput from "../../components/Write/Calendar/Input";
import Student from "./Input/Student";
import Skill from "./Input/Skill";
import { useWriteStore } from "../../stores/useWriteStore";
import { useState } from "react";

interface PropsType {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}
const FormSection = ({ label, required = false, children }: PropsType) => (
  <S.InfoSection>
    <S.TextBox>
      <S.SectionDetailText>{label}</S.SectionDetailText>
      {required && <S.Required>*</S.Required>}
    </S.TextBox>
    {children}
  </S.InfoSection>
);

const Information = () => {
  const options = [1, 2, 3]
  const { info, setInfo } = useWriteStore();

  const [selected, setSelected] = useState<"개인" | "팀" | null>(null)

  return (
    <S.InformationContainer>
      <S.Line />

      <FormSection label="업로드 대회" required>
        <DropDown
          val={info.contestId}
          setVal={(val) => setInfo({ contestId: val })}
          describe="대회를 선택해주세요"
          items={options}
        />
      </FormSection>

      <FormSection label="규모" required>
        <S.ContentWrapper>
          <S.Tag selected={selected === "개인"}>개인</S.Tag>
          <S.Tag selected={selected === "팀"}>팀</S.Tag>
        </S.ContentWrapper>
      </FormSection>

      <FormSection label="그룹명">
        <Input
          value={info.teamName}
          placeholder="팀명 또는 동아리명을 작성해주세요"
          label=""
          error=""
          onChange={(e) => setInfo({ teamName: e.target.value })}
        />
      </FormSection>

      <FormSection label="제목" required>
        <Input
          value=""
          placeholder="제목을 입력해주세요"
          label=""
          error=""
          onChange={() => { }}
        />
      </FormSection>

      <FormSection label="프로젝트 진행일자" required>
        <S.ContentWrapper>
          <CalendarInput
            val={info.startDate}
            setVal={() => setInfo({ startDate: val })}
            describe="시작 일자를 선택해주세요"
          />
          <CalendarInput
            val={info.endDate}
            setVal={() => setInfo({ endDate: val })}
            describe="종료 일자를 선택해주세요"
          />
        </S.ContentWrapper>
      </FormSection>

      <FormSection label="이름" required>
        <Student />
      </FormSection>

      <FormSection label="기술스택" required>
        <Skill />
      </FormSection>

      <FormSection label="간단한 설명" required>
        <TextArea
          value={info.description}
          placeholder="간단한 설명을 입력해주세요"
          onChange={(e) => setInfo(e.target.value)}
        />
      </FormSection>

      <FormSection label="간단한 설명" required>
        <Input
          value=""
          placeholder="시연영상 링크를 입력해주세요"
          label=""
          error=""
          onChange={() => { }}
        />
      </FormSection>

      <FormSection label="이미지" required>
        <Input
          value=""
          placeholder="프로젝트 대표 이미지를 넣어주세요"
          label=""
          error=""
          onChange={() => { }}
        />
      </FormSection>
    </S.InformationContainer>
  );
};

export default Information;
