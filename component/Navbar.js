import Image from "next/image";
import Logo from "@/public/code-braces.svg";
import User from "@/public/user-smile.svg";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-extrabold text-neutral">
          <Image src={Logo} alt="Logo" className="h-10 w-10 text-base-200" />
          <span className="hidden md:block">Developers Roadmap</span>
        </a>
      </div>
      <div className="flex gap-2">
        {/* Search function */}
        <Searchbar />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image src={User} alt="user-avatar" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
