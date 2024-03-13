import Link from "next/link"
export default function Consulter(){
    return (
        <>
        <div className="  flex flex-col  ">
        <h1 className=" p-20 text-[#10217D] text-3xl font-bold mb-6 ">Consulter pour</h1>
        <div className="p-10 h-full flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" mx-6 p-2 grid grid-cols-2 bg-[#1BA9B5] bg-opacity-15 text-[#527C88] "><div className="rounded-full overflow-hidden h-24 w-24 flex justify-center items-center"> <img className="rounded-full" src="/images/pain.png" alt="douleur" /></div> <span className="flex justify-center items-center">douleurs dentaire</span></div>
          <div className=" mx-6 p-2 grid grid-cols-2  bg-[#1BA9B5] bg-opacity-15 text-[#527C88] "><div className="rounded-full overflow-hidden h-24 w-24"> <img className="rounded-full" src="/images/fracture.png" alt="fracture" /></div><span className="flex justify-center items-center"> fracture dentaire</span></div>
          <div className="mx-6 p-2 grid grid-cols-2 bg-[#1BA9B5] bg-opacity-15 text-[#527C88]"> <div className="rounded-full overflow-hidden h-24 w-24"> <img className="rounded-full" src="/images/tartre.png" alt="douleur" /></div> <span className="flex justify-center items-center">tartre</span></div>
          <div className="mx-6 p-2 grid grid-cols-2 bg-[#1BA9B5] bg-opacity-15 text-[#527C88] "> <div className="rounded-full overflow-hidden h-24 w-24"> <img className="rounded-full" src="/images/ortho.png" alt="appareiallage d'odf" /></div> <span className="flex justify-center items-center">appareiallage d'odf</span></div>
          <div className="mx-6 p-2 grid grid-cols-2 bg-[#1BA9B5] bg-opacity-15 text-[#527C88] "> <div className="rounded-full overflow-hidden h-24 w-24"> <img className="rounded-full" src="/images/prothese.png" alt="prothèse" /></div> <span className="flex justify-center items-center">prothèse</span></div>
          <div className=" mx-6 p-2 grid grid-cols-2  bg-[#1BA9B5] bg-opacity-15 text-[#527C88] "> <div className="rounded-full overflow-hidden h-24 w-24"> <img className="rounded-full" src="/images/implant.png" alt="implant" /></div> <span className="flex justify-center items-center">implantation</span></div>
          <div className=" mx-6 p-2 grid grid-cols-2 bg-[#1BA9B5] bg-opacity-15 text-[#527C88] "> <div className="rounded-full overflow-hidden h-24 w-24"> <img className="rounded-full" src="/images/dds.png" alt="douleur" /></div><div className="flex justify-center items-center" > extraction chirurgicale de la dent de sagesse</div></div>
        </div>
       <span className=" font-bold text-[#527C88] text-xl self-end mx-12 underline"><Link  href="/"> Autre motif de consultation..</Link></span> 
        </div>
        </>
    )
}