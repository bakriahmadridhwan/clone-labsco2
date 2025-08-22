"use client"

import FormInput from '@/components/common/form-input';
import {
  Form
} from '@/components/ui/form';
import { INITIAL_SUBSCRIPTION_FORM } from "@/constants/auth-constant";
import { SubscribeForm, subscribeSchema } from "@/validations/auth-validation";
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from "react";
// import { useForm } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from './ui/button';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { BadgeCheckIcon } from 'lucide-react';

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Services",
    links: [
      { name: "Web Maintenance", href: "#" },
      { name: "Web & App Development", href: "#" },
      { name: "IT Service", href: "#" },
      { name: "3rd Party AI Solution", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Our Approach", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Our Portfolio", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "+65-8118-1595", href: "https://wa.me/6581181595" },
      { name: "info@co2labs.com", href: "https://labsco2.com/" },
      { name: "100D Pasir Panjang Road", href: "https://maps.app.goo.gl/9jtBTtuRuc4XGttL7" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "FAQ", href: "#" },
  { name: "Terms & Policy", href: "#" },
];

const Footer7 = ({
  logo = {
    url: "#",
    src: "",
    alt: "logo",
    title: "Let’s Grow With CO2 Labs",
  },
  sections = defaultSections,
  description = "Get Exclusive Updates From Us",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 CO2 Labs. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {

  const form = useForm<SubscribeForm>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: INITIAL_SUBSCRIPTION_FORM,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility
  const [formData, setFormData] = useState<SubscribeForm | null>(null); // State for form data

  const onSubmit = form.handleSubmit(async (data) => {
    setFormData(data); // Set the form data
    setIsDialogOpen(true); // Open the dialog
  });

  return (
    <section className="pt-32 bg-[#141516]">
      <div className="px-10 lg:px-28">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="lg:justify-start">
              <h2 className="text-3xl font-black text-white">{logo.title}</h2>
              <h2 className="text-xl font-semibold text-white mt-2">{description}</h2>
            </div>

            <div className=''>
              <Form {...form}>
                <form onSubmit={onSubmit} className="flex">
                  <FormInput
                    form={form}
                    name="email"
                    placeholder="Insert email here"
                    type="email"
                  />
                  <Button type="submit" className='cursor-pointer bg-[#EAB308] text-black font-bold rounded-r-full h-11 hover:bg-yellow-300'>Subscribe</Button>
                </form>
              </Form>

              <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogTrigger />
                <AlertDialogContent className='w-[400px]'>
                  <AlertDialogHeader className='my-6'>
                    <AlertDialogTitle className="text-center text-2xl font-bold">{" "}</AlertDialogTitle>
                    <div className="flex justify-center mt-4">
                      <BadgeCheckIcon className="size-24 text-green-400" />
                    </div>
                    <AlertDialogDescription className="flex flex-col gap-4 text-center text-xl font-bold text-black my-6">
                      Thank you for Subscribing
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-[#153147] text-white mt-4 flex justify-center w-fit mx-auto hover:bg-slate-900 cursor-pointer hover:text-white">Close</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

            </div>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href} className="text-muted-foreground hover:text-white">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href} className='hover:text-white'> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer7 };
