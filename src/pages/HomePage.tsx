import About from "../components/About"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Partners from "../components/Partners"
import RequestDemo from "../components/RequestDemo"
import Testimonials from "../components/Testimonials"


const HomePage = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Partners/>
       <Features/>
       <About/>
       <Testimonials/>
       <RequestDemo/>
       <Footer/>
    </>
  )
}

export default HomePage
