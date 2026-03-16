import "./signup.scss";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../Button/Button";
import { signupUser } from "../../api/authApi";

const SignupForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessSize: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
  
    setLoading(true);  // 🚀 start loading
    setMessage("");    // clear previous messages
  
    try {
      const response = await signupUser(formData);
      console.log("API Response:", response);
      setMessage("Signup successful! We will notify you shortly.");
  
      // Optional: reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        businessName: "",
        businessSize: "",
        agree: false
      });
  
    } catch (error) {
      console.error("Signup error:", error.message);
      setMessage(`Signup failed: ${error.message}`);
    } finally {
      setLoading(false);  // ✅ stop loading
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h3>Get <span>30 days</span> free!</h3>

      {message && <p className="form-message">{message}</p>}

      <div className="form-fields">

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          className="full"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <div className="password-field">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <span onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <input
          className="full"
          type="text"
          name="businessName"
          placeholder="Business Name (Optional)"
          value={formData.businessName}
          onChange={handleChange}
        />

        <input
          className="full"
          type="text"
          name="businessSize"
          placeholder="Business Size"
          value={formData.businessSize}
          onChange={handleChange}
        />

        <div className="checkbox-row">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <p>
            I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>
          </p>
        </div>

        <Button
  text={loading ? "Submitting..." : "Create My Tutor Account"}
  className="signup-btn"
  type="submit"
  disabled={loading}
/>

      </div>
    </form>
  );
};

export default SignupForm;