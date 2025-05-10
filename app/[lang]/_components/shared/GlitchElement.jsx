"use client";

import React, { useState, useEffect } from 'react';

/**
 * GlitchElement Component
 * Creates a geometric element with a glitch effect
 * 
 * @param {Object} props - Component props
 * @param {Object} props.style - Inline styles for positioning and dimensions
 * @returns {React.ReactElement} - Rendered component
 */
const GlitchElement = ({ style }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to trigger random glitch effect
    const triggerGlitch = () => {
      // Random chance of glitching (30%)
      if (Math.random() < 0.3) {
        setIsGlitching(true);
        
        // Random offset for the glitch effect
        setGlitchOffset({
          x: (Math.random() * 10 - 5),
          y: (Math.random() * 10 - 5)
        });
        
        // End glitch effect after a short duration
        setTimeout(() => {
          setIsGlitching(false);
        }, 150 + Math.random() * 200);
      }
    };

    // Set up the interval to trigger glitch randomly
    const intervalId = setInterval(triggerGlitch, 2000 + Math.random() * 3000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const glitchStyle = isGlitching ? {
    transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
    opacity: Math.random() * 0.5 + 0.5,
    transition: 'none'
  } : {
    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
  };

  return (
    <div 
      style={{
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 1,
        ...style,
        ...glitchStyle
      }}
    />
  );
};

export default GlitchElement;
