import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/Holidaylogo.png"

export default function Header({ scrollToSection, heroRef, aboutRef, packagesRef, contactRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (ref) => {
    scrollToSection(ref)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="text-white font-bold w-10 h-8" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-red-400 bg-clip-text text-transparent">Holiday Travels</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => handleNavClick(heroRef)} className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium">
            Home
          </button>
          <button onClick={() => handleNavClick(aboutRef)} className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium">
            About
          </button>
          <button
            onClick={() => handleNavClick(packagesRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium"
          >
            Packages
          </button>
          <button
            onClick={() => handleNavClick(contactRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium"
          >
            Contact
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600 transition-colors duration-300 hover:text-pink-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 py-4">
          <button
            onClick={() => handleNavClick(heroRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium py-2 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick(aboutRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium py-2 transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick(packagesRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium py-2 transition-colors duration-300"
          >
            Packages
          </button>
          <button
            onClick={() => handleNavClick(contactRef)}
            className="text-gray-600 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-400 hover:bg-clip-text hover:text-transparent font-medium py-2 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  )
}