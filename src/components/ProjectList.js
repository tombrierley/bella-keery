import styled from "styled-components";
import Link from "next/link";

import ImageLoader from "@components/ImageLoader";
import Grid from "@components/Grid";
import GridItem from "@components/GridItem";

import isArrayWithLength from "@utils/isArrayWithLength";
import generateEntryUrl from "@utils/generateEntryUrl";
import isLandscape from "@utils/isLandscape";

const GridLink = styled.a`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
  display: block;

  &:hover {
    filter: brightness(60%);
    text-decoration: underline;
  }
`;

const GridText = styled.div`
  padding: ${(props) => props.theme.spacing.base} 0;
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
                <ImageLoader
                  alt={fields?.name}
                  imageUrl={`${fields?.mainImage?.fields?.file?.url}?w=${
                    isImageLandscape ? "2000" : "1000"
                  }`}
                  landscape={isImageLandscape}
                />

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
