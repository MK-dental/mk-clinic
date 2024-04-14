import React, { useEffect, useState } from "react";

export default function Rendezvs({ onNextClick }) {
  const [listOpen, setListOpen] = useState(false);
  const [autreOption, setAutreOption] = useState("");
  const [data, setData] = useState({});
  const [option, setOption] = useState("");

  const handleclick = () => {
    setListOpen(!listOpen);
  };
  const handleChange = (value) => {
    if (value === "Autre -->") {
      if (autreOption !== "") {
        setData({ ...data, motif: autreOption });
      } else {
        setData({ ...data, motif: value }); // Setting motif to "Autre -->" when autreOption is empty
      }
    } else {
      setData({ ...data, motif: value });
    }
    console.log("data",data)
  };
  useEffect(()=>{
     handleChange (option)
  },[option,autreOption])

  

  const options = [
    "consultation periodique", "douleur dentaire","prothese","fracture dentaire",
    "tartre",
    "appareiallage d'odf",
    "implantologie",
    "extraction chirurgicale de la dent de sagesse",
    "Autre -->"
  ];

  return (
    <>
      <div className="relative h-full w-full lg:w-1/2 lg:h-2/3 bg-white border">
        <div className="flex items-center justify-center mb-4 p-12 border-b">
          <div className="text-[#10217D] text-xl tracking-wide font-semibold">
            Prenez un Rendez-vs
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-1/2 items-center justify-center gap-2">
          <div className="w-1/2 p-4 flex items-center justify-center border">j'ai besoin d'une consultation pour</div>
          <div
            onClick={handleclick}
            className="relative w-1/2 p-4 flex flex-row items-center justify-between border hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:border-gray-500 cursor-pointer"
          >
            <div>{option ? option : "Selectionnez votre motif de consultation"}</div>
            <div className="">
              <svg width="34px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
              </svg>
            </div>
            <div className={`text-gray-500 text-sm absolute right-0 top-20 bg-white w-full rounded-md p-4 overflow-scroll z-30 ${listOpen ? "block" : "hidden"}`}>
              <ul>
                {options.map((option, index) => (
                  <li key={index} onClick={() => {setOption(option)}} className="p-2 hover:bg-gray-100 cursor-pointer">{option}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={`m-4 h-1/2 bg-white border ${option === "Autre -->" ? "block" : "hidden"}`}>
          <input className="outline-none" required type="text" value={autreOption} onChange={(e) => {setAutreOption(e.target.value)}} placeholder="ecrivez ici ..." />
        </div>
        <div className="flex justify-end items-end">
          <button onClick={() => {onNextClick(data)}} disabled={!option || (option === "Autre -->" && !autreOption)} type="submit" className="my-16 p-2 text-xl xl:text-2xl text-[#10217D] border border-[#10217D] rounded-xl">
            <span>Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
