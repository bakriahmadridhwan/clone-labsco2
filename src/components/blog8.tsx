import { CodeXmlIcon, SlidersHorizontalIcon, WorkflowIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";

import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  icon: React.ReactNode;
  position?: string;
}

interface Blog8Props {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const Blog8 = ({
  heading = "Our Team",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "",
  posts = [
    {
      id: "team-1",
      title: "Jay Chen",
      position: "CEO",
      summary:
        "Jay began his career in the banking and finance sector, where he honed his skills and developed a deep understanding of the industry. Leveraging this foundation, he expanded into HR operations and outsourcing, successfully growing his businesses by delivering exceptional service to renowned international brands like Huawei, Coca-Cola, and GlaxoSmithKline. CO2 Labs provides a solutions based approach to champion human resource and outsourcing through strategic consultation and meticulously planned placements.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "#",
      image: "/labsco2/profile1.jpeg",
      icon: <SlidersHorizontalIcon className="size-8 text-[#153147]" />,
    },
    {
      id: "team-2",
      title: "Alune",
      position: "Development Project Manager",
      summary:
        "With a background in IT software development, quality testing and web design, she brings a deep understanding of the technical and strategic aspects of project management. Known for her meticulous planning, effective communication, and ability to navigate challenges, she has consistently delivered high-quality software solutions on time and within budget. Alune excels at fostering collaboration across cross-functional teams, ensuring that projects align with client objectives and business goals. Her dedication to excellence and passion for innovation make her a driving force behind the success of every project she leads.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "",
      image: "/labsco2/profile2.jpeg",
      icon: <CodeXmlIcon className="size-8 text-[#153147]" />,
    },
    {
      id: "team-3",
      title: "Ron",
      position: "Business Development Lead",
      summary:
        "With a strong background in business development for finance, logistics and real estate industries, Ron has successfully led initiatives that have expanded market reach and increased revenue for both emerging and established companies. Known for his ability to identify new opportunities and forge lasting relationships, Ron excels in creating tailored solutions that meet client needs and align with business goals through thoughtful solutioning.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "",
      image: "/labsco2/profile3.jpeg",
      icon: <WorkflowIcon className="size-8 text-[#153147]" />,
    },
  ],
}: Blog8Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col gap-2 lg:px-28">
        <div className="text-left text-white">
          <h2 className={`mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl flex justify-start text-black ${orbitron.className}`}>
            {heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0 text-center"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="flex justify-center items-center size-48 object-cover rounded-full my-4"
                  width={500}
                  height={500}
                />
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <div className="flex flex-col">
                    {post.title}
                    <span className="mt-2 text-[16px] text-muted-foreground">
                      {post.position}
                    </span>
                  </div>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-accent-foreground">
                  {post.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog8 };
