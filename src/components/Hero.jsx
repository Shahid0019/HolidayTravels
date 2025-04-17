import { forwardRef, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"
import img from "../assets/dalLake.jpg"

const Hero = forwardRef(function Hero({ scrollToPackages }, ref) {
  const ref1 = useRef(null)
  const isInView = useInView(ref1, { once: true })

  return (
    <section ref={ref} className="">
      <div className="relative h-[600px]">
        <img src={img} alt="Dal Lake" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
        >
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Discover the Paradise on Earth
              <span className="bg-gradient-to-r from-pink-600 to-red-400 bg-clip-text text-transparent"> Kashmir</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/80 mb-8"
            >
              Experience breathtaking landscapes, serene lakes, and majestic mountains in the crown jewel of India.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-row gap-4 items-center justify-center"
            >
              <button
                onClick={scrollToPackages}
                className="px-6 py-3 bg-gradient-to-r from-pink-600 to-red-400 text-white rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              >
                Explore Packages <ChevronRight className="ml-2" size={18} />
              </button>
              <a
                href="tel:+916005592530"
                className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Hero
