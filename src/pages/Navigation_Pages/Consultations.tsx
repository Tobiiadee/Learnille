/** @format */

import Consultant_Tips from "@/components/layout/Consultant_Layout/Consultant_Tips";
import Header from "@/components/layout/Consultant_Layout/Header";
import Consultation_Home from "@/components/layout/Consultant_Layout/Consultant_Pages/Consultation_Home";

export default function Consultations() {
  return (
    <main className='tab:grid tab:grid-cols-3 gap-4 pr-2 pb-4'>
      <main className='col-span-2'>
        <Header />
        <Consultation_Home />
      </main>

      <main className='hidden tab:flex flex-col gap-2'>
        <Consultant_Tips />
        <Consultant_Tips />
        <Consultant_Tips />
      </main>

      <main className='mt-4 flex gap-1 items-center justify-center col-span-2 '>
        <button type='button' >
          {""}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 hover:border rounded'>
              <path
                fillRule='evenodd'
                d='M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </button>
        <div className='w-4 h-4 rounded-full shadow text-xs flex items-center justify-center bg-layout-bg text-white'>
          1
        </div>
        <button type='button'>
          {""}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 hover:border rounded'>
              <path
                fillRule='evenodd'
                d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </button>
      </main>
    </main>
  );
}
