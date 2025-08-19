import React from 'react';
import './Loader.css';

// Add "export default" here
export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  );
}