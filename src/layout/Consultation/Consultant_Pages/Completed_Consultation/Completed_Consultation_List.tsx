/** @format */

// import Empty_State from "@/components/ui/Empty_State/Empty_State";
import Completed_Consultation from "./Completed_Consultation";

export default function Completed_Consultation_List() {
  return (
    <>
      <main className='flex justify-between items-center mt-2 border border-dotted'>
        <h2 className='uppercase text-sm py-3 flex items-center justify-center w-3/6'>
          Consultation
        </h2>
        <h2 className='uppercase text-sm py-3 flex items-center justify-center w-3/6'>
          Price/Action
        </h2>
      </main>
      {/* <Empty_State text="You have not booked any consultation"/> */}
      <section className='mt-4 flex flex-col gap-2'>
        <Completed_Consultation />
        <Completed_Consultation />
        <Completed_Consultation />
      </section>
    </>
  );
}
