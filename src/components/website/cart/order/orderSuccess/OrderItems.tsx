import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const OrderItems = () => {
  const orderItems = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      quantity: 1,
      price: 199.99,
    },
    {
      id: 2,
      name: "Smart Watch Ultra",
      quantity: 1,
      price: 399.99,
    },
    {
      id: 3,
      name: "Portable Speaker",
      quantity: 1,
      price: 89.99,
    },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0)
  const shipping = 0
  const tax = 0
  const total = subtotal + shipping + tax

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <Card className="shadow-lg">
        <CardHeader className="border-b">
          <CardTitle className="text-2xl font-bold">Order Items</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {/* Order Items List */}
          <div className="space-y-6 mb-8">
            {orderItems.map((item) => (
              <div key={item.id} className="flex justify-between items-start pb-6 border-b">
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</p>
                </div>
                <p className="font-semibold text-gray-900">
                  {formatCurrency(item.price)}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <Separator className="mb-6" />

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium text-green-600">FREE</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">{formatCurrency(tax)}</span>
            </div>

            {/* Divider before total */}
            <Separator className="my-4" />
            
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">
                {formatCurrency(total)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OrderItems