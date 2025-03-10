import Image from "next/image";
import Zombie from "@/public/ZombieingDoodle.svg";
import Roadmap from "@/public/roadmap.svg";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={Zombie} alt="Zombie" className="w-3/4" />
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-5xl font-bold text-neutral">
              Developers Roadmap
            </h1>
            <Image src={Roadmap} alt="Roadmap" className="w-14 h-14" />
          </div>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Roadmap</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
