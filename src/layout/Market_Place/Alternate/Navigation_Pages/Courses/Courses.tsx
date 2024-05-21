/** @format */

import Course_Item from "./Course_Item";
// import { Courses_List } from "@/lib/Courses/Courses_Utils";
import { courseDetails } from "@/lib/Courses/DUMMY_Courses_Details";

export default function Courses() {
  const course_item = courseDetails.map((courseInfo) => (
    <Course_Item key={courseInfo.id} courseInfo={courseInfo} />
  ));

  return (
    <main className='flex gap-10 flex-col'>
      <section className='grid tab:grid-cols-2 nb:grid-cols-3 justify-center w-full gap-2 px-4 tab:px-0'>
        {course_item}
      </section>

      <div className='flex gap-4 items-center self-center'>
        <button type='button' className='bg-white shadow rounded-full p-2'>
          {""}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 text-layout-bg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
            />
          </svg>
        </button>
        <section className='flex gap-2 items-center text-xs text-white'>
          <div className='py-1 px-2 flex items-center justify-center rounded-full bg-layout-bg'>
            01
          </div>
          <div className='py-1 px-2 flex items-center justify-center rounded-full bg-layout-bg'>
            02
          </div>
          <div className='py-1 px-2 flex items-center justify-center rounded-full bg-layout-bg'>
            03
          </div>
          <div className='py-1 px-2 flex items-center justify-center rounded-full bg-layout-bg'>
            04
          </div>
        </section>
        <button type='button' className='bg-white shadow rounded-full p-2'>
          {""}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 text-layout-bg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
