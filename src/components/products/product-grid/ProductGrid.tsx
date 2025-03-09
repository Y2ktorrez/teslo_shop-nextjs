import { Product } from "@/interface"


interface Props {
    products: Product[];
}

export const ProductGrid = ({products}: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {
            products.map(products => (
                <span key={products.slug}>{products.title}</span>
            ))
        }
    </div>
  )
}
 