import * as S from "./style"
import Input from "../../../components/Common/Input";
import ClosableTag from "../../../components/Common/Tag/ClosableTag";
import { useWriteStore } from "../../../stores/useWriteStore";
import { useState } from "react";

const Skill = () => {
  const { info, setInfo } = useWriteStore();
  const [inputValue, setInputValue] = useState("");

  const handleAddSkill = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (info.skills.includes(trimmed)) return;

    setInfo({ skills: [...info.skills, trimmed] });
    setInputValue("");
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setInfo({ skills: info.skills.filter(skill => skill !== skillToRemove) });
  };

  return (
    <S.Container>
      <Input
        value={inputValue}
        placeholder="기술스택을 입력해주세요"
        label=""
        error=""
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddSkill();
          }
        }}
      />

      <S.TagWrapper>
        {info.skills.map((skill, idx) => (
          <ClosableTag key={idx} text={skill} onClose={() => handleRemoveSkill(skill)} />
        ))}
      </S.TagWrapper>

    </S.Container>
  )
}

export default Skill
