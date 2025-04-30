import { Link } from '@inertiajs/react'
import { CircleDollarSign } from 'lucide-react'
import React from 'react'
import { Alert, AlertTitle } from './ui/alert'
import { useCart } from '@/context/CartContext';

export default function CheckoutAlert() {
    const { cart } = useCart();

    return cart.length > 0 ? (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
            <Link href="/checkout">
                <Alert variant="destructive" className="w-full bg-primary">
                    <AlertTitle className="flex items-center gap-2 text-white font-semibold justify-between">
                        <div className="flex gap-2">
                            {cart.map((item) => (
                                <div key={item.id} className="flex">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-5 h-5 rounded-sm aspect-square object-cover transition-transform ease-in-out duration-75 bg-transparent translate-x-0"
                                    />
                                </div>
                            ))}
                            <p>{cart.length} Products</p>
                        </div>
                        <span className="inline-flex items-center gap-2">
                            <CircleDollarSign />
                            CheckOut
                        </span>
                    </AlertTitle>
                </Alert>
            </Link>
        </div>
    ) : null;
}
