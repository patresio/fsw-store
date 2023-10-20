import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
    products: Product[]
}

const ProductList = ({products}: ProductListProps) => {
    
    return ( 
        <div 
        className="px-5 flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {products.map((product) => (
            <div key={product.id}  className="max-w-[170px] w-[170px]">
            <ProductItem product={computeProductTotalPrice(product)} /> 
            </div>))}
        </div>
     );
}
 
export default ProductList;