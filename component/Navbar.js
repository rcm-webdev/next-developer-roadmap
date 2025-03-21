import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/code-braces.svg";
import User from "@/public/user-smile.svg";
import Searchbar from "./Searchbar";
import Button from "./ButtonLogin";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link
          href={"/"}
          className="btn btn-ghost text-xl font-extrabold text-neutral"
        >
          <Image src={Logo} alt="Logo" className="h-10 w-10 text-base-200" />
          <span className="hidden md:block">Developers Roadmap</span>
        </Link>
      </div>
      <div className="flex gap-2">
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
