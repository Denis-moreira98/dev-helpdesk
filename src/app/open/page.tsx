"use client";
import { Input } from "@/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiSearch, FiX } from "react-icons/fi";
import { useState } from "react";
import { FormTicket } from "./components/formTicket";
import { api } from "@/lib/api";

const schema = z.object({
   email: z
      .string()
      .email("Digite o email do cliente para localizar")
      .min(1, "O campo email é obrigtório"),
});

type FormData = z.infer<typeof schema>;

interface CustomerDataInfo {
   id: string;
   name: string;
}

export default function OpenTicket() {
   const [customer, setCustomer] = useState<CustomerDataInfo | null>(null);

   const {
      register,
      handleSubmit,
      setValue,
      setError,
      formState: { errors },
   } = useForm<FormData>({
      resolver: zodResolver(schema),
   });

   function handleClearCustomer() {
      setCustomer(null);
      setValue("email", "");
   }

   async function handleSearchCustomer(data: FormData) {
      const response = await api.get("/api/customer", {
         params: {
            email: data.email,
         },
      });

      if (response.data == null) {
         setError("email", {
            type: "custon",
            message: "Ops, Cliente não foi encontrado!",
         });
         return;
      }

      setCustomer({
         id: response.data.id,
         name: response.data.name,
      });
   }

   return (
      <div className="w-full max-w-2xl mx-auto px-2">
         <h1 className="font-bold text-3xl mt-24">Abrir chamado</h1>

         <main className="flex flex-col mt-4 mb-2">
            {customer ? (
               <div className="bg-slate-200 py-6 px-4 rounded border-2 flex items-center justify-between">
                  <p className="text-lg">
                     <strong>Cliente Selecionado:</strong>
                     {customer.name}
                  </p>
                  <button
                     onClick={handleClearCustomer}
                     className="bg-red-600 h-11 px-2 flex items-center justify-center rounded"
                  >
                     <FiX size={24} color="white" />
                  </button>
               </div>
            ) : (
               <form
                  onSubmit={handleSubmit(handleSearchCustomer)}
                  className="bg-slate-200 py-6 px-2 rounded border-2"
               >
                  <div className="flex flex-col gap-3">
                     <Input
                        name="email"
                        type="text"
                        placeholder="Digite o email do cliente..."
                        error={errors.email?.message}
                        register={register}
                     />
                     <button
                        type="submit"
                        className="bg-blue-500 flex flex-row gap-3 px-2 h-11 items-center justify-center text-white font-bold rounded"
                     >
                        Procurar clientes
                        <FiSearch size={24} color="white" />
                     </button>
                  </div>
               </form>
            )}
            {customer !== null && <FormTicket />}
         </main>
      </div>
   );
}
