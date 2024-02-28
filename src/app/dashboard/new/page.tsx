import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function NewTicket() {
   const session = await getServerSession(authOptions);

   if (!session || !session.user) {
      redirect("/");
   }

   return (
      <Container>
         <main className="mt-9 mb-2">
            <div className="flex items-center gap-3">
               <Link
                  href="/dashboard"
                  className="text-white px-4 py-1 rounded bg-gray-900"
               >
                  Voltar
               </Link>
               <h1 className="text-3xl font-bold">Novo chamado</h1>
            </div>
            <form className="flex flex-col mt-6">
               <label className="mb-1 font-medium text-lg">
                  Nome do chamado
               </label>
               <input
                  className="w-full border-2 rounded-md px-2 mb-2 h-11"
                  type="text"
                  placeholder="Digite o nome do chamado"
                  required
               />
               <label className="mb-1 font-medium text-lg">
                  Descreva o problema
               </label>
               <textarea
                  className="w-full border-2 rounded-md px-2 mb-2 h-24 resize-none"
                  placeholder="Descreva o problema"
                  required
               ></textarea>
               <label className="mb-1 font-medium text-lg">
                  Selecione o cliente
               </label>
               <select className="w-full border-2 rounded-md px-2 mb-2 h-11 resize-none bg-white">
                  <option value="cliente1">Cliente 1</option>
               </select>
            </form>
         </main>
      </Container>
   );
}
