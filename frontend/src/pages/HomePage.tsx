import { ArrowButton } from "@/components/ArrowButton";
import { Header } from "../layout/Header";
import { SectionHome } from "../layout/SectionHome";
import { SectionAbout } from "../layout/SectionAbout";
import { SectionProcess } from "@/layout/SectionProcess";
import { SectionServices } from "../layout/SectionServices";
import { SectionProjects } from "@/layout/SectionProjects";
import { SectionTestimonials } from "../layout/SectionTestimonials";
import { SectionContact } from "@/layout/SectionContact";
import { Footer } from "../layout/Footer";

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
