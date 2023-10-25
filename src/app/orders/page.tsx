import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import OrderItem from "./components/order-item";
import { getServerSession } from "next-auth/next";

export async function OrderPage() {
  const session = getServerSession()
  
  if (!session) {
    return;
  }

  console.log(JSON.stringify(session, null, 2));

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (session as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  // TODO: componentizar badge
  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <PackageSearchIcon size={16} />
        Meus Pedidos
      </Badge>

      <div className="mt-5 flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
