import { forwardRef } from "react"
import PackageCard from "./PackageCard"
import gulmarg from "../assets/gulmarg.jpg"
import ladakh from "../assets/ladakh.jpg"
import pahalgam from "../assets/pahalgam.jpg"
import sonamarg from "../assets/sonamarg.jpg"
import guraz from "../assets/guraz.jpg"
import karen from "../assets/karen.jpg"
const packagesData = [
  {
    id: 1,
    title: "Gulmarg Adventure",
    image: gulmarg,
    rating: 5,
    reviews: 96,
    duration: "6 Days / 5 Nights",
    description: "Ski in winter or trek in summer at Gulmarg, with gondola rides and stunning views.",
    price: "29,999",
    tag: null,
  },
  {
    id: 2,
    title: "Ladakh Adventure",
    image: ladakh,
    rating: 4,
    reviews: 45,
    duration: "7 Days / 6 Nights",
    description: "Experience the rugged beauty of Ladakh, with breathtaking landscapes, serene lakes, and ancient monasteries.",
    price: "49,999",
    tag: "New",
  },
  {
    id: 3,
    title: "Pahalgam Retreat",
    image: pahalgam,
    rating: 4,
    reviews: 74,
    duration: "4 Days / 3 Nights",
    description: "Relax by the Lidder River, explore Betaab Valley, and enjoy the serene beauty of Pahalgam.",
    price: "19,999",
    tag: "New",
  },
  {
    id: 4,
    title: "Sonamarg Glacier Tour",
    image: sonamarg,
    rating: 4,
    reviews: 62,
    duration: "5 Days / 4 Nights",
    description: 'Visit the Thajiwas Glacier, enjoy pony rides, and experience the "Meadow of Gold."',
    price: "22,999",
    tag: null,
  },
  {
    id: 5,
    title: "Guraz Valley Explorer",
    image: guraz,
    rating: 5,
    reviews: 156,
    duration: "10 Days / 9 Nights",
    description: "Explore the lesser-known, untouched beauty of Guraz Valley, including the stunning Apharwat Peak.",
    price: "45,999",
    tag: "Popular",
  },
  {
    id: 6,
    title: "Karen Valley Explorer",
    image: karen,
    rating: 4,
    reviews: 89,
    duration: "7 Days / 6 Nights",
    description: "Experience the untouched beauty of Karen Valley, including the stunning Apharwat Peak, and enjoy pony rides, trekking, and camping.",
    price: "39,999",
    tag: "New",
  },
]

const Packages = forwardRef(function Packages(props, ref) {
  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Tour Packages</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose from our carefully crafted packages to experience the best of Kashmir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((packageItem) => (
            <PackageCard key={packageItem.id} {...packageItem} />
          ))}
        </div>
      </div>
    </section>
  )
})

export default Packages
