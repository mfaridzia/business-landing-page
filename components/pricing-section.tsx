"use client"

import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

export default function PricingSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="pricing" className="py-20">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
          <div className="w-20 h-1 bg-sky-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. We offer flexible options to accommodate businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Basic</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-800">$19</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Record incoming goods</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Record outgoing goods</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Record profit results</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Basic Charts</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Basic Prediction</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Basic Reporting</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Basic Analytics</span>
                </li>
                
              </ul>
              <button className="w-full py-2 px-4 bg-sky-400 text-white rounded-md hover:bg-sky-500 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Business Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 z-10 border-2 border-sky-400">
            <div className="p-6 bg-sky-400">
              <h3 className="text-xl font-bold text-white mb-2">Business</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">$49</span>
                <span className="text-white ml-1 opacity-80">/month</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Record incoming and outgoing goods</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Record Profit</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Can analyze sales results with CHART</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Priority Support</span>
                </li>
                 <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Support by Engineer</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Support 7x24 Hours</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-sky-400 text-white rounded-md hover:bg-sky-500 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Entrepreneur Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Entrepreneur</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-800">$99</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Record incoming and outgoing goods</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Record Profit</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Can analyze sales results with CHART</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Support 7x24 Hours</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Export data to Excel</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-600">AI Income prediction</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-sky-400 text-white rounded-md hover:bg-sky-500 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

