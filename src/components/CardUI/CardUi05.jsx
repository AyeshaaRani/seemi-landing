import team from '../../assets/team.png'
import Vector2 from '../../assets/Vector2.png'
const CardUi05 = () => {
    return (
      <>
        <div className="date-badge05">
          <span>Thurs</span><br/>
          <strong>08</strong>
        </div>
  
        <div className="member-card email" >
          <img src="https://i.pravatar.cc/40" alt="" />
  
          <div>
            <h5>Nouman Khan</h5>
            <p >mohammadnouman524@gmail.com</p>
          </div>
  
          <span>✉</span>
        </div>
        <img src={team} alt="" className='team' /> 
        <img src={Vector2} alt="" className='vector2' />
        <div className="team-card">
          <h5>Team Members Tracking</h5>
          <p>Collaborative Space</p>
  
          <div className="search">
            <span>🔍</span>
            <input placeholder="Search" />
          </div>
  
          <div className="expand-icon">↗</div>
          
        </div>
      </>
    )
  }
  
  export default CardUi05