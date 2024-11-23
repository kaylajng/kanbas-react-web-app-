import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Enrollment } from "./enrollmentTypes";
import CourseNavigation from "./Courses/CourseNavigation";
import FacultyAccess from "./Account/FacultyAccess";
import StudentAccess from "./Account/StudentAccess";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => Promise<void>;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [enrollmentMode, setEnrollmentMode] = useState(false);

  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const switchEnrollmentView = () => {
    setEnrollmentMode(!enrollmentMode);
  };

  return (
    <div id="wd-dashboard" className="ms-4">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <FacultyAccess>
        <h5>
          New Course
          <button
            id="wd-add-new-course-click"
            className="btn btn-primary float-end"
            onClick={(e) => {
              e.preventDefault();
              addNewCourse();
            }}
          >
            Add
          </button>
          <button
            id="wd-update-course-click"
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
          >
            Update
          </button>
        </h5>
        <br />

        <input
          id="input-course-name"
          value={course.name}
          className="form-control mb-2"
          onChange={(changeEvent) =>
            setCourse({ ...course, name: changeEvent.target.value })
          }
        />

        <textarea
          id="input-course-description"
          value={course.description}
          className="form-control"
          onChange={(changeEvent) =>
            setCourse({ ...course, description: changeEvent.target.value })
          }
        />
        <hr />
      </FacultyAccess>
      <StudentAccess>
        <button
          className="btn btn-primary float-end"
          onClick={switchEnrollmentView}
        >
          Enrollments
        </button>
      </StudentAccess>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => {
            const isEnrolled = enrollments.some(
              (entry: Enrollment) =>
                entry.user_id === currentUser._id &&
                entry.course_id === course._id
            );

            if (enrollmentMode && !isEnrolled) {
              return (
                <div
                  key={`dashboard-course-${course._id}`}
                  className="wd-dashboard-course col"
                  style={{ width: "300px" }}
                >
                  <div className="card rounded-3 overflow-hidden">
                    <CourseNavigation
                      course={course}
                      enrollmentMode={enrollmentMode}
                      deleteCourse={deleteCourse}
                      setCourse={setCourse}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={`dashboard-course-${course._id}`}
                  className="wd-dashboard-course col"
                  style={{ width: "300px" }}
                >
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <CourseNavigation
                        course={course}
                        enrollmentMode={enrollmentMode}
                        deleteCourse={deleteCourse}
                        setCourse={setCourse}
                      />
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
