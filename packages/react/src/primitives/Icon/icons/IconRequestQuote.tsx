import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconRequestQuote = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V8H18V20H6ZM11 19H13V18H14C14.55 18 15 17.55 15 17V14C15 13.45 14.55 13 14 13H11V12H15V10H13V9H11V10H10C9.45 10 9 10.45 9 11V14C9 14.55 9.45 15 10 15H13V16H9V18H11V19Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
