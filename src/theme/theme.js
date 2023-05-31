import { css } from "styled-components";
import { Chango, Space_Mono } from "@next/font/google";

const chango = Chango({ subsets: ["latin"], weight: ["400"] });

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const sizes = {
  xxs: "10px",
  xs: "12px",
  sm: "14px",
  base: "16px",
  md: "18px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "86px",
};

const fontWeights = {
  black: 800,
  bold: 700,
  semibold: 600,
  medium: 500,
  normal: 400,
  light: 300,
};

const spacing = {
  xSmall: "6px",
  small: "12px",
  base: "24px",
  medium: "36px",
  large: "48px",
  xLarge: "64px",
  xxLarge: "96px",
  xxxLarge: "192px",
};

const pallette = {
  white: "#FFFFFF",
  grey: "#eeeeee",
  black: "#000000",
  primary: "#2569B0",
  secondary: "#da964f",
};

const fonts = {
  base: spaceMono.style.fontFamily,
  alt: chango.style.fontFamily,
};

const getTheme = (generalSettings) => ({
  breakpoints: {
    small: (...args) => css`
      @media (min-width: 600px) {
        ${css(...args)};
      }
    `,
    medium: (...args) => css`
      @media (min-width: 900px) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media (min-width: 1024px) {
        ${css(...args)};
      }
    `,
    xLarge: (...args) => css`
      @media (min-width: 1280px) {
        ${css(...args)};
      }
    `,
  },
  layout: {
    appMaxWidth: "1024px",
    containerPadding: spacing.base,
    paddingTop: spacing.xxLarge,
  },
  grid: {
    gutter: spacing.base,
    totalCols: 12,
  },
  highlight: {
    color: pallette.primary,
    background: pallette.white,
  },
  body: {
    background: pallette.white,
  },
  typography: {
    html: {
      backgroundColor: pallette.primary,
    },
    body: {
      backgroundColor: pallette.white,
      color: pallette.black,
      fontFamily: fonts.base,
      fontSize: sizes.base,
      fontWeight: fontWeights.normal,
      letterSpacing: 0,
      lineHeight: 1.6,
      textTransform: "none",
    },
    p: {
      color: pallette.black,
      fontFamily: fonts.base,
      fontSize: sizes.base,
      fontWeight: fontWeights.normal,
      letterSpacing: 0,
      lineHeight: 1.6,
      marginBottom: spacing.base,
      marginTop: 0,
      textTransform: "none",
    },
    h1: {
      color: pallette.white,
      fontFamily: fonts.base,
      fontSize: sizes.sm,
      fontWeight: fontWeights.normal,
      letterSpacing: 0,
      lineHeight: 1,
      marginBottom: 0,
      marginTop: 0,
      textTransform: "none",
    },
    h2: {
      color: pallette.black,
      fontFamily: fonts.base,
      fontSize: sizes.xxl,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
      lineHeight: 1.6,
      marginBottom: spacing.base,
      marginTop: 0,
      textTransform: "none",
    },
    h3: {
      color: pallette.black,
      fontFamily: fonts.base,
      fontSize: sizes.xl,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
      lineHeight: 1.6,
      marginBottom: spacing.base,
      marginTop: 0,
      textTransform: "none",
    },
    h4: {
      color: pallette.black,
      fontFamily: fonts.base,
      fontSize: sizes.md,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
      lineHeight: 1.6,
      marginBottom: 0,
      marginTop: 0,
      textTransform: "uppercase",
    },
    h5: {
      color: pallette.black,
      fontFamily: fonts.base,
      fontSize: sizes.md,
      fontWeight: fontWeights.normal,
      letterSpacing: 0,
      lineHeight: 1.6,
      marginBottom: 0,
      marginTop: 0,
      textTransform: "none",
    },
    h6: {
      color: pallette.black,
      fontFamily: fonts.base,
      fontSize: sizes.base,
      fontWeight: fontWeights.bold,
      letterSpacing: 0,
      lineHeight: 1.6,
      marginBottom: spacing.base,
      marginTop: 0,
      textTransform: "none",
    },
    strong: {
      color: pallette.black,
      fontWeight: fontWeights.bold,
    },
    a: {
      color: pallette.primary,
      fontWeight: fontWeights.bold,
      textDecoration: "none",
    },
    aHover: {
      color: pallette.primary,
      fontWeight: fontWeights.bold,
      textDecoration: "underline",
    },
  },
  navigation: {
    fontFamily: fonts.alt,
    fontSize: sizes.xl,
    fontSizeMedium: sizes.xxl,
    fontSizeLarge: sizes.xxxl,
    color: pallette.primary,
    hoverColor: pallette.secondary,
    zIndex: 1000,
    height: "16px",
    heightMedium: "38px",
    heightLarge: "64px",
    border: "none",
    padding: spacing.small,
    paddingMedium: spacing.base,
    paddingLarge: spacing.medium,
  },

  spacing,
  sizes,
  pallette,
});

export default getTheme;
