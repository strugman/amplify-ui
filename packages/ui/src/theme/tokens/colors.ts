import { DesignToken } from './types/designToken';
import { OrdinalScale, OrdinalVariation } from './types/scales';

export interface ColorScale {
  50: DesignToken;
  100: DesignToken;
  200: DesignToken;
  300: DesignToken;
  400: DesignToken;
  500: DesignToken;
  600: DesignToken;
  700: DesignToken;
  800: DesignToken;
  900: DesignToken;
}

export interface FontColors extends OrdinalScale, OrdinalVariation {
  inverse: DesignToken;
  interactive: DesignToken;
  hover: DesignToken;
  focus: DesignToken;
  active: DesignToken;
  disabled: DesignToken;
}

export interface BackgroundColors extends OrdinalScale, OrdinalVariation {
  disabled: DesignToken;
}

export interface BorderColors extends OrdinalScale, OrdinalVariation {
  disabled: DesignToken;
  focus: DesignToken;
}

type ColorTypes =
  | ColorScale
  | FontColors
  | BackgroundColors
  | DesignToken
  | BorderColors;

export interface Colors {
  // base color palette
  red: ColorScale;
  orange: ColorScale;
  yellow: ColorScale;
  green: ColorScale;
  teal: ColorScale;
  blue: ColorScale;
  purple: ColorScale;
  pink: ColorScale;
  neutral: ColorScale;
  white: DesignToken;
  black: DesignToken;

  // Semantic colors
  font: FontColors;
  background: BackgroundColors;
  border: BorderColors;
  brand: {
    primary: ColorScale;
    secondary: ColorScale;
  };

  [key: string]: ColorTypes | Record<string, ColorTypes>;
}

/**
 * https://accessiblepalette.com/?lightness=97,91,84,73,64,50,42,34,25,13&FE3546=1,0&EA691E=1,-10&DBCD4A=1,10&4DCF6A=1,0&4DCFCF=1,0&4DA0CF=1,3&7256FF=1,15&CF4DC2=1,0&878C92=1,0
 */
