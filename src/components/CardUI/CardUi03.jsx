import seemi from "../../assets/seemi.png"
import feedback from "../../assets/feedback.png"
const CardUi03 = () => {
  return (
    <div className="card3">

      {/* Feedback Card */}
      <div className="feedback-card">
        <h5>Tutor Feedback & Review  <img src={feedback} alt="" className="feedback" /></h5>
       
        <p>Offer feedback to students and parents in a structured manner.</p>
        <a href="#">View Details →</a>
      </div>

      {/* Calendar badges */}
      <div className="calendar-badges">
        <div className="day red">Thu<br/>08</div>
        <div className="day gray">Thu<br/>08</div>
      </div>

      {/* Seemii badge */}
      <div className="seemii-tag"><img src={seemi} alt="" /></div>

      {/* Add tutor container */}
      <div className="add-tutor">

        <div className="add-title">+ Add New Tutor</div>

        {/* Tutor dashboard mini card */}
        <div className="tutor-dashboard">

          <div className="tutor-left">
            <div className="tutor-icon">📚</div>

            <div>
              <h6>Tutor Dashboard</h6>
              <span>Add Tutor</span>
            </div>
          </div>

          <div className="tutor-right">
            <span>Class</span>
            <strong>In Progress</strong>
            <span className="fee">$50</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default CardUi03;