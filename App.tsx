import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu'; // Import new MobileMenu
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import FaqPage from './pages/FaqPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { BUSINESS_NAME } from './constants';

// Component to handle scrolling to top on navigation
const NavigationEffects: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

const PageWrapper: React.FC<{ children: React.ReactNode, title?: string }> = ({ children, title }) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - ${BUSINESS_NAME}`;
    } else {
      // For pages like ProductDetailPage that set their own title
      // or if a default title is already set and shouldn't be overridden by a generic one.
      if (document.title.includes(BUSINESS_NAME)) {
        // Keep existing title if it already contains business name (e.g., set by ProductDetailPage)
      } else {
        document.title = `${BUSINESS_NAME} E-commerce`; // Default fallback
      }
    }
  }, [title]);

  return <main className="flex-grow container mx-auto px-4 py-8">{children}</main>;
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <NavigationEffects />
          <div className="flex flex-col min-h-screen bg-secondary dark:bg-slate-900">
            <Header toggleMobileMenu={toggleMobileMenu} />
            <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
            
            <Routes>
              <Route path="/" element={<PageWrapper title="Accueil"><HomePage /></PageWrapper>} />
              <Route path="/catalog" element={<PageWrapper title="Catalogue"><CatalogPage /></PageWrapper>} />
              <Route path="/product/:productId" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper title="Nos Services"><ServicesPage /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper title="À Propos"><AboutPage /></PageWrapper>} />
              <Route path="/cart" element={<PageWrapper title="Panier"><CartPage /></PageWrapper>} />
              <Route path="/privacy-policy" element={<PageWrapper title="Politique de Confidentialité"><PrivacyPolicyPage /></PageWrapper>} />
              <Route path="/terms-of-use" element={<PageWrapper title="Conditions d'Utilisation"><TermsOfUsePage /></PageWrapper>} />
              <Route path="/faq" element={<PageWrapper title="FAQ"><FaqPage /></PageWrapper>} />
            </Routes>
            
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;