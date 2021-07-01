import React, { useContext } from 'react';
import clsx from 'clsx';

import { ConfigContext } from '../ConfigProvider';
import type { UIKitFC } from '../../types/react-extensions';

// interfaces
export interface ButtonProps {
  className?: string,
  disabled?: boolean,
  loading?: boolean
};

// main
const Button: UIKitFC<ButtonProps> = ({
  className,
  disabled,
  loading,
  children
}) => {
  const { namespace } = useContext(ConfigContext);
  const { baseClassName } = Button.constants;
  const componentClassName = clsx(
    `${namespace}-${baseClassName}`,
    className,
    disabled ? `${namespace}-${baseClassName}--disabled` : '',
    loading ? `${namespace}-${baseClassName}--loading` : ''
  );

  return (
    <button className={componentClassName}>
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
  loading: false
};

export default Button;
