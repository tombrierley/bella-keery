import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.header.background};
  padding: ${(props) => props.theme.header.padding};
`;

const HeaderTitle = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.header.color};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.header.fontSize};
  font-weight: ${(props) => props.theme.header.fontWeight};
`;

const Header = ({ items, name }) => {
  return (
    <Wrapper>
      <HeaderTitle>{name}</HeaderTitle>
    </Wrapper>
  );
};

export default Header;
