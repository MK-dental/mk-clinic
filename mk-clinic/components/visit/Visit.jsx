import { FaCalendarAlt} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function Visit(){
    return(
        <>
        <div className="lg:h-[856px] w-full flex flex-col justify-center items-center ">
            <div className="flex flex-col p-6 lg:p-10 h-1/2 w-2/3 bg-white lg:grid lg:grid-cols-2">
                <div>
                    <h1 className="text-xl font-bold mb-4">Visit us </h1>
                    <p className="text-base mb-4">nous somme situé dans la Rue kada boualem.en face de la polyclinique  Oued Rhiou, Algeria</p>
                <div className="my-6 flex flex-row gap-4"><FaCalendarAlt className="self-center text-xl text-blue-500"></FaCalendarAlt><span className="text-xs">nous somme ouvert toute la semaine 7/7 de 8:30 jusqu'a 17:00</span> </div>
                <div className="my-6 flex flex-row gap-4"><FaLocationDot  className="self-center text-xl text-blue-500"/> <span className="text-xs">localisé au rue de kada boualem</span></div>
                </div>
                <div className="inline-flex justify-center items-center lg:items-start " ><img className="h-1/3 lg:h-1/2 xl:h-1/2 w-2/3  lg:w-full" src="/images/visit.jpg" alt="" /></div>
            </div>
            <div className="mx-auto max-w-full overflow-x-auto"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.9989108808061!2d0.9183779207646195!3d35.95913179010159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1283e1de75af4baf%3A0x5f0bb6d28f8b88fa!2sCabinet%20Dentaire%20De%20Groupe!5e0!3m2!1sfr!2sdz!4v1710367787144!5m2!1sfr!2sdz" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
        </>
    )
}