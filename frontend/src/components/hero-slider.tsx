'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    title: 'SMART WEARABLE.',
    subtitle: 'Best Deal Online on smart watches',
    discount: 'UP to 80% OFF',
    image: '/hero-slider/image 2.png',
    bgColor: 'bg-[#1B2437]',
  },
  {
    title: 'Designer Watches',
    subtitle: 'Best Deal Online on smart watches',
    discount: 'UP to 80% OFF',
    image: '/hero-slider/image 2.png',
    bgColor: 'bg-[#1B2437]',
  },
  {
    title: 'Luxury Brands',
    subtitle: 'Best Deal Online on smart watches',
    discount: 'UP to 80% OFF',
    image: '/hero-slider/image 2.png',
    bgColor: 'bg-[#1B2437]',
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5 },
            opacity: { duration: 0.3 }
          }}
          className={`relative ${slides[currentSlide].bgColor}`}
        >
          <Image  
            src="/hero-slider/Group 16.png"
            alt="Background Image"
            width={610}
            height={400}
            className="object-contain absolute top-0 right-0 z-0"
          />
          
          <div className="container mx-auto px-20 py-8 sm:py-16 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
              <div className="text-white text-center sm:text-left">
                <p className="text-base sm:text-lg">{slides[currentSlide].subtitle}</p>
                <h1 className="mt-2 text-3xl sm:text-5xl font-bold">{slides[currentSlide].title}</h1>
                <p className="mt-4 text-xl sm:text-2xl">{slides[currentSlide].discount}</p>
              </div>
              <div className="flex justify-center sm:justify-end">
                <Image
                  src={slides[currentSlide].image}
                  alt="Smart Watch"
                  width={300}
                  height={300}
                  className="object-contain w-20 sm:w-auto z-1 md:pr-12"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button
        onClick={handlePrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 sm:p-3 shadow-lg z-20"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" strokeWidth={2} />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 sm:p-3 shadow-lg z-20"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" strokeWidth={2} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}