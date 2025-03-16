import { auth } from "../auth";
import Link from "next/link";
import Image from "next/image";

async function Button() {
  const session = await auth();

  const getInitials = (name) => {
    if (!name) return "NA"; // Default value if name is not available
    return name
      .split(" ") // Split the name into parts
      .slice(0, 2) // Take the first two parts of the name
      .map((part) => part[0].toUpperCase()) // Get the first letter of each part and capitalize it
      .join(""); // Join the letters back together
  };

  if (session && session.user) {
    const initials = getInitials(session.user.name);
    return (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          Welcome back - {initials || "Friend"}
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-semibold"
        >
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/api/auth/signout"}>Sign out</Link>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <Link href="/api/auth/signin" className="btn btn-accent">
      <span>Login</span>
    </Link>
  );
}

export default Button;
