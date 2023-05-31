import styled from "styled-components";
import Link from "next/link";

const HeaderTitle = styled.h1`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  transform: translateY(-150%);
`;

const Header = ({ items, name }) => {
  return <HeaderTitle>{name}</HeaderTitle>;
};

export default Header;
