"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

interface NavbarProps {
  onAboutClick: () => void
  onPricingClick: () => void
  onContactClick: () => void
  onLoginClick: () => void
}

export default function Navbar({ onAboutClick, onPricingClick, onContactClick, onLoginClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-white relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <span className="ml-2 text-2xl font-bold text-white md:block">HOME</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button onClick={onAboutClick} className="text-black font-bold hover:text-gray-700 transition-colors">
              ABOUT
            </button>
            <button onClick={onPricingClick} className="text-black font-bold hover:text-gray-700 transition-colors">
              PRICING
            </button>
            <button onClick={onContactClick} className="text-black font-bold hover:text-gray-700 transition-colors">
              CONTACT
            </button>
          </nav>

          {/* Login Button */}
          <button
            onClick={onLoginClick}
            className="hidden md:block border border-sky-400 text-sky-400 px-6 py-2 rounded-md hover:bg-sky-50 transition-colors"
          >
            LOGIN
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onAboutClick()
                  setMobileMenuOpen(false)
                }}
                className="text-black font-bold hover:text-gray-700 transition-colors py-2"
              >
                ABOUT
              </button>
              <button
                onClick={() => {
                  onPricingClick()
                  setMobileMenuOpen(false)
                }}
                className="text-black font-bold hover:text-gray-700 transition-colors py-2"
              >
                PRICING
              </button>
              <button
                onClick={() => {
                  onContactClick()
                  setMobileMenuOpen(false)
                }}
                className="text-black font-bold hover:text-gray-700 transition-colors py-2"
              >
                CONTACT
              </button>
              <button
                onClick={() => {
                  onLoginClick()
                  setMobileMenuOpen(false)
                }}
                className="border border-sky-400 text-sky-400 px-6 py-2 rounded-md hover:bg-sky-50 transition-colors"
              >
                LOGIN
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

