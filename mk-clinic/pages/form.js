import Form from "@/components/rendezvs/form";

export default function form(){
    return(
        <>
        <div className="flex flex-col justify-center items-center ">
            <h1 className=" text-[#10217D] text-xl tracking-wide font-semibold  ">rempli la form suivante</h1>
            <Form></Form>
        </div>
        </>
    )
}