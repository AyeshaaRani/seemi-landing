import "./support.css"
import lesson from "../../assets/lesson.png"
import Ellipse from "../Ellipse/ellipse"
import Button from "../Button/Button";

const Support = () => {
  return (
    <div className="support-container">

      <div className="support-section">

        <div className="image">
          <Ellipse size={90} color="#583DCA" left="-25px" top="-20px" />
          <Ellipse size={190} color="#583DCA" bottom="-20px" left="-10px" />

          <img src={lesson} alt="support" />
        </div>

        <div className="support-text">
          <h1>
            24/7 Support <br/>
            for Your <br/>
            Success
          </h1>

          <Button text="Book A Demo" className="support-btn" />
        </div>

      </div>

    </div>
  )
}

export default Support