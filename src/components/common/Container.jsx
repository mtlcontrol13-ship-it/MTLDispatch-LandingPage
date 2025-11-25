import React from "react";

/**
 * A responsive container component that centers content and applies consistent horizontal padding.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the container
 * @param {string} [props.className=""] - Additional CSS classes to apply to the container
 * @returns {JSX.Element} A div element with responsive padding and max-width constraints
 * 
 */
const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
