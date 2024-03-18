import Form from "@/components/rendezvs/form";

export default function form(){
    return(
        <>
        <div className="flex flex-col justify-center items-center ">
            <h1 className="my-12 text-[#10217D] text-xl tracking-wide font-bold capitalize ">Rempli la form suivante</h1>
            <Form></Form>
        </div>
        </>
    )
}