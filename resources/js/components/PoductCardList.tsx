import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import { CircleDollarSign, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/CartContext'
import { Link } from '@inertiajs/react'
import { Alert, AlertTitle } from './ui/alert'

interface Product {
  id: number
  name: string
  price: number
  qty: number
  isOutOfStock: boolean
  image: string
}

const data: Product[] = [
  {
    id: 1,
    name: 'Nokoreach',
    price: 10,
    qty: 1,
    isOutOfStock: false,
    image:
      'https://pichpiseyshop.sgp1.digitaloceanspaces.com/1745485398221-2.png',
  },
  {
    id: 2,
    name: 'Nokoreach2',
    price: 10,
    qty: 1,
    isOutOfStock: false,
    image:
      'https://pichpiseyshop.sgp1.digitaloceanspaces.com/1745485398221-2.png',
  },
  {
    id: 3,
    name: 'Nokoreach3',
    price: 10,
    qty: 1,
    isOutOfStock: false,
    image:
      'https://pichpiseyshop.sgp1.digitaloceanspaces.com/1745485398221-2.png',
  },
  {
    id: 4,
    name: 'Nokoreach3',
    price: 10,
    qty: 1,
    isOutOfStock: false,
    image:
      'https://pichpiseyshop.sgp1.digitaloceanspaces.com/1745485398221-2.png',
  },
]

export default function ProductCardList() {
  const { cart, addToCart, updateQuantity } = useCart()
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        {data.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id)
          const currentQty = cartItem?.qty || product.qty
          return (
            <Card key={product.id} className="rounded-md p-0 gap-0 shadow-none">
              <Link href="/product">
                <CardContent className="px-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </CardContent>
              </Link>
              <CardFooter className="flex flex-col gap-4 hover:bg-gray-100 cursor-pointer py-2 px-2">
                <div className="flex justify-between items-center w-full">
                  <p className="text-2xl font-semibold">{product.name}</p>
                  <p className="text-2xl font-bold text-pink-500">
                    ${product.price}
                  </p>
                </div>
                {cartItem ? (
                  <div className="flex justify-between gap-2">
                    <Button
                      variant="outline"
                      onClick={() =>
                        updateQuantity(product.id, currentQty - 1)
                      }>
                      <Minus />
                    </Button>
                    <Input
                      value={currentQty}
                      className="text-center"
                      type="number"
                      onChange={(e) =>
                        updateQuantity(
                          product.id,
                          parseInt(e.target.value) || 1
                        )
                      }
                    />
                    <Button
                      variant="outline"
                      onClick={() =>
                        updateQuantity(product.id, currentQty + 1)
                      }>
                      <Plus />
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="w-full h-10 bg-[#F075AA] text-white hover:bg-[#f075aae3]"
                    onClick={() =>
                      addToCart({ ...product, qty: currentQty || product.qty })
                    }>
                    <ShoppingBag /> Add to Bag
                  </Button>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </div>
      {cart.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
          <Link href="/checkout">
            <Alert variant="destructive" className="w-full bg-primary">
              <AlertTitle className="flex items-center gap-2 text-white font-semibold justify-between">
                <div className="flex gap-2">
                  {cart.map((item) => (
                    <div className="flex ">
                      <img
                        src={item.image}
                        className="w-5 h-5 rounded-sm aspect-square object-cover transition-transform ease-in-out duration-75 bg-transparent translate-x-0"
                      />
                    </div>
                  ))}
                  <p>{cart.length} . Products</p>
                </div>
                <span className="inline-flex items-center gap-2">
                  <CircleDollarSign />
                  CheckOut
                </span>
              </AlertTitle>
            </Alert>
          </Link>
        </div>
      )}
    </>
  )
}
