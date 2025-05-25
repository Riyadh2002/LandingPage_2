import Featurs from "./components/Featurs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonial"
import Workflow from "./components/Workflow"


function App() {


  return (
    <>
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero/>
      <Featurs/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
     </div>
     
     
    </>
  )
}

export default App
