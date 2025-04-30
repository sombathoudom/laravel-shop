import { Menu, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/stores/useCartStore'
import { Button } from './ui/button'
import { Link } from '@inertiajs/react'

function NavBar() {
  const { cart } = useCartStore()
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0)
  return (
    <nav className="flex -mt-4 -mb-4 mx-auto sticky top-0 border-b border-muted border-dashed z-50 bg-background justify-between items-center w-full py-4 max-2-4xl">
      <Menu />
      <Link href="/">
        <h4 className="text-4xl text-pink-500 font-bold">Pich Pisey Shop</h4>
      </Link>
      <Button variant={'outline'} size={'lg'} asChild>
        <Link href="/checkout">
          <ShoppingBag size={32} />
          {totalQty > 0 && (
            <div className="transition-opacity opacity-100  text-destructive-foreground absolute bottom-3 -right-1 w-6 h-6 rounded-full text-xs flex items-center text-white justify-center border-2 bg-pink-400">
              {totalQty}
            </div>
          )}
        </Link>
      </Button>
    </nav>
  )
}

export default NavBar
