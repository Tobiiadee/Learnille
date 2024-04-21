/** @format */

import { createSlice } from "@reduxjs/toolkit";

const courseDetails = {
  course: {
    title: "",
    summary: "",
    price: 0,
    discountedPrice: 0,
    description: {
      description: "",
      whoIsTheCourseFor: [],
      courseRequirements: [],
    },
  },
  courseCurriculum: {
    sectionTitle: [],
    subsection: [
      {
        title: "",
        lectures: [
          {
            title: "",
            timeStamp: new Date().getHours().toLocaleString(),
            file: {
              name: "",
              size: 0,
            },
          },
        ],
      },
    ],
  },
  courseInstructor: {
    name: "",
    picture: "",
    profile: "",
    feild: "",
    company: "",
    course: {
      rating: 0,
      no_of_active_students: 0,
      no_of_created_courses: 0,
    },
  },
};

const course_Details_Slice = createSlice({
  name: "course_details",
  initialState: courseDetails,
  reducers: {
    getCourseDetails: () => {},
  },
});

export const course_details_actions = course_Details_Slice.actions;

export default course_Details_Slice.reducer;
