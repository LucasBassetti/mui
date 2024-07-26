import { OverrideProps } from '@temp-mui/types';
import { BoxTypeMap } from '@temp-mui/system';
import { Theme } from '../styles/types';

export type BoxSlot = 'root';

export type BoxProps<
  D extends React.ElementType = BoxTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<BoxTypeMap<P, D, Theme>, D>;

export interface BoxOwnerState extends BoxProps {}
