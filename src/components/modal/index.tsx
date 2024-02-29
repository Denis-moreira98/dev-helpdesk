"use client";
import { useContext } from "react";
import { modalContext } from "@/providers/modal";

export function ModalTicket() {
   const { handleModalVisible } = useContext(modalContext);

   return (
      <section className="absolute bg-gray-900/80 w-full min-h-screen">
         <div className="absolute inset-0 flex items-center justify-center ">
            <div className="bg-white shadow-lg w-4/5 md:w-1/2 max-w-2xl p-3 rounded">
               <div className="flex items-center justify-between mb-4">
                  <h1 className="font-bold text-lg md:text-2xl">
                     Detalhes do chamado
                  </h1>
                  <button
                     onClick={handleModalVisible}
                     className="bg-red-500 p-1 px-2 text-white rounded"
                  >
                     Fechar
                  </button>
               </div>

               <div className="flex flex-wrap gap-1 mb-2">
                  <h2 className="font-bold">Nome:</h2>
                  <p>Problema no pc</p>
               </div>

               <div className="flex flex-wrap flex-col gap-1 mb-2">
                  <h2 className="font-bold">Descrição:</h2>
                  <p>teste aqui a descrição eijednjdnjndnsjnsdnjnojnasddas</p>
               </div>

               <div className="w-full border-b-[1.5px] my-4"></div>
               <h1 className="font-bold text-lg mb-4">Detalhes do cliente</h1>

               <div className="flex flex-wrap gap-1 mb-2">
                  <h2 className="font-bold">Nome:</h2>
                  <p>Mercado</p>
               </div>

               <div className="flex flex-wrap gap-1 mb-2">
                  <h2 className="font-bold">Telefone:</h2>
                  <p>(81) 988445522</p>
               </div>

               <div className="flex flex-wrap gap-1 mb-2">
                  <h2 className="font-bold">Endereço:</h2>
                  <p>Rua teste antonio</p>
               </div>
            </div>
         </div>
      </section>
   );
}
