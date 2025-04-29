import { useCart } from '@/context/CartContext';
import { Menu, ShoppingBag } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button';


function NavBar() {
    const { cart } = useCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <nav className='flex -mt-4 -mb-4 mx-auto sticky top-0 border-b border-muted border-dashed z-50 bg-background justify-between items-center w-full py-4 max-2-4xl'>
            <Menu />
          <a href=""><h4 className='text-4xl text-pink-500 font-bold'>Pich Pisey Shop</h4></a>
            <Button variant={"outline"} size={"lg"} asChild>
              <a href="/login">
                  <ShoppingBag size={32} />
                  {totalQty > 0 &&
                      <div className="transition-opacity opacity-100  text-destructive-foreground absolute bottom-3 -right-1 w-6 h-6 rounded-full text-xs flex items-center text-white justify-center border-2 bg-pink-400">{totalQty}</div>}
              </a>
            </Button>
      </nav>
  )
}

export default NavBar
