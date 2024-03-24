/** @format */

import Card from "@/components/ui/Card/Card";

export default function Ongoing_Courses_Item() {
  return (
    <Card classNames='min-w-full tab:w-[12rem]'>
      <section className='w-full h-32 shadow rounded'></section>
      <section className='flex flex-col text-xs font-semibold mt-2'>
        <section className="flex w-full justify-between -mb-1">
          <h2>Ongoing Course</h2>
          <p className='text-layout-bg'>15% completed</p>
        </section>

        <section>
          <progress
            value={15}
            max={100}
            className='w-full transition duration-300'></progress>
        </section>
      </section>

      <section className='mt-2 text-xs flex flex-col gap-1 w-full'>
        <h2 className='w-full'>The Complete Web Development Bootcamp</h2>
        <p className='text-text'>
          <span>167.</span>
          <span>What you'll nedd to get started...</span>
        </p>
      </section>

      <section className='mt-2 w-full flex'>
        <button
          type='button'
          className='text-sm font-semibold text-layout-bg px-10 py-1 mx-auto rounded-sm outline-none active:bg-[#d8e1e7] bg-background transition duration-300'>
          Resume Course
        </button>
      </section>
    </Card>
  );
}
