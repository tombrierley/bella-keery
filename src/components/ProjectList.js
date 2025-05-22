import styled from "styled-components";
import Link from "next/link";

import ImageLoader from "@components/ImageLoader";
import Grid from "@components/Grid";
import GridItem from "@components/GridItem";

import isArrayWithLength from "@utils/isArrayWithLength";
import generateEntryUrl from "@utils/generateEntryUrl";
import isLandscape from "@utils/isLandscape";

const GridText = styled.div`
  z-index: 1;
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.small};

  h4,
  h5,
  strong {
    color: ${(props) => props.theme.pallette.primary};
  }
`;

const ImageWrapperOuter = styled.div`
  background-color: ${(props) => props.theme.pallette.primary};
`;

const ImageWrapper = styled.div``;

const GridLink = styled.a`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
  display: block;

  &:hover {
    text-decoration: none;

    ${ImageWrapper} {
      opacity: 0.5;
      mix-blend-mode: screen;
      filter: saturate(0%) contrast(1.5);
    }
  }
`;

const ProjectList = ({ projects, ...props }) => {
  if (!isArrayWithLength(projects)) return false;

  return (
    <Grid>
      {projects?.map(({ fields, sys }) => {
        const href = generateEntryUrl({ fields, sys });

        const isImageLandscape = isLandscape(
          fields?.mainImage?.fields?.file?.details?.image
        );

        return (
          <GridItem
            key={sys.id}
            cols={isImageLandscape ? 12 : 6}
            colsSm={isImageLandscape ? 8 : 4}
          >
            <Link href={href} legacyBehavior>
              <GridLink>
                <ImageWrapperOuter>
                  <ImageWrapper>
                    <ImageLoader
                      alt={fields?.name}
                      imageUrl={`https:${fields?.mainImage?.fields?.file?.url}?w=${isImageLandscape ? 1200 : 600}&fit=fill`}
                      landscape={isImageLandscape}
                      width={isImageLandscape ? 1200 : 600}
                    />
                  </ImageWrapper>
                </ImageWrapperOuter>

                <GridText>
                  <h4>
                    <strong>{fields?.name}</strong> {fields?.location}
                  </h4>
                </GridText>
              </GridLink>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ProjectList;
