import React from 'react';
export const IconPlaylistPlay = (props) => {
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
          <polygon points="13,10.5 13,17 18,13.75" />
          <rect height="1.5" width="9" x="3" y="5" />
          <rect height="1.5" width="6" x="3" y="11.25" />
          <rect height="1.5" width="9" x="3" y="8.12" />
        </g>
      </g>
    </svg>
  );
};