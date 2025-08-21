import { CodeXmlIcon, GemIcon, SlidersHorizontalIcon, WorkflowIcon } from "lucide-react";
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
}

interface Blog9Props {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const Blog9 = ({
  heading = "Our Portfolio",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "",
  posts = [
    {
      id: "portfolio-1",
      title: "AOTC Cosmetics",
      summary:
        "Keep your website running smoothly and securely with our comprehensive maintenance portfolios. Prevent downtime and ensure optimal performance with regular updates and monitoring.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "#",
      image: "/labsco2/portfolio.png",
      icon: <SlidersHorizontalIcon className="size-8 text-[#153147]" />,
    },
    {
      id: "portfolio-2",
      title: "Nosh kitchen Website",
      summary:
        "Transform your online presence with our custom website design solutions. From stunning visuals to seamless user experiences, we create websites that engage and convert.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "",
      image: "/labsco2/portfolio-1.png",
      icon: <CodeXmlIcon className="size-8 text-[#153147]" />,
    },
    {
      id: "portfolio-3",
      title: "Michelah Event Organizer Singapore",
      summary:
        "Experience peace of mind with our reliable IT support portfolios. From troubleshooting to server maintenance, we ensure your systems run smoothly and efficiently.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "",
      image: "/labsco2/portfolio-2.png",
      icon: <WorkflowIcon className="size-8 text-[#153147]" />,
    },
    {
      id: "portfolio-4",
      title: "Joywaltzstudio Academy",
      summary:
        "Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provide tailored solutions to enhance your operations.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "",
      image: "/labsco2/portfolio-3.png",
      icon: <GemIcon className="size-8 text-[#153147]" />,
    },
    {
      id: "portfolio-5",
      title: "Octopay Payment",
      summary:
        "Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provide tailored solutions to enhance your operations.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "",
      image: "/labsco2/portfolio-4.png",
      icon: <GemIcon className="size-8 text-[#153147]" />,
    },
  ],
}: Blog9Props) => {
  return (
    <section className="py-32 bg-[#153147]">
      <div className="container mx-auto flex flex-col gap-2 lg:px-28">
        <div className="text-left text-white">
          <h2 className={`mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl flex justify-start ${orbitron.className}`}>
            {heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {posts.map((post) => (
            <div key={post.id}>
              <div className="aspect-square w-full bg-white rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  objectFit="cover"
                  className="rounded-lg cursor-pointer"
                  width={500}
                  height={500}
                />
              </div>
              <h2 className="text-white font-bold text-[18px] mt-3">{post.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog9 };
