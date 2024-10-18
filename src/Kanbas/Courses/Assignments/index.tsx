import * as db from "../../Database";
import { useParams } from "react-router";
import { BsSearch } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  const cid = useParams().cid;
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );
  console.log(assignments);

  return (
    <div id="wd-assignments" className="d-flex flex-column me-4">
      <div className="d-flex align-items-center mb-4">
        <span className="input-group me-5 px-2 ms-4">
          <span className="input-group-text" id="basic-addon1">
            <BsSearch className="fs-5" />
          </span>
          <input
            id="wd-search-assignment"
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </span>

        <button
          id="wd-add-assignment-group"
          className="btn btn-lg btn-secondary dropdown-toggle mx-1"
        >
          + Group
        </button>

        <button
          id="wd-add-assignment"
          className="btn btn-lg btn-danger ms-1 text-nowrap"
        >
          + Assignment
        </button>
      </div>

      <ul id="wd-assignment-list list-group rounded-0">
        <li className="list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title d-flex align-content-center justify-content-between p-3 ps-2 bg-secondary">
            <span>
              <BsGripVertical className="me-2 fs-3" />
              <b className="fs-4">ASSIGNMENTS</b>
            </span>

            <span>
              <i>40% of Total</i>
              <button className="ms-4">+</button>
              <BiDotsVerticalRounded className="mx-2 fs-3" />
            </span>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment) => {
              return (
                <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                  <div className="row">
                    <div className="d-flex col-auto align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <MdAssignment className="me-2 fs-3" />
                    </div>

                    <div className="col d-flex flex-column align-items-start">
                      <a
                        className="wd-assignment-link"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </a>

                      <span>
                        <span className="text-danger fw-bold">
                          Multiple Modules{" "}
                        </span>{" "}
                        | <b>Not available until</b> {assignment.available_date}{" "}
                        at {assignment.available_time} | <b>Due</b>{" "}
                        {assignment.due_by_date} at {assignment.due_by_time} |{" "}
                        {assignment.points} pts
                      </span>
                    </div>

                    <div className="d-flex col-auto align-items-center">
                      <LessonControlButtons />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
