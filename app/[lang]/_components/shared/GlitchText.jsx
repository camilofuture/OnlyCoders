"use client";

import React, { useState, useEffect } from 'react';

/**
 * GlitchText Component
 * Alternates between two font families with a glitch animation effect
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Text content to display
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @returns {React.ReactElement} - Rendered component
 */

const GlitchText = ({ children, className, style, ...props }) => {
  const [currentFont, setCurrentFont] = useState('var(--font-global)');
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Function to toggle between fonts with glitch effect
    const toggleFont = () => {
      setIsGlitching(true);
      
      // After a short delay, change the font and stop the glitch animation
      setTimeout(() => {
        setCurrentFont(prev => 
          prev === 'var(--font-global)' ? 'var(--font-aux-1)' : 'var(--font-global)'
        );
        
        // Small delay before removing the glitch class to complete the animation
        setTimeout(() => {
          setIsGlitching(false);
        }, 300);
      }, 100);
    };

    // Set up the interval to toggle fonts every 3 seconds
    const intervalId = setInterval(toggleFont, 3000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      className={`glitch-container ${isGlitching ? 'glitching' : ''} ${className || ''}`} 
      style={{ 
        fontFamily: currentFont,
        ...style 
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlitchText;
