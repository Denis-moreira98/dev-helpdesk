"use client";

import { createContext, ReactNode, useState } from "react";
import { TicketsProps } from "@/utils/ticket.type";
import { CustomerProps } from "@/utils/customer.type";
import { ModalTicket } from "@/components/modal";

interface ModalContextData {
   visible: boolean;
   handleModalVisible: () => void;
   ticket: TicketInfo | undefined;
}

interface TicketInfo {
   ticket: TicketsProps;
   custumer: CustomerProps | null;
}

export const modalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
   const [visible, setVisible] = useState(false);
   const [ticket, setTicket] = useState<TicketInfo>();

   function handleModalVisible() {
      setVisible(!visible);
   }

   return (
      <modalContext.Provider value={{ visible, handleModalVisible, ticket }}>
         {visible && <ModalTicket />}
         {children}
      </modalContext.Provider>
   );
};
