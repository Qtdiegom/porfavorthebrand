import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import CollectionGrid from '@/components/CollectionGrid'
import ProductStrip from '@/components/ProductStrip'
import DropThree from '@/components/DropThree'
import Cultura from '@/components/Cultura'
import Founder from '@/components/Founder'
import WhereToBuy from '@/components/WhereToBuy'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ background: '#030303' }}>
      <Navbar />
      <Hero />
      <Ticker />
      <CollectionGrid />
      <ProductStrip />
      <DropThree />
      <Cultura />
      <Founder />
      <WhereToBuy />
      <Contact />
      <Footer />
    </main>
  )
}
