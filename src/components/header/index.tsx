"use client";

import Link from "next/link";
import { FiLogOut, FiLoader, FiLock, FiLogIn } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function Header() {
   const { status, data } = useSession();

   async function handleLogin() {
      await signIn();
   }
   async function handleLogOut() {
      await signOut();
   }

   return (
      <header className="bg-blue-500 w-full flex items-center px-2 py-4  h-20 shadow-md">
         <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/">
               <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
                  <span className="text-white mr-1">DEV</span>HELPDESK
               </h1>
            </Link>

            {status === "loading" && (
               <button className="animate-spin">
                  <FiLoader size={26} color="#fff" />
               </button>
            )}

            {status === "unauthenticated" && (
               <button
                  className="flex flex-row items-center gap-1 font-semibold text-white border rounded border-gray-300 p-1 hover:scale-105 transition-all duration-300"
                  onClick={handleLogin}
               >
                  Login
                  <FiLogIn size={20} color="#fff" />
               </button>
            )}

            {status === "authenticated" && (
               <div className="flex flex-row items-center gap-4">
                  <Link
                     href="/dashboard"
                     className="flex flex-row items-center gap-2"
                  >
                     <p className="font-medium text-white">
                        <span>Olá, </span>
                        {data.user.name?.split(" ")[0]}
                     </p>
                     <Image
                        src={`${data.user?.image}`}
                        alt={`Avatar ${data.user?.name}`}
                        width={37}
                        height={37}
                        className="rounded-full"
                     />
                  </Link>
                  <button
                     className="flex flex-row items-center gap-1 font-semibold text-white border rounded border-gray-300 p-1 hover:scale-105 transition-all duration-300"
                     onClick={handleLogOut}
                  >
                     Sair
                     <FiLogOut size={20} color="#fff" />
                  </button>
               </div>
            )}
         </div>
      </header>
   );
}
