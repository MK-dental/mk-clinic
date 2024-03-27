import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (info) => {
    setSelectedDate(info.startStr);
    console.log('Selected date:', info.startStr);
  };

  return (
    <div>
      <h1>My Next.js FullCalendar Example</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
      />
      <p>Selected date: {selectedDate}</p>
    </div>
  );
};

export default Date;
