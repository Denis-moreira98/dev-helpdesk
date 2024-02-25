"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

const schema = z.object({
   name: z.string().min(1, "O campo nome é obrigatório"),
   email: z
      .string()
      .email("Digite um email válido.")
      .min(1, "O email é obrigatório."),
   phone: z
      .string()
      .max(11, "O telefone deve contém no máximo 11 digitos")
      .refine(
         (value) => {
            return (
               /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
               /^\d{2}\s\d{9}$/.test(value) ||
               /^\d{11}$/.test(value)
            );
         },
         {
            message: "O número de telefone deve estar (DD) 991820452",
         }
      ),
   address: z.string(),
});

type FormData = z.infer<typeof schema>;

export function NewCustomerForm({ userId }: { userId: string }) {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>({
      resolver: zodResolver(schema),
   });

   const router = useRouter();

   async function handleRegister(data: FormData) {
      try {
         await api.post("/api/customer", {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            userId: userId,
         });
         router.refresh();
         router.replace("/dashboard/customer");
      } catch (err) {
         console.error(err);
      }
   }

   return (
      <form className="mt-2" onSubmit={handleSubmit(handleRegister)}>
         <label className="mb-1 text-lg font-medium">Nome Completo</label>
         <Input
            type="text"
            name="name"
            placeholder="Digite o nome completo"
            error={errors.name?.message}
            register={register}
         />

         <section className="flex gap-2 my-2 flex-col sm:flex-row">
            <div className="flex-1">
               <label className="mb-1 text-lg font-medium">Telefone</label>
               <Input
                  type="number"
                  name="phone"
                  placeholder="Exemplo (DD) 991820452"
                  error={errors.phone?.message}
                  register={register}
               />
            </div>
            <div className="flex-1">
               <label className="mb-1 text-lg font-medium">Email</label>
               <Input
                  type="email"
                  name="email"
                  placeholder="Digite seu email..."
                  error={errors.email?.message}
                  register={register}
               />
            </div>
         </section>
         <label className="mb-1 text-lg font-medium">Endereço</label>
         <Input
            type="text"
            name="address"
            placeholder="Digite o endereço do cliente..."
            error={errors.address?.message}
            register={register}
         />

         <button
            className="w-full bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold "
            type="submit"
         >
            Cadastrar
         </button>
      </form>
   );
}
