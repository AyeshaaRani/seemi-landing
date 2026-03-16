import arrow from "../../assets/arrow.png"
import arrow2 from "../../assets/arrow2.png"
const CardUi06 = () => {
    return (
      <div className="card06">
        <img src={arrow} alt="" className="arrow" />
        <img src={arrow2} alt="" className="arrow2" />

        <div className="feedback-card">
        <h5>Tutor Feedback & Review</h5>
        <p>Offer feedback to students and parents in a structured manner.</p>
        <a href="#">View Details →</a>
      </div>
  
        <div className="floating-card rotate-2 small">
          <input type="checkbox" />
          <div>
            <strong>Effortless Scheduling</strong>
            <p>Easily schedule lessons with an intuitive drag-and-drop calendar.</p>
          </div>
  
          <div className="progress"></div>
        </div>
  
        
      </div>
    )
  }
  
  export default CardUi06