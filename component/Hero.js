import Image from "next/image";
import Zombie from "@/public/ZombieingDoodle.svg";
import Roadmap from "@/public/roadmap.svg";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={Zombie} alt="Zombie" className="hidden md:block w-3/4" />
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-5xl font-bold text-neutral">
              Developers Roadmap
            </h1>
            <Image src={Roadmap} alt="Roadmap" className="w-14 h-14" />
          </div>
          <p className="py-6">
            Follow the 100Devs roadmap set out for you to go from zero to
            employed. There is a lot of work ahead, but trust the process.
            Remember that you owe you. <br />
            <span className="badge badge-accent font-semibold">
              We are community taught.
            </span>
          </p>
          <div className="flex gap-2 justify-center md:justify-start">
            <button className="btn btn-primary">Get Roadmap</button>
            <button className="btn btn-accent">Track Progress</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
