import { blue, green, pink, red, dark, white } from './colors.styles';
import { baseFontFamily, fontSizeBase } from './variables.styles';

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  text: string;
  contrastText: string;
}

export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  accent: PaletteColor;
}

export interface Theme {
  palette: Palette;
  typo: {
    fontFamily: string;
    fontSize: string;
  };
}

export const theme: Theme = {
  palette: {
    primary: white,
    secondary: dark,
    error: red,
    accent: blue
  },
  typo: {
    fontFamily: baseFontFamily.join(','),
    fontSize: fontSizeBase
  }
};
