import { enrollments } from "../Database";
import { createSlice } from "@reduxjs/toolkit";
import { Enrollment } from "../enrollmentTypes";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, action) => {
      const { userId, courseId } = action.payload;
      if (
        !state.enrollments.some(
          (enrollment: any) =>
            enrollment.user === userId && enrollment.course === courseId
        )
      ) {
        state.enrollments.push({
          _id: Date.now().toString(),
          user: userId,
          course: courseId,
        });
      }
    },
    removeEnrollment: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment: any) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export default enrollmentsSlice.reducer;
export const { addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
