import { useEffect, useState } from "react";
import Rendezvs from "../components/rendezvs/Rendezvs"
import Form from "../components/rendezvs/form"
import Date from "../components/rendezvs/Date";
export default function Rendezvspage(){
    const [step, setStep] = useState(1);

    const [userData, setUserData] = useState({});
    const handleNextClick = (data) => {
        setUserData({ ...userData, ...data });
        console.log("userdata:",userData.motif)
        setStep(step + 1);
    }
    useEffect(() => {
        console.log("userdata:", userData.motif);
      }, [userData]);
    
  
    const handlePrevClick = () => {
      setStep(step - 1);
    };
    const handleConfirmClick = (data) => {
        setUserData({ ...userData, ...data });
        // Here, you can send `userData` to Supabase
        console.log('User data:', userData);
        // Reset userData if needed
        setUserData({});
      };
    return(
        <>
        < div className=" h-screen flex flex-col items-center justify-center ">
        {/* if the user clicked on next it will show the other component  */}
      {step === 1 && <Rendezvs onNextClick={handleNextClick} onDataChange={(data) => setUserData(data)}  />}
      {step === 2 && <Form onPrevClick={handlePrevClick} onNextClick={handleNextClick} onDataChange={(data) => setUserData(data)}  />}
      {step === 3 && <Date onPrevClick={handlePrevClick} onConfirmClick={handleConfirmClick} onDataChange={(data) => setUserData(data)} />}
    
            
        
          
        </div>
        </>
    )
}