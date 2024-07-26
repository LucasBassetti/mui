/* eslint-disable material-ui/no-empty-box */
import * as React from 'react';
import { styled, css, ThemeProvider, createTheme } from '@temp-mui/material/styles';

const Box = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const SimpleBox = styled('div')``;

function SxTestSimpleBox() {
  <SimpleBox sx={{ p: [2, 3, 4] }} />;
}

function SxTest() {
  <Box sx={{ p: [2, 3, 4] }} />;
}

function WorksWithNoTheme() {
  <Box />;
}

const StyledToolbar = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const StyledSpan = styled('span')(({ theme }) => ({
  ...theme.typography.body1,
}));

const Container = styled('div')<{ $heightLimit: boolean }>`
  min-width: 0;

  ${({ $heightLimit }) =>
    $heightLimit &&
    css`
      background: red;
      height: 10vh;
    `}
`;

// https://github.com/mui/material-ui/issues/28844
interface PropsFooVariant {
  variant: 'foo';
}
interface PropsBarVariant {
  variant: 'bar';
}
function Component(props: PropsFooVariant | PropsBarVariant) {
  return <div />;
}
const StyledComponent = styled(Component)(({ theme }) => ({}));
const rendered = (
  <React.Fragment>
    <StyledComponent variant="foo" />
    <StyledComponent variant="bar" />
  </React.Fragment>
);
/**
 * ===================================================================
 */

/**
 * Test styleOverrides callback types
 */
interface ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: 'primary';
  variant?: 'contained';
}

const ButtonRoot = styled('button', {
  name: 'MuiButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: ButtonProps }>({});

const ButtonIcon = styled('span', {
  name: 'MuiButton',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon,
})<{ ownerState: ButtonProps }>({});

function Button({
  children,
  startIcon,
  endIcon,
  color = 'primary',
  variant = 'contained',
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  const ownerState = { startIcon, endIcon, color, variant, ...props };
  return (
    <ButtonRoot ownerState={ownerState}>
      {startIcon && <ButtonIcon ownerState={ownerState}>{startIcon}</ButtonIcon>}
      {children}
      {endIcon && <ButtonIcon ownerState={ownerState}>{endIcon}</ButtonIcon>}
    </ButtonRoot>
  );
}

<ThemeProvider
  theme={createTheme({
    typography: {
      button: {
        lineHeight: 1.5,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            const { color, variant } = ownerState;
            const styles = [];
            if (color === 'primary') {
              styles.push({
                width: 120,
                height: 48,
              });
            }
            if (variant === 'contained') {
              styles.push(theme.typography.button);
            }
            return styles;
          },
          startIcon: ({ ownerState: { startIcon, endIcon } }) => [
            startIcon && { marginRight: 8 },
            endIcon && { marginLeft: 8 },
          ],
        },
      },
      MuiSlider: {
        styleOverrides: {
          mark: (props) => ({
            ...(props['data-index'] === 0 && {}),
          }),
          thumb: ({ theme }) =>
            theme.unstable_sx({
              p: 1,
            }),
          track: ({ ownerState, theme }) => [
            theme.unstable_sx({ height: 10 }),
            ownerState.orientation === 'vertical' &&
              theme.unstable_sx({
                my: 2,
              }),
          ],
        },
      },
    },
  })}
>
  <Button color="primary" variant="contained" startIcon="foo">
    Hello
  </Button>
</ThemeProvider>;

function variantsAPI() {
  const ObjectSyntax = styled('div')<{ foo?: string; bar?: number }>({
    variants: [
      {
        props: { foo: 'a' },
        style: { color: 'blue' },
      },
    ],
  });

  const FunctionSyntax = styled('div')<{ foo?: string; bar?: number }>(() => ({
    variants: [
      {
        props: { foo: 'a' },
        style: { color: 'blue' },
      },
    ],
  }));

  // @ts-expect-error the API is not valid for CSS properties
  const WrongUsage = styled('div')<{ foo?: string; bar?: number }>({
    color: [
      {
        props: { foo: 'a' },
        style: { color: 'blue' },
      },
    ],
  });
}
