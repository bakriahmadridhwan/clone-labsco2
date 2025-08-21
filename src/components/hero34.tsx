
import Image from "next/image";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const Hero34 = () => {
  return (
    <section id="about">
      <div className="container mx-auto">
        <div className="bg-muted grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-end lg:text-right">
            <h1 className={`my-6 text-pretty text-3xl font-bold lg:text-5xl ${orbitron.className}`}>
              About Us
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              At CO2 Labs, we strive to provide simple yet powerful software solutions and expert consultation to help your business thrive in the digital world.
            </p>
          </div>
          <Image
            src="/labsco2/about-img.png"
            alt="about us labsco2"
            className=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export { Hero34 };
