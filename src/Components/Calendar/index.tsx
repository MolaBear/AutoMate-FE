// Calendar.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import EditableEvent from './Events';

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  max-width: 100%;
  margin: 2% auto;
  font-family: Arial, sans-serif;
`;

const DayCell = styled.div<{ isCurrentMonth: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: ${(props) => (props.isCurrentMonth ? '#fff' : '#ccc')};
  border: 1px solid #ccc;
  font-size: 14px;
`;

const EventDateCell = styled.div`
  height:20vh;
  width: 24vh;
`;

// Dummy event data
const initialEvents = [
  { id: 1, date: new Date(2023, 9, 3), text: 'Meeting with Team' },
  { id: 2, date: new Date(2023, 9, 10), text: 'Project Deadline' },
  // Add more events here
];

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState(initialEvents);

  const updateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
  };

  

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const calendarDays: (number | null)[] = []; // Explicitly type as number or null
  let dayCount = 1;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfWeek) {
        calendarDays.push(null);
      } else if (dayCount <= daysInMonth) {
        calendarDays.push(dayCount);
        dayCount++;
      } else {
        calendarDays.push(null);
      }
    }
  }

  // Generate an array of date objects for the current month
  const datesArray: Date[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    datesArray.push(new Date(currentYear, currentMonth, day));
  }

  return (
    <div style={{width: '5%', padding:'10px 280px'}}>
      <CalendarWrapper>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <DayCell key={index} isCurrentMonth={false}>
            {day}
          </DayCell>
        ))}
        {datesArray.map((date) => (
          <EventDateCell key={date.getDate()}>
            <span>{date.getDate()}</span>
            {events.map((event) =>
              event.date.getDate() === date.getDate() ? (
                <EditableEvent key={event.id} event={event} onUpdateEvent={updateEvent} />
              ) : null
            )}
          </EventDateCell>
        ))}
      </CalendarWrapper>
      </div>
  );
};

export default CalendarPage;
