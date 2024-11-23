import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, updateAssignment } from "./reducer";
import { useEffect, useState } from "react";
import FacultyAccess from "../../Account/FacultyAccess";
import StudentAccess from "../../Account/StudentAccess";
import { Assignment, canBeAssignment } from "./assignment_type";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid, aid, mode } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [assignmentEdits, setAssignmentEdits] = useState<any>();
  const [currentAssignment, setCurrentAssignment] = useState<Assignment>();

  const fetchAssignment = async () => {
    if (typeof cid === "string" && typeof aid === "string") {
      const serverAssignment = await assignmentsClient.getAssignment(aid, cid);
      setCurrentAssignment(serverAssignment);
    } else {
      throw new Error("unable to find assignment!");
    }
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const saveAssignment = async () => {
    const editedAssignment = { ...currentAssignment, ...assignmentEdits };

    if (canBeAssignment(editedAssignment)) {
      await assignmentsClient.replaceAssignment(
        aid as string,
        editedAssignment
      );
      dispatch(updateAssignment(editedAssignment));
      return true;
    } else {
      return false;
    }
  };

  const cancelAssignment = async () => {
    if (mode === "new") {
      dispatch(deleteAssignment(aid));
      await assignmentsClient.deleteAssignment(aid as string);
    }
  };

  return (
    <div id="wd-assignments-editor" className="mx-3">
      {currentAssignment ? (
        <div id="wd-assignment-undefined-barrier">
          {assignmentNameEditor(
            currentAssignment,
            assignmentEdits,
            setAssignmentEdits,
            currentUser
          )}
          {assignmentDescriptionEditor(
            currentAssignment,
            assignmentEdits,
            setAssignmentEdits,
            currentUser
          )}

          <div className="container d-flex flex-column justify-content-end">
            {pointsEditor(
              currentAssignment,
              assignmentEdits,
              setAssignmentEdits,
              currentUser
            )}
            {assignmentGroupEditor(currentAssignment, currentUser)}
            {gradeDisplayChooser(currentAssignment, currentUser)}
            {submissionTypeChooser(currentAssignment, currentUser)}

            <div className="row my-4">
              <div className="col d-flex align-items-center justify-content-end">
                <label className="form-label">
                  {" "}
                  <h5>Assign</h5>{" "}
                </label>
              </div>

              <div className="col ms-4 me-2 form-control d-flex flex-column align-items-start ">
                <div className="container">
                  <div className="row">
                    <label className="form-label">
                      <b>Assign To</b>
                      <input
                        className="form-control"
                        id="wd-assign-to"
                        defaultValue="Everyone"
                        readOnly={currentUser.role === "STUDENT"}
                      />
                    </label>
                  </div>

                  {assignmentDateEditors(
                    currentAssignment,
                    assignmentEdits,
                    setAssignmentEdits,
                    currentUser
                  )}
                </div>
              </div>
            </div>

            <div className="row my-5">
              <hr />
              <div className="d-flex justify-content-end">
                <StudentAccess>
                  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg mx-2"
                    >
                      Back
                    </button>
                  </Link>
                </StudentAccess>
                <FacultyAccess>
                  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg mx-2"
                      onClick={(e) => {
                        cancelAssignment();
                      }}
                    >
                      Cancel
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-danger btn-large btn-lg mx-2"
                    onClick={(e) => {
                      e.preventDefault();
                      saveAssignment().then((value) => {
                        if (value === false) {
                          window.alert(
                            "Missing required values to save an assignment!"
                          );
                        } else {
                          navigate(`/Kanbas/Courses/${cid}/Assignments`);
                        }
                      });
                    }}
                  >
                    Save
                  </button>
                </FacultyAccess>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-danger fs-3">unable to find assignment!</p>
      )}
    </div>
  );
}

function assignmentNameEditor(
  assignment: any,
  assignmentEdits: any,
  setEditedAssignment: any,
  currentUser: any
) {
  const isStudent = currentUser.role === "STUDENT";
  return (
    <div className="my-4 me-3">
      <label htmlFor="wd-name" className="form-label">
        <h5>Assignment Name</h5>
      </label>

      <input
        id="wd-name"
        type="text"
        className="form-control form-control-lg"
        placeholder="Assignment Name"
        defaultValue={assignment.title}
        onChange={(e) => {
          const editedAssignment = {
            ...assignmentEdits,
            title: e.target.value,
          };
          setEditedAssignment(editedAssignment);
        }}
        readOnly={isStudent}
      />
    </div>
  );
}

function assignmentDescriptionEditor(
  assignment: any,
  assignmentEdits: any,
  setEditedAssignment: any,
  currentUser: any
) {
  const isStudent = currentUser.role === "STUDENT";

  return (
    <div className="mt-3 mb-5 me-3">
      <label htmlFor="wd-description" className="form-label">
        <h5>Description</h5>
      </label>
      <textarea
        id="wd-description"
        className="form-control form-control-lg"
        cols={30}
        rows={10}
        defaultValue={assignment.description}
        onChange={(e) => {
          const editedAssignment = {
            ...assignmentEdits,
            description: e.target.value,
          };
          setEditedAssignment(editedAssignment);
        }}
        readOnly={isStudent}
      />
    </div>
  );
}

function pointsEditor(
  assignment: any,
  assignmentEdits: any,
  setEditedAssignment: any,
  currentUser: any
) {
  const isStudent = currentUser.role === "STUDENT";
  return (
    <div className="row my-4">
      <div className="col d-flex align-items-center justify-content-end">
        <label htmlFor="wd-points" className="form-label">
          <h5>Points</h5>
        </label>
      </div>

      <div className="col align-items-center d-flex align-items-center justify-content-end">
        <input
          id="wd-points"
          type="number"
          placeholder="100"
          min="0"
          defaultValue={assignment.points}
          className="form-control"
          onChange={(e) => {
            const editedAssignment = {
              ...assignmentEdits,
              points: e.target.value,
            };
            setEditedAssignment(editedAssignment);
          }}
          readOnly={isStudent}
        />
      </div>
    </div>
  );
}

