import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/FormField";
import { Building2, Mail, Smartphone, Text, User } from "lucide-react";
import { RefObject } from "react";

interface FormCardProps {
  nameRef: RefObject<HTMLInputElement | null>;
  emailRef: RefObject<HTMLInputElement | null>;
  phoneRef: RefObject<HTMLInputElement | null>;
  industryRef: RefObject<HTMLInputElement | null>;
  messageRef: RefObject<HTMLTextAreaElement | null>;
  formCreate: () => void;
  errors: {
    name?: string;
    email?: string;
    phone?: string;
    industry?: string;
    message?: string;
  };
}

export function FormCard({
  nameRef,
  emailRef,
  phoneRef,
  industryRef,
  messageRef,
  formCreate,
  errors,
}: FormCardProps) {
  const maxLengths = {
    name: 50,
    email: 100,
    phone: 11,
    industry: 50,
    message: 400,
  };

  return (
    <Card className="gap-10 border-none bg-transparent p-4 shadow-none">
      <CardHeader>
        <h1 className="bg-gradient-to-br from-white/70 via-white/100 to-white/50 bg-clip-text text-center text-4xl font-semibold tracking-wide text-transparent">
          Solicite seu Orçamento
        </h1>
        <p className="mt-2 text-center tracking-wide text-neutral-400">
          Leve sua presença digital para o próximo nível
        </p>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <FormField
                icon={User}
                placeholder="Digite seu nome"
                type="text"
                ref={nameRef}
                maxLength={maxLengths.name}
              />
              {errors.name && (
                <span className="mt-1 ml-1 text-xs text-neutral-300">
                  {errors.name}
                </span>
              )}
            </div>

            <div>
              <FormField
                icon={Mail}
                placeholder="nome@email.com"
                type="email"
                ref={emailRef}
                maxLength={maxLengths.email}
              />
              {errors.email && (
                <span className="mt-1 ml-1 text-xs text-neutral-300">
                  {errors.email}
                </span>
              )}
            </div>

            <div>
              <FormField
                icon={Smartphone}
                placeholder="(XX) XXXXX-XXXX"
                type="tel"
                ref={phoneRef}
                maxLength={maxLengths.phone}
              />
              {errors.phone && (
                <span className="mt-1 ml-1 text-xs text-neutral-300">
                  {errors.phone}
                </span>
              )}
            </div>

            <div>
              <FormField
                icon={Building2}
                placeholder="Ramo de Atuação"
                ref={industryRef}
                maxLength={maxLengths.industry}
              />
              {errors.industry && (
                <span className="mt-1 ml-1 text-xs text-neutral-300">
                  {errors.industry}
                </span>
              )}
            </div>
          </div>

          <div>
            <FormField
              icon={Text}
              placeholder="Conte-nos sobre seu projeto"
              isTextarea
              ref={messageRef}
              maxLength={maxLengths.message}
            />
            {errors.message && (
              <span className="mt-1 ml-1 text-xs text-neutral-300">
                {errors.message}
              </span>
            )}
          </div>

          <Button
            type="button"
            onClick={formCreate}
            className="bg-base hover:bg-base mt-7 cursor-pointer rounded-xl py-6 font-medium tracking-wide text-white opacity-90 transition-opacity hover:opacity-100"
          >
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
