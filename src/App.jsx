import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryCircles from './components/CategoryCircles';
import PromoBanners from './components/PromoBanners';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryPageView from './components/CategoryPageView';
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
  // Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('shree_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'demo-card-1',
          productId: 'standard-card',
          name: 'Standard Visiting Cards (Premium Matte 350 GSM)',
          quantity: 250,
          cartQty: 1,
          price: 449,
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80',
          specs: {
            paper: '350 GSM Premium Matte',
            corners: 'Rounded Corners (6mm)',
            companyName: 'Shree Computers'
          }
        }
      ];
    } catch (e) {
      return [];
    }
  });

  // Navigation State ('home' or department ID: 'visiting-cards', 'marketing-materials', 'signs-banners', etc.)
  const [selectedDepartment, setSelectedDepartment] = useState('home');

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

  const handleSelectDepartment = (deptId) => {
    setSelectedDepartment(deptId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#002f6c] text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-slideUp">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold">{toast}</span>
        </div>
      )}

      {/* Vistaprint Signature Header & Mega Navigation */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + (item.cartQty || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenUpload={() => setIsUploadOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        selectedDepartment={selectedDepartment}
        onSelectDepartment={handleSelectDepartment}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* Main Content Area: Home or Department Subpage */}
      {selectedDepartment === 'home' ? (
        <>
          {/* 1. Hero Carousel */}
          <HeroBanner
            onSelectDepartment={handleSelectDepartment}
            onOpenCustomizer={() => setIsCustomizerOpen(true)}
          />

          {/* 2. Vistaprint Signature Circular Category Grid */}
          <CategoryCircles
            onSelectDepartment={handleSelectDepartment}
          />

          {/* 3. Vistaprint 3-Up Campaign Promotional Tiles */}
          <PromoBanners
            onSelectDepartment={handleSelectDepartment}
            onOpenCustomizer={() => setIsCustomizerOpen(true)}
          />

          {/* 4. Best Sellers Products Grid */}
          <FeaturedProducts
            selectedCategory="all"
            onSelectCategory={handleSelectDepartment}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onOpenCustomizer={() => setIsCustomizerOpen(true)}
            onAddToCart={handleAddToCart}
          />

          {/* 5. Shree Technical Workshop Section */}
          <ComputerServicesSection
            onAddToCart={handleAddToCart}
          />

          {/* 6. The Vistaprint & Shree Promise + Customer Reviews */}
          <WhyChooseUs />
        </>
      ) : (
        /* Dedicated Department Page View */
        <CategoryPageView
          departmentId={selectedDepartment}
          onBackToHome={() => handleSelectDepartment('home')}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Vistaprint 5-Column Footer */}
      <Footer
        onSelectCategory={handleSelectDepartment}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenUpload={() => setIsUploadOpen(true)}
      />

      {/* Modals & Studios */}
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
