import { css } from "styled-components";
import { Shrikhand } from "next/font/google";
import localFont from "next/font/local";

const shrikhand = Shrikhand({ subsets: ["latin"], weight: ["400"] });

const clearSans = localFont({
  src: [
    {
      path: '../fonts/ClearSans-Regular-webfont.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ClearSans-Bold-webfont.woff',
      weight: '700',
      style: 'normal',
    },
  ],
});

const sizes = {
  xxs: "11px",
  xs: "12px",
  sm: "14px",
  base: "16px",
  md: "18px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "48px",
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
  xSmall: "8px",
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
  cream: "#fffef7",
  grey: "#eeeeee",
  black: "#000000",
  primary: "#080096",
  secondary: "#da964f",
};

const fonts = {
  base: clearSans.style.fontFamily,
  alt: shrikhand.style.fontFamily,
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
    appMaxWidth: "1920px",
    containerPadding: spacing.xLarge,
    paddingTop: spacing.base,
  },
  header: {
    background: pallette.primary,
    color: pallette.primary,
    padding: spacing.xSmall,
    fontSize: sizes.md,
    fontWeight: fontWeights.bold,
  },
  grid: {
    gutter: spacing.small,
    totalCols: 12,
  },
  highlight: {
    color: pallette.primary,
    background: pallette.white,
  },
  body: {
    background: pallette.cream,
  },
  typography: {
    html: {
      backgroundColor: pallette.primary,
    },
    body: {
      backgroundColor: pallette.cream,
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
      fontSize: sizes.sm,
      fontSizeMobile: sizes.sm,
      fontWeight: fontWeights.normal,
      letterSpacing: 0,
      lineHeight: 1.3,
      marginBottom: 0,
      marginTop: 0,
      textTransform: "uppercase",
    },
    h5: {
      color: pallette.black,
      fontFamily: fonts.base,
      fontSize: sizes.sm,
      fontSizeMobile: sizes.sm,
      fontWeight: fontWeights.normal,
      letterSpacing: 0,
      lineHeight: 1.3,
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
    fontSize: sizes.sm,
    fontWeight: fontWeights.normal,
  },

  spacing,
  sizes,
  pallette,
});

export default getTheme;
