import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

//Rota para deletar clientes
export async function DELETE(request: Request) {
   const session = await getServerSession(authOptions);

   if (!session || !session.user) {
      return NextResponse.json({ error: "Not authorized" }, { status: 401 });
   }

   const { searchParams } = new URL(request.url);
   const userId = searchParams.get("id");

   if (!userId) {
      return NextResponse.json(
         { error: "Failded delete customer" },
         { status: 400 }
      );
   }

   const findTicket = await prismaClient.ticket.findFirst({
      where: {
         customerId: userId,
      },
   });

   if (findTicket) {
      return NextResponse.json(
         { error: "Failded delete customer" },
         { status: 400 }
      );
   }

   try {
      await prismaClient.customer.delete({
         where: {
            id: userId as string,
         },
      });
      return NextResponse.json({ message: "Cliente deletado com sucesso!" });
   } catch (err) {
      console.log(err);
      return NextResponse.json(
         { error: "Failded delete customer" },
         { status: 400 }
      );
   }
}

//Rota para cadastrar clientes
export async function POST(request: Request) {
   const session = await getServerSession(authOptions);

   if (!session || !session.user) {
      return NextResponse.json({ error: "Not authorized" }, { status: 401 });
   }

   const { name, email, phone, address, userId } = await request.json();

   try {
      await prismaClient.customer.create({
         data: {
            name,
            email,
            phone,
            address: address ? address : "",
            userId: userId,
         },
      });

      return NextResponse.json({ message: "Cliente cadastrado!" });
   } catch (err) {
      return NextResponse.json({ error: "Not authorized" }, { status: 400 });
   }
}
