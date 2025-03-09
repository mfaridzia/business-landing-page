"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-sky-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/about-illustration.svg"
              alt="About Us"
              width={500}
              height={400}
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              To empower entrepreneurs by providing an intuitive, reliable, and scalable ERP system that simplifies business operations. We strive to enhance productivity, optimize workflow efficiency, and support sustainable growth through innovative technology
            </p>

            <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading ERP solution that transforms the way businesses manage their operations. We envision a future where entrepreneurs can focus on growing their businesses without being burdened by complex systems
            </p>

            <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Innovation and creativity in everything we do</li>
              <li>Customer satisfaction is our top priority</li>
              <li>Integrity and transparency in all our dealings</li>
              <li>Continuous improvement and learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

