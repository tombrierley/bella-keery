import styled from "styled-components";

const Wrapper = styled.figure`
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
`;

const ImageLoader = ({ imageUrl, alt, ...props }) => {
  return (
    <Wrapper {...props}>
      <Background imageUrl={imageUrl} {...props}>
        <img alt={alt} src={`https:${imageUrl}`} />
      </Background>
    </Wrapper>
  );
};

export default ImageLoader;
