import React from 'react';
export const IconPrivateConnectivity = (props) => {
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
      <path d="M15.45,9.25C15.08,6.57,12.78,4.5,10,4.5S4.92,6.57,4.55,9.25H2v1.5h2.55C4.92,13.43,7.22,15.5,10,15.5s5.08-2.07,5.45-4.75 H18v-1.5H15.45z M12.5,12c0,0.28-0.22,0.5-0.5,0.5H8c-0.28,0-0.5-0.22-0.5-0.5V9c0-0.28,0.22-0.5,0.5-0.5h0.5V8 c0-0.82,0.67-1.5,1.5-1.5s1.5,0.68,1.5,1.5v0.5H12c0.28,0,0.5,0.22,0.5,0.5V12z M10.75,8v0.5h-1.5V8c0-0.41,0.34-0.75,0.75-0.75 S10.75,7.59,10.75,8z M9.4,10.5c0-0.33,0.27-0.6,0.6-0.6s0.6,0.27,0.6,0.6c0,0.33-0.27,0.6-0.6,0.6S9.4,10.83,9.4,10.5z" />
    </svg>
  );
};