/** @format */

import Card from "@/components/ui/Card/Card";

export default function ResumeVidoes() {
  return (
    <Card classNames='min-w-full tab:min-w-60 tab:w-[17rem]'>
      <section className='w-full h-40 shadow rounded'></section>
      <section className='flex flex-col gap-2 text-xs font-semibold mt-2'>
        <h2>Ongoing Course</h2>
        <section className="flex flex-col gap-1">
          <p className='text-layout-bg'>15% completed</p>
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
          className='text-sm font-semibold text-layout-bg px-10 py-1 mx-auto rounded-sm outline-none bg-background'>
          Resume Course
        </button>
      </section>
    </Card>
  );
}
