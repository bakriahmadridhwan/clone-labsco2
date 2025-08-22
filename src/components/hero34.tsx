
import Image from "next/image";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const Hero34 = () => {
  return (
    <section id="about">
      <div className="container lg:mx-auto">
        <div className="flex lg:flex-row flex-col gap-10 lg:px-28">
          <div className="flex flex-col items-center pt-16 px-16 text-center lg:items-end lg:text-right">
            <h1 className={`my-6 text-pretty text-3xl font-bold lg:text-5xl ${orbitron.className}`}>
              About Us
            </h1>
            <p className="text-accent-foreground font-medium mb-8 max-w-xl text-sm lg:text-xl">
              At CO2 Labs, we strive to provide simple yet powerful software solutions and expert consultation to help your business thrive in the digital world.
            </p>
            <svg
              className="w-full"
              height="81"
              viewBox="0 0 710 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 71C105.403 30.6415 216.971 18.3204 319.353 25.5889C340.732 27.1067 361.503 31.7555 382.443 36.2074C415.148 43.1605 446.712 48.5625 480.309 48.2568C556.077 47.5674 627.671 31.4361 700 10"
                stroke="#EDEAE3"
                strokeWidth={20}
                strokeLinecap="round" // Menambahkan stroke-linecap
              ></path>
            </svg>

          </div>
          <Image
            src="/labsco2/about-img.png"
            alt="about us labsco2"
            className="scale-[80%] lg:scale-[100%] rounded-xl lg:px-0 w-full lg:w-3/4"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export { Hero34 };
