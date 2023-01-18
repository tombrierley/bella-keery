import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.figure`
  display: block;
  overflow: hidden;
  padding-bottom: ${(1.5 / 1) * 100}%;
  position: relative;
  width: 100%;
  z-index: 1;

  ${(props) =>
    props.landscape &&
    `
    padding-bottom: ${(1 / 1.5) * 100}%;
  `}
`;

const ImageLoader = ({ imageUrl, alt, ...props }) => {
  return (
    <Wrapper {...props}>
      <Image alt={alt} src={`https:${imageUrl}`} fill />
    </Wrapper>
  );
};

export default ImageLoader;
