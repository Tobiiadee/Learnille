/** @format */

import { useParams } from "react-router-dom";

import Course_Pricing from "../Aside/Course_Pricing";
import Course_Details from "../Details_Pages/Course_Details";
import Related_Courses from "../Related_Course/Related_Courses";
import { useSelector } from "react-redux";
import { RootStateType } from "@/store/Main/Store";
import { textShortener } from "@/lib/utils/Format/utils_";

export default function Details_Home() {
  const { details_page_id } = useParams();

  const { course } = useSelector(
    (state: RootStateType) => state.course_details
  );
  const title = textShortener(course.title);

  return (
    <>
      <div className='text-xs  text-text'>
        <h2>
          Market Place / Courses / {title} /{" "}
          <span className='underline text-layout-bg '>
            Course{" "}
            <span>
              {details_page_id?.charAt(0).toLocaleUpperCase() +
                details_page_id!.slice(1)}
            </span>{" "}
          </span>
        </h2>
      </div>

      <main className='mt-2 grid nb:grid-cols-[600px_600px_420px] gap-4'>
        <section className='flex flex-col gap-4'>
          <Course_Details />
          <Related_Courses />
        </section>
        <section>
          <Course_Pricing />
        </section>
      </main>
    </>
  );
}
