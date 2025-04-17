import { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PackageCard from "./PackageCard";

const packagesData = [
  {
    id: 1,
    title: "Gulmarg Adventure",
    image: "https://images.unsplash.com/photo-1568889753852-196c487a536e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    reviews: 96,
    duration: "6 Days / 5 Nights",
    description: "Ski in winter or trek in summer at Gulmarg, with gondola rides and stunning views.",
    price: "29,999",
    tag: null,
    famousPlaces: [
      "Apharwat Peak",
      "Alpather Lake",
      "Gulmarg Biosphere Reserve",
      "Strawberry Valley",
      "St. Mary's Church",
    ],
    thingsToDo: ["Gondola Ride", "Golfing", "Trekking", "Photography"],
  },
  {
    id: 2,
    title: "Ladakh Adventure",
    image: "https://images.unsplash.com/photo-1593118845043-359e5f628214?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: 45,
    duration: "7 Days / 6 Nights",
    description: "Experience the rugged beauty of Ladakh, with breathtaking landscapes, serene lakes, and ancient monasteries.",
    price: "49,999",
    tag: "New",
    famousPlaces: [
      "Pangong Tso",
      "Khardung La",
      "Nubra Valley",
      "Thiksey Monastery",
      "Leh Palace",
    ],
    thingsToDo: ["Stargazing", "Trekking", "Cultural Tours", "Motorbiking"],
  },
  {
    id: 3,
    title: "Pahalgam Retreat",
    image: "https://images.unsplash.com/photo-1641593758596-39b200b51e8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: 74,
    duration: "4 Days / 3 Nights",
    description: "Relax by the Lidder River, explore Betaab Valley, and enjoy the serene beauty of Pahalgam.",
    price: "19,999",
    tag: null,
    famousPlaces: [
      "Betaab Valley",
      "Arisco Valley",
      "Tulian Lake",
      "Aru Valley",
      "Lidder River",
    ],
    thingsToDo: ["Rafting", "Fishing", "Trekking", "Boating"],
  },
  {
    id: 4,
    title: "Sonamarg Glacier Tour",
    image: "https://images.unsplash.com/photo-1643449415972-87d4cfe882a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: 62,
    duration: "5 Days / 4 Nights",
    description: 'Visit the Thajiwas Glacier, enjoy pony rides, and experience the "Meadow of Gold."',
    price: "22,999",
    tag: null,
    famousPlaces: [
      "Thajiwas Glacier",
      "Zoji La Pass",
      "Gangabal Lake",
      "Baltal Valley",
      "Nilagrad River",
    ],
    thingsToDo: ["Trekking", "Camping", "Photography", "Fishing"],
  },
  {
    id: 5,
    title: "Guraz Valley Explorer",
    image: "https://images.unsplash.com/photo-1664787357457-4eda9cbe1245?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    reviews: 156,
    duration: "10 Days / 9 Nights",
    description: "Explore the lesser-known, untouched beauty of Guraz Valley, including the stunning Apharwat Peak.",
    price: "45,999",
    tag: "Popular",
    famousPlaces: [
      "Habba Khatoon Peak",
      "Tulail Valley",
      "Kishanganga River",
      "Dawar",
      "Khandyal Heights",
    ],
    thingsToDo: ["Trekking", "Camping", "Cultural Tours", "Photography"],
  },
  {
    id: 6,
    title: "Karen Valley Explorer",
    image: "https://images.unsplash.com/photo-1720660826724-3b94ca998dcf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: 89,
    duration: "7 Days / 6 Nights",
    description: "Experience the serene beauty of Karen Valley, trekking, and camping amidst breathtaking landscapes.",
    price: "39,999",
    tag: "New",
    famousPlaces: [
      "Keran Village",
      "Baboon Valley",
      "Patlian Lake",
      "Neelum River",
      "Upper Neelum",
    ],
    thingsToDo: [
      "Trekking",
      "Bird Watching",
      "Cultural Interaction",
      "Photography",
    ],
  },
];

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
              transition={{ duration: 0.35, delay: index * 0.2 }}
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