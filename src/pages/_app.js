import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { fetchGeneralContent } from "@services/contentful";

import GlobalThemeProvider from "@providers/theme";
import { SettingsProvider } from "@providers/settings";

export default function MyApp({ Component, pageProps, settings }) {
  return (
    <GlobalThemeProvider settings={settings}>
      <SettingsProvider settings={settings}>
        <Head>
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
          <meta charSet="utf-8" />
          <meta content="no" httpEquiv="imagetoolbar" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <meta content="yes" name="apple-mobile-web-app-capable" />

          <meta content="Global" name="distribution" />
          <meta content="7 days" name="revisit-after" />
          <meta
            content={`Copyright ${new Date().getFullYear()} ${
              settings.siteName
            }`}
            name="copyright"
          />
          <meta content="FOLLOW,INDEX" name="robots" />
          <title>{settings.defaultTitle}</title>
          <meta name="description" content={settings.defaultDescription} />
        </Head>

        <Component {...pageProps} />
      </SettingsProvider>
    </GlobalThemeProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  const response = await fetchGeneralContent();

  return {
    settings: response.general,
  };
};
