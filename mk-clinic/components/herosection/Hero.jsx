

import Link from "next/link"
import { useState } from "react"
export default function Hero (){
   
    return (
        <>
       <main style={{backgroundImage: "url('/images/hero.jpg')"}} className="h-screen w-full bg-cover bg-center">
      
       <div  className=" h-full flex items-center justify-center ">
       <div className=" w-1/2 h-1/3 bg-white p-6 border">
   
   <div className="flex h-1/2 items-center justify-center mb-4 border-b">
     <div className=" text-[#10217D] text-xl tracking-wide font-bold text-center ">Clinic dentaire de Dr Malek Kamel Eddine<br /><span className="text-black font-light text-base italic text-center">Un sourire éclatant commence ici</span> </div>
     
   </div>
   <div className="flex h-1/2 items-center justify-center gap-2 ">
      <div className="w-1/2 p-4 flex items-center justify-center border "><span>Appelez 0772 30 82 96</span></div>
       
          <span>ou</span>
          <button className="bg-[#10217D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
           <Link href="/Rendezvs">Prenez un Rendez-vs</Link> 
          </button>
      </div>
   </div>
        </div>
        
        </main>
        </>
    )
}