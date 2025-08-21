"use client"

import {
  ChevronDownIcon,
  GitPullRequest,
  RadioTower,
  SquareKanban
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Orbitron } from "next/font/google";
import { useState } from "react";

const orbitron = Orbitron({ subsets: ["latin"] });

interface Reason {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  bg: string;
  point1: string;
  point2: string;
  point3?: string;
  point4?: string;
}

interface Feature43Props {
  heading?: string;
  subheading?: string;
  reasons?: Reason[];
}

const Feature43 = ({
  heading = "ACE",
  subheading = "Methodology for Strategic Consulting",
  reasons = [
    {
      title: "Assessment",
      subtitle: "& Insight Gathering",
      description:
        "Our process begins with an initial consultation to gather insights into your business needs and challenges. We work closely with your team to understand your objectives and gather all necessary information.",
      icon: <GitPullRequest className="size-6" />,
      bg: "bg-[#EDEAE3]",
      point1: "Initial consultation meetings",
      point2: "Gathering business and technical requirements",
      point3: "Conducting stakeholder interviews",
      point4: "Understanding long-term business goals"

    },
    {
      title: "Customization",
      subtitle: "& Strategic Planning",
      description:
        "We then develop a strategic plan and design tailored solutions that address your specific needs. This involves detailed planning, resource allocation, and design of bespoke solutions that align with your goals.",
      icon: <SquareKanban className="size-6" />,
      bg: "bg-[#ADB8BA]",
      point1: "Strategic planning sessions",
      point2: "Solution design and prototyping",
      point3: "Resource and timeline planning",
      point4: "Risk assessment and mitigation planning"

    },
    {
      title: "Execution",
      subtitle: "& Lifecycle Management",
      description:
        "We then develop a strategic plan and design tailored solutions that address your specific needs. This involves detailed planning, resource allocation, and design of bespoke solutions that align with your goals.",
      icon: <RadioTower className="size-6" />,
      bg: "bg-[#EDEAE3]",
      point1: "Implementation of the strategic plan",
      point2: "Solution deployment and integration",
      point3: "Lifecycle management and support",
      point4: "Continuous performance evaluation and optimization"

    },
  ],
}: Feature43Props) => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32">
      <div className="">
        <div className="mb-10 md:mb-20 text-center">
          <h2 className={`mb-2 text-center text-5xl font-bold lg:text-5xl ${orbitron.className}`}>
            {heading}
          </h2>
          <span className="text-2xl font-bold lg:text-2xl flex justify-center">{subheading}</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col w-full"
              onMouseEnter={() => setOpenIndex(i)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Collapsible open={openIndex === i} className={reason.bg}>
                <CollapsibleTrigger className="cursor-pointer w-full flex justify-between items-center px-8 pt-8 pb-5">
                  <div className="flex flex-col items-start">
                    <span className="text-3xl font-black">{reason.title}</span>
                    <span className="font-medium text-lg">{reason.subtitle}</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-8 pb-5">
                  <span className="text-accent-foreground font-medium">{reason.description}</span>
                  <ul className="list-disc pl-5 mt-4 leading-loose text-accent-foreground font-medium">
                    <li>{reason.point1}</li>
                    <li>{reason.point2}</li>
                    {reason.point3 && <li>{reason.point3}</li>}
                    {reason.point4 && <li>{reason.point4}</li>}
                  </ul>
                </CollapsibleContent>
                <div className="flex justify-center pb-4">
                  <ChevronDownIcon className={`${openIndex === i ? "rotate-180" : ""} transition-all duration-700 ease-in-out size-10 opacity-45`} />
                </div>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export { Feature43 };
