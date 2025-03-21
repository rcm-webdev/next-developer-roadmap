import Image from "next/image";
import Zombie from "@/public/ZombieingDoodle.svg";
import Roadmap from "@/public/roadmap.svg";
import Link from "next/link";
import Button from "./ButtonLogin";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={Zombie}
          alt="Zombie"
          className="hidden md:block w-3/4"
          loading="lazy"
        />
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-5xl font-bold text-neutral">
              Developers Roadmap
            </h1>
            <Image src={Roadmap} alt="Roadmap" className="w-14 h-14" />
          </div>
          <div className="flex flex-col gap-2 py-6">
            <p>
              Follow the 100Devs roadmap set out for you to go from zero to
              employed. There is a lot of work ahead, but trust the process.
              Remember that you owe you.
            </p>
            <p className="badge badge-accent font-semibold ">
              We are community taught.
            </p>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            <button className="btn btn-primary">
              <Link href={"/"}>Get Roadmap</Link>
            </button>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
