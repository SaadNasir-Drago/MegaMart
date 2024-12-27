'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const brands = [
  {
    name: 'IPHONE',
    logo: '/electronics/Group 48.png',
    image: '/electronics/image 9.png',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    logoClass: 'invert'
  },
  {
    name: 'REALME',
    logo: '/electronics/download 1.png',
    image: '/electronics/image 9 (1).png',
    bgColor: 'bg-[#FFF8E1]',
    textColor: 'text-black',
    logoClass: ''
  },
  {
    name: 'XIAOMI',
    logo: '/electronics/mi-xiaomi 1.png',
    image: '/electronics/image 9 (2).png',
    bgColor: 'bg-[#FFF5F5]',
    textColor: 'text-black',
    logoClass: ''
  }
]

export function ElectronicsBrands() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-semibold">Top Electronics Brands</h2>
          <Link href="#" className="text-sm text-[#0198E9]">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`${brand.bgColor} ${brand.textColor} rounded-lg overflow-hidden`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/10">
                    {brand.name}
                  </span>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={50}
                    height={50}
                    className={`h-8 w-auto object-contain ${brand.logoClass}`}
                  />
                </div>
                <p className="text-xl font-bold mb-4">UP to 80% OFF</p>
                <div className="flex justify-end mt-auto">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} Phone`}
                    width={300}
                    height={300}
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {brands.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#0198E9]' : 'bg-gray-200'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}