import { Header } from '../components/header'
import { HeroSlider } from '@/components/hero-slider'
import { ProductSection } from '@/components/product-section'
import { Categories } from '@/components/categories'
import { Footer } from '../components/footer'
import { ElectronicsBrands } from '../components/electronics-brands'
import { DailyEssentials } from '../components/daily-essentials'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-4">
          <HeroSlider />
          <ProductSection />
          <Categories />
          <ElectronicsBrands />
          <DailyEssentials />
        </div>
      </main>
      <Footer />
    </div>
  )
}

