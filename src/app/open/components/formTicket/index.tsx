"use client";

import { Input } from "@/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiSearch, FiX } from "react-icons/fi";

const schema = z.object({
   name: z.string().min(1, "O nome do chamado é obrigatório"),
   description: z.string().min(1, "Descreva um pouco sobre seu prob"),
});

type FormData = z.infer<typeof schema>;

export function FormTicket() {
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm<FormData>({
      resolver: zodResolver(schema),
   });

   return (
      <form>
         <label>Nome do cliente</label>
      </form>
   );
}
