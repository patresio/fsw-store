import { ShapesIcon } from "lucide-react";

import { Badge } from '@/components/ui/badge';
import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./component/category-item";

const CatalogPage = async () => {

    const categories = await prismaClient.category.findMany({})

    return ( 
        <div className="p-5 gap-8 flex flex-col">
            <Badge className="w-fit uppercase text-base gap-1 border-primary py-[0.375rem] border-2 px-3" variant="outline">
                <ShapesIcon size={16}/>
                Catálogo
            </Badge>

            <div className="grid grid-cols-2 gap-8">
                {categories.map((category) =>(
                    <CategoryItem key={category.id} category={category} />
                ))}
            </div>
        </div>
     );
}
 
export default CatalogPage;