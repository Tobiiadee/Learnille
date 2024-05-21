/** @format */

import Video from "@/components/ui/Video/Video";
import Pages_Home from "./Pages/Home/Pages_Home";
import Navigation from "./Nav/Navigation";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store/Main/Store";

export default function Course_Details() {
  const { course } = useSelector(
    (state: RootStateType) => state.course_details
  );

  // console.log(course);
  

  return (
    <section className='flex flex-col gap-2'>
      <main className='bg-white w-full px-6 py-7 rounded flex flex-col gap-2'>
        <div className='text-sm text-black flex flex-col gap-2'>
          <h2 className='font-semibold text-sm tab:text-lg capitalize'>
            {course.title}
          </h2>
          <p>
            {course.summary}
          </p>
        </div>

        <div className='h-max'>
          <Video />
        </div>
      </main>

      <section>
        <Navigation />
      </section>

      <main>
        <Pages_Home />
      </main>
    </section>
  );
}
