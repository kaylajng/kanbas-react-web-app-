import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";

export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 me-2"
    >
      {links.map((linkName) => (
        <Link
          id="wd-course-home-link"
          to={`/Kanbas/Courses/${cid}/${linkName}`}
          className={`list-group-item border border-0 ${
            pathname.includes(linkName) ? `active` : `text-danger`
          }`}
        >
          {linkName}
        </Link>
      ))}
    </div>
  );
}
