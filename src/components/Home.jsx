import React from 'react';
import './home.css';
import { useAuth } from './AuthProvider.jsx';
import { auth } from '../../firebase'; // Ensure this path is correct
import { signOut } from 'firebase/auth';  
import { Link } from 'react-router-dom';

// Simple functional component for the homepage
export default function HomePage() {
  const { currentUser } = useAuth();
  const { userProfile } = useAuth();

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Sign out error", error));
  };
  return (
    <div className="homepage-container">
      {/* Header Section */}
      <header className="homepage-header">
        <nav className="navbar">
          <div className="nav-logo">
            <a href="/">MyApp</a>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {currentUser ? (
          // If user IS logged in
          <>
            <li>
              <span>Welcome, {userProfile.name || currentUser.email}</span>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
          </>
        ) : (
          // If user is NOT logged in
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
          </ul>
        </nav>
      </header>

      {/* Main Content (Hero Section) */}
      <main className="homepage-main">
        <section className="hero-section">
          <h1>Welcome to Our Website!</h1>
          <p>This is a simple and clean homepage built with React.</p>
          <button className="cta-button">Get Started</button>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="homepage-footer">
        <p>&copy; 2025 MyApp. All Rights Reserved.</p>
      </footer>
    </div>
  );
}