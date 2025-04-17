import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/Holidaylogo.png"
import { motion } from "framer-motion"

export default function Header({ scrollToSection, heroRef, aboutRef, packagesRef, contactRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (ref) => {
    scrollToSection(ref)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="text-white font-bold w-10 h-8" />
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-gradient-to-r from-pink-600 to-red-400 bg-clip-text text-transparent"
          >
            Holiday Travels
          </motion.h1>
        </div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-8"
        >
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => handleNavClick(heroRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium"
          >
            Home
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => handleNavClick(aboutRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium"
          >
            About
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => handleNavClick(packagesRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium"
          >
            Packages
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => handleNavClick(contactRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium"
          >
            Contact
          </motion.button>
        </motion.nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600 transition-colors duration-300 hover:text-pink-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 py-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => handleNavClick(heroRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium py-2 transition-colors duration-300"
          >
            Home
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => handleNavClick(aboutRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium py-2 transition-colors duration-300"
          >
            About
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => handleNavClick(packagesRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium py-2 transition-colors duration-300"
          >
            Packages
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => handleNavClick(contactRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium py-2 transition-colors duration-300"
          >
            Contact
          </motion.button>
        </div>
      </div>
    </header>
  )
}