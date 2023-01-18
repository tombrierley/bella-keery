import styled from "styled-components";
import Link from "next/link";

import ImageLoader from "@components/ImageLoader";
import Grid from "@components/Grid";
import GridItem from "@components/GridItem";

import isArrayWithLength from "@utils/isArrayWithLength";
import isLandscape from "@utils/isLandscape";

const ImageList = ({ images, ...props }) => {
  if (!isArrayWithLength(images)) return false;

  return (
    <Grid>
      {images?.map(({ fields, sys }) => {
        const isImageLandscape = isLandscape(fields?.file?.details?.image);

        return (
          <GridItem key={sys.id} cols={isImageLandscape ? 12 : 6}>
            <ImageLoader
              alt={fields?.name}
              imageUrl={`${fields?.file?.url}?w=${
                isImageLandscape ? "2000" : "1000"
              }`}
              landscape={isImageLandscape}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ImageList;
