import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:9090/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        setIsLoading(false);
        const responseData = await response.json();
        console.log("Login successful:", responseData);
        navigate("/");
      } else {
        setIsLoading(false);
        setError("Invalid Credentials");
        console.log("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('https://besthqwallpapers.com/Uploads/17-6-2019/95698/thumb2-black-wavy-background-3d-waves-texture-3d-art-waves-textures-3d-waves-background.jpg')",
        backgroundSize: "cover",
      }}
    >
      {error ? <div style={{ color: "red" }}>{error}</div> : null}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          border: "3px solid #000000", // Dark black border
          width: "400px", // Increased width
        }}
      >
        <p style={{ display: "inline", fontSize: "24px", fontWeight: "bold" }}>Login</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleLoginChange}
          style={{
            width: "100%",
            padding: "15px", // Increased padding
            margin: "15px 0", // Increased margin
            borderRadius: "20px",
            border: "1px solid #FFFFFF",
            outline: "none",
            backgroundColor: "#333333",
            color: "#FFFFFF",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          style={{
            width: "100%",
            padding: "15px", // Increased padding
            margin: "15px 0", // Increased margin
            borderRadius: "20px",
            border: "1px solid #FFFFFF",
            outline: "none",
            backgroundColor: "#333333",
            color: "#FFFFFF",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px", // Increased padding
            marginTop: "15px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#006400",
            color: "white",
            cursor: "pointer",
          }}
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <a
          href="#"
          style={{
            marginTop: "15px",
            color: "#007bff",
            textDecoration: "none",
          }}
        >
          Forgot Password?
        </a>
      </form>
    </div>
  );
}

export default Login;
