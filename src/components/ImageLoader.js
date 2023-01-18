import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.figure`
  background-color: ${(props) => props.theme.pallette.grey};
  display: block;
  overflow: hidden;
  padding-bottom: ${(1.5 / 1) * 100}%;
  position: relative;
  width: 100%;
  z-index: 1;

  img {
    display: none;
  }

  ${(props) =>
    props.landscape &&
    `
    padding-bottom: ${(1 / 1.5) * 100}%;
  `}
`;

const Background = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background-image: url(${(props) => props.imageUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  transition: opacity 300ms ease-in 0s;

  ${(props) =>
    props.isLoaded &&
    `
    opacity: 1;
  `};
`;

const ImageLoader = ({ imageUrl, alt, ...props }) => {
  const imgEl = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const onImageLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const imgElCurrent = imgEl.current;

    if (imgElCurrent.complete && imgElCurrent.naturalHeight !== 0) {
      setIsLoaded(true);
      return;
    }

    if (imgElCurrent) {
      imgElCurrent.addEventListener("load", onImageLoaded);
      return () => imgElCurrent.removeEventListener("load", onImageLoaded);
    }
  }, [imgEl]);

  return (
    <Wrapper {...props}>
      <Background imageUrl={imageUrl} isLoaded={isLoaded} {...props}>
        <img alt={alt} src={`https:${imageUrl}`} ref={imgEl} />
      </Background>
    </Wrapper>
  );
};

export default ImageLoader;
