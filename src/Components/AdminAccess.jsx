import React, { useEffect, useState } from "react";
import AdminPanel from "./AdminPanel"; // Your admin panel component
import { useNavigate } from "react-router-dom";

const AdminAccess = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminAuthenticated");
    if (isLoggedIn) setIsAuthenticated(true);
  }, []);

  const handleLogin = () => {
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
    if (password === adminPassword) {
        localStorage.setItem("isAdminAuthenticated", "true");
      setIsAuthenticated(true);
      navigate("/adminpanel")
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (isAuthenticated) {
    return <AdminPanel />; // Render admin panel after successful authentication
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Admin Access</h2>
      <input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          padding: "10px",
          width: "100%",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Login
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminAccess;
