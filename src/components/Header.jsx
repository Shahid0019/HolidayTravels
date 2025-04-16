
import { useState } from "react"
import { Menu, X } from "lucide-react"

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
            <img src="../assets/Holidaylogo.png" alt="Logo" className="text-white font-bold w-10 h-8" />
          <h1 className="text-xl font-bold text-emerald-800">Holiday Travels</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => handleNavClick(heroRef)} className="text-gray-600 hover:text-emerald-600 font-medium">
            Home
          </button>
          <button onClick={() => handleNavClick(aboutRef)} className="text-gray-600 hover:text-emerald-600 font-medium">
            About
          </button>
          <button
            onClick={() => handleNavClick(packagesRef)}
            className="text-gray-600 hover:text-emerald-600 font-medium"
          >
            Packages
          </button>
          <button
            onClick={() => handleNavClick(contactRef)}
            className="text-gray-600 hover:text-emerald-600 font-medium"
          >
            Contact
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavClick(heroRef)}
              className="text-gray-600 hover:text-emerald-600 font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick(aboutRef)}
              className="text-gray-600 hover:text-emerald-600 font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick(packagesRef)}
              className="text-gray-600 hover:text-emerald-600 font-medium py-2"
            >
              Packages
            </button>
            <button
              onClick={() => handleNavClick(contactRef)}
              className="text-gray-600 hover:text-emerald-600 font-medium py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
