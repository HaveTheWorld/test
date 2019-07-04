import { createMuiTheme } from '@material-ui/core/styles';

export const theme = {
  color: {
    greyLighter: '#f1f1f1',
    greyLight: '#e1e6ed',
    grey: '#999999',
    greyDark: '#7f8690',
    greyDarker: '#666666',
    greyBlue: '#8196a3',
    greyBlueLighter: '#eff0f3',
    white: '#ffffff',
    black: '#333333',
    blue: '#1b4159',
    blueDark: '#052e48',
    marine: '#456f7e',
    green: '#8dc54a',
    greenDark: '#508435',
  },
  dimen: {
    gapTiny: '0.25rem',
    gapSmall: '0.5rem',
    gapMedium: '1rem',
    gapLarge: '1.5rem',
    gapBig: '2rem',
    gapHuge: '3.25rem',
  },
  border: {
    appBorder: '1px solid rgba(0, 0, 0, 0.35)',
  },
};

export default createMuiTheme({
  palette: {
    common: {
      black: theme.color.black,
      white: theme.color.white,
    },
    primary: {
      light: theme.color.marine,
      main: theme.color.blue,
      dark: theme.color.blueDark,
      contrastText: theme.color.white,
    },
    secondary: {
      main: theme.color.green,
      dark: theme.color.greenDark,
      contrastText: theme.color.white,
    },
  },
  ...theme,
});
