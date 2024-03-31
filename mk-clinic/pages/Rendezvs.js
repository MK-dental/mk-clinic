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
  
  const SendInfo = async (info) => {
    try {
      setLoading(true);
      const supabase = createClient();
      const { data: insertData, error: insertError } = await supabase
        .from('rendezvs')
        .insert(info);

      if (insertError) {
        console.error('Error inserting data:', insertError.message);
        return;
      }

      const insertedId = insertData[0]?.id;
      setInsertedId(insertedId);
      console.log('Data inserted with id:', insertedId);

      const { data: selectData, error: selectError } = await supabase
        .from('rendezvs')
        .select();

      if (selectError) {
        console.error('Error selecting data:', selectError.message);
        return;
      }

      console.log('Selected data:', selectData);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
    
  }

  const handleNextClick = (data) => {
    setUserData(prevData => ({ ...prevData, ...data }));
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

  useEffect(() => {
    console.log("User data updated:", userData);
  }, [userData]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      {step === 1 && <Rendezvs onNextClick={handleNextClick} />}
      {step === 2 && <Form onPrevClick={handlePrevClick} onNextClick={handleNextClick} initialData={userData} />}
      {step === 3 && <Date onPrevClick={handlePrevClick} onConfirmClick={handleConfirmClick} initialData={userData} />}
      {loading && <p>Loading...</p>}
      {step===4 && <ConfettiButton></ConfettiButton>}
    </div>
  );
}
