import { useEffect, useState } from "react";
import Rendezvs from "../components/rendezvs/Rendezvs";
import Form from "../components/rendezvs/form";
import Date from "../components/rendezvs/Date";
import { createClient } from "../utils/supabase/component";

import ConfettiButton from "../components/rendezvs/Confetti";

export default function Rendezvspage() {
   
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  const [insertedId, setInsertedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const SendInfo = async (info) => {
    if (!info) {
      console.error('Error: No data provided for insertion');
      return;
    }
  
    try {
      setLoading(true);
  
      const { data: insertData, error: insertError } = await supabase
        .from('rendezvs')
        .insert(info);
  
      if (insertError) {
        console.error('Error inserting data:', insertError.message);
        return;
      }
  
      if (insertData) {
        const insertedId = insertData[0].id;
        setInsertedId(insertedId);
        console.log('Data inserted successfully with ID:', insertedId);
        // Handle successful insertion, if needed
      } else {
        console.error('No data returned after insertion');
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };
 
 


  const handleNextClick = (data) => {
    setUserData(prevData => ({ ...prevData, ...data }));
    console.log('User:', userData);
    setStep(step + 1);
  }

  const handlePrevClick = () => {
    setStep(step - 1);
  };

  const handleConfirmClick = async (data) => {
    setUserData(prevData => ({ ...prevData, ...data }));
    console.log('User data:', userData);
    await SendInfo(data);
    setStep(step + 1);
  };

 // Empty dependency array to run the effect only once when the component mounts
  

  return (
    <div className="h-screen mt-20 w-full flex flex-col items-center justify-center">
      {step === 1 && <Rendezvs onNextClick={handleNextClick} />}
      {step === 2 && <Form onPrevClick={handlePrevClick} onNextClick={handleNextClick} initialData={userData} />}
      {step === 3 && <Date onPrevClick={handlePrevClick} onConfirmClick={handleConfirmClick} initialData={userData} />}
      {loading && <p>Loading...</p>}
      {step===4 && <ConfettiButton></ConfettiButton>}
    </div>
  );
}
