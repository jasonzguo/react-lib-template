import React, { MouseEventHandler, useContext } from 'react';
import clsx from 'clsx';

import { ConfigContext } from '../ConfigProvider';
import type { UIKitFC } from '../../types/react-extensions';

// interfaces
export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  testId?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Description of Button component
 */
export const Button: UIKitFC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    loading,
    testId,
    children,
    onClick
  } = props;

  const { namespace } = useContext(ConfigContext);
  const { baseClassName } = Button.constants;

  const componentClassName = clsx(
    `${namespace}-${baseClassName}`,
    className,
    disabled ? `${namespace}-${baseClassName}--disabled` : '',
    loading ? `${namespace}-${baseClassName}--loading` : ''
  );

  const componentTestId = testId
    || `${namespace}-${baseClassName}`;

  return (
    <button
      data-testid={componentTestId}
      className={componentClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.constants = {
  baseClassName: 'button'
};

Button.defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  testId: ''
};

export default Button;
