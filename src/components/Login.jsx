import React, { useState } from "react";
import "./login.css";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app, auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Here you can add API call or authentication logic
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  async function handleGoogleSignIn(e) {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        console.log("User signed in with Google:", user);
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      background: 'linear-gradient(135deg, #bcbcbd 0%, #536e9fff 50%, #045199ff 100%)'
    }}>
      <div 
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          width: '320px',
          textAlign: 'center'
        }}
      >
        <h2 style={{
          marginBottom: '1.5rem',
          color: '#333'
        }}>Login</h2>

        <div style={{
          textAlign: 'left',
          marginBottom: '1rem'
        }}>
          <label style={{
            display: 'block',
            marginBottom: '0.4rem',
            fontWeight: '500',
            color: '#555'
          }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.7rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              outline: 'none',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => e.target.style.borderColor = '#007bff'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>

        <div style={{
          textAlign: 'left',
          marginBottom: '1rem'
        }}>
          <label style={{
            display: 'block',
            marginBottom: '0.4rem',
            fontWeight: '500',
            color: '#555'
          }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.7rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              outline: 'none',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => e.target.style.borderColor = '#007bff'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>

        <button 
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '0.8rem',
            background: '#007bff',
            border: 'none',
            color: '#fff',
            fontSize: '16px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s',
            boxSizing: 'border-box'
          }}
          onMouseEnter={(e) => e.target.style.background = '#0056b3'}
          onMouseLeave={(e) => e.target.style.background = '#007bff'}
        >
          Login
        </button>
        <p>or</p>
        <button className="auth-btn google-btn" onClick={handleGoogleSignIn}>Sign In with Google</button>
        <p style={{
          marginTop: '1rem',
          fontSize: '14px',
          color: '#555'
        }}>
          Don't have an account? <a href="/signup" style={{
            color: '#007bff',
            textDecoration: 'none'
          }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}