import Nav from "../nav/Nav"
import Rendezvs from "../rendezvs/Rendezvs"
export default function Hero (){
    return (
        <>
       <main style={{backgroundImage: "url('/images/hero.jpg')"}} className="h-screen w-full bg-cover bg-center">
       <Nav></Nav>
       <div className=" h-full flex items-center justify-center "><Rendezvs></Rendezvs></div>
        </main>
        </>
    )
}