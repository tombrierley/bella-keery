import styled from "styled-components";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Wrapper = styled.footer`
  text-align: center;
  color: ${(props) => props.theme.footer.color};
  padding: ${(props) => props.theme.spacing.large}
    ${(props) => props.theme.spacing.large}
    ${(props) => props.theme.spacing.base};

  p {
    color: ${(props) => props.theme.footer.color};
    font-size: ${(props) => props.theme.sizes.base};
    text-transform: uppercase;
  }
`;

const Footer = ({ text }) => {
  return <Wrapper>{documentToReactComponents(text)}</Wrapper>;
};

export default Footer;
