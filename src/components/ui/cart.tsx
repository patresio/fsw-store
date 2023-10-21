import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
    const { products } = useContext(CartContext);

    return ( 
        <div className="flex flex-col gap-8">
            <Badge className="w-fit uppercase text-base gap-1 border-primary py-[0.375rem] border-2 px-3" variant="outline">
                <ShoppingCartIcon size={16}/>
                Carrinho
            </Badge>

            {/* RENDERIZAR OS PRODUTOS */}
            <div className="flex flex-col gap-5">
            {products.map((product) =>
                (<CartItem 
                    key={product.id}
                    product={computeProductTotalPrice(product as any) as any}
                />))}
            </div>
        </div>
     );
}
 
export default Cart;