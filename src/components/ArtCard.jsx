import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ArtCard = ({ art }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: art });
  };

  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <img 
        src={art.imageUrl} 
        alt={art.title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary mb-2">{art.title}</h3>
        <p className="text-gray-600 mb-4">{art.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-accent">${art.price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-light text-primary px-4 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-80 transition-colors"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtCard;