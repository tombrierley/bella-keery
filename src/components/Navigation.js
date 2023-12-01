import styled from "styled-components";
import Link from "next/link";

import generateEntryUrl from "@utils/generateEntryUrl";

const Wrapper = styled.nav`
  padding: ${(props) => props.theme.navigation.padding};

  ${(props) => props.theme.breakpoints.small`
   padding: ${(props) => props.theme.navigation.paddingMedium};
  `}

  ${(props) => props.theme.breakpoints.large`
    padding: ${(props) => props.theme.navigation.paddingLarge};
  `}
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled.li`
  font-family: ${(props) => props.theme.navigation.fontFamily};
  font-size: ${(props) => props.theme.navigation.fontSize};
  display: flex;
  align-items: center;
  text-transform: uppercase;

  ${(props) => props.theme.breakpoints.small`
    font-size: ${(props) => props.theme.navigation.fontSizeMedium};
  `}

  ${(props) => props.theme.breakpoints.large`
    font-size: ${(props) => props.theme.navigation.fontSizeLarge};
  `}
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.navigation.color};
  text-decoration: none;
  white-space: nowrap;
  line-height: 1;

  &:hover {
    color: ${(props) => props.theme.navigation.hoverColor};
    text-decoration: none;
  }
`;

const Navigation = ({ items }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Navigation;
