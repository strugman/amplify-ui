import React from 'react';
export const Icon5g = (props) => {
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
        <g>
          <path d="M12,10.5h2V12h-3V8h4c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1V9.5h-3V10.5z" />
        </g>
        <g>
          <path d="M9,8H6v1.5h2c0.55,0,1,0.45,1,1V12c0,0.55-0.45,1-1,1H5v-1h3v-1.5H5V7h4V8z" />
        </g>
      </g>
    </svg>
  );
};