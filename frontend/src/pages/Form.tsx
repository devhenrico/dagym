import Background from "../assets/images/bg-orange.png";
import Logo from "../assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FormCard } from "@/components/FormCard";
import { useFormHandler } from "@/hooks/useFormHandler";

export function Form() {
  const navigate = useNavigate();
  const { errors, name, email, phone, industry, message, formCreate } =
    useFormHandler();

  return (
    <section className="flex min-h-screen items-center justify-center bg-[url('./assets/images/bg.png')] bg-cover px-4 py-6">
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-6 rounded-3xl bg-black p-4 shadow-xl md:grid-cols-2 md:p-5">
        <div className="relative h-70 md:h-full">
          <img
            src={Background}
            alt="Fundo Laranja"
            className="h-full w-full rounded-xl object-cover"
          />
          <div className="absolute top-4 left-4">
            <img src={Logo} alt="DaGym Logo" className="h-8 md:h-12" />
          </div>
          <div className="absolute top-4 right-4 z-10">
            <Button
              onClick={() => navigate("/")}
              type="button"
              className="flex cursor-pointer items-center gap-2 rounded-3xl bg-neutral-800/80 px-2 py-3 pl-3 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-colors duration-300 hover:bg-neutral-700/70 md:gap-4 md:py-5 md:pl-4 md:text-sm"
            >
              Voltar ao site
              <div className="bg-base rounded-full p-1 md:p-1.5">
                <ArrowUpRight className="size-3 md:size-4" />
              </div>
            </Button>
          </div>
          <h1 className="absolute inset-x-0 top-[44%] flex items-center justify-center bg-gradient-to-br from-white/70 via-white/100 to-white/50 bg-clip-text px-4 text-center text-2xl font-bold text-transparent md:text-4xl">
            Transforme seu negócio!
          </h1>
          <div className="pointer-events-none absolute right-0 bottom-4 left-0 flex justify-center md:bottom-16">
            <div className="flex items-center gap-2 rounded-full bg-neutral-800/50 px-3 py-1.5 backdrop-blur-sm md:px-4 md:py-2">
              <Lightbulb className="size-3 text-base md:size-4" />
              <p className="text-xs tracking-wide text-white/90 md:text-sm">
                Transforme sua ideia em realidade
              </p>
            </div>
          </div>
        </div>
        <FormCard
          nameRef={name}
          emailRef={email}
          phoneRef={phone}
          industryRef={industry}
          messageRef={message}
          formCreate={formCreate}
          errors={errors}
        />
      </div>
    </section>
  );
}
