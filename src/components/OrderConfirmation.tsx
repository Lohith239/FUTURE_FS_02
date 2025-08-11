import React from 'react';
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react';

interface OrderConfirmationProps {
  onContinueShopping: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ onContinueShopping }) => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your purchase</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Order Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">#{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Delivery:</span>
              <span className="font-medium">{estimatedDelivery.toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Package className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Order Processing</p>
              <p className="text-sm text-gray-600">Your order is being prepared</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-left">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <Truck className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Shipping</p>
              <p className="text-sm text-gray-600">Free standard shipping</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-left">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Calendar className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Delivery</p>
              <p className="text-sm text-gray-600">Expected in 3-5 business days</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onContinueShopping}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all transform hover:scale-105"
          >
            Continue Shopping
          </button>
          
          <p className="text-sm text-gray-500">
            A confirmation email has been sent to your email address
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;