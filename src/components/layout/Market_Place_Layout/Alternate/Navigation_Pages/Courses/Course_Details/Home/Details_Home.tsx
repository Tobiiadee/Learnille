/** @format */

import { useParams } from "react-router-dom";

import Course_Pricing from "../Aside/Course_Pricing";
import Course_Details from "../Details_Pages/Course_Details";
import Related_Courses from "../Related_Course/Related_Courses";

export default function Details_Home() {
  const { details_page_id } = useParams();

  return (
    <>
      <div className='text-xs tab:text-sm text-text'>
        <h2>
          Market Place / Courses / How to make your first... /{" "}
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
