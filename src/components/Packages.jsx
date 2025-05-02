import { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PackageCard from "./PackageCard";
import packagesData from '../util/packagesData'


const Packages = forwardRef(function Packages(props, ref) {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: true });

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Tour Packages</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-red-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose from our carefully crafted packages to experience the best of Kashmir.
          </p>
        </div>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packagesData.map((packageItem, index) => (
            <motion.div
              key={packageItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.25 }}
            >
              <PackageCard {...packageItem} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Packages;