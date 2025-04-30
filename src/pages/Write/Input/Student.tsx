import * as S from "./style"
import Input from "../../../components/Common/Input";
import { Color } from "../../../styles";
import { User, Add } from "../../../assets"
import ClosableTag from "../../../components/Common/Tag/ClosableTag";
import { useState } from "react"
import { useWriteStore } from "../../../stores/useWriteStore";

interface StudentInfo {
  studentId: string;
  name: string;
}

const dummyStudents: StudentInfo[] = [
  { studentId: "3114", name: "임다영" },
  { studentId: "3115", name: "홍서은" },
  { studentId: "3106", name: "박예빈" },
];

const Student = () => {
  const { info, setInfo } = useWriteStore();
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<StudentInfo[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<StudentInfo[]>([]);

  const updateMembers = (students: StudentInfo[]) => {
    setInfo({
      ...info,
      members: students.map(({ studentId }) => ({
        studentId: Number(studentId),
      })),
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);

    if (value === "") {
      setSearchResults([]);
      return;
    }

    const filtered = dummyStudents.filter(
      ({ name, studentId }) =>
        (name.includes(value) || studentId.includes(value)) &&
        !selectedStudents.some((s) => s.studentId === studentId)
    );

    setSearchResults(filtered);
  };

  const handleAddStudent = (student: StudentInfo) => {
    if (selectedStudents.some((s) => s.studentId === student.studentId)) return;

    const updated = [...selectedStudents, student];
    setSelectedStudents(updated);
    updateMembers(updated);

    setInputValue("");
    setSearchResults([]);
  };

  const handleRemoveStudent = (studentId: string) => {
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

      {searchResults.length > 0 && (
        <S.SearchResult>
          {searchResults.map((student) => (
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
        <S.StudentId>{student.studentId}</S.StudentId>
      </S.NameId>
    </S.UserInfo>
    <Add />
  </S.StudentItem>
);

export default Student
