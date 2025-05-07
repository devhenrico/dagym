import { ArrowButton } from "@/components/ArrowButton";
import { Header } from "../layout/Header";
import { SectionHome } from "../layout/SectionHome";
import { SectionAbout } from "../layout/SectionAbout";
import { SectionServices } from "../layout/SectionServices";
import { SectionTestimonials } from "../layout/SectionTestimonials";
import { Footer } from "../layout/Footer";
import { SectionContact } from "@/layout/SectionContact";
import { SectionProjects } from "@/layout/SectionProjects";
import { SectionProcess } from "@/layout/SectionProcess";

export function HomePage() {
  return (
    <>
      <ArrowButton />
      <Header />
      <SectionHome />
      <SectionAbout />
      <SectionProcess />
      <SectionServices />
      <SectionProjects />
      <SectionTestimonials />
      <SectionContact />
      <Footer />
    </>
  );
}
