import "./IntegrationCard.scss"

import CardUI01 from "../CardUI/CardUi01"
import CardUI02 from "../CardUI/CardUi02"
import CardUI03 from "../CardUI/CardUi03"
import CardUI04 from "../CardUI/CardUi04"
import CardUI05 from "../CardUI/CardUi05"
import CardUI06 from "../CardUI/CardUi06"


const uiMap = {
  "01": CardUI01,
  "02": CardUI02,
  "03": CardUI03,
  "04": CardUI04,
  "05": CardUI05,
  "06": CardUI06,
}

const IntegrationCard = ({ number, title, description, bgColor }) => {

  const UIComponent = uiMap[number]

  return (
    <div className="integration-card" style={{ backgroundColor: bgColor }}>
 
      <div className="card-number">{number}</div>

      <h3>{title}</h3>

      <p>{description}</p>
      
      <div className="card-ui">
        {UIComponent && <UIComponent />}
      </div>
      
    </div>
  )
}

export default IntegrationCard