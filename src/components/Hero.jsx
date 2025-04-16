
import { forwardRef } from "react"
import { ChevronRight, Star } from "lucide-react"
import img from "../assets/dalLake.jpg"
const Hero = forwardRef(function Hero({ scrollToPackages, scrollToContact }, ref) {
  return (
    <section ref={ref} className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Discover the Paradise on Earth
              <span className="text-emerald-600"> Kashmir</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience breathtaking landscapes, serene lakes, and majestic mountains in the crown jewel of India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToPackages}
                className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition duration-300 flex items-center justify-center"
              >
                Explore Packages <ChevronRight className="ml-2" size={18} />
              </button>
              <a
                href="tel:+916005592530"
                className="text-center px-6 py-3 border border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative  w-full rounded-xl overflow-hidden shadow-xl">
              <img src={img} alt="Kashmir Dal Lake" className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="bg-yellow-400 p-2 rounded-full mr-3">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">4.9/5 Rating</p>
                  <p className="text-sm text-gray-500">From 2,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Hero
