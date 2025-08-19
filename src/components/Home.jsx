import React from 'react';
import './home.css';

// Simple functional component for the homepage
export default function HomePage() {
  return (
    <div className="homepage-container">
      {/* Header Section */}
      <header className="homepage-header">
        <nav className="navbar">
          <div className="nav-logo">
            <a href="/">MyApp</a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
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