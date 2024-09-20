import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      {/* Course 1 */}
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <img src="/images/class2.png" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5610/Home"
            >
              CS5610 Web Development
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack website development
            </p>
            <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
          </div>
        </div>
        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <img src="/images/class3.png" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5002/Home"
            >
              CS5002 Discrete Structure
            </Link>
            <p className="wd-dashboard-course-title">Discrete Math</p>
            <Link to="/Kanbas/Courses/5002/Home"> Go </Link>
          </div>
        </div>
        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <img src="/images/class4.png" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5200/Home"
            >
              CS5200 Database Management
            </Link>
            <p className="wd-dashboard-course-title">Database Management</p>
            <Link to="/Kanbas/Courses/5200/Home"> Go </Link>
          </div>
        </div>
        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <img src="/images/class5.png" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5004/Home"
            >
              CS5004 Object_Oriented Design
            </Link>
            <p className="wd-dashboard-course-title">Object_Oriented Design</p>
            <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
          </div>
        </div>
        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <img src="/images/class6.png" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5005/Home"
            >
              CS5005 Recitation for OOD
            </Link>
            <p className="wd-dashboard-course-title">Recitation for OOD</p>
            <Link to="/Kanbas/Courses/5005/Home"> Go </Link>
          </div>
        </div>
        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <img src="/images/class7.png" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5000/Home"
            >
              CS5000 Align Math Foundation
            </Link>
            <p className="wd-dashboard-course-title">Align Math Foundation</p>
            <Link to="/Kanbas/Courses/5000/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
