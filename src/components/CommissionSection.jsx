import { motion } from 'framer-motion';
import CommissionForm from './CommissionForm';

const CommissionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Commission Your Art</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Want a unique piece of digital art? Fill out the form below to request a custom commission.
            I'll review your request and get back to you within 48 hours.
          </p>
        </motion.div>
        
        <CommissionForm />
      </div>
    </section>
  );
};

export default CommissionSection;