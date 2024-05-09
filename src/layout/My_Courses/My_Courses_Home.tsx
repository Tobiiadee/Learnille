/** @format */

import { useParams } from "react-router-dom";
import My_Courses_Header from "./My_Courses_Header";
import Completed_Courses from "./Completed_Courses/Completed_Courses";
import Ongoing_Courses from "./Ongoing_Courses/Ongoing_Courses";
import HomeAside from "../Home/Home_Aside/Event";

export default function My_Courses_Home() {
  const { courses_id } = useParams();

  let coursesPages;

  switch (courses_id) {
    case "completed_courses":
      coursesPages = <Completed_Courses />;
      break;
    case "ongoing_courses":
      coursesPages = <Ongoing_Courses />;
      break;
    default:
      coursesPages = <Ongoing_Courses />;
      break;
  }

  return (
    <section className='pb-10 tab:grid tab:grid-cols-2 nb:grid-cols-[34%_34%_32%] nb:gap-2 overflow-hidden tab:pr-4'>
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
