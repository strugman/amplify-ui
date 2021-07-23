import React from 'react';
export const IconPrivacyTip = (props) => {
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
        <rect fill="none" height="20" width="20" x="0" y="0" />
        <path d="M10,2.5L4,5.2v4.15c0,3.63,2.56,7.33,6,8.15c3.44-0.82,6-4.52,6-8.15V5.2L10,2.5z M10.5,13h-1V9h1V13z M10.5,8h-1V7h1V8z" />
      </g>
    </svg>
  );
};