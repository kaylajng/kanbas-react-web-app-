import { useSelector } from "react-redux";

export default function StudentAccess({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === "STUDENT") {
    return children;
  }
}
