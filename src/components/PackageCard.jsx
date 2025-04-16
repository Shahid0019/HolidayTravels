import { useState } from "react";
import { Star, Calendar } from "lucide-react";

export default function PackageCard({
  title,
  image,
  rating,
  reviews,
  duration,
  description,
  tag,
  famousPlaces = [],
  thingsToDo = [],
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative perspective h-[500px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-white rounded-xl overflow-hidden shadow-md backface-hidden">
          <div className="relative h-64">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="object-cover w-full h-full"
            />
            {tag && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-red-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </div>
            )}
          </div>
          <div className="p-6 h-[236px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">({reviews} reviews)</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{duration}</span>
              </div>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
            <div className="flex gap-2 mt-4">
              <a
                href="tel:+916005592530"
                className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-pink-600 to-red-400 text-white rounded-lg hover:scale-105 transition-transform duration-300 text-sm"
              >
                Contact Now
              </a>
              <button
                onClick={() => setIsFlipped(true)}
                className="flex-1 px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 transition text-sm"
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-md transform rotate-y-180 backface-hidden p-6 overflow-y-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{title} - Famous Places</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
            {famousPlaces.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-xl font-bold text-gray-800 mb-4">{title} - Things To Do</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
            {thingsToDo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            onClick={() => setIsFlipped(false)}
            className="mt-6 w-full px-4 py-2 border border-pink-500 text-pink-600 rounded-lg hover:bg-pink-50 transition text-sm"
          >
            Go Back
          </button>
          <p className="mt-1 text-gray-600 text-sm">
            Note: Please contact us to customize your package.
          </p>
          

        </div>
      </div>
    </div>
  );
}
