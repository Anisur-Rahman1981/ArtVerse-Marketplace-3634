import { motion } from 'framer-motion';
import ArtCard from './ArtCard';

const Gallery = ({ artworks }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {artworks.map((art) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;