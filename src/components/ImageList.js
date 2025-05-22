import styled from "styled-components";
import Link from "next/link";
import ReactPlayer from "react-player";

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
        if (fields?.file?.contentType === "video/mp4") {
          return (
            <GridItem key={sys.id} cols={6} colsSm={4}>
              <ReactPlayer
                url={fields?.file?.url}
                playsinline
                width="100%"
                height="100%"
                controls
              />
            </GridItem>
          );
        }

        if (fields?.file?.details?.image) {
          const isImageLandscape = isLandscape(fields?.file?.details?.image);

          return (
            <GridItem
              key={sys.id}
              cols={isImageLandscape ? 12 : 6}
              colsSm={isImageLandscape ? 8 : 4}
            >
              <ImageLoader
                alt={fields?.name}
                imageUrl={`https:${fields?.file?.url}?w=${isImageLandscape ? 1200 : 600}&fit=fill`}
                width={isImageLandscape ? 1200 : 600}
                landscape={isImageLandscape}
              />
            </GridItem>
          );
        }

        return false;
      })}
    </Grid>
  );
};

export default ImageList;
