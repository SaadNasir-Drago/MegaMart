import Image from "next/image";
import Link from "next/link";

const essentials = [
  {
    name: "Daily Essentials",
    image: "/daily-essentials/41624-7-groceries-hd-download-hd-png 1.png",
    discount: "UP to 50% OFF",
  },
  {
    name: "Vegetables",
    image: "/daily-essentials/54018-9-grocery-free-hq-image 2.png",
    discount: "UP to 50% OFF",
  },
  {
    name: "Fruits",
    image: "/daily-essentials/pngegg 1.png",
    discount: "UP to 50% OFF",
  },
  {
    name: "Strawberry",
    image: "/daily-essentials/23410-4-strawberry-photo 1.png",
    discount: "UP to 50% OFF",
  },
  {
    name: "Mango",
    image: "/daily-essentials/22136-3-mango-fruit 1.png",
    discount: "UP to 50% OFF",
  },
  {
    name: "Cherry",
    image: "/daily-essentials/35763-7-cherry-fruit-file 1.png",
    discount: "UP to 50% OFF",
  },
];

export function DailyEssentials() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-semibold">Daily Essentials</h2>
          <Link href="#" className="text-sm text-[#0198E9]">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {essentials.map((item) => (
            <Link key={item.name} href="#" className="group block">
              <div className="relative aspect-square mb-2 flex items-center justify-center">
                {/* Flexbox for centering */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="object-cover rounded-lg" 
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-xs text-[#0198E9]">{item.discount}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
