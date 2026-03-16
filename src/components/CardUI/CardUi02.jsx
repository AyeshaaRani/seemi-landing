import team from '../../assets/team.png'
import vector2 from '../../assets/vector2.png'
const CardUi02 = () => {
    return (
      <div className="card2">
       <img src={team} alt="" className='team' /> 
         <div className="team-card">
          <h5>Team Members Tracking</h5>
          <p>Collaborative Space</p>
  
          <div className="search">
            <span>🔍</span>
            <input placeholder="Search" />
          </div>
  
          <div className="expand-icon">↗</div>
        </div>
  
        <div className="member-card">
          <div className="avatar">NK</div>
  
          <div>
            <h5>Nouman Khan</h5>
            <p>mohammadnouman524@gmail.com</p>
          </div>
<img src={vector2} alt="" className='vector2' />
        </div>
       
      </div>
    )
  }
  
  export default CardUi02