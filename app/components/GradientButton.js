// components/GradientButton.jsx
'use client';
import React from 'react';

export default function GradientButton({
  label = 'Click Me',
  onClick,
  className = '',
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradientBtn rounded-full px-7 py-3 font-dreiviertelfett text-[16px] font-[700] text-lightdark 
        hover:opacity-90 transition ${className}`}
    >
      {label}
    </button>
  );
}
