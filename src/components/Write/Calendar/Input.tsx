import styled from "@emotion/styled";
import { Arrow } from "../../../assets";
import { useState, useRef, useEffect } from "react"
import { Color, Font } from "../../../styles"
import Calendar from "./index";

interface PropsType {
  val: Date;
  setVal: (val: Date) => void;
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
    <Container ref={ref} onClick={toggleOpen}>
      <InputWrapper>
        <Describe>
          {val instanceof Date && !isNaN(val.getTime())
            ? val.toLocaleDateString("sv-SE")
            : describe}
        </Describe>
        {
          isOpen ?
            <Arrow size={20} color={Color.gray300} rotate="bottom" /> :
            <Arrow size={20} color={Color.gray300} />
        }
      </InputWrapper>
      {isOpen &&
        <CalendarWrapper>
          <Calendar>
            <Calendar.Header />
            <Calendar.Body />
          </Calendar>
        </CalendarWrapper>
      }
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
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
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  padding: 16px 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 32px 12px rgb(27, 116, 198, 0.1);
  z-index: 10;
`

export default Input