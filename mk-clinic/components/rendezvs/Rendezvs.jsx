
import React, {useEffect, useRef,useState } from "react";
import Link from "next/link";
import { createClient } from "../../utils/supabase/component";
export default function Rendezvs({onNextClick,onDataChange}){
  const[listopen,setListopen]=useState(false);
  const[autreoption,setAutreoption]=useState("");
  const [data, setData] = useState({});


  const[option,setOption]=useState("");
  
  
  const handleclick=()=>{
    setListopen(!listopen)
  }
  const handleChange = (value) => {
   
    const newData = { ...data, "motif": value };
    setData(newData); // Update data state
    onDataChange(newData);
    
  };
  

//  const handleNext=async () => {
 
//       try {
//         // Insert data into 'rendezvs' table
//         const supabase=createClient();
//         const { data: insertData, error: insertError } = await supabase
//           .from('rendezvs')
//           .insert([
//             { motif: {option} },
//           ]);
  
//         if (insertError) {
//           console.error('Error inserting data:', insertError.message);
//           return;
//         }
  
//         // Access the id of the inserted document
//         const insertedId = insertData[0]?.id;
//         setInsertedId(id);
//         console.log('Data inserted with id:', insertedId);
  
//         // Select all data from 'rendezvs' table
//         const { data: selectData, error: selectError } = await supabase
//           .from('rendezvs')
//           .select();
  
//         if (selectError) {
//           console.error('Error selecting data:', selectError.message);
//           return;
//         }
  
//         console.log('Selected data:', selectData);
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
    
//   }
        
  const options=[
    "consultation periodique", "douleur dentaire","prothese","fracture dentaire",
    "tartre",
    "appareiallage d'odf",
    "implantologie",
    "extraction chirurgicale de la dent de sagesse",
    "Autre -->"
   
    ]
  
    return(
        <>
         <div className=" relative w-1/2 h-1/3 bg-white p-6 border">
   
    <div className="flex h-1/2 items-center justify-center mb-4 border-b">
      <div className=" text-[#10217D] text-xl tracking-wide font-semibold  ">Prenez un Rendez-vs</div>
      
    </div>
    
    <div className="flex h-1/2 items-center justify-center gap-2 ">
      <div className="w-1/2 p-4 flex items-center justify-center border ">j'ai besoin d'une consultation pour</div>
      <div 
       onClick={handleclick}  className=" relative w-1/2 p-4 flex  flex-row items-center justify-between border hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:border-gray-500 cursor-pointer ">
 <div>{option ? option : "Selectionnez votre motif de consultation"}</div>
 <div className=""><svg width="34px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
</svg></div>
<div  className={` text-gray-500 text-sm absolute right-0 top-20 bg-white w-full rounded-md p-4 overflow-scroll z-30 ${listopen? "block":"hidden" }`}>
  <ul >
  { options.map(option=> <li onClick={()=>{setOption(option);handleChange(option)}} className="p-2 hover:bg-gray-100 cursor-pointer">{option} </li>
    
)}
  </ul>
</div>

 </div>
    </div>
    <div className={`m-4 h-1/2  bg-white border ${option==="Autre -->"? "block":"hidden" }`} ><input className="outline-none" required type="text" value={autreoption} onChange={(e)=>setAutreoption(e.target.value)} placeholder="ecrivez ici ..." /></div>
    
    <button onClick={onNextClick} disabled={option === "" || (option === "Autre -->" && autreoption === "")} type="submit" className="absolute my-6 right-0 p-2 text-xl xl:text-2xl text-[#10217D] border border-[#10217D] rounded-xl">
      
        <span>Next</span> 
      
        
      
    </button>

        
  </div>
        </>
    )
}