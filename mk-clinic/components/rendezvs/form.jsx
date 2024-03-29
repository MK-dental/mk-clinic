import { NEXT_QUERY_PARAM_PREFIX } from "next/dist/lib/constants";
import Link from "next/link";
import { useState } from "react";
export default function Form({onPrevClick,onNextClick,initialData}){
    const [data, setData] = useState({});
    const [inputValues, setInputValues] = useState({});


    const form=[{
    name:"nom",
    type:"text",
    placeholder:"votre nom",
    pattern:"",
    maxlength:50,
    minLength:4,
    },{
        name:"age",
        type:"number",
        placeholder:"votre age",
        pattern:"[1-9][0-9]?|1[01][0-9]|120" ,
        maxlength:3,
        minLength:1,
    },{
        name:"numero-telephone",
        type:"number",
        placeholder:"votre numero de telephone",
        pattern:"05[0-9]{8}|06[0-9]{8}|07[0-9]{8}" ,// Regex pattern to match the phone number format
        minLength:10, // Minimum input length required
        maxLength:10, // Limiting input length to 10 digits
    },{
        name:"email",
        type:"email",
        placeholder:"votre email",
        pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}",
    },{
        name:"specifique",
        type:"text",
        placeholder:"ecrivez ici",
        pattern:"",
        maxLength:255,
        minLength:4,
    }] 
    const handleInputChange = (index, value) => {
        setInputValues(prevState => ({
          ...prevState,
          [form[index].name]: value
        }));
      };
      const handleChange = () => {
        const newData = { ...data, ...inputValues };
        setData(newData); // Update data state
        const Data={...initialData,...newData}
        onNextClick(Data);
    };

    return(
       <>
       <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-[#10217D] font-bold text-lg my-6">Rempli la forme suivante:</h1>
       <div className=" m-6 bg-white w-1/2 h-full grid grid-cols-2 text-[#10217D] font-semibold  gap-4">

       <div className="h-full flex flex-col justify-start items-start gap-12"><h1 className=" justify-start text-nowrap" >Votre Nom :</h1>
       <h1 className=" w-2/3 h-Full text-start text-nowrap" >Votre age :</h1>
        <h1 className=" w-2/3 h-Full text-start text-wrap" >Votre numero de téléphone:</h1> 
       <h1 className=" w-2/3 h-Full text-start text-nowrap" >Votre email :</h1> 
         
       <h1 className=" justify-start text-wrap" >quelque chose specifique que vous voulez mentionner:</h1> 
       </div>
        <div className="h-full   flex flex-col justify-start items-start gap-8">
            {form.map((element,index)=><input key={index} minLength={element.minLength} maxLength={element.maxLength} pattern={element.pattern} className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type={element.type} placeholder={element.placeholder} value={inputValues[element.name] || ''} // Set value from state
          onChange={e => handleInputChange(index, e.target.value)}></input>)}
         {/* <input className="bg-[#1BA9B5]/25 w-2/3 h-Full text-black text-center" type="text" required placeholder=" votre nom ..." />
          <input className="bg-[#1BA9B5]/25 w-2/3 h-Full text-black text-center" type="number" required placeholder=" votre age ..." />
        <input className="bg-[#1BA9B5]/25 w-2/3 h-Full text-black text-center" type="text" required placeholder=" votre numéro de téléphone ..." />
         <input className="bg-[#1BA9B5]/25 w-2/3 h-Full text-black text-center" type="email" required placeholder=" votre email ..." />

        <input className="bg-[#1BA9B5]/25 w-2/3 h-full py-6 text-black text-start" type="text" required placeholder=" ecrivez ici ..." /> */}
        
</div>
       
       
       

       </div>
       <div className="  w-1/2 flex flex-row justify-between ">   
<button onClick={onPrevClick}  type="submit" className=" my-6 w-24 p-2 text-xl xl:text-2xl text-[#10217D] border border-[#10217D] rounded-xl">
     
        <span >previous</span> 
     
    </button>
    <button onClick={()=>{onNextClick();handleChange()}}  type="submit" className=" my-6 w-24  p-2 text-xl xl:text-2xl text-[#10217D] border border-[#10217D] rounded-xl">
     
        <span >Next</span> 
     
    </button>
    </div>
       </div>
       </>
    )
}