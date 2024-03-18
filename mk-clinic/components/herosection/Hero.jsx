

import Link from "next/link"
import { useState } from "react"
export default function Hero (){
   
    return (
        <>
       <main style={{backgroundImage: "url('/images/hero.jpg')"}} className="h-screen w-full bg-cover bg-center">
      
       <div  className=" h-full flex items-center justify-center ">
       <div className=" lg:w-1/2 lg:h-1/3 bg-white p-6 border">
   
   <div className="flex h-1/2 items-center justify-center mb-4 border-b">
     <div className=" text-[#10217D] text-sm lg:text-xl tracking-wide font-bold text-center ">Clinic dentaire de Dr Malek Kamel Eddine<br /><span className="text-black font-light text-xs lg:text-base italic text-center">Un sourire éclatant commence ici</span> </div>
     
   </div>
   <div className="flex flex-col  lg:flex-row lg:h-1/2 items-center justify-center gap-2 ">
      <div className="lg:w-1/2 p-4 flex items-center justify-center border text-xs lg:text-base "><span>Appelez 0772 30 82 96</span></div>
       
          <span>ou</span>
          <button className="bg-[#10217D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xs lg:text-base">
           <Link href="/Rendezvs">Prenez un Rendez-vs</Link> 
          </button>
      </div>
   </div>
        </div>
        
        </main>
        </>
    )
}