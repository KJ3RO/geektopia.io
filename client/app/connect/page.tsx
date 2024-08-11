import { FloatingNavbar } from "@/components/FloatingNavbar";
import { Form } from "@/components/Form";
import { Team } from "@/components/Team";
import React from "react";

const Contact = () => {
  return (
    <div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className="h-36"></div>
        <FloatingNavbar />
        <div className="flex justify-center relative my-20 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mt-4">Our Team</h1>
        </div>
        <Team />
        <div className="flex justify-center relative my-20 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mt-4">Message Us</h1>
        </div>
        <Form />
      </main>
    </div>
  );
};

export default Contact;
