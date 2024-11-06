import { enrollments } from "../Database";
import { createSlice } from "@reduxjs/toolkit";
import { Enrollment } from "../enrollmentTypes";

const initialState = {
  enrollments: enrollments.map((enroll) => {
    return { user_id: enroll.user, course_id: enroll.course } as Enrollment;
  }),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment = enrollment as Enrollment;
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    removeEnrollment: (state, { payload: enrollment }) => {
      const deleteEnrollment = enrollment as Enrollment;

      // Filter out the enrollment we want to remove based on user_id and course_id
      state.enrollments = state.enrollments.filter((enroll) => {
        const same_user = enroll.user_id === deleteEnrollment.user_id;
        const same_course = enroll.course_id === deleteEnrollment.course_id;

        // Only keep enrollments that don't match both user_id and course_id
        if (same_user && !same_course) {
          return true; // Keep this enrollment
        } else {
          return false; // Remove this enrollment
        }
      });
    },
  },
});

export default enrollmentsSlice.reducer;
export const { addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
