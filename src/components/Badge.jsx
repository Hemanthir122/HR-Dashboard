import React from 'react';

const Badge = ({ text, className = '', ...props }) => {
  return (
    <span
      className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium truncate max-w-full ${className}`}
      {...props}
    >
      {text}
    </span>
  );
};

export default Badge;