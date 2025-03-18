import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    console.log("Logout button clicked");
    await logout();
    setLoading(false);
    navigate("/signin");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 text-center shadow" style={{ width: "350px" }}>
        <h3 className="mb-3">Are you sure you want to logout?</h3>
        
        <button 
          className="btn btn-danger w-100" 
          onClick={handleLogout} 
          disabled={loading}
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
}

export default Logout;
