import { FunctionComponent } from 'react';

interface UiKitFunctionComponentConstants {
  baseClassName: string
};
interface UiKitFunctionComponent<T = {}> extends FunctionComponent<T> {
  constants: UiKitFunctionComponentConstants
}
export type UIKitFC<T = {}> = UiKitFunctionComponent<T>;