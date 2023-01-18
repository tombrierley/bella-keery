import { ThemeProvider } from "styled-components";

import getTheme from "@theme/theme";
import GlobalStyles from "@theme/globalStyles";

const GlobalThemeProvider = ({ settings, children }) => {
  const theme = getTheme(settings);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
