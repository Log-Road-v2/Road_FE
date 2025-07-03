import * as S from "./style"
import Input from "../../../components/Common/Input";
import { Color } from "../../../styles";
import { User, Add } from "../../../assets"
import ClosableTag from "../../../components/Common/Tag/ClosableTag";
import { useState } from "react"
import { useWriteStore } from "../../../stores/useWriteStore";
import { getSearchStudent } from "../../../apis/project";

interface StudentInfo {
  studentId: number,
  name: string,
  grade: number,
  classNumber: number,
  studentNumber: number
}

const Student = () => {
  const { info, setInfo } = useWriteStore();

  const [inputValue, setInputValue] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<StudentInfo[]>([]);

  const { data } = getSearchStudent(inputValue);
  const searchResults: StudentInfo[] = data?.students ?? [];

  const updateMembers = (students: StudentInfo[]) => {
    setInfo({
      ...info,
      members: students.map(({ studentId, name }) => ({
        studentId: Number(studentId),
        name,
      })),
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  const filteredResults = searchResults.filter(
    (student: StudentInfo) => !selectedStudents.some(s => s.studentId === student.studentId)
  );

  const handleAddStudent = (student: StudentInfo) => {
    if (selectedStudents.some((s) => s.studentId === student.studentId)) return;

    const updated = [...selectedStudents, student];
    setSelectedStudents(updated);
    updateMembers(updated);

    setInputValue("");
  };

  const handleRemoveStudent = (studentId: number) => {
    const updated = selectedStudents.filter((s) => s.studentId !== studentId);
    setSelectedStudents(updated);
    updateMembers(updated);
  };

  return (
    <S.Container>
      <Input
        width="100%"
        value={inputValue}
        placeholder="학번이나 이름을 입력해주세요"
        label=""
        error=""
        onChange={handleInputChange}
      />

      <S.TagWrapper>
        {selectedStudents.map(student => (
          <ClosableTag
            key={student.studentId}
            text={student.name}
            onClose={() => handleRemoveStudent(student.studentId)}
          />
        ))}
      </S.TagWrapper>

      {filteredResults.length > 0 && (
        <S.SearchResult>
          {filteredResults.map((student) => (
            <StudentResultItem
              key={student.studentId}
              student={student}
              onClick={() => handleAddStudent(student)}
            />
          ))}
        </S.SearchResult>
      )}
    </S.Container>
  )
}

interface StudentResultItemProps {
  student: StudentInfo;
  onClick: () => void;
}

const StudentResultItem = ({ student, onClick }: StudentResultItemProps) => (
  <S.StudentItem onClick={onClick}>
    <S.UserInfo>
      <User size={20} color={Color.gray500} />
      <S.NameId>
        <S.Name>{student.name}</S.Name>
        <S.StudentId>{student.grade}{student.classNumber}{student.studentNumber}</S.StudentId>
      </S.NameId>
    </S.UserInfo>
    <Add />
  </S.StudentItem>
);

export default Student
