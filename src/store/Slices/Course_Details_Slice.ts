/** @format */

import { CourseInforType } from "@/lib/types/course_tyeps";
import { createSlice } from "@reduxjs/toolkit";

const course_Details = createSlice({
  name: "course_details",
  initialState: {} as CourseInforType,
  reducers: {
    getCourseDetails: (state, actions) => {
      state.course = actions.payload;
    },
  },
});

export const course_details_actions = course_Details.actions;

export default course_Details.reducer;
