import "./lesson.scss"
import lesson from "../../assets/lesson.png"
import circle from '../../assets/circle.png'
import square from '../../assets/square.png'
import Ellipse from '../Ellipse/ellipse'
import Button from "../Button/Button"

const LessonSection = () => {
  return (
    <section className="lesson-section container">

      <img className="circle-icon" src={circle} alt="vector"/>
      <img className="square-icon" src={square} alt="vector"/>

      <div className="lesson-container">
      
        <div className="lesson-image">
        <Ellipse size={300} color="#F4B24E" bg="#FEF9EC"  top="10px" left="-35px" zIndex={1}/> 
        <Ellipse size={100} color="#583DCA" bottom="-30px" right="-30px"   zIndex={0} />

          <img src={lesson} alt="dashboard"/>

        </div>

        <div className="lesson-text">
          <h1>HASSLE FREE MANAGEMENT</h1>
          <h2>Lesson Scheduling & Calendar</h2>

          <p>
          Effortlessly organize and manage lessons with an intuitive drag- and-drop calendar designed for ultimate convenience. Set up recurring sessions, adjust tutor availability with ease, and minimize missed appointments using automated reminders. <br/> This streamlined scheduling system ensures a smooth experience for both students and tutors, reducing administrative burdens and maximizing efficiency.
          </p>
          <Button text="Book a demo" className="demo-btn" />


        </div>

      </div>

    </section>
  )
}

export default LessonSection