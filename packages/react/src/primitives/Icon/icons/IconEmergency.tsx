import React from 'react';
export const IconEmergency = (props) => {
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
      <polygon points="16.81,7.8 15.31,5.2 11.5,7.4 11.5,3 8.5,3 8.5,7.4 4.69,5.2 3.19,7.8 7,10 3.19,12.2 4.69,14.8 8.5,12.6 8.5,17 11.5,17 11.5,12.6 15.31,14.8 16.81,12.2 13,10" />
    </svg>
  );
};