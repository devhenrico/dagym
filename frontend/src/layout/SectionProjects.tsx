import { SectionBadge } from "@/components/SectionBadge";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionTitle } from "@/components/SectionTitle";
import { VideosGrid } from "@/components/VideosGrid";
import { videos } from "@/data/videos";
import { Activity } from "lucide-react";

export function SectionProjects() {
  return (
    <section
      id="projects"
      className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:gap-6">
        <SectionBadge icon={Activity}>Performance em movimento</SectionBadge>
        <SectionTitle>
          Projetos em <span className="gradient-text">destaque</span>
        </SectionTitle>
        <SectionDescription>
          <span className="text-white/90">Experiências digitais</span>{" "}
          construídas para performance, inovação e impacto.
        </SectionDescription>
        <VideosGrid videos={videos} />
      </div>
    </section>
  );
}
