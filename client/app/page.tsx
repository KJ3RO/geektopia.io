import { FloatingNavbar } from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import MagicButton from "@/components/MagicButton";
import { Mission } from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import { FaLocationArrow } from "react-icons/fa";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className="h-36"></div>
        <FloatingNavbar />
        <Hero />
        <p className="tracking-widest text-xs text-center text-slate-100 max-w-90 pt-6">
          Welcome to a new world of creativity and power.
        </p>
        <a href="https://discord.gg/Qe8V88VE">
          <MagicButton title="Join Our Community" icon={<FaLocationArrow />} position="right" />
        </a>
        <Sponsors />
        <Mission />
        <Testimonials />
      </main>
    </div>
  );
}
