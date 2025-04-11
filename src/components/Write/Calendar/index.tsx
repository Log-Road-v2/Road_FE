import { ReactNode } from "react";
import styled from "@emotion/styled";

import { CalendarContext } from "./useCalendarContext";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import useCalendar from "../../../hooks/useCalendar"

const CalendarRoot = ({ setVal, children }: { setVal: (val: Date) => void; children: React.ReactNode }) => {
  const calendar = useCalendar();
  return (
    <CalendarContext.Provider value={calendar}>
      <Container>{children}</Container>
    </CalendarContext.Provider>
  );
};

const Calendar = Object.assign(CalendarRoot, {
  Header: CalendarHeader,
  Body: CalendarBody,
});

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;