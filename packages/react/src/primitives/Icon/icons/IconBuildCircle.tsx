import React from 'react';
export const IconBuildCircle = (props) => {
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
          <path
            d="M10,3c-3.86,0-7,3.14-7,7s3.14,7,7,7s7-3.14,7-7S13.86,3,10,3z M12.02,13.5 l-2.26-2.26c-0.84,0.26-1.79,0.08-2.45-0.59C6.54,9.88,6.4,8.73,6.88,7.81l1.63,1.63l1.03-1.03L7.91,6.78 c0.92-0.48,2.07-0.34,2.84,0.43c0.74,0.74,0.9,1.84,0.48,2.74l2.17,2.17L12.02,13.5z"
            fill-rule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
};