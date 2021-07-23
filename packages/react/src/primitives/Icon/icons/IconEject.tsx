import React from 'react';
export const IconEject = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-size={size}
      aria-label={ariaLabel}
      fill={fill}
      {...rest}
      viewBox="0 0 24 24"
      className="amplify-ui-icon"
    >
      <path d="M0 24V0h24v24H0z" fill="none" />
      <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
    </svg>
  );
};