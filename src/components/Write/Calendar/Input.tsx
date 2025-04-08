import styled from "@emotion/styled";
import { Arrow } from "../../../assets";
import { useState, useRef, useEffect } from "react"
import { Color, Font } from "../../../styles"
import Calendar from "./index";

interface PropsType {
  val: Date;
  setVal: React.Dispatch<React.SetStateAction<Date>>;
  describe: string;
}

const Input = ({ val, setVal, describe }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container>
      <InputWrapper ref={ref} onClick={toggleOpen}>
        <Describe>{val ? String(val) : describe}</Describe>
        {
          isOpen ?
            <Arrow size={20} color={Color.gray300} rotate="bottom" /> :
            <Arrow size={20} color={Color.gray300} />
        }
      </InputWrapper>
      <CalendarWrapper>
        <Calendar>
          <Calendar.Header />
          <Calendar.Body />
        </Calendar>
      </CalendarWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${Color.gray300};
  cursor: pointer;
  background-color: ${Color.white};
`

const Describe = styled.p`
  ${Font.regular14}
  color: ${Color.gray500};
`

const CalendarWrapper = styled.div`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${Color.white};
  box-shadow: 0 0 32px 12px rgb(27, 116, 198, 0.1);
`

export default Input