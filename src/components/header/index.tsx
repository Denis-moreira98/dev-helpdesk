import Link from "next/link";
import { FiUser, FiLogOut } from "react-icons/fi";

export function Header() {
   return (
      <header className="bg-blue-500 w-full flex items-center px-2 py-4  h-20 shadow-md">
         <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/">
               <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
                  <span className="text-white mr-1">DEV</span>HELPDESK
               </h1>
            </Link>

            <div className="flex items-baseline gap-4">
               <Link href="/dashboard">
                  <FiUser size={26} color="#fff" />
               </Link>
               <button>
                  <FiLogOut size={26} color="#fff" />
               </button>
            </div>
         </div>
      </header>
   );
}
