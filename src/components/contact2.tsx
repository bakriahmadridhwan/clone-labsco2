"use client"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MailIcon, PhoneIcon, PinIcon } from "lucide-react";
import { Orbitron } from "next/font/google";

import {
  Form
} from '@/components/ui/form';
import { INITIAL_CONTACT_FORM } from "@/constants/auth-constant";
import { ContactForm, contactSchema } from "@/validations/contact-validation";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ContactInput from "./common/contact-input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react";

const orbitron = Orbitron({ subsets: ["latin"] });

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "https://wa.me/6581181595",
  email = "info@co2labs.com",
  web = { label: "label", url: "#" },
}: Contact2Props) => {

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: INITIAL_CONTACT_FORM,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility
  const [formData, setFormData] = useState<ContactForm | null>(null); // State for form data

  const onSubmit = form.handleSubmit(async (data) => {
    setFormData(data); // Set the form data
    setIsDialogOpen(true); // Open the dialog
  });

  return (
    <section className="py-32" id="contact">
      <div className="container mx-auto flex flex-col gap-2 px-10 lg:px-28">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <h2 className={`mt-5 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl text-black ${orbitron.className}`}>
            Contact Us
          </h2>
          <span className="flex items-center gap-12 text-black">
            <a href="https://maps.app.goo.gl/DrSpbxmjJ1sBDV387">
              <PinIcon size={25} />
            </a>
            <a href={`mailto:${email}`}>
              <MailIcon size={25} />
            </a>
            <a href={`tel:${phone}`}>
              <PhoneIcon size={25} />
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-32 py-4">
          <div className="flex flex-col gap-6 rounded-lg border p-10 w-full shadow-sm">
            <h3 className="text-xl font-semibold">Hi there, how can we help?</h3>

            <Form {...form}>
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <ContactInput
                  form={form}
                  name="name"
                  placeholder="Insert your name here"
                  type="name"
                />
                <ContactInput
                  form={form}
                  name="email"
                  placeholder="Insert your email here"
                  type="email"
                />
                <ContactInput
                  form={form}
                  name="message"
                  placeholder="Insert your message here"
                  type="textarea"
                />
                <h3 className="text-xl font-semibold">Where Did You Hear About Us?</h3>
                <div className="grid w-full gap-1.5">
                  <RadioGroup defaultValue="option-one" className="flex flex-row flex-wrap items-center">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="linkedin" id="linkedin" className="cursor-pointer" />
                      <Label htmlFor="linkedin" className="cursor-pointer">Linkedin</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="instagram" id="instagram" />
                      <Label htmlFor="instagram">Instagram</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="jobads" id="jobads" />
                      <Label htmlFor="jobads">Job Ads</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="event" id="event" />
                      <Label htmlFor="event">Event and Seminars</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-fit bg-[#153147] cursor-pointer hover:bg-slate-600">Send</Button>
              </form>
            </Form>

            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <AlertDialogTrigger />
              <AlertDialogContent>
                <AlertDialogHeader className="py-4">
                  <AlertDialogTitle className="text-center text-2xl font-bold">Thank you for asking</AlertDialogTitle>
                  <div className="flex justify-center mt-4 bg-[#D0D6DA] p-3 rounded-lg mx-auto aspect-square w-fit h-fit">
                    <MailIcon className="size-8 text-[#153147]" />
                  </div>
                  <AlertDialogDescription className="flex flex-col gap-4">
                    <span className="text-center text-xl text-accent-foreground font-medium"><span>Hi {" "}</span><span className="font-bold">{formData?.name},</span></span>
                    <span className="text-center text-xl text-accent-foreground font-medium mx-5">Thank you for leaving your contact details with CO2 Labs! We all be in touch soon with more information. If you have any questions, feel free to reach out to us! Best regards.</span>

                    <span className="text-center text-xl text-accent-foreground font-medium mt-2">The CO2 Collective</span>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction className="bg-[#153147] text-white mt-4 flex justify-center w-fit mx-auto hover:bg-slate-700 cursor-pointer">Okay</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <AlertDialogTrigger />
              <AlertDialogContent className="w-[300px]">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center">
                    Konfirmasi Pendaftaran
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-center my-4">
                    Apakah Anda yakin ingin mendaftar dengan data ini?
                    <div className="mt-2">
                      ok
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex gap-2">
                  <AlertDialogCancel
                    onClick={() => setIsDialogOpen(false)}
                    className="cursor-pointer flex-1 py-2 text-center"
                  >
                    Batal
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      // Handle the form submission logic here, e.g., send data to an API
                      console.log("Form submitted:", formData);
                      setIsDialogOpen(false); // Close the dialog after submission
                    }}
                    className="cursor-pointer flex-1 py-2 text-center bg-green-500 text-white hover:bg-green-600"
                  >
                    Ya, Kirim
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog> */}

            {/* <div className="grid w-full items-center gap-1.5">
              <Input type="text" id="name" placeholder="Your Name" autoComplete="off" className="h-10" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Input type="email" id="email" placeholder="Your Email" autoComplete="off" className="h-10" />
            </div>
            <div className="grid w-full gap-1.5">
              <Textarea placeholder="Ask Our About Services" id="message" />
            </div> */}

          </div>
          <div className="w-full flex justify-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.4142722416323!2d103.795968!3d1.276258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sen!2sus!4v1755783421549!5m2!1sen!2sus"
              className="border-0 rounded-xl w-full h-full"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact2 };
