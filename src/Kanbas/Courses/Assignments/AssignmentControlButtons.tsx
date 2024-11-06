import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import FacultyAccess from "../../Account/FacultyAccess";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  const confirmDelete = (assignmentId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this assignment?"
    );
    if (confirmed) {
      deleteAssignment(assignmentId);
    }
  };

  return (
    <FacultyAccess>
      <div className="float-end">
        <FaTrash
          className="text-danger me-2 mb-1"
          onClick={(e) => confirmDelete(assignmentId)}
        />
        <GreenCheckmark />
        <IoEllipsisVertical className="fs-4" />
      </div>
    </FacultyAccess>
  );
}
