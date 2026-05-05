import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import CollectionGrid from '@/components/CollectionGrid'
import Cultura from '@/components/Cultura'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#080808]">
      <Navbar />
      <Hero />
      <Ticker />
      <CollectionGrid />
      <Cultura />
      <Contact />
      <Footer />
    </main>
  )
}
