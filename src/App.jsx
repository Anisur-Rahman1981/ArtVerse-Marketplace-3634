import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import CommissionSection from './components/CommissionSection';
import { artworks } from './data/artworks';
import { motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <motion.section 
            className="text-center py-16 bg-secondary text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Welcome to My Digital Art Gallery</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              Discover unique digital artworks that blend creativity with technology
            </p>
          </motion.section>
          <Portfolio artworks={artworks} />
          <Gallery artworks={artworks} />
          <CommissionSection />
        </main>
        <footer className="bg-primary text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Digital Art Gallery. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;