import React from 'react'
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  Home,
  CheckCircle,
  Circle
} from 'lucide-react'

const OrderStatus = () => {
  const statusSteps = [
    {
      id: 1,
      title: "Order Confirmed",
      description: "Your order has been placed successfully",
      time: "Just now",
      completed: true,
    },
    {
      id: 2,
      title: "Processing",
      description: "We're preparing your items",
      time: "Estimated: 1-2 hours",
      completed: false,
    },
    {
      id: 3,
      title: "Shipped",
      description: "Your package is on its way",
      time: "Estimated: 2-3 days",
      completed: false,
    },
    {
      id: 4,
      title: "Delivered",
      description: "Estimated delivery by Tuesday, December 30, 2025",
      time: "",
      completed: false,
    },
  ]

  return (
    <div className=" container mx-auto bg-gray-50 flex items-center justify-center p-4">
      <div className="m w-full">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Order Status
          </h1>

          <div className="space-y-8">
            {statusSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Vertical line connector */}
                {index < statusSteps.length - 1 && (
                  <div className={`absolute left-6 top-16 h-16 w-0.5 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}

                <div className="flex items-start gap-4">
                  {/* Status icon */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    step.completed 
                      ? 'bg-green-100 text-green-600 border-2 border-green-200' 
                      : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Circle className="w-6 h-6" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-lg font-semibold ${
                        step.completed ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </h3>
                      {step.completed && (
                        <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                    
                    <p className={`mt-2 ${
                      step.completed ? 'text-gray-700' : 'text-gray-500'
                    }`}>
                      {step.description}
                    </p>
                    
                    {step.time && (
                      <p className={`mt-2 text-sm ${
                        step.completed ? 'text-green-600 font-medium' : 'text-gray-400'
                      }`}>
                        {step.time}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderStatus