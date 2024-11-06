import { useDispatch } from "react-redux";
import FacultyAccess from "../Account/FacultyAccess";
import { Enrollment } from "../enrollmentTypes";
import { useSelector } from "react-redux";
import { addEnrollment, removeEnrollment } from "../Account/enrollmentReducer";

export default function CourseNavigation({
  course,
  showEnrollmentMode,
  deleteCourse,
  setCourse,
}: {
  course: any;
  showEnrollmentMode: boolean;
  deleteCourse: (course: any) => void;
  setCourse: (course: any) => void;
}) {
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const getCourseButtons = (courseId: string) => {
    if (!showEnrollmentMode) {
      return <button className="btn btn-primary ">Go </button>;
    }

    const currCourseEnrolled = enrollments.some(
      (entry: Enrollment) =>
        entry.user_id === currentUser._id && entry.course_id === courseId
    );

    if (currCourseEnrolled) {
      return (
        <span>
          <button className="btn btn-primary">Go </button>
          <button
            className="btn btn-danger me-1 float-end"
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                removeEnrollment({
                  user_id: currentUser._id,
                  course_id: courseId,
                })
              );
            }}
          >
            Unenroll
          </button>
        </span>
      );
    } else {
      return (
        <button
          className="btn btn-success me-1 mb-3 float-end"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              addEnrollment({ user_id: currentUser._id, course_id: courseId })
            );
          }}
        >
          Enroll
        </button>
      );
    }
  };

  return (
    <div id={`course-card-${course._id}`}>
      <img src="/images/reactjs.jpg" width="100%" height={160} />
      <div className="card-body">
        <h5 className="wd-dashboard-course-title card-title fw-bold">
          {course.name}
        </h5>
        <p
          className="wd-dashboard-course-title card-text overflow-y-hidden"
          style={{ maxHeight: 100 }}
        >
          {course.description}
        </p>

        {getCourseButtons(course._id)}

        <FacultyAccess>
          <button
            id="wd-delete-course-click"
            className="btn btn-danger float-end"
            onClick={(clickEvent) => {
              clickEvent.preventDefault();
              deleteCourse(course._id);
            }}
          >
            Delete
          </button>

          <button
            id="id-wd-edit-course-click"
            className="btn btn-warning float-end me-2"
            onClick={(event) => {
              event.preventDefault();
              setCourse(course);
            }}
          >
            Edit
          </button>
        </FacultyAccess>
      </div>
    </div>
  );
}
