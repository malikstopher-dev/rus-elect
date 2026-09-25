import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Residential from "@/components/sections/Residential";
import Commercial from "@/components/sections/Commercial";
import Process from "@/components/sections/Process";
import CustomerExperience from "@/components/sections/CustomerExperience";
import ServiceVehicle from "@/components/sections/ServiceVehicle";
import Reviews from "@/components/sections/Reviews";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import Compliance from "@/components/sections/Compliance";
import QuoteForm from "@/components/sections/QuoteForm";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "RUS Electrical | Electrical Work Done the Proper Way",
  description:
    "Professional electrical services in Sandton and Johannesburg North. Residential, commercial, and industrial electrical work done right the first time.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Residential />
      <Commercial />
      <Process />
      <CustomerExperience />
      <ServiceVehicle />
      <Reviews />
      <ProjectsPreview />
      <Compliance />
      <QuoteForm />
      <ContactCTA />
    </>
  );
}
