/** @format */

import Card from "@/components/ui/Card/Card";
import { Link } from "react-router-dom";
import img from "../../../../assets/images/407331d1457b2db1ee1b6678ba63a9a5.jpg";

// min-w-20 h-[14rem] tab:w-full tab:max-w-[20rem]
// w-full tab:w-max tab:h-[25rem] nb:h-[20rem]

export default function Ongoing_Courses_Item() {
  return (
    <Card classNames='min-w-full tab:w-[12rem]'>
      <section className='w-full h-[14rem] nb:h-32 shadow rounded overflow-hidden flex items-center justify-center'>
        <img src={img} alt='' />
      </section>
      <section className='flex flex-col text-xs font-semibold mt-2'>
        <section className='flex w-full justify-between -mb-1'>
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

      <section className='mt-2 w-full flex justify-center'>
        <Link to='/learnille/my%20courses/courses/play_course/description'>
          {" "}
          <button
            type='button'
            className='text-xs font-semibold text-layout-bg px-10 py-1 mx-auto rounded-sm outline-none active:bg-[#d8e1e7] bg-background transition duration-300'>
            Resume Course
          </button>
        </Link>
      </section>
    </Card>
  );
}
