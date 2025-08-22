"use client";

import { CodeXmlIcon, DotIcon, Gem, MenuIcon, SlidersHorizontalIcon, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import {
  Card,
  CardContent
} from "@/components/ui/card";

const Navbar5 = () => {
  const features = [
    {
      icon: <SlidersHorizontalIcon className="size-6 text-red-600" />,
      bg: "bg-red-100",
      title: "Website Maintenance",
      description: "Keep your website running smoothly and securely.",
      href: "#",
    },
    {
      icon: <CodeXmlIcon className="size-6 text-yellow-600" />,
      bg: "bg-yellow-100",
      title: "Website & App Development",
      description: "Transform your online presence with our custom platform design solutions.",
      href: "#",
    },
    {
      icon: <Workflow className="size-6 text-emerald-600" />,
      bg: "bg-emerald-100",
      title: "IT Support",
      description: "Experience peace of mind with our reliable IT support services.",
      href: "#",
    },
    {
      icon: <Gem className="size-6 text-pink-600" />,
      bg: "bg-pink-100",
      title: "3rd Party AI Solution",
      description: "Leverage our expertise to find the best third-party AI services for your business.",
      href: "#",
    },
  ];

  return (
    <section className="py-4 text-[#153147]">
      <div className="container">
        <nav className="flex items-center justify-between fixed top-0 left-0 w-full bg-white shadow-md z-[999] px-10 lg:px-28 py-2">
          <a
            href="https://labsco2.com/"
            className="flex items-center gap-2"
          >
            <Image
              src="/labsco2/logo.png"
              className="max-h-16"
              alt="labsco2"
              width={64}
              height={64}
            />
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer font-bold text-[16px]">Our Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-2 p-3">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div key={feature.title} className="flex justify-between items-center gap-4">
                          <Card className={feature.bg}>
                            <CardContent>
                              <span>{feature.icon}</span>
                            </CardContent>
                          </Card>
                          <div>
                            <p className="mb-1 font-semibold text-foreground text-[16px]">
                              {feature.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>

                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-[16px]">About Us</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#portfolio"
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-[16px]">Portfolio</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={navigationMenuTriggerStyle()}
                >
                  <span className="text-[16px]">Contact</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            {/* <Button variant="outline">Sign in</Button> */}
            <Button className="bg-[#153147] text-[16px]">Get Started Today!</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="max-h-screen overflow-auto z-[9999]">
              <SheetHeader>
                <SheetTitle>
                  {""}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <a href="#" className="font-medium">
                    Our Services
                  </a>
                  <span className="flex flex-col">
                    <a href="#">
                      <Button variant="ghost" size="sm">
                        <DotIcon className="size-6" /> <span className="underline cursor-pointer">Website Maintenance</span>
                      </Button>
                    </a>
                    <a href="#">
                      <Button variant="ghost" size="sm">
                        <DotIcon className="size-6" /> <span className="underline cursor-pointer">Website & App Development</span>
                      </Button>
                    </a>
                    <a href="#">
                      <Button variant="ghost" size="sm">
                        <DotIcon className="size-6" /> <span className="underline cursor-pointer">IT Support</span>
                      </Button>
                    </a>
                    <a href="#">
                      <Button variant="ghost" size="sm">
                        <DotIcon className="size-6" /> <span className="underline cursor-pointer">3rd Party AI Solution</span>
                      </Button>
                    </a>
                  </span>
                  <a href="#" className="font-medium">
                    About Us
                  </a>
                  <a href="#" className="font-medium">
                    Portfolio
                  </a>
                  <a href="#" className="font-medium">
                    Contact Us
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  {/* <Button variant="outline">Sign in</Button> */}
                  <Button className="bg-[#153147] text-[16px]">Get Started Today!</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
