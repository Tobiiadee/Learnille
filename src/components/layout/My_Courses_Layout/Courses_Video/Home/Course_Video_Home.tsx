/** @format */

import { useParams } from "react-router-dom";

import Course_Description from "../Course_Video_Pages/Description/Course_Description";
import Course_Lesson_Note from "../Course_Video_Pages/Lesson_Notes/Course_Lesson_Note";
import Course_Attached_File from "../Course_Video_Pages/Attached_File/Course_Attached_File";
import Course_Comments from "../Course_Video_Pages/Comments/Course_Comments";

export default function Course_Video_Home() {
  const { play_course_id } = useParams();

  let courseVideoPage;

  switch (play_course_id) {
    case "lesson_note":
      courseVideoPage = <Course_Lesson_Note />;
      break;

    case "attached_file":
      courseVideoPage = <Course_Attached_File />;
      break;

    case "comments":
      courseVideoPage = <Course_Comments/>;
      break;
    default:
      courseVideoPage = <Course_Description />;
      break;
  }

  return <main>{courseVideoPage}</main>;
}
