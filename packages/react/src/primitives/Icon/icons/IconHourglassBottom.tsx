import React from 'react';
export const IconHourglassBottom = (props) => {
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
        <path d="M6,17h8v-4l-3-3l3-3V3H6v4l3,3l-3,3V17z M7,6.59V4h6v2.59l-3,3L7,6.59z" />
      </g>
    </svg>
  );
};