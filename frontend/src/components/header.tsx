'use client'

import Link from 'next/link'
import { Search, ShoppingCart, ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { MobileMenu } from './mobile-menu'

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

export function Header() {
  return (
    <header className="w-full">
      <div className="bg-[#F8F8F8] py-2 px-4 text-sm text-gray-600">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>Welcome to worldwide MegaMart!</p>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span>Deliver to: 423651</span>
            <Link href="#">Track your order</Link>
            <Link href="#" className="hidden sm:block">All Offers</Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MobileMenu />
            <Link href="/" className="text-xl sm:text-2xl font-bold text-[#0198E9]">
              MegaMart
            </Link>
          </div>
          
          <div className="hidden sm:flex relative flex-1 max-w-2xl">
            <Input
              type="search"
              placeholder="Search essentials, groceries and more..."
              className="w-full pl-10 pr-4 h-11 rounded-md border-gray-200"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/auth" className="hidden sm:block text-sm">
              Sign Up/Sign In
            </Link>
            <Link href="/cart" className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="hidden sm:block text-sm">Cart</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-4 sm:hidden relative">
          <Input
            type="search"
            placeholder="Search essentials, groceries and more..."
            className="w-full pl-10 pr-4 h-11 rounded-md border-gray-200"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        
        <nav className="mt-4 hidden lg:block">
          <ul className="flex items-center justify-center gap-8">
            {categories.map((category) => (
              <li key={category.name}>
                <Link 
                  href={category.href}
                  className="flex items-center gap-1 text-sm hover:text-[#0198E9]"
                >
                  {category.name}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

