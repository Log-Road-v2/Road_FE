import styled from "@emotion/styled";
import useCalendarContext from "./useCalendarContext";
import { Color, Font } from "../../../styles";

const CalendarBody = () => {
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];
  const { daysInMonth, selectedDate, currentDate } = useCalendarContext();

  return (
    <Container>
      <Line />
      <DayWrapper>
        {weeks.map((week) => (
          <CalendarItem key={week}>
            {week}
          </CalendarItem>
        ))}
      </DayWrapper>
      <DayWrapper>
        {daysInMonth.map((date) => (
          <Day
            onClick={() => selectedDate.selectDate(date.date)}
            $isCurrentMonth={currentDate.month === date.month}
            $isSelectedDate={selectedDate.date === date.date}
            $isSunday={date.dayIndexOfWeek === 0}
            $isSaturday={date.dayIndexOfWeek === 6}
            key={date.date}
          >
            <span>{date.day}</span>
          </Day>
        ))}
      </DayWrapper>
    </Container>
  );
};

export default CalendarBody;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${Color.gray200};
`

const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  grid-row-gap: 12px;
`;

const CalendarItem = styled.p`
  display: flex;
  justify-content: center;
  ${Font.medium14}
`;

const Day = styled.div<{
  $isCurrentMonth?: boolean;
  $isSelectedDate: boolean;
  $isSunday: boolean;
  $isSaturday: boolean
}>`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${({ $isCurrentMonth, $isSelectedDate, $isSunday, $isSaturday }) =>
    $isSelectedDate
      ? Color.blue400
      : !$isCurrentMonth
        ? Color.gray200 :
        $isSunday
          ? Color.red300
          : $isSaturday
            ? Color.blue300
            : Color.gray500};

  border: 1px solid ${({ $isSelectedDate }) =>
    $isSelectedDate ? Color.blue300 : "transparent"};
  border-radius: 8px;
`;
