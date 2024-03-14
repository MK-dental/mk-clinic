import Nav from "../nav/Nav"
import Rendezvs from "../rendezvs/Rendezvs"
import { useState } from "react"
export default function Hero (){
    const[listopen,setListopen]=useState(false);
    const handleclick=()=>{
      setListopen(!listopen)
    }
    return (
        <>
       <main style={{backgroundImage: "url('/images/hero.jpg')"}} className="h-screen w-full bg-cover bg-center">
       <Nav></Nav>
       <div  className=" h-full flex items-center justify-center ">
        <Rendezvs setListopen={setListopen} handleclick={handleclick} listopen={listopen}></Rendezvs>
        </div>
        
        </main>
        </>
    )
}