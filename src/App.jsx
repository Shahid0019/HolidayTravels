import { useRef } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Packages from "./components/Packages"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function KashmirTourPage() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const packagesRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white relative">
      <Header
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        aboutRef={aboutRef}
        packagesRef={packagesRef}
        contactRef={contactRef}
      />

      <main className="flex-1">
        <Hero
          ref={heroRef}
          scrollToPackages={() => scrollToSection(packagesRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
        <About ref={aboutRef} />
        <Packages ref={packagesRef} />
        <Contact ref={contactRef} />
      </main>

      <div className="fixed bottom-0 right-0 p-4">
        <a
          href="https://wa.me/+916005592530"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
            alt="WhatsApp"
            className="h-12 w-12"
          />
        </a>
      </div>

      <Footer
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        aboutRef={aboutRef}
        packagesRef={packagesRef}
        contactRef={contactRef}
      />
    </div>
  )
}
