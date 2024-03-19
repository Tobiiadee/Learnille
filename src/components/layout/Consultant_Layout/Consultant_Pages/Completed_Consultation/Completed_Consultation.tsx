/** @format */

import Completed_Consultation_List from "./Completed_Consultation_List";

export default function Completed_Consultation() {
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
      
      <section className='mt-4 flex flex-col gap-2'>
        <Completed_Consultation_List />
        <Completed_Consultation_List />
        <Completed_Consultation_List />
      </section>
    </>
  );
}
