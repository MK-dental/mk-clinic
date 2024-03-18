import Link from "next/link"
export default function Form(){
    return(
       <>
       <div className=" m-6 bg-white w-1/2  flex flex-col text-[#10217D] font-semibold  gap-4">
        <div className="h-16 flex flex-row  gap-4"><h1 className="self-center" >Votre nom :</h1> <input className="bg-[#1BA9B5] w-2/3 opacity-20 h-Full text-black" type="text" required placeholder=" votre nom ..." /></div>
        <div className="h-16 flex flex-row  gap-4"><h1 className="self-center justify-start text-nowrap" >Votre numero de téléphone :</h1> <input className="bg-[#1BA9B5] w-2/3 opacity-20 h-Full text-black" type="text" required placeholder=" votre nom ..." /></div>
        <div className="h-16 flex flex-row  gap-4"><h1 className="self-center justify-start text-nowrap" >Votre email :</h1> <input className="bg-[#1BA9B5] w-2/3 opacity-20 h-Full text-black" type="text" required placeholder=" votre nom ..." /></div>
        <div className="h-16 flex flex-col  gap-4"><h1 className="self-start justify-start text-nowrap" >quelque chose specifique que vous voulez mentionner:</h1> <input className="bg-[#1BA9B5] w-full opacity-20 h-Full text-black" type="text" required placeholder=" votre nom ..." /></div>
        <div> <button className=" p-2 text-xl xl:text-2xl text-[#10217D] border border-[#10217D] rounded-xl"> <Link href="/form">Next</Link></button> </div>
       </div>
       </>
    )
}