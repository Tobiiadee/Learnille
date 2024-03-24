/** @format */

import { useParams } from "react-router-dom";
import My_Courses_Header from "./My_Courses_Header";
import Completed_Courses from "./Completed_Courses/Completed_Courses";
import Ongoing_Courses from "./Ongoing_Courses/Ongoing_Courses";
import HomeAside from "../Home_Layout/Home_Aside/Home_Aside";

export default function My_Courses_Home() {
  const { courses_id } = useParams();

  let coursesPages;

  switch (courses_id) {
    case "completed_courses":
      coursesPages = <Completed_Courses />;
      break;

    default:
      coursesPages = <Ongoing_Courses />;
      break;
  }

  return (
    <section className='nb:grid nb:grid-cols-3 gap-4 pr-2 pb-4'>
      <main className='col-span-2'>
        <My_Courses_Header />
        <main>{coursesPages} </main>
      </main>

      <main className='hidden nb:block'>
        <HomeAside />
      </main>
    </section>
  );
}
