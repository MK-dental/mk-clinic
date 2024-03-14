
import React, {useEffect, useRef,useState } from "react";
export default function Rendezvs(props){
  const[option,setOption]=useState(null)
  const dropdownRef = useRef(null);
  const options=[
    "consultation periodique", "douleur dentaire","prothese","fracture dentaire",
    "tartre",
    "appareiallage d'odf",
    "implantologie",
    "extraction chirurgicale de la dent de sagesse",
    "Autre -->"
   
    ]
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        props.setListopen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    return(
        <>
         <div className=" w-1/2 h-1/3 bg-white p-6 border">
   
    <div className="flex h-1/2 items-center justify-center mb-4 border-b">
      <div className=" text-[#10217D] text-xl tracking-wide font-semibold  ">Prenez un Rendez-vs</div>
      
    </div>
    
    <div className="flex h-1/2 items-center justify-center gap-2 ">
      <div className="w-1/2 p-4 flex items-center justify-center border ">j'ai besoin d'une consultation pour</div>
      <div ref={dropdownRef}
       onClick={props.handleclick}  className=" relative w-1/2 p-4 flex  flex-row items-center justify-between border hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:border-gray-500 cursor-pointer ">
 <div>{option ? option : "Selectionnez votre motif de consultation"}</div>
 <div className=""><svg width="34px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
</svg></div>
<div  className={` text-gray-500 text-sm absolute right-0 top-20 bg-white w-full rounded-md p-4 ${props.listopen? "block":"hidden" }`}>
  <ul >
  { options.map(option=> <li onClick={()=>setOption(option)} className="p-2 hover:bg-gray-50 cursor-pointer">{option} </li>
    
)}
  </ul>
</div>
 </div>
    </div>
  </div>
        </>
    )
}