import NavBar from '@/components/NavBar'
import React, {useEffect, PropsWithChildren} from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CircleDollarSign, Terminal } from "lucide-react"
import { useCart } from '@/context/CartContext';

export default function GuestLayout({ children }: PropsWithChildren) {
    const { cart } = useCart();
    return (
        <div className='flex items-stretch justify-center min-h-screen mx-auto p-4'>
            <div className='heartIcon mx-auto'></div>
            <main className='flex flex-grow flex-col gap-16 items-center max-w-4xl relative'>
                <NavBar />
                {children}
                {cart.length > 0 &&
                    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
                        <a href="">
                        <Alert variant="destructive" className="w-full bg-primary">
                            <AlertTitle className="flex items-center gap-2 text-white font-semibold justify-between">
                                <div className='flex gap-2'>
                                    {cart.map((item) =>
                                        <div className='flex '>
                                            <img src={item.image} className='w-5 h-5 rounded-sm aspect-square object-cover transition-transform ease-in-out duration-75 bg-transparent translate-x-0'/>
                                        </div>
                                    )}
                                <p>{cart.length} . Products</p>
                                </div>
                                <span className="inline-flex items-center gap-2"><CircleDollarSign />CheckOut</span>
                            </AlertTitle>
                            </Alert>
                        </a>
                    </div>
                }
            </main>
            <div className='heartIcon mx-auto'></div>
        </div>
    )
}
