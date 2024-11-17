import { ProductType } from "@/types/ProductType";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products")
  
  if (!res.ok) {
    throw new Error ("Failed to fech data")
  }

  return res.json()
}

export default async function Home() {
  const products = await getProducts();
console.log(products);

  return (
    <div className="max-w-7-xl max-auto pt-8 px-8 xl:px-0">
        <div className=" 
          grid 
          grid-cols-1 
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-10
          xl:gap-6"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            Prod 1
          </div>

          {products.map((product: ProductType) => (
            <div key={products.id}>
              {product.title}
            </div>
          ))}

          
       </div>
    </div>
  )
}
