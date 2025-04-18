"use client"

import logo from "../assets/Holidaylogo.png"

export default function Footer({ scrollToSection, heroRef, aboutRef, packagesRef, contactRef }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJoNnptLTYgNmMwLTYuNjI3LTUuMzczLTEyLTEyLTEydjZjMy4zMTQgMCA2IDIuNjg2IDYgNmg2eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo || "/placeholder.svg"} alt="HolidayTravelsLogo" className="w-28 H-24" />
              <h2 className="text-xl font-bold text-white">Holiday Travels</h2>
            </div>
            <p className="text-blue-100 mb-4">
              Your gateway to the paradise on Earth. We provide unforgettable travel experiences in Kashmir.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection(heroRef)}
                  className="text-blue-100 hover:text-white transition duration-300 hover:translate-x-1"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-blue-100 hover:text-white transition duration-300 hover:translate-x-1"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(packagesRef)}
                  className="text-blue-100 hover:text-white transition duration-300 hover:translate-x-1"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-blue-100 hover:text-white transition duration-300 hover:translate-x-1"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="">
            <h4 className="text-lg font-medium text-blue-200 mb-4">Follow Us</h4>
            <div className="flex flex-row md:flex-col gap-4">
              <a
                href="https://www.instagram.com/holidaytravels9/"
                className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center hover:from-pink-600 hover:to-purple-600 hover:scale-110 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+916005592530"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center hover:from-green-600 hover:to-emerald-600 hover:scale-110 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="mailto:aqibahmad7298@gmail.com"
                className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center hover:from-blue-600 hover:to-cyan-600 hover:scale-110 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-200">Contact Us</h3>
            <address className="not-italic text-blue-100">
              <p className="mb-2">Kashmir, India</p>
              <p className="mb-2">Phone: +91 6005592530</p>
              <p>Email: aqibahmad7298@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-800/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Holiday Travels. All rights reserved.
          </p>
          <div className="text-xs text-blue-300">Designed with ❤️ for travelers</div>
        </div>
      </div>
    </footer>
  )
}
