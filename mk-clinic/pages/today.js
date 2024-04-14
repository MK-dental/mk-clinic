import React, { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/component";

export default function Today() {
  const supabase = createClient();
  const [todayAppointement, setTodayAppointement] = useState([]);
  const [rowId, setRowId] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [nom, setNom] = useState("");
  const [telephone, setTlf] = useState("");
  const [age, setAge] = useState("");
  const [motif, setMotif] = useState("");
  const [email, setEmail] = useState("");
  const [traitement, setTrt] = useState("");
  const [prix,setPrix]=useState();
  const [payement, setPayment] = useState();
  const [sentinfo, setSentinfo] = useState({});



  const handleDelete = async (id) => {
    if (id) {
      try {
        const { data, error } = await supabase
          .from("rendezvs")
          .delete()
          .eq("id", id);

        if (error) {
          throw new Error("Error deleting row: " + error.message);
        }

        if (data) {
          console.log("Row deleted:", data);
          setTodayAppointement((prevState) =>
            prevState.filter((appointment) => appointment.id !== id)
          );
        }
      } catch (error) {
        console.error(error.message);
      }
      setRowId(null);
    } else {
      console.log("No row selected");
    }
  };
  const fetchAppointmentsForToday = async () => {
    try {
      const { data, error } = await supabase
        .from("rendezvs")
        .select("*")
        .eq("date", "2024-04-13");

      if (error) {
        throw new Error("Error fetching appointments: " + error.message);
      }

      if (data) {
        const sortedAppointments = data.sort((a, b) => {
          const [aHours, aMinutes] = a.temps.split(":").map(Number);
          const [bHours, bMinutes] = b.temps.split(":").map(Number);
          const aTime = aHours * 60 + aMinutes;
          const bTime = bHours * 60 + bMinutes;
          return aTime - bTime;
        });
        setTodayAppointement(sortedAppointments);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    
    handleDelete(rowId);
    fetchAppointmentsForToday();
  }, [rowId]);
  const handleOpenModal = (appointment) => {
    console.log("Selected Appointment:", appointment);
    setSelectedAppointment(appointment);
    console.log("Selected Appointment:", selectedAppointment);
  };
  const handleUpdate = async () => {
    try {
      const updatedFields = {}; // Object to hold the updated fields

      // Check if each field is updated and add it to the updatedFields object
      if (nom !== "") updatedFields.nom = nom;
      if (telephone !== "") updatedFields.telephone = telephone;
      if (age !== "") updatedFields.age = age;
      if (motif !== "") updatedFields.motif = motif;
      if (email !== "") updatedFields.email = email;
      if (traitement !== "") updatedFields.traitement = traitement;
      if (payement !== "") updatedFields.payement = payement;
      if (prix !== "") updatedFields.prix = prix;
      const { data, error } = await supabase
        .from("rendezvs")
        .update(updatedFields)
        .eq("id", selectedAppointment.id);
  

      if (error) {
        throw new Error("Error updating row: " + error.message);
      }

      if (data) {
        console.log("Row updated:", data);
        // You may want to refresh the appointment data after update
      }
    } catch (error) {
      console.error(error.message);
    }
    fetchAppointmentsForToday()
    setSelectedAppointment(null);
  }; 

  const handleCloseModal = () => {
    
    setClicked(false); // Reset clicked state
  };

  return (
    <div className="w-full">
      {console.log("Rendering component")}
      <h2 className="text-lg font-semibold text-[#10217D]">Aujourd'hui</h2>
      <table className="h-full mt-6 w-4/5 divide-y divide-gray-200 bg-white overflow-scroll">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              nom
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              motif
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              numero de telephone
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              temps
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Valider /supprimer
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {todayAppointement.map((element, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{element.nom}</td>
              <td className="px-6 py-4 whitespace-nowrap">{element.motif}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {element.telephone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{element.temps}</td>
              <td className="px-6 py-4 whitespace-nowrap flex flex-row justify-between gap-2">
                <button
                  onClick={() => handleOpenModal(element)}
                  className="text-green-400 border  border-green-400 hover:bg-green-600 hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                  valider
                </button>
                <button
                  onClick={() => setRowId(element.id)}
                  className="bg-transparent-500 border  border-orange-400 hover:bg-orange-600 text-orange-400 hover:text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                  supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedAppointment !== null && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4  sm:text-left">
                    <h3  onClick={() => setClicked(false)} className="text-lg leading-6 font-medium text-gray-900">
                      Appointment Details
                    </h3>
                    <div className="mt-2 mr-2 flex  flex-col gap-2">
                      <div
                        onClick={() => setClicked(true)}
                       
                        className="cursor-pointer text-base text-gray-500 flex flex-row items-baseline gap-2"
                      >
                       <span className="text-[#10217D] font-semibold text-lg"> Nom:{" "}</span> 
                        {clicked ? (
                          <input
                            placeholder={selectedAppointment.nom}
                            onChange={(e) => setNom(e.target.value)}
                            value={nom}
                            type="text"
                          />
                        ) : (
                          <span> {selectedAppointment.nom} </span>
                        )}
                      </div>
                      <div
                        onClick={() => setClicked(true)}
                        className="cursor-pointer text-base text-gray-500 flex flex-row items-baseline gap-2"
                      >
                        <span className="text-[#10217D] font-semibold text-lg">Motif:</span>
                        {clicked ? (
                          <input
                            placeholder={selectedAppointment.motif}
                            onChange={(e) => setMotif(e.target.value)}
                            value={motif}
                            type="text"
                          />
                        ) : (
                          <span> {selectedAppointment.motif}</span>
                        )}{" "}
                      </div>
                      <div
                        onClick={() => setClicked(true)}
                        className="cursor-pointer text-base text-gray-500 flex flex-row items-baseline gap-2"
                      >
                        {" "}
                        <span className="text-[#10217D] font-semibold text-lg"> Numero de téléphone:{" "}</span>
                        {clicked ? (
                          <input
                            placeholder={
                              selectedAppointment.telephone
                            }
                            onChange={(e) => setTlf(e.target.value)}
                            value={telephone}
                            type="text"
                          />
                        ) : (
                          <span onClick={() => setClicked(true)}>
                            {selectedAppointment.telephone}{" "}
                          </span>
                        )}
                      </div>
                      <div
                        onClick={() => setClicked(true)}
                        className="cursor-pointer text-base text-gray-500 flex flex-row items-baseline gap-2"
                      >
                        <span className="text-[#10217D] font-semibold text-lg"> age:{" "}</span>
                        {clicked ?
                         <input
                         placeholder={selectedAppointment.age}
                         onChange={(e) => setAge(e.target.value)}
                         value={age}
                         type="text"
                       />:
                        <span onClick={() => setClicked(true)}>
                          {selectedAppointment.age}{" "}
                        </span>
                      }
                      </div>
                      <div
                        onClick={() => setClicked(true)}
                        className="cursor-pointer text-base text-gray-500 flex flex-row items-baseline gap-2"
                      >
                       <span className="text-[#10217D] font-semibold text-lg">Email:{" "}</span> 
                        {clicked ?
                         (
                          <input
                            placeholder={selectedAppointment.email}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                          />
                        ):
                        <span >
                          {selectedAppointment.email}{" "}
                        </span>
                       }
                      </div>
                      <div
                        onClick={() => setClicked(true)}
                        className="cursor-pointer text-base text-gray-500 flex flex-row items-baseline gap-2"
                      >
                       <span className="text-[#10217D] font-semibold text-lg"> traitement: </span>
                        {clicked ?
                         <input
                         placeholder={selectedAppointment.traitement}
                         onChange={(e) => setTrt(e.target.value)}
                         value={traitement}
                         type="text"
                       />
                     :
                        <span>{selectedAppointment.traitement} </span>
                        
                         }
                      </div>
                      <div
                        onClick={() => setClicked(true)}
                        className="cursor-pointer text-base text-gray-500 flex flex-row items-baseline gap-2"
                      >
                       <span className="text-[#10217D] font-semibold text-lg">prix:</span> 
                        {clicked?
                          <input
                          placeholder={selectedAppointment.prix}
                          onChange={(e) => setPrix(e.target.value)}
                          value={prix}
                          type="text"
                        />
                         :
                         
                          <span>{selectedAppointment.prix} DA</span>
                        }
                      </div>
                      <div
                        onClick={() => setClicked(true)}
                        className="cursor-pointer text-base text-gray-500 flex flex-row items-baseline gap-2"
                      >
                       <span className="text-[#10217D] font-semibold text-lg">  payement:</span>
                        {clicked?
                          <input
                          placeholder={selectedAppointment.payement}
                          onChange={(e) => setPayment(e.target.value)}
                          value={payement}
                          type="text"
                        />
                         :
                         
                          <span>{selectedAppointment.payement} DA </span>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => {handleCloseModal();setSentinfo({nom,age,motif,telephone}) ;handleUpdate(sentinfo)}}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
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
