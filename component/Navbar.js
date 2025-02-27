import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/code-braces.svg";
import Button from "./ButtonLogin";

function Navbar() {
  return (
    <div className="max-w-5xl mx-auto bg-base-100">
      <div className="navbar   ">
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
    </div>
  );
}

export default Navbar;
