import { AriaProps, BaseComponentProps } from './base';
import { BaseStyleProps } from './style';
import { AriaRole, CSSProperties } from 'react';

export type ViewAsHTMLElementTypes = keyof JSX.IntrinsicElements;

export interface ViewProps
  extends BaseComponentProps,
    BaseStyleProps,
    AriaProps {
  as?: ViewAsHTMLElementTypes;

  role?: AriaRole;

  isDisabled?: boolean;

  style?: CSSProperties;
}
