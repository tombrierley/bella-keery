import styled from "styled-components";
import Link from "next/link";

import ImageLoader from "@components/ImageLoader";
import Grid from "@components/Grid";
import GridItem from "@components/GridItem";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichText = ({ contentColumn1, contentColumn2, contentColumn3 }) => {
  return (
    <Grid>
      {!!contentColumn1 && (
        <GridItem cols={4}>
          {documentToReactComponents(contentColumn1)}
        </GridItem>
      )}
      {!!contentColumn2 && (
        <GridItem cols={4}>
          {documentToReactComponents(contentColumn2)}
        </GridItem>
      )}
      {!!contentColumn3 && (
        <GridItem cols={4}>
          {documentToReactComponents(contentColumn3)}
        </GridItem>
      )}
    </Grid>
  );
};

export default RichText;
