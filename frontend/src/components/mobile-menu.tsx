'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'

const categories = [
  { name: 'Groceries', href: '#' },
  { name: 'Premium Fruits', href: '#' },
  { name: 'Home & Kitchen', href: '#' },
  { name: 'Fashion', href: '#' },
  { name: 'Electronics', href: '#' },
  { name: 'Beauty', href: '#' },
  { name: 'Home Improvement', href: '#' },
  { name: 'Sports, Toys & Luggage', href: '#' },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-4">
            <Link href="/" className="text-2xl font-bold text-[#0198E9]" onClick={() => setOpen(false)}>
              MegaMart
            </Link>
            <button onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="text-lg hover:text-[#0198E9]"
              onClick={() => setOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