function assignmentGroupEditor(assignment: any, currentUser: any) {
  const isStudent = currentUser.role === "STUDENT";

  const groupOptions = ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECTS"];

  return (
    <div className="row my-4">
      <div className="col d-flex align-items-center justify-content-end">
        <label htmlFor="wd-group" className="form-label">
          <h5>Assignment Group</h5>
        </label>
      </div>

      <div className="col align-items-center d-flex align-items-center">
        <select id="wd-group" className="form-select">
          {groupOptions.map((group) => {
            if (assignment.group === group) {
              return (
                <option selected value={group} disabled={isStudent} key={group}>
                  {group}
                </option>
              );
            } else {
              return (
                <option value={group} disabled={isStudent} key={group}>
                  {group}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
}

function gradeDisplayChooser(assignment: any, currentUser: any) {
  const isStudent = currentUser.role === "STUDENT";
  const gradeDisplayOptions = ["Percentage", "Letter Grade"];

  return (
    <div className="row my-4">
      <div className="col d-flex align-items-center justify-content-end">
        <label htmlFor="wd-display-group-as" className="form-label">
          <h5>Display Grade As</h5>
        </label>
      </div>

      <div className="col align-items-center d-flex align-items-center">
        <select id="wd-display-group-as" className="form-select">
          {gradeDisplayOptions.map((display) => {
            if (assignment.grade_display === display) {
              return (
                <option selected value={display} disabled={isStudent}>
                  {display}
                </option>
              );
            } else {
              return (
                <option value={display} disabled={isStudent}>
                  {display}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
}

function submissionTypeChooser(assignment: any, currentUser: any) {
  const isStudent = currentUser.role === "STUDENT";
  const submissionTypeOptions = ["Online", "Physical"];
  const entryOptions = [
    "Text Entry",
    "Website URL",
    "Media Recordings",
    "Student Annotation",
    "File Uploads",
  ];

  return (
    <div className="row my-4">
      <div className="col d-flex align-items-center justify-content-end">
        <label className="form-label">
          <h5>Submission Type</h5>
        </label>
      </div>

      <div className="col ms-3 me-2 form-control d-flex flex-column align-items-start ">
        <select id="wd-submission-type" className="form-select mt-2 mb-4">
          {submissionTypeOptions.map((submissionType) => {
            if (assignment.submission_type === submissionType) {
              return (
                <option selected value={submissionType} disabled={isStudent}>
                  {submissionType}
                </option>
              );
            } else {
              return (
                <option value={submissionType} disabled={isStudent}>
                  {submissionType}
                </option>
              );
            }
          })}
        </select>

        <b>Online Entry Options</b>
        {entryOptionsEditor(entryOptions, assignment, currentUser)}
      </div>
    </div>
  );
}

function entryOptionsEditor(
  entryOptions: string[],
  assignment: any,
  currentUser: any
) {
  const isStudent = currentUser.role === "STUDENT";

  return (
    <form className="form-check">
      {entryOptions.map((entry) => {
        if (
          assignment.entry_options === null ||
          assignment.entry_options === undefined ||
          !assignment.entry_options.includes(entry)
        ) {
          return (
            <div>
              <label className="form-check-label my-2">
                <input
                  name="wd-entry-options"
                  type="checkbox"
                  id="wd-text-entry"
                  className="form-check-input"
                  disabled={isStudent}
                />
                {entry}
              </label>
              <br />
            </div>
          );
        } else {
          return (
            <div>
              <label className="form-check-label my-2">
                <input
                  defaultChecked={true}
                  name="wd-entry-options"
                  type="checkbox"
                  id="wd-text-entry"
                  className="form-check-input"
                  disabled={isStudent}
                />
                {entry}
              </label>
              <br />
            </div>
          );
        }
      })}
    </form>
  );
}

function assignmentDateEditors(
  assignment: any,
  assignmentEdits: any,
  setEditedAssignment: any,
  currentUser: any
) {
  const isStudent = currentUser.role === "STUDENT";

  return (
    <span>
      <div className="row">
        <label className="form-label">
          <b>Due</b>
          <input
            className="form-control"
            id="wd-due-date"
            type="date"
            defaultValue={assignment.due_by_date}
            onChange={(e) => {
              const editedAssignment = {
                ...assignmentEdits,
                due_by_date: e.target.value,
              };
              setEditedAssignment(editedAssignment);
            }}
            readOnly={isStudent}
          />
        </label>
      </div>

      <div className="row text-nowrap">
        <div className="col">
          <label className="form-label d-flex flex-column">
            <b>Available From:</b>
            <input
              id="wd-available-from"
              className="form-control"
              type="date"
              defaultValue={assignment.available_date}
              onChange={(e) => {
                const editedAssignment = {
                  ...assignmentEdits,
                  available_date: e.target.value,
                };
                setEditedAssignment(editedAssignment);
              }}
              readOnly={isStudent}
            />
          </label>
        </div>

        <div className="col">
          <label className="form-label d-flex flex-column">
            <b>Until:</b>
            <input
              id="wd-available-until"
              className="form-control"
              type="date"
              defaultValue={assignment.available_until}
              onChange={(e) => {
                const editedAssignment = {
                  ...assignmentEdits,
                  available_until: e.target.value,
                };
                setEditedAssignment(editedAssignment);
              }}
              readOnly={isStudent}
            />
          </label>
        </div>
      </div>
    </span>
  );
}
