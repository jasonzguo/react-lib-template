import React, { ReactNode, useContext } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import Button from '../Button';
import { ConfigContext } from '../ConfigProvider';
import type { UIKitFC } from '../../types/react-extensions';
import type { GetContainerFunc } from '../../types/funcs';

// interfaces
export interface ModalProps {
  headerTitle: string;
  children: ReactNode | string;
  getContainer?: HTMLElement | GetContainerFunc
}

// main
export const Modal: UIKitFC<ModalProps> = (props) => {
  const {
    headerTitle,
    children,
    getContainer
  } = props;

  if (!headerTitle) {
    throw Error('Please provider "headerTitle" property for Modal')
  }

  if (!getContainer) {
    throw Error('Please provider "container" property for Modal');
  }

  const { namespace } = useContext(ConfigContext);
  const { baseClassName } = Modal.constants;
  const componentClassName = clsx(`${namespace}-${baseClassName}`);
  const headerClassName = `${namespace}-${baseClassName}__header`;
  const footerClassName = `${namespace}-${baseClassName}__footer`;

  const container = getContainer instanceof Function
    ? getContainer()
    : getContainer;

  const modal = (
    <div className={componentClassName}>
      <div className={headerClassName}>{headerTitle}</div>
      {children}
      <div className={footerClassName}>
        <Button>OK</Button>
      </div>
    </div>
  );

  return createPortal(modal, container);
};

Modal.constants = {
  baseClassName: "modal"
};

Modal.defaultProps = {
  getContainer: document.body
};

export default Modal;
