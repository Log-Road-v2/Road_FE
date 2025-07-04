import * as S from "./style"
import Input from "../../../components/Common/Input";
import { Color } from "../../../styles";
import { User, Add } from "../../../assets"
import ClosableTag from "../../../components/Common/Tag/ClosableTag";
import { useState, useMemo, useEffect, useRef } from "react"
import { useWriteStore } from "../../../stores/useWriteStore";
import { getSearchStudent } from "../../../apis/project";
import debounce from 'lodash.debounce';

interface StudentInfo {
  studentId: number,
  name: string,
  grade: number,
  classNumber: number,
  studentNumber: number
}

const Student = () => {
  const { info, setInfo } = useWriteStore();

  const containerRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<StudentInfo[]>([]);

  const debouncedSetKeyword = useMemo(
    () => debounce((value: string) => setSearchKeyword(value), 300),
    []
  );

  const initializeSelectedStudents = () => {
    if (info.members && info.members.length > 0) {
      const initialStudents: StudentInfo[] = info.members.map((member) => ({
        studentId: member.studentId,
        name: member.name ?? "",
        grade: 0,
        classNumber: 0,
        studentNumber: 0,
      }));
      setSelectedStudents(initialStudents);
    }
  };

  useEffect(() => {
    initializeSelectedStudents();
  }, []);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    debouncedSetKeyword(value);
  };

  const hideSearchResults = () => {
    setSearchKeyword("");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        hideSearchResults();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      debouncedSetKeyword.cancel();
    };
  }, [debouncedSetKeyword]);


  const { data } = getSearchStudent(searchKeyword);
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
    <div style={{ flex: 1 }}>
      <S.Container ref={containerRef}>
        <Input
          width="100%"
          value={inputValue}
          placeholder="학번이나 이름을 입력해주세요"
          label=""
          error=""
          onChange={handleInputChange}
          onClick={e => e.stopPropagation()}
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
          <S.SearchResult onClick={e => e.stopPropagation()}>
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
    </div>
  )
}

interface StudentResultItemProps {
  student: StudentInfo;
  onClick: () => void;
}

const StudentResultItem = ({ student, onClick }: StudentResultItemProps) => {
  const formattedStudentNumber = String(student.studentNumber).padStart(2, '0');
  const studentId = `${student.grade}${student.classNumber}${formattedStudentNumber}`;

  return (
    <S.StudentItem onClick={onClick}>
      <S.UserInfo>
        <User size={20} color={Color.gray500} />
        <S.NameId>
          <S.Name>{student.name}</S.Name>
          <S.StudentId>{studentId}</S.StudentId>
        </S.NameId>
      </S.UserInfo>
      <Add />
    </S.StudentItem>
  )
};

export default Student
