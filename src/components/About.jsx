import { forwardRef } from "react"
import { MapPin, Users, Calendar, ChevronRight } from "lucide-react"

const About = forwardRef(function About(props, ref) {
  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Kashmir</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Known as "Paradise on Earth," Kashmir offers a unique blend of natural beauty, rich culture, and
            unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Scenic Beauty</h3>
            <p className="text-gray-600">
              From the serene Dal Lake to the majestic Himalayas, Kashmir's landscapes will leave you spellbound.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Rich Culture</h3>
            <p className="text-gray-600">
              Experience the unique blend of cultures, traditions, and cuisines that make Kashmir truly special.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Year-round Destination</h3>
            <p className="text-gray-600">
              Each season offers a different experience, from spring blooms to winter wonderlands.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[300px] md:h-auto">
              <img src="./src/assets/gul.jpg" alt="Kashmir Valley"  className="object-cover" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Local Expertise:</span> Our guides are Kashmir natives
                    with deep knowledge.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Customized Experiences:</span> Tailor your journey to
                    your preferences.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Safety First:</span> Your security and comfort are our
                    top priorities.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Sustainable Tourism:</span> We're committed to
                    preserving Kashmir's beauty.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About
