/** @format */

import Card from "@/components/ui/Card/Card";
import Course_Section from "./Course_Section";

export default function Section_Item() {
  return (
    <Card classNames='p-0 flex flex-col gap-2'>
      <div className='font-bold text-xs text-black flex gap-1 items-center'>
        <h2>Section 01</h2>
        <div className='text-[7px] font-normal flex gap-1'>
          <span className='flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-3 h-3 text-layout-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776'
              />
            </svg>
            <h2>2 sub sections</h2>
          </span>
          <span className='flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-3 h-3 text-layout-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
              />
            </svg>
            <h2>202 Lectures</h2>
          </span>
          <span className='flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-3 h-3 text-layout-text'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
            <h2>19h 39m</h2>
          </span>
          <span className='flex gap-1 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-3 h-3'>
              <path
                fillRule='evenodd'
                d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
                clipRule='evenodd'
              />
            </svg>

            <h2 className='font-semibold'>Unlock</h2>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-3 h-3'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m19.5 8.25-7.5 7.5-7.5-7.5'
              />
            </svg>
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-0'>
        <section>
          <div className='flex w-full justify-between text-xs'>
            <h2 className='font-semibold text-sm text-black'>
              Course Contents
            </h2>
            <span className='flex gap-1 text-layout-bg font-medium'>
              <h2>15%</h2>
              <h2>Completed</h2>
            </span>
          </div>
        </section>

        <section className='-mt-2'>
          <progress max={100} value={15} className='w-full'></progress>
        </section>
      </div>

      <div className='mt-2 flex flex-col gap-4'>
        <Course_Section />
        <Course_Section />
        <Course_Section />
        <Course_Section />
      </div>

      <div className="mt-1 flex justify-between items-center w-full text-sm">
        <h2>To access the section</h2>
        <button type="button" className=" bg-[#dddff4] active:bg-[#c9cbdd] text-layout-bg font-semibold rounded-sm px-4 py-1 transition duration-300">
          Buy Now
        </button>
      </div>
    </Card>
  );
}
