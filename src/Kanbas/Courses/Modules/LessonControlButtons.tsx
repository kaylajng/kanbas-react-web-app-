import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import FacultyAccess from "../../Account/FacultyAccess";

export default function LessonControlButtons() {
  return (
    <FacultyAccess>
      <div className="float-end">
        <GreenCheckmark />
        <IoEllipsisVertical className="fs-4" />
      </div>
    </FacultyAccess>
  );
}
