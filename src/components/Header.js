import styled from "styled-components";
import Link from "next/link";

const HeaderTitle = styled.h1`
  position: fixed;
  top: ${(props) => props.theme.spacing.small};
  left: 0;
  right: 0;
  text-align: center;
`;

const Header = ({ items, name }) => {
  return <HeaderTitle>{name}</HeaderTitle>;
};

export default Header;
