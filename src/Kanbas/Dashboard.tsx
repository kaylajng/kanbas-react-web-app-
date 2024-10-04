import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="ms-4">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* CS 1234 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary ">
                    <AiOutlineHome />{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* CS 5610 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/class2.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS 5610
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Web Development
                  </p>
                  <button className="btn btn-primary">
                    {" "}
                    <AiOutlineHome />{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* CS 5002 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/class3.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS 5002
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Discrete Structure
                  </p>
                  <button className="btn btn-primary">
                    {" "}
                    <AiOutlineHome />{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* 5200 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/class4.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS 5200
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Database Management
                  </p>
                  <button className="btn btn-primary">
                    {" "}
                    <AiOutlineHome />{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* CS 5004 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/class5.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS 5004
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object Oriented Design
                  </p>
                  <button className="btn btn-primary">
                    {" "}
                    <AiOutlineHome />{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* 5008 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/class6.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS 5008
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Structures and Algorithms
                  </p>
                  <button className="btn btn-primary">
                    {" "}
                    <AiOutlineHome />{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* 5000 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/class7.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS 5000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Align Math Foundation
                  </p>
                  <button className="btn btn-primary">
                    {" "}
                    <AiOutlineHome />{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
