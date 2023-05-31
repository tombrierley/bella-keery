import styled from "styled-components";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ImageLoader from "@components/ImageLoader";
import Grid from "@components/Grid";
import GridItem from "@components/GridItem";

const TextContainer = styled.article`
  text-align: center;

  ${(props) => props.theme.breakpoints.medium`
    padding: ${(props) => props.theme.spacing.large}; 0;
  `}

  ${(props) => props.theme.breakpoints.large`
    padding: ${(props) => props.theme.spacing.xxLarge}; 0;
  `}
`;

const TextSection = styled.article`
  padding: ${(props) => props.theme.spacing.base}; 0;
`;

const RichText = ({ contentColumn1, contentColumn2, contentColumn3 }) => {
  return (
    <TextContainer>
      {!!contentColumn1 && (
        <TextSection>{documentToReactComponents(contentColumn1)}</TextSection>
      )}
      {!!contentColumn2 && (
        <TextSection>{documentToReactComponents(contentColumn2)}</TextSection>
      )}
      {!!contentColumn3 && (
        <TextSection>{documentToReactComponents(contentColumn3)}</TextSection>
      )}
    </TextContainer>
  );
};

export default RichText;
