import { Container } from "@/components/container";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { TicketItem } from "./components/ticket";
import prismaClient from "@/lib/prisma";

export default async function Dashboard() {
   const session = await getServerSession(authOptions);

   if (!session || !session.user) {
      redirect("/");
   }

   const tickets = await prismaClient.ticket.findMany({
      where: {
         userId: session.user.id,
         status: "ABERTO",
      },
      include: {
         customer: true,
      },
   });

   return (
      <Container>
         <main className="mt-9 mb-2">
            <div className="flex items-center justify-between ">
               <h1 className="text-3xl font-bold">Chamados</h1>
               <Link
                  href="/dashboard/new"
                  className="bg-blue-500 px-4 py-1 rounded text-white"
               >
                  Novo Chamado
               </Link>
            </div>
            <table className="min-w-full my-2">
               <thead>
                  <tr>
                     <th className="font-semibold text-left pl-1">CLIENTE</th>
                     <th className="font-semibold  text-left hidden sm:block">
                        DATA CADASTRO
                     </th>
                     <th className="font-semibold  text-left">STATUS</th>
                     <th className="font-semibold  text-left">#</th>
                  </tr>
               </thead>
               <tbody>
                  {tickets.map((ticket) => (
                     <TicketItem
                        customer={ticket.customer}
                        ticket={ticket}
                        key={ticket.id}
                     />
                  ))}
               </tbody>
            </table>
         </main>
      </Container>
   );
}
