import { forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Users, Calendar, ChevronRight } from "lucide-react";
import gulmarg from "../assets/gul.jpg";

const About = forwardRef(function About(props, ref) {
  const ref1 = useInView({ once: true });
  const isInView = ref1.inView;

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Kashmir
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-red-400 mx-auto mb-6"></div>
          <p className="max-w-6xl mx-auto text-gray-600">
            Nestled in the heart of paradise, HolidayTravels is a premier travel
            agency based in Kashmir, dedicated to crafting unforgettable
            journeys through the valley's breathtaking landscapes. With a
            passion for hospitality and a deep love for the region, we offer
            personalized travel experiences—ranging from serene houseboat stays
            to thrilling mountain adventures. Let HolidayTravels be your guide
            to the timeless charm, culture, and beauty of Kashmir.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { icon: MapPin, title: "Scenic Beauty", text: "From the serene Dal Lake to the majestic Himalayas, Kashmir's landscapes will leave you spellbound." },
            { icon: Users, title: "Rich Culture", text: "Experience the unique blend of cultures, traditions, and cuisines that make Kashmir truly special." },
            { icon: Calendar, title: "Year-round Destination", text: "Each season offers a different experience, from spring blooms to winter wonderlands." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-pink-600 to-red-400 text-white rounded-full flex items-center justify-center mb-4">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[300px] md:h-auto">
              <img
                src={gulmarg}
                alt="Kashmir Valley"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-pink-600 to-red-400 text-white flex items-center justify-center mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">
                      Local Expertise:
                    </span>{" "}
                    Our guides are Kashmir natives with deep knowledge.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-pink-600 to-red-400 text-white flex items-center justify-center mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">
                      Customized Experiences:
                    </span>{" "}
                    Tailor your journey to your preferences.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-pink-600 to-red-400 text-white flex items-center justify-center mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">
                      Safety First:
                    </span>{" "}
                    Your security and comfort are our top priorities.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-pink-600 to-red-400 text-white flex items-center justify-center mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">
                      Sustainable Tourism:
                    </span>{" "}
                    We're committed to preserving Kashmir's beauty.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;
