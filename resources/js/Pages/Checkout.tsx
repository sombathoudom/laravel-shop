import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/CartContext'
import GuestLayout from '@/Layouts/GuestLayout'
import { CircleDollarSign, Minus, Plus, ShoppingBag } from 'lucide-react'

const Checkout = () => {
  const { cart, removeProduct } = useCart()
  return (
    <GuestLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-2xl font-bold inline-flex items-center gap-2">
          <ShoppingBag />
          Shopping Bag
        </p>

        <div className="space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No products in bag
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex w-full flex-col space-y-4 p-4 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative group">
                      <img
                        width={104}
                        height={104}
                        className="w-28 h-28 object-cover rounded-xl ring-1 ring-gray-200 group-hover:ring-primary transition-all"
                        src="https://pichpiseyshop.sgp1.digitaloceanspaces.com/1745485398221-2.png"
                        alt="Product image"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">Product Name</h3>
                      <p className="text-gray-500 text-sm">Size: M</p>
                      <p className="text-primary font-medium">$99.99</p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => removeProduct(item)}>
                    Remove
                  </Button>
                </div>

                <div className="flex items-center gap-2 w-fit">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary hover:text-white transition-colors">
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>

                  <Input
                    value={1}
                    className="w-16 h-8 text-center rounded-lg"
                    aria-label="Product quantity"
                  />

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-primary hover:text-white transition-colors">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t pt-6">
            <p className="text-2xl font-bold inline-flex items-center gap-2">
              <CircleDollarSign />
              Checkout
            </p>
          </div>
        )}
      </div>
    </GuestLayout>
  )
}

export default Checkout
