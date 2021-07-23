import React from 'react';
export const IconQuickreply = (props) => {
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
          <g>
            <path d="M17,4c0-0.55-0.45-1-1-1H4C3.45,3,3,3.45,3,4v13l3-3h7V9h4V4z" />
          </g>
          <g>
            <polygon points="18,13 16.4,13 17.64,10 14,10 14,14.36 15.45,14.36 15.45,18" />
          </g>
        </g>
      </g>
    </svg>
  );
};