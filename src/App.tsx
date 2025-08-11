import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { useAuth } from './context/AuthContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import AuthModal from './components/Auth/AuthModal';
import { Product } from './types';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentView, setCurrentView] = useState<'products' | 'detail' | 'checkout' | 'confirmation'>('products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleViewProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
    setSelectedProduct(null);
  };

  const handleCheckout = () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  const handleBackToCart = () => {
    setCurrentView('products');
    setIsCartOpen(true);
  };

  const handleOrderComplete = () => {
    setCurrentView('confirmation');
  };

  const handleContinueShopping = () => {
    setCurrentView('products');
  };

  const handleAuthRequired = () => {
    setIsAuthModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'detail':
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={handleBackToProducts}
            onAuthRequired={handleAuthRequired}
          />
        ) : null;
      
      case 'checkout':
        if (!user) {
          setIsAuthModalOpen(true);
          setCurrentView('products');
          return null;
        }
        return (
          <Checkout
            onBack={handleBackToCart}
            onComplete={handleOrderComplete}
          />
        );
      
      case 'confirmation':
        return (
          <OrderConfirmation
            onContinueShopping={handleContinueShopping}
          />
        );
      
      default:
        return (
          <ProductList
            searchTerm={searchTerm}
            onViewDetails={handleViewProductDetail}
            onAuthRequired={handleAuthRequired}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {currentView !== 'confirmation' && (
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          currentView={currentView}
          setCurrentView={setCurrentView}
          onAuthClick={() => setIsAuthModalOpen(true)}
        />
      )}
      
      <main>
        {renderCurrentView()}
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode="login"
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;