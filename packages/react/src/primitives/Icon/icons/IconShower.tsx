import React from 'react';
export const IconShower = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      data-size={size}
      aria-label={ariaLabel}
      fill={fill}
      {...rest}
      viewBox="0 0 24 24"
      className="amplify-ui-icon"
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <circle cx="8" cy="17" r="1" />
        <circle cx="12" cy="17" r="1" />
        <circle cx="16" cy="17" r="1" />
        <path d="M13,5.08V3h-2v2.08C7.61,5.57,5,8.47,5,12v2h14v-2C19,8.47,16.39,5.57,13,5.08z" />
        <circle cx="8" cy="20" r="1" />
        <circle cx="12" cy="20" r="1" />
        <circle cx="16" cy="20" r="1" />
      </g>
    </svg>
  );
};