import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: Assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        course: Assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    deleteAssignment: (state, { payload: AssignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== AssignmentId
      );
    },

    updateAssignment: (state, { payload: Assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === Assignment._id ? Assignment : m
      ) as any;
    },

    editAssignment: (state, { payload: AssignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === AssignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
  setAssignments,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