export const colors: Colors = {
  red: {
    50: { value: '#fff4f2' },
    100: { value: '#ffdeda' },
    200: { value: '#ffc3bd' },
    300: { value: '#ff968f' },
    400: { value: '#ff6869' },
    500: { value: '#df323f' },
    600: { value: '#b92e35' },
    700: { value: '#94292c' },
    800: { value: '#6c2222' },
    900: { value: '#3a1715' },
  },

  orange: {
    50: { value: '#fff4ef' },
    100: { value: '#ffdfce' },
    200: { value: '#ffc4a9' },
    300: { value: '#fe996e' },
    400: { value: '#f67642' },
    500: { value: '#c75327' },
    600: { value: '#a64624' },
    700: { value: '#853920' },
    800: { value: '#622b1b' },
    900: { value: '#351a12' },
  },

  yellow: {
    50: { value: '#fbf7e2' },
    100: { value: '#f0e7aa' },
    200: { value: '#ddd567' },
    300: { value: '#bbb845' },
    400: { value: '#a19f3e' },
    500: { value: '#7a7a32' },
    600: { value: '#65662c' },
    700: { value: '#515325' },
    800: { value: '#3c3d15' },
    900: { value: '#222314' },
  },

  green: {
    50: { value: '#edfaed' },
    100: { value: '#c7efca' },
    200: { value: '#9ae2a1' },
    300: { value: '#4cc868' },
    400: { value: '#44af5b' },
    500: { value: '#388647' },
    600: { value: '#31703d' },
    700: { value: '#2a5a32' },
    800: { value: '#224226' },
    900: { value: '#162518' },
  },

  teal: {
    50: { value: '#ecf9f9' },
    100: { value: '#c4edec' },
    200: { value: '#92dfde' },
    300: { value: '#4ac4c4' },
    400: { value: '#43aaaa' },
    500: { value: '#388282' },
    600: { value: '#316c6c' },
    700: { value: '#2a5757' },
    800: { value: '#224040' },
    900: { value: '#162424' },
  },

  blue: {
    50: { value: '#f2f7f8' },
    100: { value: '#d8e7f4' },
    200: { value: '#bad5eb' },
    300: { value: '#88b9dd' },
    400: { value: '#58a3d1' },
    500: { value: '#427da2' },
    600: { value: '#3a6886' },
    700: { value: '#31546b' },
    800: { value: '#273e4e' },
    900: { value: '#19232b' },
  },

  purple: {
    50: { value: '#f9f5ff' },
    100: { value: '#ede0fe' },
    200: { value: '#e0c8fc' },
    300: { value: '#cca1f9' },
    400: { value: '#bc80f5' },
    500: { value: '#a049ef' },
    600: { value: '#8b39c7' },
    700: { value: '#732e9c' },
    800: { value: '#57246f' },
    900: { value: '#301739' },
  },

  pink: {
    50: { value: '#fdf4fb' },
    100: { value: '#f8def3' },
    200: { value: '#f2c3ea' },
    300: { value: '#e79adb' },
    400: { value: '#dc77cf' },
    500: { value: '#bc47b0' },
    600: { value: '#9c3e92' },
    700: { value: '#7c3474' },
    800: { value: '#5b2955' },
    900: { value: '#311a2e' },
  },

  neutral: {
    50: { value: '#f6f6f7' },
    100: { value: '#e4e5e7' },
    200: { value: '#d0d2d4' },
    300: { value: '#b0b4b8' },
    400: { value: '#979ca1' },
    500: { value: '#73777c' },
    600: { value: '#606368' },
    700: { value: '#4e5053' },
    800: { value: '#3a3c3e' },
    900: { value: '#212223' },
  },

  brand: {
    primary: {
      50: { value: '{colors.pink.50.value}' },
      100: { value: '{colors.pink.100.value}' },
      200: { value: '{colors.pink.200.value}' },
      300: { value: '{colors.pink.300.value}' },
      400: { value: '{colors.pink.400.value}' },
      500: { value: '{colors.pink.500.value}' },
      600: { value: '{colors.pink.600.value}' },
      700: { value: '{colors.pink.700.value}' },
      800: { value: '{colors.pink.800.value}' },
      900: { value: '{colors.pink.900.value}' },
    },
    secondary: {
      50: { value: '{colors.teal.50.value}' },
      100: { value: '{colors.teal.100.value}' },
      200: { value: '{colors.teal.200.value}' },
      300: { value: '{colors.teal.300.value}' },
      400: { value: '{colors.teal.400.value}' },
      500: { value: '{colors.teal.500.value}' },
      600: { value: '{colors.teal.600.value}' },
      700: { value: '{colors.teal.700.value}' },
      800: { value: '{colors.teal.800.value}' },
      900: { value: '{colors.teal.900.value}' },
    },
  },

  font: {
    primary: { value: '{colors.neutral.900.value}' },
    secondary: { value: '{colors.neutral.800.value}' },
    tertiary: { value: '{colors.neutral.700.value}' },
    disabled: { value: '{colors.font.tertiary.value}' },
    inverse: { value: '{colors.white.value}' },

    // https://webaim.org/resources/linkcontrastchecker/
    interactive: { value: '{colors.brand.primary.500.value}' },
    // Hover and Focus colors are intentionally different colors.
    // This allows users to distinguish between the current keyboard focus
    // and the location of their pointer
    hover: { value: '{colors.brand.primary.800.value}' },
    // Focus color is set to 100 to ensure enough contrast for accessibility
    focus: { value: '{colors.brand.primary.800.value}' },
    active: { value: '{colors.brand.primary.900.value}' },

    info: { value: '{colors.blue.900.value}' },
    warning: { value: '{colors.orange.900.value}' },
    error: { value: '{colors.red.900.value}' },
    success: { value: '{colors.green.900.value}' },
  },

  background: {
    primary: { value: '{colors.white.value}' },
    secondary: { value: '{colors.neutral.50.value}' },
    tertiary: { value: '{colors.neutral.100.value}' },
    disabled: { value: '{colors.background.tertiary.value}' },

    info: { value: '{colors.blue.100.value}' },
    warning: { value: '{colors.orange.100.value}' },
    error: { value: '{colors.red.100.value}' },
    success: { value: '{colors.green.100.value}' },
  },

  border: {
    primary: { value: '{colors.neutral.900.value}' },
    secondary: { value: '{colors.neutral.600.value}' },
    tertiary: { value: '{colors.neutral.300.value}' },

    disabled: { value: '{colors.border.tertiary.value}' },
    // Focus color is set to 500 to ensure enough contrast for accessibility
    focus: { value: '{colors.brand.primary.500.value}' },
    error: { value: '{colors.red.800.value}' },
    warning: { value: '{colors.orange.800.value}' },
    success: { value: '{colors.green.800.value}' },
    info: { value: '{colors.blue.800.value}' },
  },

  shadow: {
    primary: { value: 'hsla(210, 50%, 10%, 0.25)' },
    secondary: { value: 'hsla(210, 50%, 10%, 0.15)' },
    tertiary: { value: 'hsla(210, 50%, 10%, 0.05)' },
  },

  overlay: {
    10: { value: 'hsla(0, 0%, 0%, 0.1)' },
    20: { value: 'hsla(0, 0%, 0%, 0.2)' },
    30: { value: 'hsla(0, 0%, 0%, 0.3)' },
    40: { value: 'hsla(0, 0%, 0%, 0.4)' },
    50: { value: 'hsla(0, 0%, 0%, 0.5)' },
    60: { value: 'hsla(0, 0%, 0%, 0.6)' },
    70: { value: 'hsla(0, 0%, 0%, 0.7)' },
    80: { value: 'hsla(0, 0%, 0%, 0.8)' },
    90: { value: 'hsla(0, 0%, 0%, 0.9)' },
  },

  black: {
    value: 'hsl(0, 0%, 0%)',
  },
  white: { value: 'hsl(0, 0%, 100%)' },
  transparent: { value: 'transparent' },
};
