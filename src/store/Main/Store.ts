/** @format */

import { configureStore } from "@reduxjs/toolkit";
import course_detailsReducer from "../Slices/Course_Details_Slice";

export type RootStateType = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    course_details: course_detailsReducer,
  },
});

export default store;
