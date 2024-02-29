"use client";

import { createContext, ReactNode, useState } from "react";
import { TicketsProps } from "@/utils/ticket.type";
import { CustomerProps } from "@/utils/customer.type";
import { ModalTicket } from "@/components/modal";

interface ModalContextData {
   visible: boolean;
   handleModalVisible: () => void;
}

export const modalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
   const [visible, setVisible] = useState(false);

   function handleModalVisible() {
      setVisible(!visible);
   }

   return (
      <modalContext.Provider value={{ visible, handleModalVisible }}>
         {visible && <ModalTicket />}
         {children}
      </modalContext.Provider>
   );
};
