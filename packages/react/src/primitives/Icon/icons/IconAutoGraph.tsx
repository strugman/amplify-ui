import React from 'react';
export const IconAutoGraph = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <rect fill="none" height="20" width="20" />
      <path d="M11.72,8.28L10,7.5l1.72-0.78L12.5,5l0.78,1.72L15,7.5l-1.72,0.78L12.5,10L11.72,8.28z M3.5,12l0.78-1.72L6,9.5L4.28,8.72 L3.5,7L2.72,8.72L1,9.5l1.72,0.78L3.5,12z M7,8l0.94-2.06L10,5L7.94,4.06L7,2L6.06,4.06L4,5l2.06,0.94L7,8z M17.88,6.5l-5.61,6.31 L9,9.54l-6,6.01l1.06,1.06L9,11.67L12.33,15L19,7.5L17.88,6.5z" />
    </svg>
  );
};