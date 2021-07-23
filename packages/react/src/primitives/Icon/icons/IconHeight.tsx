import React from 'react';
export const IconHeight = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <g>
        <rect fill="none" height="20" width="20" />
      </g>
      <g>
        <g />
        <polygon points="11,7 14,7 10,3.01 6,7 9,7 9,13 6,13 10,16.99 14,13 11,13" />
      </g>
    </svg>
  );
};