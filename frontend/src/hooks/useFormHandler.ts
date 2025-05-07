import { useState, useRef } from "react";
import { z } from "zod";
import { api } from "../services/api";
import { Toast } from "@/components/Toast";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Preencha o seu nome" }),
  email: z
    .string()
    .email({ message: "Insira um e-mail válido" })
    .nonempty({ message: "Preencha o seu e-mail" }),
  phone: z
    .string()
    .regex(/^\d{11}$/, {
      message: "Insira um número de telefone válido",
    })
    .nonempty({ message: "Preencha o seu número de telefone" }),
  industry: z.string().nonempty({ message: "Preencha o ramo de atuação" }),
  message: z.string().nonempty({ message: "Preencha a mensagem" }),
});

export function useFormHandler() {
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    industry?: string;
    message?: string;
  }>({});

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const industry = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  async function formCreate() {
    const formData = {
      name: name.current?.value,
      email: email.current?.value,
      phone: phone.current?.value,
      industry: industry.current?.value,
      message: message.current?.value,
    };

    try {
      formSchema.parse(formData);

      await api().post("/users", formData);

      Toast();

      if (name.current) name.current.value = "";
      if (email.current) email.current.value = "";
      if (phone.current) phone.current.value = "";
      if (industry.current) industry.current.value = "";
      if (message.current) message.current.value = "";
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: typeof errors = {};
        error.errors.forEach((err) => {
          const fieldName = err.path[0] as keyof typeof errors;
          fieldErrors[fieldName] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        console.error("Erro inesperado:", error);
        alert("Ocorreu um erro inesperado");
      }
    }
  }

  return {
    errors,
    name,
    email,
    phone,
    industry,
    message,
    formCreate,
  };
}
