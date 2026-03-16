import sparkle from '../../assets/sparkle.png'
import vector1 from '../../assets/Vector1.png'
import vector2 from '../../assets/vector2.png'
const CardUi04 = () => {
    return (
      <div className="Card04">
        <div className="floating-card rotate-1">
          <input type="checkbox" checked readOnly />
          <span>Intuitive drag-and-drop calendar.</span>
        </div>
  
        <div className="team-card">
        <h5>Team Members Tracking</h5>
        <p>Collaborative Space</p>

        <div className="search">
          <span>🔍</span>
          <input placeholder="Search" />
        </div>

        <div className="expand-icon">↗</div>
      </div>
  
      {/* <img src={sparkle} alt="" className='sparkle'/> */}
      <img src={vector1} alt="" className='vector1' />
      <img src={vector2} alt="" className='vector2' />


        </div>
    )
  }
  
  export default CardUi04