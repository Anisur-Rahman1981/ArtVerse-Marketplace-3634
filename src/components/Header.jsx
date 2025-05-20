import { motion } from 'framer-motion';
import { FaShoppingBag } from 'react-icons/fa';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  const cartItemsCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <motion.header 
        className="bg-primary text-white py-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-3xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Digital Art Gallery
            </motion.h1>
            <nav className="flex items-center gap-6">
              <a href="#" className="hover:text-light transition-colors">Home</a>
              <a href="#" className="hover:text-light transition-colors">Gallery</a>
              <a href="#" className="hover:text-light transition-colors">About</a>
              <button 
                className="bg-light text-primary p-2 rounded-full hover:bg-opacity-80 transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <FaShoppingBag size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </nav>
          </div>
        </div>
      </motion.header>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;