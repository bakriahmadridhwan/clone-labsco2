
import { Button } from "@/components/ui/button";

import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });

interface Hero1Props {
  badge?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  heading = "Where Code Meets",
  subheading = "Creativity",
  description = "Harnessing the power of our Coding Collective to build solutions for your business needs.",
  buttons = {
    primary: {
      text: "Get a free consult",
      url: "https://wa.me/6581181595",
    },
  },
}: Hero1Props) => {
  return (
    <section className="py-32 h-screen flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col-reverse gap-10 lg:flex-row justify-between lg:items-center px-10 lg:px-0">

          <div className="flex flex-col text-left lg:items-start lg:text-left">
            <h1 className={`text-pretty text-3xl font-bold lg:text-5xl ${orbitron.className}`}>
              {heading}
            </h1>
            <h1 className={`my-6 text-pretty text-3xl font-bold lg:text-5xl ${orbitron.className}`}>
              <span className="bg-[#153147] text-white "><span className="opacity-0">..</span>{subheading}<span className="opacity-0">..</span></span>
            </h1>
            <p className="text-accent-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-fit lg:w-full sm:w-auto bg-[#153147]">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
            </div>
          </div>
          <div className="">
            <div className="relative flex lg:justify-end">
              <Image
                src="/labsco2/heroimg.png"
                alt="labsco2"
                className="z-20 w-64 lg:w-96 rounded-xl"
                width={500}
                height={500}
              />
            </div>
            <Image
              src="/labsco2/backdrop.png"
              alt="backdrop labsco2"
              className="absolute w-64 lg:w-96 h-fit top-25 lg:top-1/4 right-0 z-10"
              width={500}
              height={500}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export { Hero1 };
