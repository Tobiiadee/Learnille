/** @format */

import Consultant_Tips from "@/components/layout/Consultant_Layout/Consultant_Tips";
import Header from "@/components/layout/Consultant_Layout/Header";
import Consultation_Home from "@/components/layout/Consultant_Layout/Consultant_Pages/Consultation_Home";

export default function Consultations() {
  return (
    <main className='tab:grid tab:grid-cols-3 gap-4 pr-2'>
      <main className='col-span-2'>
        <Header />
        <Consultation_Home />
      </main>

      <main className='hidden tab:flex flex-col gap-2'>
        <Consultant_Tips />
        <Consultant_Tips />
        <Consultant_Tips />
      </main>
    </main>
  );
}
