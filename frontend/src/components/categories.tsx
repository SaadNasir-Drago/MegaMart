import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    name: 'Mobile',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Cosmetics',
    image: '/categories/image 3 (1).png',
  },
  {
    name: 'Electronics',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Furniture',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Watches',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Decor',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Accessories',
    image: '/placeholder.svg?height=100&width=100',
  },
]

export function Categories() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-semibold">Shop From Top Categories</h2>
          <Link href="#" className="text-sm text-[#0198E9]">
        View All
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4">
          {categories.map((category) => (
        <Link
          key={category.name}
          href="#"
          className="flex flex-col items-center gap-2 p-2 sm:p-4 rounded-lg hover:bg-gray-50"
        >
          <div className="relative h-50 w-50 sm:h-28 sm:w-28">
            <Image
          src='/categories/Ellipse 41.png'
          alt='ellipse'
          height={700}
          width={700}
          className="absolute inset-0"
            />
          </div>
          <span className="text-xs sm:text-sm text-center">{category.name}</span>
        </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

