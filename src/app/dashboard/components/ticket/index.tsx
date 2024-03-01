"use client";

import { api } from "@/lib/api";
import { CustomerProps } from "@/utils/customer.type";
import { TicketsProps } from "@/utils/ticket.type";
import { FiCheckSquare, FiFile } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { modalContext } from "@/providers/modal";
import { useContext } from "react";

interface TicketItemProps {
   ticket: TicketsProps;
   customer: CustomerProps | null;
}

export function TicketItem({ customer, ticket }: TicketItemProps) {
   const { handleModalVisible, handleDetailTicket } = useContext(modalContext);
   const router = useRouter();

   async function handleChangeStatus() {
      const response = await api.patch("/api/ticket", {
         id: ticket.id,
      });

      router.refresh();
      try {
      } catch (err) {
         console.log(err);
      }
   }

   function handleOpenModal() {
      handleModalVisible();
      handleDetailTicket({
         customer: customer,
         ticket: ticket,
      });
   }

   return (
      <>
         <tr className="border-b-2 border-b-slate-300 h-16 last:border-b-0 bg-slate-100 hover:bg-gray-200 duration-300">
            <td className="text-left pl-1">{customer?.name}</td>
            <td className="text-left hidden sm:table-cell">
               {ticket.created_at?.toLocaleDateString("pt-br")}
            </td>
            <td className="text-left">
               <span className="bg-green-500 px-2 py-1 rounded">
                  {ticket.status}
               </span>
            </td>
            <td className="text-left">
               <button className="mr-2" onClick={handleChangeStatus}>
                  <FiCheckSquare size={24} color="#131313" />
               </button>
               <button onClick={handleOpenModal}>
                  <FiFile size={24} color="#3b82f6" />
               </button>
            </td>
         </tr>
      </>
   );
}
