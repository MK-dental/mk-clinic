export default function About(){
    return (
        <>
        <div className="h-screen flex flex-col p-20">
        <h1 className="text-[#10217D] text-3xl font-bold mb-6 ">A propos</h1>
        <div className="w-full  flex  flex-col md:flex-row  justify-between items-center md:gap-12 text-sm  font-semibold xl:text-xl 2xl:text-2xl  lg:gap-24 ">
            
            <div className=" w-full md:w-1/2 ">
            
            
                <p className="indent-8">
                Bienvenue au cabinet dentaire  dirigé par le Dr. Malek Kamel Eddine spécialiste en parodontologie, ancien maître assistant à l'Université de Sidi Belabbas. Situé au sein d'un groupe médical, notre cabinet offre une gamme complète de traitements dentaires, y compris des interventions chirurgicales telles que l'extraction des dents de sagesse et l'implantologie. Nous sommes dévoués à la santé bucco-dentaire globale de nos patients, en leur offrant des soins personnalisés dans un environnement moderne et accueillant. Faites confiance à notre équipe expérimentée pour des soins dentaires de qualité supérieure.
                </p>
            </div>

            <div className=" hidden  w-1/2 md:flex  lg:justify-center lg:content-center  ">
                <img src="images/about.jpg" alt="dentist working"  />
            </div>
        </div>
        <div className="m-2">
        <button className="p-2  text-xl xl:text-2xl text-[#10217D] border border-[#10217D] rounded-xl">consulter maintenant</button>
        </div>
        </div>
        </>
    )
}