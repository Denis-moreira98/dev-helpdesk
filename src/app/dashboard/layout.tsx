import { HeaderDashboard } from "./components/headerDashboard";

export default function DashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <HeaderDashboard />
         {children}
      </>
   );
}
