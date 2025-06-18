"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>TheGlaze</h1>
        </Link>

        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/menu" className={location.pathname.includes("/menu") ? "active" : ""}>
                Menu
              </Link>
              <div className="dropdown-content">
                <Link to="/menu/cakes">Cakes</Link>
                <Link to="/menu/cookies">Cookies</Link>
                <Link to="/menu/cupcakes">Cupcakes</Link>
              </div>
            </li>
            <li>
              <Link to="/designs" className={location.pathname === "/designs" ? "active" : ""}>
                Cake Designs
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/feedback" className={location.pathname === "/feedback" ? "active" : ""}>
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
