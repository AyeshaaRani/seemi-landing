import IntegrationCard from "../components/IntegrationCard/IntegrationCard"
import Ellipse from "../components/Ellipse/ellipse"
import "./IntegrationSection.scss"

const cards = [
  {
    number: "01",
    title: "Lesson Scheduling & Calendar",
    description:
      "Effortlessly organize and manage lessons with an intuitive drag-and-drop calendar designed for ultimate convenience.",
    bgColor: "#FEECEC",
    ellipseColor: "#80CC48 "
  },
  {
    number: "02",
    title: "Billing & Payments",
    description:
      "Generate and send invoices instantly, accept secure online payments through multiple gateways, and track outstanding balances with real-time financial insights.",
    bgColor: "#FAFCEE",
    ellipseColor: "#80CC48 ",
  },
  {
    number: "03",
    title: "Student & Lesson Tracking",
    description:
      "Maintain detailed lesson notes and progress reports, track attendance and performance metrics, and provide structured feedback to students and parents.",
    bgColor: "#EEF8FB",
    ellipseColor: "#FFBC4A",
  },
  {
    number: "04",
    title: "Parents & Students Portal",
    description:
      "Provide an easy-to-use dashboard for parents and students to view schedules, progress reports, and payments, while enabling direct messaging for seamless communication.",
    bgColor: "#ECFEF1",
    ellipseColor: "#583DCA ",
  },
  {
    number: "05",
    title: "Automated Communication",
    description:
      "Send automated email and SMS reminders for lessons and payments, ensuring timely notifications, while keeping parents informed with regular progress updates for better engagement.",
    bgColor: "#EEEEFC",
    ellipseColor: "#80CC48 ",
  },
  {
    number: "06",
    title: "Business Reports & Insights",
    description:
      "Gain valuable insights into your business operations with our in-depth reporting tools. Track performance, monitor growth, and make data-driven decisions with ease.",
    bgColor: "#FBEEEE",
    ellipseColor: "#FFBC4A",
  }
]

const IntegrationsSection = () => {
  return (
    <section className="integrations-section container">

      <h4 className="section-tag">PERFORMANCE INSIGHTS</h4>
      <h2 className="section-title">Seamless Business Integrations</h2>

      <p>
        Seemi seamlessly integrates with popular payment gateways like Stripe,
        allowing businesses to process transactions securely and efficiently.
      </p>

      <div className="integration-grid">

        {cards.map((card) => (
          <div className="card-wrapper" key={card.number}>

            <Ellipse
              size={100}
              color={card.ellipseColor}
             
              bottom="-30px"
              right="-20px"
            />

            <IntegrationCard
              number={card.number}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
            />

          </div>
        ))}

      </div>

    </section>
  )
}

export default IntegrationsSection