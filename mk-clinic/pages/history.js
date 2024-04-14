import React, { useEffect, useState } from 'react';
import { createClient } from '../utils/supabase/component';

export default function History() {
  const supabase = createClient();
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data, error } = await supabase.from('rendezvs').select('*');
        if (error) {
          throw error;
        }
        
        const sortedAppointments = handleSort(data);
        const groupedAppointments = groupAppointments(sortedAppointments);
        
        setAppointments(groupedAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error.message);
      }
    };

    const handleSort = (arr) => {
      return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
    };
    
    const groupAppointments = (arr) => {
      const grouped = [];
      arr.forEach((appointment, index) => {
        if (index === 0 || appointment.date !== arr[index - 1].date) {
          grouped.push({ date: appointment.date, appointments: [appointment] });
        } else {
          grouped[grouped.length - 1].appointments.push(appointment);
        }
      });
      return grouped;
    };

    fetchAppointments();

    const subscription = supabase
      .channel('rendezvs')
      .on('*', handleChanges)
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleChanges = (payload) => {
    console.log('Change received!', payload);

    const { eventType, record } = payload;

    if (record && record.table === 'rendezvs') {
      if (eventType === 'INSERT') {
        setAppointments((prevAppointments) => [...prevAppointments, record.new]);
      } else if (eventType === 'UPDATE') {
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) => {
            if (appointment.id === record.new.id) {
              return { ...appointment, ...record.new };
            }
            return appointment;
          })
        );
      } else if (eventType === 'DELETE') {
        setAppointments((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment.id !== record.old.id
          )
        );
      }
    }
  };

  const handleOpenModal = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseModal = () => {
    setSelectedAppointment(null);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-[#10217D]">History</h2>
      <table className="h-full mt-6 w-4/5 divide-y divide-gray-200 bg-white overflow-scroll">
        <thead>
          <tr>
            
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nom
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Motif
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Numéro de téléphone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Temps
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        {appointments.map((group, groupIndex) => (
          <tbody key={groupIndex}>
            <tr>
              <td colSpan="6" className="font-semibold px-6 py-4 whitespace-nowrap text-[#10217D] bg-gray-50 ">{group.date}</td>
            </tr>
            {group.appointments.map((appointment, index) => (
              <tr key={`${groupIndex}-${index}`}>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.nom}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.motif}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {appointment['numero-telephone']}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.temps}</td>
                <td className="px-6 py-4 whitespace-nowrap flex flex-row justify-between gap-2">
                  <button onClick={() => handleOpenModal(appointment)} className="text-green-400 border border-green-400 hover:bg-green-600 hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
      
      {selectedAppointment && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Heroicon name: outline/check */}
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Appointment Details</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Nom: {selectedAppointment.nom}</p>
                      <p className="text-sm text-gray-500">Motif: {selectedAppointment.motif}</p>
                      <p className="text-sm text-gray-500">Numéro de téléphone: {selectedAppointment.telephone}</p>
                      <p className="text-sm text-gray-500">Temps: {selectedAppointment.temps}</p>
                      <p className="text-sm text-gray-500">Email: {selectedAppointment.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleCloseModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
