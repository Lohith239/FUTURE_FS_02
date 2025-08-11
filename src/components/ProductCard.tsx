import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAuthRequired: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAuthRequired }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    
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
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      onClick={() => onViewDetails(product)}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        {product.brand && (
          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
            {product.brand}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating.rate}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors transform hover:scale-105 ${
              user 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{user ? 'Add' : 'Login'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;