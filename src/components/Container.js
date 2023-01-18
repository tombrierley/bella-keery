import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => props.theme.layout.appMaxWidth};
  margin: 0 auto;
  width: 100%;
  padding: 0 ${(props) => props.theme.spacing.large};

  ${(props) => props.theme.breakpoints.small`
    padding: 0 ${(props) => props.theme.spacing.xxLarge};
 `}

  ${(props) => props.theme.breakpoints.large`
    padding: 0 ${(props) => props.theme.layout.containerPadding};
 `}
`;

export default Container;
