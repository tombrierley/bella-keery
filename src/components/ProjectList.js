import styled from "styled-components";
import Link from "next/link";

import ImageLoader from "@components/ImageLoader";
import Grid from "@components/Grid";
import GridItem from "@components/GridItem";

import isArrayWithLength from "@utils/isArrayWithLength";
import generateEntryUrl from "@utils/generateEntryUrl";
import isLandscape from "@utils/isLandscape";

const GridText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  width: 100%;
  padding: ${(props) => props.theme.spacing.medium};
  visibility: hidden;

  h4,
  h5 {
    color: ${(props) => props.theme.pallette.cream};
  }
`;

const ImageWrapper = styled.div``;

const GridLink = styled.a`
  background-color: ${(props) => props.theme.pallette.primary};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
  display: block;

  &:hover {
    ${GridText} {
      visibility: visible;
    }

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
          <GridItem key={sys.id} cols={isImageLandscape ? 12 : 6}>
            <Link href={href} legacyBehavior>
              <GridLink>
                <ImageWrapper>
                  <ImageLoader
                    alt={fields?.name}
                    imageUrl={`${fields?.mainImage?.fields?.file?.url}?w=${
                      isImageLandscape ? "2000" : "1000"
                    }`}
                    landscape={isImageLandscape}
                  />
                </ImageWrapper>

                <GridText>
                  <h4>{fields?.name}</h4>
                  <h5>{fields?.location}</h5>
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
