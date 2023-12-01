import { NextSeo } from "next-seo";
import { useContext } from "react";
import styled from "styled-components";

import Header from "@components/Header";
import Navigation from "@components/Navigation";
import Container from "@components/Container";
import Footer from "@components/Footer";

import { SettingsContext } from "@providers/settings";

const MainContent = styled.main`
  padding-top: ${(props) => props.theme.layout.paddingTop};
  min-height: 100vh;
`;

const Layout = ({ children, name }) => {
  const { settings } = useContext(SettingsContext);

  return (
    <>
      <NextSeo
        description={settings.defaultDescription}
        openGraph={{
          title: `${settings.defaultTitle} - ${name}`,
          description: settings.defaultDescription,
        }}
        title={`${settings.defaultTitle} - ${name}`}
      />

      <Header name={settings.defaultTitle} />

      {settings?.menuItems?.length && <Navigation items={settings.menuItems} />}

      <MainContent>
        <Container>{children}</Container>
      </MainContent>

      <Footer text={settings.footerText} />
    </>
  );
};

export default Layout;
