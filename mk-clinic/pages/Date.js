import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Datepage = () => {
  useEffect(() => {
    const calendarEl = document.querySelector('.fc-daygrid');

    if (calendarEl) {
      calendarEl.addEventListener('click', handleDateClick);
    }

    return () => {
      if (calendarEl) {
        calendarEl.removeEventListener('click', handleDateClick);
      }
    };
  }, []);

  const handleDateClick = (event) => {
    const dateCell = event.target.closest('.fc-day');
    if (dateCell) {
      const dateStr = dateCell.getAttribute('data-date');
      console.log('Clicked date:', dateStr);
    }
  };

  return (
    <div>
      <h1>My Next.js FullCalendar Example</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
};

export default Datepage;
