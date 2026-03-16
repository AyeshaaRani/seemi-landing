import sparkle from '../../assets/sparkle.png'
import vector1 from '../../assets/Vector1.png'
const CardUi01 = () => {
  return (
    <>
    <img src={vector1} alt="" className='vector1'/>
      <div className="floating-card rotate-1">
        
        <input type="checkbox" checked readOnly />
        <span>Intuitive drag-and-drop calendar.</span>
      </div>

      <div className="floating-card rotate-2">
        <input type="checkbox" />
        <span>Manage Tutor Availability</span>
      </div>
      
      <div className="floating-card rotate-3 small">
        
  <input type="checkbox" />
  <h5>Effortless Scheduling</h5>
  <p>Easily schedule lessons with an intuitive drag-and-drop calendar.</p>
  <div className="progress"></div>
  
</div>
<img src={sparkle} alt="" className='sparkle'/>

    </>
  );
}

export default CardUi01;