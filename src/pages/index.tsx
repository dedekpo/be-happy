import type { NextPage } from 'next'
import Cards from '../components/Cards'
import Contact from '../components/Contact'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Valores from '../components/Valores'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Features />
      <Valores />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
