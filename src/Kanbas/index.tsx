import { Route, Routes, Navigate } from "react-router";
import Account from "./Account/Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import React, { useState } from "react";
import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const addNewCourse = () => {
    const timestamp = new Date().getTime().toString();

    const newCourse = {
      ...course,
      _id: timestamp,
    };

    setCourses([...courses, { ...course, ...newCourse }]);

    return timestamp;
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((curr_course) => {
        if (curr_course._id === course._id) {
          return course;
        } else {
          return curr_course;
        }
      })
    );
  };

  return (
    <div id="wd-kanbas">
      <div className="d-none d-lg-block">
        <KanbasNavigation />
      </div>

      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route path="/Calendar" element={<h1>TODO:Calendar</h1>} />
          <Route path="/Inbox" element={<h1>TODO:Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
