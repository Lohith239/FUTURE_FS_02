import React from 'react';
import { ArrowLeft, Star, ShoppingCart, Truck, Shield, RefreshCw } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAuthRequired: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAuthRequired }) => {
  const { addToCart, items } = useCart();
  const { user } = useAuth();
  const cartItem = items.find(item => item.id === product.id);

  const handleAddToCart = () => {
    if (!user) {
      onAuthRequired();
      return;
    }
    addToCart(product);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Products</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                  {product.category}
                </span>
                {product.brand && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    {product.brand}
                  </span>
                )}
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-medium">{product.rating.rate}</span>
                  <span className="text-gray-500">({product.rating.count} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              
              <p className="text-4xl font-bold text-gray-900 mb-6">
                {formatPrice(product.price)}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Free Shipping</span>
                <span className="text-xs text-gray-500">On orders over ₹5,000</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-green-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">2 Year Warranty</span>
                <span className="text-xs text-gray-500">Full coverage</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw className="w-8 h-8 text-purple-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">30-Day Returns</span>
                <span className="text-xs text-gray-500">No questions asked</span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className={`w-full font-semibold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-105 ${
                  user 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{user ? 'Add to Cart' : 'Login to Purchase'}</span>
              </button>
              
              {user && cartItem && (
                <p className="text-center text-sm text-gray-600">
                  {cartItem.quantity} item(s) in your cart
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;