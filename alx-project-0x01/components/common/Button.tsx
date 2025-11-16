import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, className = "", onClick }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
