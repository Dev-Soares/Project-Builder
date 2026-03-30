import Hero from "../components/mainPageSections/Hero"
import Details from "../components/mainPageSections/Details"
import TechGrid from "../components/mainPageSections/TechGrid"
import CallAction from "../components/mainPageSections/CallAction"
import Footer from "../components/smallComponents/Footer"
import Navbar from "../components/smallComponents/Navbar"
import { useTheme } from "../hooks/useTheme"

const MainPage = () => {
  const { dark } = useTheme()

  return (
    <main className={`flex flex-col transition-colors duration-300 ${dark ? 'bg-[#030712]' : 'bg-white'}`}>
      <Navbar />
      <Hero />
      {/* Transition gradient between Hero and Details */}
      <div
        className="w-full h-24 lg:h-32"
        style={{
          background: dark
            ? '#030712'
            : 'linear-gradient(180deg, #ede9fe 0%, #f9fafb 100%)',
        }}
      />
      <Details />
      <TechGrid />
      <CallAction />
      <Footer />
    </main>
  )
}

export default MainPage
