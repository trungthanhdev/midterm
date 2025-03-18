

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
    } catch {
      setError("Invalid email or password. Please try again.");
    }
  };

  if (user) return <Navigate to="/" />;

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2>Login to Movie App</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="w-25" onSubmit={handleLogin}>
        {["email", "password"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type={field}
              name={field}
              className="form-control"
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default SignIn;

