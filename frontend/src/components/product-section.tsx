"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Product {
  _id: string
  name: string
  image: string
  price: number
  originalPrice: number
  save: number
}

export function ProductSection() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      const response = await fetch('https://ecommerce-website-production-1a3a.up.railway.app/products');
      const data = await response.json();
      // Update the products state with the fetched data
      setProducts(data);
      } catch (error) {
      console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [])

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Grab the best deal on Smartphones</h2>
          <Link href="#" className="text-[#0198E9]">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product._id} className="rounded-lg border p-4">
              <div className="relative mb-4 pt-[100%]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-medium">{product.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-lg font-bold">₹{product.price}</span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              </div>
              <p className="mt-1 text-sm text-green-600">
                Save - ₹{product.save}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

