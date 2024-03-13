export default function Rendezvs(){
    return(
        <>
         <div className=" w-1/2 h-1/3 bg-white p-6 border">
   
    <div className="flex h-1/2 items-center justify-center mb-4 border-b">
      <div className=" text-[#10217D] text-xl tracking-wide font-semibold  ">Prenez un Rendez-vs</div>
      
    </div>
    
    <div className="flex h-1/2 items-center justify-center">
      <div className="w-1/2 p-4 flex items-center justify-center border ">j'ai besoin d'une consultation pour</div>
      <div className="w-1/2 p-4 flex items-center justify-center border hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:border-gray-500  "> <select class="block  w-full h-full bg-white ">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select></div>
    </div>
  </div>
        </>
    )
}