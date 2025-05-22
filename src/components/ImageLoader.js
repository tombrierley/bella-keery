import Image from "next/image";
import { useState, useRef, useEffect, lazy } from "react";
import styled from "styled-components";

const Wrapper = styled.figure`
  background-color: ${(props) => props.theme.pallette.grey};
  display: block;
  overflow: hidden;
  padding-bottom: ${(1.5 / 1) * 100}%;
  position: relative;
  width: 100%;
  z-index: 1;

  ${(props) =>
    props.landscape &&
    `
    padding-bottom: ${(1 / 1.36666) * 100}%;
  `}
`;

// Regex to extract needed parts from Contentful URL
const contentfulUrlRegex = /\/\/(downloads|images)\.ctfassets\.net\/([^\/]+)\/([^\/]+)\/([^\/]+)\/([^?]+)/;

const ImageLoader = ({ imageUrl, alt, landscape, width }) => {
  // Format URL properly for Contentful Images API
  const getFormattedImageUrl = (url, width) => {
    if (!url) return '';
    
    // Ensure we have https://
    const fullUrl = url.startsWith("http") ? url : `https:${url}`;
    
    // If no width specified, just return the URL with downloads replaced by images
    if (!width) {
      return fullUrl.replace('downloads.ctfassets.net', 'images.ctfassets.net');
    }
    
    // Check if it's a Contentful URL
    const match = fullUrl.match(contentfulUrlRegex);
    if (!match) return fullUrl;
    
    // Extract parts (now the domain type is at index 1, other indices shifted by 1)
    const [, , spaceId, assetId, token, filename] = match;
    
    // Return properly formatted Contentful Images API URL
    return `https://images.ctfassets.net/${spaceId}/${assetId}/${token}/${filename}?w=${width}&fit=fill`;
  };

  return (
    <Wrapper landscape={landscape}>
      <Image
        fill
        objectFit="cover"
        alt={alt}
        src={getFormattedImageUrl(imageUrl, width)}
        loading={"lazy"}
        unoptimized
      />
    </Wrapper>
  );
};

export default ImageLoader;
