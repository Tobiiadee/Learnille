/** @format */

import Card from "@/components/ui/Card/Card";
import { Link } from "react-router-dom";

import img from "../../../../assets/images/075826d0f7062c2b072efd481ac7837b.jpg";

export default function Completed_Courses_Item() {
  return (
    <Card classNames='min-w-full tab:w-[12rem]'>
      <section className='w-full h-[14rem] nb:h-32 shadow rounded overflow-hidden flex items-center justify-center'>
        <img src={img} alt='' />
      </section>
      <section className='flex flex-col text-xs font-semibold mt-2'>
        <section className='flex w-full -mb-1'>
          <p className='text-layout-bg mx-auto'>100% completed</p>
        </section>
        <section>
          <progress
            value={100}
            max={100}
            className='w-full transition duration-300'></progress>
        </section>
      </section>

      <section className='mt-2 w-full gap-2 flex justify-center tab:flex-col'>
        <button
          type='button'
          className='text-xs font-normal w-full tab:w-full capitalize text-white px-4 tab:px-10 py-2 tab:py-1 mx-auto rounded-sm outline-none active:bg-[#2e4fe0] bg-layout-bg transition duration-300'>
          view certificate
        </button>
        <Link to='/learnille/my%20courses/courses/play_course/description' className="w-full">
          <button
            type='button'
            className='text-xs font-normal w-full tab:w-full capitalize text-black px-4 tab:px-12 py-2 tab:py-1 mx-auto rounded-sm outline-none active:bg-[#d8e1e7] bg-background transition duration-300'>
            watch again
          </button>
        </Link>
      </section>
    </Card>
  );
}
