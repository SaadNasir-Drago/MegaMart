import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#0198E9] text-white">
      <div className="container mx-auto px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">MegaMart</h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>Contact Us</p>
              <p>WhatsApp</p>
              <p>+1 202-918-2132</p>
              <p>Call Us</p>
              <p>+1 202-918-2132</p>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Download App</h3>
              <div className="flex gap-2">
                <Link href="#">
                  <Image
                    src="/footer/image 11.png"
                    alt="App Store"
                    width={100}
                    height={35}
                    className="sm:w-[120px] sm:h-[40px]"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/footer/image 10.png"
                    alt="Google Play"
                    width={100}
                    height={35}
                    className="sm:w-[120px] sm:h-[40px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Most Popular Categories</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link href="#">Staples</Link></li>
              <li><Link href="#">Beverages</Link></li>
              <li><Link href="#">Personal Care</Link></li>
              <li><Link href="#">Home Care</Link></li>
              <li><Link href="#">Baby Care</Link></li>
              <li><Link href="#">Vegetables & Fruits</Link></li>
              <li><Link href="#">Snacks & Foods</Link></li>
              <li><Link href="#">Dairy & Bakery</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Customer Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">E-waste Policy</Link></li>
              <li><Link href="#">Cancellation & Return Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm">
          © 2022 All rights reserved. Reliance Retail Ltd.
        </div>
      </div>
    </footer>
  )
}

