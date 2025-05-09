import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";
import { z } from "zod";

const prisma = new PrismaClient();

export function router() {
  const router = express.Router();

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

  const formQuerySchema = z
    .object({
      name: z.string().optional(),
      email: z.string().email().optional(),
    })
    .optional();

  router.post("/users", async (req, res) => {
    try {
      const validatedData = formSchema.parse(req.body);
      const user = await prisma.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          industry: validatedData.industry,
          message: validatedData.message,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map((err) => err.message).join(", ");
        return res.status(400).json({
          message: "Validation error",
          errors: errorMessages,
        });
      }
      res.status(500).json({ message: "Server error. Try again" });
    }
  });

  router.get("/users", async (req, res) => {
    try {
      const validatedQuery = formQuerySchema.parse(req.query);
      let users = [];
      if (validatedQuery && (validatedQuery.name || validatedQuery.email)) {
        users = await prisma.user.findMany({
          where: {
            name: validatedQuery.name,
            email: validatedQuery.email,
          },
        });
      } else {
        users = await prisma.user.findMany();
      }
      res.status(200).json({ message: "List users", users });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map((err) => err.message).join(", ");
        return res.status(400).json({
          message: "Validation error",
          errors: errorMessages,
        });
      }
      res.status(500).json({ message: "Server error. Try again" });
    }
  });

  router.delete("/users/:id", async (req, res) => {
    try {
      await prisma.user.delete({
        where: {
          id: req.params.id,
        },
      });

      res.status(200).json({ message: "User deleted" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map((err) => err.message).join(", ");
        return res.status(400).json({
          message: "Validation error",
          errors: errorMessages,
        });
      }
      res.status(500).json({ message: "Server error. Try again" });
    }
  });

  return router;
}
