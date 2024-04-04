/** @format */

import Booked_Consultation_Items from "./Booked_Consultation_Items";

export default function Booked_Consultations() {
  return (
    <section className='flex flex-col gap-2'>
      <h2 className='text-sm font-semibold'>
        People also book book this consultation
      </h2>

      <main className='flex gap-4 overflow-hidden'>
        <Booked_Consultation_Items />
        <Booked_Consultation_Items />
        <Booked_Consultation_Items />
      </main>

      <section className="w-full flex justify-center gap-4">
        <button type='button' className='bg-white text-black shadow-md active:bg-[#ededed] rounded-full p-3 -ml-6 transition duration-300'>
          {""}
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
        </button>
        <button type='button' className='bg-white text-black shadow-md active:bg-[#ededed] rounded-full p-3 -mr-6 transition duration-300'>
          {""}
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
        </button>
      </section>
    </section>
  );
}
