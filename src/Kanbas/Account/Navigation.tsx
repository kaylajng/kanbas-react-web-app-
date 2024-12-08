import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  // Get the current user from Redux state
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // If the user is logged in, shoe Profile; if not, show Signin and Signup
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  // Get the current URL path to highlight the active link
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    // Maps over each item in the links array and create a Link component for each one
    <div className="wd list-group fs-5 rounded-0 me-2">
      {links.map((navLink) => (
        <Link
          to={`/Kanbas/Account/${navLink}`}
          className={`list-group-item border border-0 ${
            pathname.includes(navLink) ? `active` : `text-danger`
          }`}
          key={`acount-nav-${navLink}`}
        >
          {navLink}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${active("Users")}`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
