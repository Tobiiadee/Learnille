/** @format */
// import { useSelector } from "react-redux";
// import { RootStateType } from "@/store/Main/Store";

import MyCourse_Section from "./Course_Content/MyCourse_Section";
// import { CurricullumType } from "@/lib/types/course_tyeps";
// import { CourseSectionType } from "./Course_Content/Course_Section_Content";

// type CourseVideoSectType = {
//   isCurriculum: boolean;
//   curricullum: CurricullumType[];
// };

export default function MyCourse_Info() {
  // const { course } = useSelector(
  //   (state: RootStateType) => state.course_details
  // );

  return (
    <main className='flex flex-col gap-2'>
      <MyCourse_Section />
    </main>
  );
}
