import styled from "styled-components";
import Link from "next/link";

import generateEntryUrl from "@utils/generateEntryUrl";

const Wrapper = styled.nav`
  ${(props) => props.theme.breakpoints.medium`

    padding: ${props.theme.spacing.small} 0 0
      ${props.theme.spacing.base};
    min-width: 240px;
  `}
`;

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.header.color};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.header.fontSize};
  font-weight: ${(props) => props.theme.header.fontWeight};

  ${(props) => props.theme.breakpoints.medium`
    text-align: right;
  `}
`;

const NavList = styled.ul`
  padding: ${(props) => props.theme.spacing.small} 0;
  display: flex;
  gap: ${(props) => props.theme.spacing.base};

  ${(props) => props.theme.breakpoints.medium`
    padding: ${(props) => props.theme.spacing.large} 0;
    display: block;
  `}
`;

const NavItem = styled.li`
  color: ${(props) => props.theme.navigation.color};
  font-size: ${(props) => props.theme.navigation.fontSize};
  font-weight: ${(props) => props.theme.navigation.fontWeight};
  text-transform: uppercase;
  padding: 1px 0;

  ${(props) => props.theme.breakpoints.medium`
    text-align: right;
  `}
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.navigation.color};
  font-weight: ${(props) => props.theme.navigation.fontWeight};
  text-decoration: none;
  white-space: nowrap;
  line-height: 1;

  &:hover {
    color: ${(props) => props.theme.navigation.hoverColor};
    text-decoration: none;
  }
`;

const StickyWrapper = styled.div`
  ${(props) => props.theme.breakpoints.medium`
    position: fixed;
    min-width: 240px;
  `}
`;

const Navigation = ({ items, name }) => {
  return (
    <Wrapper>
      <StickyWrapper>
        <HeaderTitle>Bella Keery</HeaderTitle>

        <NavList>
          {items?.map(({ fields, sys }) => {
            const href = generateEntryUrl({ fields, sys });

            return (
              <NavItem key={sys.id}>
                <Link href={href} legacyBehavior>
                  <NavLink href={href}>{fields?.name}</NavLink>
                </Link>
              </NavItem>
            );
          })}
        </NavList>
      </StickyWrapper>
    </Wrapper>
  );
};

export default Navigation;
