import styled from "styled-components";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Wrapper = styled.footer`
  text-align: center;
  padding: ${(props) => props.theme.spacing.large}
    ${(props) => props.theme.spacing.large}
    ${(props) => props.theme.spacing.base};

  p {
    font-size: ${(props) => props.theme.sizes.sm};
  }
`;

const Footer = ({ text }) => {
  return <Wrapper>{documentToReactComponents(text)}</Wrapper>;
};

export default Footer;
