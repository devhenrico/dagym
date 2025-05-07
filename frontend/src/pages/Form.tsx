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
    <section className="h-screen bg-[url('./assets/images/bg.png')] bg-cover">
      <div className="grid w-full max-w-7xl grid-cols-2 items-center gap-6 rounded-3xl bg-black p-5 shadow-xl">
        <div className="relative">
          <img
            src={Background}
            alt="Fundo Laranja"
            className="h-full rounded-xl object-cover"
          />
          <div className="absolute top-4 left-4">
            <img src={Logo} alt="" className="h-12" />
          </div>
          <div className="absolute top-4 right-4 z-10">
            <Button
              onClick={() => navigate("/")}
              type="button"
              className="flex cursor-pointer items-center gap-4 rounded-3xl bg-neutral-800/80 px-2 py-5 pl-4 font-medium tracking-wide text-white backdrop-blur-sm transition-colors duration-300 hover:bg-neutral-700/70"
            >
              Voltar ao site
              <div className="bg-base rounded-full p-1.5">
                <ArrowUpRight className="size-4" />
              </div>
            </Button>
          </div>
          <h1 className="absolute inset-x-0 top-[44%] flex justify-center bg-gradient-to-br from-white/70 via-white/100 to-white/50 bg-clip-text text-4xl font-bold text-transparent">
            Transforme seu negócio!
          </h1>
          <div className="pointer-events-none absolute right-0 bottom-16 left-0 flex justify-center">
            <div className="flex items-center gap-2 rounded-full bg-neutral-800/50 px-4 py-2 backdrop-blur-sm">
              <Lightbulb className="size-4 text-base" />
              <p className="tracking-wide text-white/90">
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
