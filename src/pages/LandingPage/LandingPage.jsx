
import IntegrationsSection from "../../Sections/IntegrationSection"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/HeroSection/hero"
import LessonSection from "../../components/LessonSection/Lesson"
import Management from "../../components/Management/Management"
import Support from "../../components/support/support"
import "./LandingPage.scss"
const LandingPage = () => {
  return (
    <>
     <div className="page-container">
  <Hero/>
  <LessonSection/>
  <IntegrationsSection/>
  <Support/>
  <Management/>
  <Footer/>
</div>
      
    </>
  )
}

export default LandingPage