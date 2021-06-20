import React, { FC, ReactNode, useContext } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import { ConfigContext } from 'Components/ConfigProvider';
import type { GetContainerFunc } from 'Types/funcs';

// classes
const baseClassName = 'modal';

// interfaces
export interface ModalProps {
  headerTitle: string;
  children: ReactNode | string;
  getContainer?: HTMLElement | GetContainerFunc
}

// main
const Modal: FC<ModalProps> = ({
  headerTitle,
  children,
  getContainer
}) => {
  if (!getContainer) {
    throw Error('Please provider container for Modal');
  }

  const { namespace } = useContext(ConfigContext);

  const componentClassName = clsx(
    `${namespace}-${baseClassName}`
  );

  const headerClassName = `${namespace}-${baseClassName}__header`;

  const container = getContainer instanceof Function
    ? getContainer()
    : getContainer;

  const modal = (
    <div className={componentClassName}>
      <div className={headerClassName}>{headerTitle}</div>
      {children}
    </div>
  );

  return createPortal(modal, container);
};

Modal.defaultProps = {
  getContainer: document.body
};

export default Modal;
