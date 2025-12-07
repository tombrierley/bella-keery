import { NextSeo } from "next-seo";
import { useContext } from "react";
import styled from "styled-components";

import Navigation from "@components/Navigation";
import Container from "@components/Container";
import Footer from "@components/Footer";
import StructuredData from "@components/StructuredData";

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

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: #2972B6;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  
  &:focus {
    top: 6px;
  }
`;

const Layout = ({ children, name }) => {
  const { settings } = useContext(SettingsContext);

  return (
    <>
      <NextSeo
        title={`${settings.defaultTitle} - ${name}`}
        description={settings.defaultDescription}
        canonical={`https://bellakeery.com${name === 'Home' ? '' : `/${name?.toLowerCase() || ''}`}`}
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: `https://bellakeery.com${name === 'Home' ? '' : `/${name?.toLowerCase() || ''}`}`,
          title: `${settings.defaultTitle} - ${name}`,
          description: settings.defaultDescription,
          images: [
            {
              url: 'https://bellakeery.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Bella Keery Photography - Live Music Photographer',
            }
          ],
          siteName: 'Bella Keery Photography',
        }}
        twitter={{
          handle: '@bellakeery',
          site: '@bellakeery',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'live music photography, concert photography, London photographer, music photographer, festival photography, band photography',
          },
          {
            name: 'author',
            content: 'Bella Keery',
          },
          {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'preconnect',
            href: 'https://images.ctfassets.net',
          },
          {
            rel: 'dns-prefetch',
            href: 'https://images.ctfassets.net',
          },
        ]}
      />
      
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="person" />

      <Container>
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <Wrapper>
          <Navigation name={settings.defaultTitle} items={settings.menuItems} />
          <Main id="main-content" role="main">
            {children}
            <Footer text={settings.footerText} />
          </Main>
        </Wrapper>
      </Container>
    </>
  );
};

export default Layout;
