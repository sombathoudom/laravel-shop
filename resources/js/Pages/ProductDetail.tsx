import ProductCardList from '@/components/PoductCardList'
import GuestLayout from '@/Layouts/GuestLayout'
import { Products } from '@/Pages/Home'
interface Props {
    product: Products;
    relatedProducts: Products[];
}
function ProductDetail(props: Props) {
    const { product, relatedProducts } = props;
  return (
    <GuestLayout>
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {/* Image Gallery Section */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <img
              width={512}
              height={512}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src="https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514707575-RE-EDIT-PKA%2528final%2529-27.jpg&w=640&q=100"
              alt="Product Image"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {Array(4)
              .fill('')
              .map((_, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                  <img
                    width={118}
                    height={118}
                    className="w-full h-full object-cover"
                    src="https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514707575-RE-EDIT-PKA%2528final%2529-27.jpg&w=640&q=100"
                    alt={`Product Image ${i + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
                      <p className="text-2xl font-semibold text-primary">${ product.price}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600">
              {product.description}
            </p>
          </div>

          <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      <ProductCardList products={relatedProducts}/>
    </GuestLayout>
  )
}

export default ProductDetail
