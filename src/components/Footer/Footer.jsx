import "./Footer.scss";
import footerbg from "../../assets/footer-bg.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className="footer-container">

      <img src={footerbg} alt="" className="footer-bg" />

      <div className="footer-content">

        {/* Left Section */}
        <div className="footer-left">
          <h2>Get Ready to started?</h2>

          <p>
            Create your <b>30-day free trial</b> and get started with TutorBird
            today!
          </p>

          <Button text="Get started" className="footer-btn" />

          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedinIn /></span>
            <span><FaInstagram /></span>
          </div>
        </div>

        {/* Features */}
        <div className="footer-col">
          <h4>Features</h4>
          <ul>
            <li>Student Management</li>
            <li>Calendar & Attendance</li>
            <li>Invoices & Payments</li>
            <li>Business Features</li>
            <li>Learning Management</li>
            <li>Multi-Tutor</li>
            <li>Student Portal</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Support</li>
            <li>Getting Started Guide</li>
            <li>Book a Demo</li>
            <li>Product Updates</li>
            <li>Free Worksheets</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col contact">
          <h4>Contact</h4>

          <p><FiMail className="contact-icon"/> support@seemii.com</p>

          <p><FiPhone className="contact-icon"/> <b>Toll Free (US & Canada):</b><br />1 234 567 8901</p>

          <p><FiPhone  className="contact-icon"/> <b>UK:</b><br />0123 456 7890</p>
          <p><FiPhone className="contact-icon" /> <b>UK:</b><br />0123 456 7890</p>

          <p><FiPhone className="contact-icon" /> <b>International:</b><br />+1 231 567 8901</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;