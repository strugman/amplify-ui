import React from 'react';
export const IconFemale = (props) => {
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
      <path d="M14.25,8.25C14.25,5.9,12.35,4,10,4S5.75,5.9,5.75,8.25c0,2.09,1.51,3.82,3.5,4.17V14h-1.5v1.5h1.5V17h1.5v-1.5h1.5V14h-1.5 v-1.58C12.74,12.07,14.25,10.34,14.25,8.25z M7.25,8.25C7.25,6.73,8.48,5.5,10,5.5s2.75,1.23,2.75,2.75S11.52,11,10,11 S7.25,9.77,7.25,8.25z" />
    </svg>
  );
};