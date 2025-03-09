"use client"

import type React from "react"

import { useState } from "react"

import { useRef } from "react"
import Image from "next/image"
import LoginModal from "@/components/login-modal"
import Navbar from "@/components/navbar"
import AboutSection from "@/components/about-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  const aboutRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onPricingClick={() => scrollToSection(pricingRef)}
        onContactClick={() => scrollToSection(contactRef)}
        onLoginClick={() => setShowLoginModal(true)}
      />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Blue wave background */}
        <div className="absolute top-0 left-0 w-full h-[500px] md:h-[600px]">
          <div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-br from-sky-400 to-blue-500 rounded-br-[100%]"></div>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="mt-10 md:mt-0">
                <Image
                  src="/analytics-illustration.svg"
                  alt="Analytics Dashboard"
                  width={400}
                  height={300}
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="text-5xl">
                Transform Your Business with Our Solutions
              </h1>
              <p className="text-gray-700 text-lg">
                Make it easier for entrepreneurs to record every item that comes in and out and record every profit they make every day.
              </p>

              <p className="mt-10 text-gray-600 italic text-xl">"There is always a good solution by using our ERP"</p>
            </div>
          </div>
        </div>

        {/* Purple/Blue wave background */}
        <div className="absolute top-[300px] right-0 w-[50%] h-[400px]">
          <div className="absolute top-0 right-0 w-full h-full">
            <Image src="/wave-bg.svg" alt="Wave Background" fill className="object-contain object-right" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <div ref={aboutRef}>
        <AboutSection />
      </div>

      {/* Pricing Section */}
      <div ref={pricingRef}>
        <PricingSection />
      </div>

      {/* Contact Section */}
      <div ref={contactRef}>
        <ContactSection />
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </main>
  )
}

