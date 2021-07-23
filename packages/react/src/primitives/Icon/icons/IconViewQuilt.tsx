import React from 'react';
export const IconViewQuilt = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <rect fill="none" height="20" width="20" />
      <path d="M8,15v-4.5h4V15H8z M8,5v4.5h9V5H8z M7,15V5H3v10H7z M13,10.5V15h4v-4.5H13z" />
    </svg>
  );
};