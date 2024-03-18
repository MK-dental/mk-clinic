import Link from "next/link"
export default function Form(){
    return(
       <>
       <div className="flex flex-col justify-center items-center w-full h-full">
       <div className=" m-6 bg-white w-1/2 h-full grid grid-cols-2 text-[#10217D] font-semibold  gap-4">

       <div className="h-full flex flex-col justify-start items-start gap-6"><h1 className=" justify-start text-nowrap" >Votre Nom :</h1>
       <h1 className=" w-2/3 h-Full text-start text-nowrap" >Votre age :</h1>
        <h1 className=" w-2/3 h-Full text-start text-wrap" >Votre numero de téléphone:</h1> 
       <h1 className=" w-2/3 h-Full text-start text-nowrap" >Votre email :</h1> 
         
       <h1 className=" justify-start text-wrap" >quelque chose specifique que vous voulez mentionner:</h1> 
       </div>
        <div className="h-full   flex flex-col justify-start items-start gap-6">
            
         <input className="bg-[#1BA9B5]/25 w-2/3 h-Full text-black text-center" type="text" required placeholder=" votre nom ..." />
          <input className="bg-[#1BA9B5]/25 w-2/3 h-Full text-black text-center" type="number" required placeholder=" votre age ..." />
        <input className="bg-[#1BA9B5]/25 w-2/3 h-Full text-black text-center" type="text" required placeholder=" votre numéro de téléphone ..." />
         <input className="bg-[#1BA9B5]/25 w-2/3 h-Full text-black text-center" type="email" required placeholder=" votre email ..." />

        <input className="bg-[#1BA9B5]/25 w-2/3 h-full py-6 text-black text-start" type="text" required placeholder=" ecrivez ici ..." />
        
</div>
       
       
       
       
        <div  className="flex justify-end w-screen"> <button className=" p-2 text-xl xl:text-2xl text-[#10217D] border border-[#10217D] rounded-xl"> <Link href="/form">Next</Link></button> </div>
       </div>
       </div>
       </>
    )
}