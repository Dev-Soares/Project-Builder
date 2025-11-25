import Hero from "../components/mainPageSections/Hero"
import Details from "../components/mainPageSections/Details"
import Guide from "../components/mainPageSections/Guide"
import CallAction from "../components/mainPageSections/CallAction"
import Footer from "../components/smallComponents/Footer"
import Navbar from "../components/smallComponents/Navbar"


const MainPage = () => {

  return (
    <main className="flex flex-col bg-gray-900"> 
    <Navbar />
      <Hero />
      <Details />
      <Guide />
      <CallAction />
      <Footer />
    </main>
  )
}

export default MainPage
