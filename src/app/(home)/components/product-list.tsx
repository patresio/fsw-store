import ProductItem from "@/components/ui/product-item";
import { Product } from "@prisma/client";

interface ProductListProps {
    products: Product[]
}

const ProductList = ({products}: ProductListProps) => {
    
    return ( 
        <div 
        className="px-5 flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {products.map(product => <ProductItem key={product.id} product={product} />)}
        </div>
     );
}
 
export default ProductList;