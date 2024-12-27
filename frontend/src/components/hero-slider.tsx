'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const slides = [
  {
    title: 'SMART WEARABLE.',
    subtitle: 'Best Deal Online on smart watches',
    discount: 'UP to 80% OFF',
    image: '/hero-slider/image 2.png',
    bgColor: 'bg-[#1B2437]',
  },
  {
    title: 'WEARABLE.',
    subtitle: 'Best Deal Online on smart watches',
    discount: 'UP to 80% OFF',
    image: '/hero-slider/image 2.png',
    bgColor: 'bg-[#1B2437]',
  },
  {
    title: 'SMART.',
    subtitle: 'Best Deal Online on smart watches',
    discount: 'UP to 80% OFF',
    image: '/hero-slider/image 2.png',
    bgColor: 'bg-[#1B2437]',
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
    <div
      key={index}
      className={`relative ${slide.bgColor} ${
        index === currentSlide ? 'block' : 'hidden'
      }`}
    >
      {/* Background Image - moved to top and set lowest z-index */}
      <Image  
        src="/hero-slider/Group 16.png"
        alt="Background Image"
        width={610}
        height={400}
        className="object-contain absolute top-0 right-0 z-0"
      />
      
      {/* Content Container - higher z-index */}
      <div className="container mx-auto px-16 py-8 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <div className="text-white text-center sm:text-left">
            <p className="text-base sm:text-lg">{slide.subtitle}</p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-bold">{slide.title}</h1>
            <p className="mt-4 text-xl sm:text-2xl">{slide.discount}</p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <Image
              src={slide.image}
              alt="Smart Watch"
              width={300}
              height={300}
              className="object-contain w-20 sm:w-auto z-1 md:pr-12"
            />
          </div>
        </div>
      </div>
    </div>
  ))}
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-1 sm:p-2 shadow-lg"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6"/>
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-1 sm:p-2 shadow-lg"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}