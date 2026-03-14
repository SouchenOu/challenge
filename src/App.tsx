import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SolutionSection from './components/SolutionSection'
import CustomerJourney from './components/CustomerJourney'
import BenefitsSection from './components/BenefitsSection'
import BackofficeSection from './components/BackofficeSection'
import PricingSection from './components/PricingSection'
import GameCatalog from './components/GameCatalog'
import StatsBar from './components/StatsBar'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <SolutionSection />
      <CustomerJourney />
      <BenefitsSection />
      <BackofficeSection />
      <PricingSection />
      <GameCatalog />
      <StatsBar />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
