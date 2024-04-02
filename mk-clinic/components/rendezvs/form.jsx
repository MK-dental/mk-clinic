import Link from "next/link";
import { useState } from "react";

export default function Form({ onPrevClick, onNextClick, initialData }) {
  const [data, setData] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});

  const form = [
    {
      name: "nom",
      type: "text",
      placeholder: "votre nom",
      pattern: "",
      maxlength: 50,
      minLength: 4,
      label: "Votre Nom",
    },
    {
      name: "age",
      type: "number",
      placeholder: "votre age",
      pattern: "^[0-9]{1,2}$",
      errorMessage:"entrer un age valide",
      maxlength: 3,
      minLength: 1,
      label: "Votre age",
    },
    {
      name: "numero-telephone",
      type: "number",
      placeholder: "votre numero de telephone",
      pattern: "05[0-9]{8}|06[0-9]{8}|07[0-9]{8}", // Regex pattern to match the phone number format
      errorMessage:"le numéro de téléphone doit commencer par 05/06/07 et d'etre composé de dix nombres",
      minLength: 10, // Minimum input length required
      maxLength: 10, // Limiting input length to 10 digits
      label: "Votre numéro de téléphone",
    },
    {
      name: "email",
      type: "email",
      placeholder: "votre email",
      pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
      errorMessage:"l'émail doit etre de la form de exemple@gmail.com",
      label: "Votre email",
    },
    {
      name: "specifique",
      type: "text",
      placeholder: "ecrivez ici",
      pattern: "",
      maxLength: 255,
      minLength: 4,
      label: "Quelque chose spécifique que vous voulez mentionner",
    },
  ];

 

   
  const handleInputChange = (index, value) => {
    setInputValues((prevState) => ({
      ...prevState,
      [form[index].name]: value,
    }));
    // Clear error if input field is filled
    setErrors((prevErrors) => ({
      ...prevErrors,
      [form[index].name]: null,
    }));
  };

  const handleChange = () => {
    const newData = { ...data, ...inputValues };
    setData(newData); // Update data state
    const Data = { ...initialData, ...newData };
    onNextClick(Data);
  };

  const isFormValid = () => {
    let isValid = true;
    const newErrors = {};

    // Loop through form elements
    form.forEach((element) => {
        const value = inputValues[element.name];
        const pattern = new RegExp(element.pattern); // Convert pattern string to RegExp

        // Check if the input value is empty for required fields (name, age, phone number)
        if (!value && (element.name === "nom" || element.name === "age" || element.name === "numero-telephone")) {
            isValid = false;
            newErrors[element.name] = "Ce champ est requis";
        } else if (pattern && !pattern.test(value)) {
            // Check if the input value matches the pattern
            isValid = false;
            inputValues[element.name]=null;
            newErrors[element.name] = element.errorMessage || "La valeur entrée est invalide";
        }
    });

    // If there are errors, set them and mark the form as invalid
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        isValid = false;
    }

    return isValid;
};



    

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <h1 className="text-[#10217D] font-bold text-lg my-6">
          Rempli la forme suivante:
        </h1>
        <div className=" m-6 bg-white w-1/2 h-full grid grid-cols-2 text-[#10217D] font-semibold  gap-4">
          <div className="h-full flex flex-col justify-start items-start gap-12">
            <h1 className=" justify-start text-nowrap">Votre Nom :</h1>
            <h1 className=" w-2/3 h-Full text-start text-nowrap">
              Votre age :
            </h1>
            <h1 className=" w-2/3 h-Full text-start text-wrap">
              Votre numero de téléphone:
            </h1>
            <h1 className=" w-2/3 h-Full text-start text-nowrap">
              Votre email :
            </h1>

            <h1 className=" justify-start text-wrap">
              quelque chose specifique que vous voulez mentionner:
            </h1>
          </div>
          <div className="h-full   flex flex-col justify-start items-start gap-8">
            {form.map((element, index) => (
             <div key={index} className="grid grid-cols-2 "> {/* Added a div with flex display */}
             <input
                 minLength={element.minLength}
                 maxLength={element.maxLength}
                 pattern={element.pattern}
                 className={`w-2/3 p-2 text-gray-600 border ${errors[element.name] ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-blue-500`}
                 type={element.type}
                 placeholder={element.placeholder}
                 value={inputValues[element.name] || ""} // Set value from state
                 onChange={(e) => handleInputChange(index, e.target.value)}
             />
             {errors[element.name] && ( // Render the error message conditionally
                 <span className="text-red-500 text-nowrap text-xs  font-normal">{errors[element.name]}</span>
             )}
         </div>
            ))}
          </div>
        </div>
        <div className="  w-1/2 flex flex-row justify-between ">
          <button
            onClick={onPrevClick}
            type="submit"
            className=" my-6 w-32 p-2 text-xl xl:text-2xl text-[#10217D] border border-[#10217D] rounded-xl"
          >
            <span>previous</span>
          </button>
          <button
            onClick={() => {
              if (isFormValid()) {
                handleChange();
              } else {
                // Focus on first input field that has error
                alert("remplis les champs requis")
                
              }
            }}
            type="submit"
            className=" my-6 w-24  p-2 text-xl xl:text-2xl text-[#10217D] border border-[#10217D] rounded-xl"
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
