import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  ::selection {
    color: ${({ theme }) => theme.highlight.color};
    background: ${({ theme }) => theme.highlight.background};
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.highlight.color};
    background: ${({ theme }) => theme.highlight.background};
  }


  html,
  body {
    -moz-osx-font-smoothing: auto;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    -webkit-font-smoothing: antialiased !important;
    margin: 0;
    position: relative;
    text-rendering: optimizeLegibility !important;
    width: 100%;
    z-index: 0;

    color: ${({ theme }) => theme.typography.body.color};
    font-family: ${({ theme }) => theme.typography.body.fontFamily};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.fontWeight};
    letter-spacing: ${({ theme }) => theme.typography.body.letterSpacing};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
    text-transform: ${({ theme }) => theme.typography.body.textTransform};
  }

  html {
    background-color: ${({ theme }) => theme.typography.html.backgroundColor};
  }

  body {
    background-color: ${({ theme }) => theme.typography.body.backgroundColor};
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
  }

  h1 {
    color: ${({ theme }) => theme.typography.h1.color};
    font-family: ${({ theme }) => theme.typography.h1.fontFamily};
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};
    margin-bottom: ${({ theme }) => theme.typography.h1.marginBottom};
    margin-top: ${({ theme }) => theme.typography.h1.marginTop};
    text-transform: ${({ theme }) => theme.typography.h1.textTransform};
  }

  h2 {
    color: ${({ theme }) => theme.typography.h2.color};
    font-family: ${({ theme }) => theme.typography.h2.fontFamily};
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
    letter-spacing: ${({ theme }) => theme.typography.h2.letterSpacing};
    line-height: ${({ theme }) => theme.typography.h2.lineHeight};
    margin-bottom: ${({ theme }) => theme.typography.h2.marginBottom};
    margin-top: ${({ theme }) => theme.typography.h2.marginTop};
    text-transform: ${({ theme }) => theme.typography.h2.textTransform};
  }

  h3 {
    color: ${({ theme }) => theme.typography.h3.color};
    font-family: ${({ theme }) => theme.typography.h3.fontFamily};
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
    letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight};
    margin-bottom: ${({ theme }) => theme.typography.h3.marginBottom};
    margin-top: ${({ theme }) => theme.typography.h3.marginTop};
    text-transform: ${({ theme }) => theme.typography.h3.textTransform};
  }

  h4 {
    color: ${({ theme }) => theme.typography.h4.color};
    font-family: ${({ theme }) => theme.typography.h4.fontFamily};
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
    letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
    line-height: ${({ theme }) => theme.typography.h4.lineHeight};
    margin-bottom: ${({ theme }) => theme.typography.h4.marginBottom};
    margin-top: ${({ theme }) => theme.typography.h4.marginTop};
    text-transform: ${({ theme }) => theme.typography.h4.textTransform};
  }

  h5 {
    color: ${({ theme }) => theme.typography.h5.color};
    font-family: ${({ theme }) => theme.typography.h5.fontFamily};
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
    letter-spacing: ${({ theme }) => theme.typography.h5.letterSpacing};
    line-height: ${({ theme }) => theme.typography.h5.lineHeight};
    margin-bottom: ${({ theme }) => theme.typography.h5.marginBottom};
    margin-top: ${({ theme }) => theme.typography.h5.marginTop};
    text-transform: ${({ theme }) => theme.typography.h5.textTransform};
  }

  h6 {
    color: ${({ theme }) => theme.typography.h6.color};
    font-family: ${({ theme }) => theme.typography.h6.fontFamily};
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
    letter-spacing: ${({ theme }) => theme.typography.h6.letterSpacing};
    line-height: ${({ theme }) => theme.typography.h6.lineHeight};
    margin-bottom: ${({ theme }) => theme.typography.h6.marginBottom};
    margin-top: ${({ theme }) => theme.typography.h6.marginTop};
    text-transform: ${({ theme }) => theme.typography.h6.textTransform};
  }

  p {
    color: ${({ theme }) => theme.typography.p.color};
    font-family: ${({ theme }) => theme.typography.p.fontFamily};
    font-size: ${({ theme }) => theme.typography.p.fontSize};
    font-weight: ${({ theme }) => theme.typography.p.fontWeight};
    letter-spacing: ${({ theme }) => theme.typography.p.letterSpacing};
    line-height: ${({ theme }) => theme.typography.p.lineHeight};
    margin-bottom: ${({ theme }) => theme.typography.p.marginBottom};
    margin-top: ${({ theme }) => theme.typography.p.marginTop};
    text-transform: ${({ theme }) => theme.typography.p.textTransform};
  }

  strong {
    color: ${({ theme }) => theme.typography.strong.color};
    font-weight: ${({ theme }) => theme.typography.strong.fontWeight};
  }

  {/* Reset Lists */}
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  {/* Images */}
  figure {
    margin: 0;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${({ theme }) => theme.typography.a.color};
    font-weight: ${({ theme }) => theme.typography.a.fontWeight};
    text-decoration: ${({ theme }) => theme.typography.a.textDecoration};
    overflow-wrap: break-word;


    &:hover {
      color: ${({ theme }) => theme.typography.aHover.color};
      font-weight: ${({ theme }) => theme.typography.aHover.fontWeight};
      text-decoration: ${({ theme }) => theme.typography.aHover.textDecoration};
    }
  }
`;

export default GlobalStyles;
