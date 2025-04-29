import NavBar from '@/components/NavBar'
import React, { PropsWithChildren } from 'react'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { CircleDollarSign, Terminal } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function GuestLayout({ children }: PropsWithChildren) {
  const { cart } = useCart()
  return (
    <div className="flex items-stretch justify-center min-h-screen mx-auto p-4">
      <div className="heartIcon mx-auto"></div>
      <main className="flex flex-grow flex-col gap-16 items-center max-w-4xl relative">
        <NavBar />
        {children}
      </main>
      <div className="heartIcon mx-auto"></div>
    </div>
  )
}
