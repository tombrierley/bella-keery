import styled from "styled-components";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ImageLoader from "@components/ImageLoader";
import Grid from "@components/Grid";
import GridItem from "@components/GridItem";

const TextContainer = styled.article`
  text-align: center;

  ${(props) => props.theme.breakpoints.medium`
    padding: ${(props) => props.theme.spacing.base}; 0;
  `}
`;

const TextSection = styled.article`
  padding: ${(props) => props.theme.spacing.base}; 0;
`;

const RichText = ({ content }) => {
  return (
    <TextContainer>
      {!!content && (
        <TextSection>{documentToReactComponents(content)}</TextSection>
      )}
    </TextContainer>
  );
};

export default RichText;
