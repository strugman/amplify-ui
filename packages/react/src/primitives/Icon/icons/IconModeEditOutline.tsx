import React from 'react';
export const IconModeEditOutline = (props) => {
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
          <polygon points="11.62,5.38 3,14 3,17 6,17 14.62,8.38" />
          <path d="M16.71,4.88l-1.59-1.59c-0.39-0.39-1.02-0.39-1.41,0l-1.03,1.02l3,3l1.03-1.02C17.1,5.9,17.1,5.27,16.71,4.88z" />
        </g>
      </g>
    </svg>
  );
};