import { NextSeo } from "next-seo";
import { useContext } from "react";
import styled from "styled-components";

import Navigation from "@components/Navigation";
import Container from "@components/Container";
import Footer from "@components/Footer";

import { SettingsContext } from "@providers/settings";

const Wrapper = styled.div`
  padding-top: ${(props) => props.theme.layout.paddingTop};
  min-height: 100vh;

  ${(props) => props.theme.breakpoints.medium`
    display: flex;
    flex-direction: row-reverse;
  `}
`;

const Main = styled.main`
  width: 100%;
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

      <Container>
        <Wrapper>
          <Navigation name={settings.defaultTitle} items={settings.menuItems} />
          <Main>
            {children}
            <Footer text={settings.footerText} />
          </Main>
        </Wrapper>
      </Container>
    </>
  );
};

export default Layout;
