import { useSelector } from "react-redux";

export default function FacultyAccess({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === "FACULTY") {
    return children;
  }
}
