import './Management.scss'
import UFO from '../../assets/UFO.png'
import planet from "../../assets/planet.png"
import star from '../../assets/stars.png'
import Button from '../Button/Button'

const Management = () => {
  return (
    <div className="management-container">
        <img className='star' src={star} alt="" />
        <img  className='planet'src={planet} alt="ufo" />
    <div className='management-section'>
      <h1>Management</h1>
      <h2>Simplified Management</h2>
      <p>Seemi efficiently manages the profiles and data of students, tutors, and staff in one centralised platform. It allows administrators to create, update, and track individual profiles, ensuring that all relevant information—such as schedules, performance records, and contact details—is easily accessible. </p>
  
      <Button text="Book A Demo" className="support-btn" />
    </div>
    <img className='ufo' src={UFO} alt="" />
    </div>
  )
}

export default Management
