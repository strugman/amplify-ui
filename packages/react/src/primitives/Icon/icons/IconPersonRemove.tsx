import React from 'react';
export const IconPersonRemove = (props) => {
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
          <path d="M8,11c2,0,6,0.96,6,2.86V16H2v-2.14C2,11.96,6,11,8,11z" />
          <circle cx="8" cy="7" r="3" />
          <rect height="1" width="4" x="13" y="9" />
        </g>
      </g>
    </svg>
  );
};