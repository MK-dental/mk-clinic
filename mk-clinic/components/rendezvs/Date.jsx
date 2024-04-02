import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { createClient } from '../../utils/supabase/component';
const Date = ({onConfirmClick,initialData,onPrevClick}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [isWatchOpen, setIsWatchOpen] = useState(false);
  const [Appointment,setAppointment]=useState(false)
  const supabase=createClient();
  useEffect(() => {
    const calendarEl = document.querySelector('.fc-daygrid');
    const openModal = () => {
      setIsWatchOpen(true);
    };
    const handleDateClick = (event) => {
      const dateCell = event.target.closest('.fc-day');
      if (dateCell) {
        const dateStr = dateCell.getAttribute('data-date');

        setSelectedDate(dateStr);
        console.log('Clicked date:', dateStr);
        document.querySelectorAll('.fc-day').forEach(cell => {
          cell.classList.remove('bg-blue-200'); // Remove the selected background color class
        });
        // Add the selected background color class to the clicked cell
        dateCell.classList.add('bg-blue-200');
      }
      openModal()
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

 
  const closeModal = () => {
    setIsWatchOpen(false);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleChange = async () => {
    try {
      
      const { data, error } = await supabase
        .from('rendezvs')
        .select('*')
        .eq('date', selectedDate)
        .eq('temps', selectedTime);

      if (error) {
        console.error('Error selecting data:', error.message);
        return;
      }

      if (data.length > 0) {
        
        console.log(`Appointment already booked for ${selectedDate} at ${selectedTime}`);
        alert("Ce temps là est déja réservé.Essayez un autre temps s'il vous plait");
       setSelectedDate(null)
       setSelectedTime(null)
       
        return;
      } else {
        const userData = {
          temps: selectedTime,
          date: selectedDate
        };
        const Data = { ...initialData, ...userData };
        setAppointment(false);
        onConfirmClick(Data);
      }
      
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className=' mx-10 my-20'>
      
      <h1 className='text-[#10217D] text-center text-2xl font-bold mb-20'>Temps et jour de Rendez-vous:</h1>
    
      <div className='flex flex-col md:flex-row jsutify-center items-start h-[600px]'>
        <div className='mb-5 font-semibold md:mb-0 md:mr-10 md:w-1/3'>
        <button
            onClick={onPrevClick}
            className=" mb-6 w-32 p-2 text-xl  text-[#10217D] font-normal"
          >
            <span>{`<-- previous`}</span>
          </button>
        <p className="mb-5 indent-5 text-lg ">Vous pouvez sélectionnez ici le jour et l'heure de votre rendez-vous</p>
       
          {Appointment? 
          <span>the time is booked choose another one </span>:
          <ol>
          <li className='mb-2'>-Selected date: {selectedDate}</li>
          <li className='mb-2'>-Selected time: {selectedTime}</li>
        </ol>
            }
        
        <div className='flex justify-center '>
 <button onClick={()=>handleChange()} disabled={Appointment} type="submit" className=" my-6 w-50  p-2 text-base xl:text-xl text-green-500 border border-green-600 hover:text-green-300  rounded-xl">
     
     <span >Confirmer</span> 
  
 </button>
 </div>
        </div>
        <div className='md:w-1/2'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
            }}
           
            initialView="dayGridMonth"
           
            // Adjust aspect ratio for better appearance
            // dayCellContent={renderDayContent} // Custom rendering function for day cells
            // eventContent={renderEventContent} // Custom rendering function for events
          />
        </div>
      </div>
      {isWatchOpen && (
  <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div className="inline-block align-bottom bg-white rounded-lg text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <h3 className="text-lg leading-6 font-medium text-gray-900">choisissez l'heure de votre rendez vs </h3>
            <button
              className="ml-auto inline-flex justify-center rounded-md border border-transparent shadow-sm p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={closeModal}
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-2">
            <div className="text-sm text-gray-500"> 
            <TimePicker
            className='border p-2 rounded w-full'
            onChange={handleTimeChange}
            value={selectedTime}
          /></div>
          </div>
          <div className='flex justify-end'>
          <button className='ml-auto inline-flex justify-center rounded-md border-2 border-green-600 shadow-sm p-1 text-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500' onClick={closeModal}>confirmer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
  );
};

export default Date;
