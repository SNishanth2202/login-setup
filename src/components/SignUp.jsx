import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from 'react-router-dom'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../../firebase"; 
import { doc, setDoc } from "firebase/firestore";
import { toast , ToastContainer} from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Signup() {
  const navigate = useNavigate(); 
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; 
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          createdAt: new Date()
        });
        toast.success("Account created successfully!", { position: 'top-center' });
        navigate("/");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: 'top-center' });
    }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // API call or signup logic goes here
  };

  // Google OAuth signup

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          createdAt: new Date()
        });
      }
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          createdAt: new Date()
        });
        toast.success("Signed up with Google!", { position: 'top-center' });
        navigate("/");
      }
    } catch (error) {
      toast.error(`Google Sign Up Error: ${error.message}`, { position: 'top-center' });
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-btn">Sign Up</button>
        <p>or</p>
        <button className="auth-btn google-btn" onClick={handleGoogleSignUp}>Sign Up with Google</button>
        <p className="switch-text">
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
}
