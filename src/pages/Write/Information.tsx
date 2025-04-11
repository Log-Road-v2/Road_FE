import * as S from "./style";
import DropDown from "../../components/Common/DropDown";
import Input from "../../components/Common/Input";
import TextArea from "../../components/Common/TextArea";
import CalendarInput from "../../components/Write/Calendar/Input";
import Student from "./Input/Student";
import Skill from "./Input/Skill";
import { useWriteStore } from "../../stores/useWriteStore";

interface PropsType {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

const dateInputs = [
  { key: "startDate", label: "시작일을 입력해주세요" },
  { key: "endDate", label: "종료일을 입력해주세요" },
] as const;

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

  return (
    <S.InformationContainer>
      <pre>{JSON.stringify(info, null, 2)}</pre>
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
          <S.Tag
            selected={info.authorCategory === 'PERSONAL'}
            onClick={() => setInfo({ authorCategory: 'PERSONAL' })}
          >
            개인
          </S.Tag>
          <S.Tag
            selected={info.authorCategory === 'TEAM'}
            onClick={() => setInfo({ authorCategory: 'TEAM' })}
          >
            팀
          </S.Tag>
        </S.ContentWrapper>
      </FormSection>

      <FormSection label="그룹명">
        <Input
          value={info.teamName}
          placeholder="팀명 또는 동아리명을 입력해주세요"
          label=""
          error="팀명을 작성해주세요"
          onChange={(e) => setInfo({ teamName: e.target.value })}
        />
      </FormSection>

      <FormSection label="제목" required>
        <Input
          value={info.projectName}
          placeholder="제목을 입력해주세요"
          label=""
          error="제목을 작성해주세요"
          onChange={(e) => setInfo({ projectName: e.target.value })}
        />
      </FormSection>

      <FormSection label="프로젝트 진행일자" required>
        <S.ContentWrapper>
          {dateInputs.map(({ key, label }) => (
            <CalendarInput
              key={key}
              val={info[key]}
              setVal={(val) => setInfo({ [key]: val })}
              describe={label}
            />
          ))}
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
          onChange={(e) => setInfo({ description: e.target.value })}
        />
      </FormSection>

      <FormSection label="시연영상" required>
        <Input
          value={info.vedio}
          placeholder="시연영상 링크를 입력해주세요"
          label=""
          error=""
          onChange={(e) => setInfo({ vedio: e.target.value })}
        />
      </FormSection>

      <FormSection label="이미지" required>
        <Input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              setInfo({ image: imageUrl });
            }
          }}
        />
      </FormSection>
    </S.InformationContainer>
  );
};

export default Information;
