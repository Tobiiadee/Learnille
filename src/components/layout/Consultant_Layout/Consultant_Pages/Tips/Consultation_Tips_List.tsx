/** @format */

import Consultation_Tips from "./Consultant_Tips";

export default function Consultation_Tips_List() {
  return (
    <section className='flex flex-col gap-2 pr-2 nb:pr-0'>
      <div>
        <h2 className='font-semibold text-sm nb:hidden'>#Tips</h2>
      </div>
      <main className=" flex flex-col gap-2">
        <Consultation_Tips />
        <Consultation_Tips />
        <Consultation_Tips />
        <Consultation_Tips />
      </main>
    </section>
  );
}
