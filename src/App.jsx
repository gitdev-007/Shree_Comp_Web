import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import ComputerServicesSection from './components/ComputerServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import LiveCardCustomizer from './components/LiveCardCustomizer';
import ArtworkUploaderModal from './components/ArtworkUploaderModal';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Cart state with localStorage backup
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('shree_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'demo-card-1',
          productId: 'standard-card',
          name: 'Standard Business Cards (Premium Matte 350 GSM)',
          quantity: 250,
          cartQty: 1,
          price: 449,
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80',
          specs: {
            paper: '350 GSM Premium Matte',
            corners: 'Rounded Corners (6mm)',
            companyName: 'Shree Computers Demo'
          }
        }
      ];
    } catch (e) {
      return [];
    }
  });

  // Navigation & Category filter state
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Modals state
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutDetails, setCheckoutDetails] = useState(null);
  
  // Floating Toast Notification
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('shree_cart', JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };

  // Cart operations
  const handleAddToCart = (newItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === newItem.id);
      if (existing) {
        return prev.map(item => 
          item.id === newItem.id 
            ? { ...item, cartQty: (item.cartQty || 1) + 1 } 
            : item
        );
      }
      return [{ ...newItem, cartQty: 1 }, ...prev];
    });

    showToast(`Added "${newItem.name}" to cart!`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, cartQty: newQty } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from cart.');
  };

  const handleProceedToCheckout = (details) => {
    setIsCartOpen(false);
    setCheckoutDetails(details);
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
    showToast('Order received! Printing queue initiated.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-navy-950 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-slideUp">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold">{toast}</span>
        </div>
      )}

      {/* Main Navigation Header */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + (item.cartQty || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenUpload={() => setIsUploadOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* Hero Carousel Banner */}
      <HeroBanner
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          window.scrollTo({ top: 600, behavior: 'smooth' });
        }}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Categories Department Grid */}
      <CategoryGrid
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          window.scrollTo({ top: 800, behavior: 'smooth' });
        }}
      />

      {/* Featured Products & Services */}
      <FeaturedProducts
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSelectProduct={(product) => setSelectedProduct(product)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onAddToCart={handleAddToCart}
      />

      {/* Shree Computers Tech & Repair Division */}
      <ComputerServicesSection
        onAddToCart={handleAddToCart}
      />

      {/* Vistaprint-Style Guarantee & Customer Reviews */}
      <WhyChooseUs />

      {/* Comprehensive Footer */}
      <Footer
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          window.scrollTo({ top: 600, behavior: 'smooth' });
        }}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenUpload={() => setIsUploadOpen(true)}
      />

      {/* Modals */}
      <LiveCardCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <ArtworkUploaderModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={!!checkoutDetails}
        onClose={() => setCheckoutDetails(null)}
        cartDetails={checkoutDetails}
        onOrderSuccess={handleOrderSuccess}
      />

    </div>
  );
}
