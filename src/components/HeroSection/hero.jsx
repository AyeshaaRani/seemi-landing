import "./hero.scss"
import SignupForm from "../Signup/signup"
import logo from "../../assets/logo.png"
import cloud from "../../assets/cloud.png"
import vector from "../../assets/abacus.png"
import cap from "../../assets/cap.png"
const Hero = () => {
  return (
    <section className="hero">

     

      <div className="hero-wrapper">

        <div className="hero-left">
        <div className="logo">
        <img src={logo} alt="Seemi Logo" />
      </div>
          <h1>
            Everything You Need <br/>
            To <span>Manage & Grow</span> <br/>
            Your Tutoring Business
          </h1>

          <p>
            <span className="highlight">Seemi</span> streamlines your tutoring business
            with real-time tools for<span style={{ fontWeight: 700 }}> scheduling, progress tracking, and payments.</span>
            Focus on teaching while we handle the rest
          </p>

        </div> 

        <SignupForm/>

      </div>
      <img className="hero-icon vector" src={vector} alt="vector"/>
  <img className="hero-icon cap" src={cap} alt="graduation cap"/>
      <div className="clouds">
  <img className="cloud-back" src={cloud} alt="cloud"/>
  <img className="cloud-front" src={cloud} alt="cloud"/>

<div className="footersection">
  <p>Gain valuable insights into your business operations with our in-depth reporting tools. Track performance, monitor growth, and make data-driven decisions with ease.</p>
</div>
</div>
    </section>
  )
}

export default Hero