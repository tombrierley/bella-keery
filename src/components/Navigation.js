import styled from "styled-components";
import Link from "next/link";

import generateEntryUrl from "@utils/generateEntryUrl";

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: ${(props) => props.theme.navigation.height};
  border: ${(props) => props.theme.navigation.border};
  top: 0;
  height: 100vh;
  z-index: ${(props) => props.theme.navigation.zIndex};
  padding: ${(props) => props.theme.navigation.padding};
  pointer-events: none;

  ${(props) => props.theme.breakpoints.small`
   padding: ${(props) => props.theme.navigation.paddingMedium};
  `}

  ${(props) => props.theme.breakpoints.large`
    padding: ${(props) => props.theme.navigation.paddingLarge};
  `}
`;

const NavList = styled.ul`
  position: relative;
  width: 100%;
  height: ${(props) => props.theme.navigation.height};
  pointer-events: auto;

  ${(props) => props.theme.breakpoints.small`
  height: ${(props) => props.theme.navigation.heightMedium};
`}

  ${(props) => props.theme.breakpoints.large`
  height: ${(props) => props.theme.navigation.heightLarge};
`}
`;

const NavItem = styled.li`
  font-family: ${(props) => props.theme.navigation.fontFamily};
  font-size: ${(props) => props.theme.navigation.fontSize};
  position: absolute;
  height: ${(props) => props.theme.navigation.height};
  display: flex;
  align-items: center;

  ${(props) => props.theme.breakpoints.small`
    font-size: ${(props) => props.theme.navigation.fontSizeMedium};
    height: ${(props) => props.theme.navigation.heightMedium};
  `}

  ${(props) => props.theme.breakpoints.large`
    font-size: ${(props) => props.theme.navigation.fontSizeLarge};
    height: ${(props) => props.theme.navigation.heightLarge};
  `}

  &:nth-child(1) {
    right: 100%;
    top: 0;
    transform: rotate(-90deg);
    transform-origin: top right;
  }

  &:nth-child(2) {
    left: ${(props) => props.theme.navigation.height};
    top: 0;
    margin-left: ${(props) => props.theme.navigation.padding};

    ${(props) => props.theme.breakpoints.small`
       margin-left: ${(props) => props.theme.navigation.paddingMedium};
       left: ${(props) => props.theme.navigation.heightMedium};
    `}

    ${(props) => props.theme.breakpoints.large`
      margin-left: ${(props) => props.theme.navigation.paddingLarge};
      left: ${(props) => props.theme.navigation.heightLarge};
    `}
  }

  &:nth-child(3) {
    top: 0;
    right: ${(props) => props.theme.navigation.height};
    margin-right: ${(props) => props.theme.navigation.padding};

    ${(props) => props.theme.breakpoints.small`
      margin-right: ${(props) => props.theme.navigation.paddingMedium};
      right: ${(props) => props.theme.navigation.heightMedium};
    `}

    ${(props) => props.theme.breakpoints.large`
      margin-right: ${(props) => props.theme.navigation.paddingLarge};
      right: ${(props) => props.theme.navigation.heightLarge};
    `}
  }

  &:nth-child(4) {
    transform: rotate(90deg);
    transform-origin: top left;
    top: 0;
    left: 100%;
  }
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
