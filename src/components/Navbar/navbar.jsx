import "./navbar.scss"
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="logo">
        <img src={logo} alt="Seemi Logo" />
      </div>
    </nav>
  )
}

export default Navbar