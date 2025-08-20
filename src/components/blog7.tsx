import { CodeXmlIcon, GemIcon, SlidersHorizontalIcon, WorkflowIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Orbitron } from "next/font/google";

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

interface Blog7Props {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Our Services",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "",
  posts = [
    {
      id: "service-1",
      title: "Website Maintenance",
      summary:
        "Keep your website running smoothly and securely with our comprehensive maintenance services. Prevent downtime and ensure optimal performance with regular updates and monitoring.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "#",
      image: "",
      icon: <SlidersHorizontalIcon className="size-8 text-[#153147]" />,
    },
    {
      id: "service-2",
      title: "Website & App Development",
      summary:
        "Transform your online presence with our custom website design solutions. From stunning visuals to seamless user experiences, we create websites that engage and convert.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "",
      image: "",
      icon: <CodeXmlIcon className="size-8 text-[#153147]" />,
    },
    {
      id: "service-3",
      title: "IT Support",
      summary:
        "Experience peace of mind with our reliable IT support services. From troubleshooting to server maintenance, we ensure your systems run smoothly and efficiently.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "",
      image: "",
      icon: <WorkflowIcon className="size-8 text-[#153147]" />,
    },
    {
      id: "service-4",
      title: "3rd Party AI Solution",
      summary:
        "Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provide tailored solutions to enhance your operations.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "",
      image: "",
      icon: <GemIcon className="size-8 text-[#153147]" />,
    },
  ],
}: Blog7Props) => {
  return (
    <section className="py-32 bg-[#153147]">
      <div className="container mx-auto flex flex-col gap-2 lg:px-16">
        <div className="text-left text-white">
          <h2 className={`mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl flex justify-start ${orbitron.className}`}>
            {heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0 text-center"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <span className="flex justify-center items-center h-full w-full">{post.icon}</span>
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {post.summary.length > 50
                    ? post.summary.slice(0, 100) + "..."
                    : post.summary}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground underline font-bold"
                >
                  View More
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
