import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/accountReducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentsReducer from "./Account/enrollmentReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,
  },
});
export default store;
