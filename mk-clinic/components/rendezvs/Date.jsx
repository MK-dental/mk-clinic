import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('10:00');

  useEffect(() => {
    const calendarEl = document.querySelector('.fc-daygrid');

    const handleDateClick = (event) => {
      const dateCell = event.target.closest('.fc-day');
      if (dateCell) {
        const dateStr = dateCell.getAttribute('data-date');
        setSelectedDate(dateStr);
        console.log('Clicked date:', dateStr);
      }
    };

    if (calendarEl) {
      calendarEl.addEventListener('click', handleDateClick);
    }

    return () => {
      if (calendarEl) {
        calendarEl.removeEventListener('click', handleDateClick);
      }
    };
  }, []);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    console.log('Selected time:', time);
  };

  return (
    <div className='container mx-10 my-10'>
      <h1 className='text-2xl font-bold mb-5'>My Next.js FullCalendar Example</h1>
      <p className="mb-5">You can select the available day from the calendar and time from below</p>
      <div className='flex flex-col md:flex-row jsutify-start items-center h-[600px]'>
        <div className='mb-5 md:mb-0 md:mr-10 md:w-1/3'>
          <p className='mb-2'>Selected date: {selectedDate}</p>
          <TimePicker
            className='border p-2 rounded w-full'
            onChange={handleTimeChange}
            value={selectedTime}
          />
        </div>
        <div className='md:w-1/2'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            height="auto"
            // Adjust aspect ratio for better appearance
            // dayCellContent={renderDayContent} // Custom rendering function for day cells
            // eventContent={renderEventContent} // Custom rendering function for events
          />
        </div>
      </div>
    </div>
  );
};

export default Date;
