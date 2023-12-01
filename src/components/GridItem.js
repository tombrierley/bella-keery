import styled from "styled-components";

const GridItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  padding-bottom: ${(props) => props.theme.grid.gutter};

  ${(props) => props.theme.breakpoints.small`
    flex: 0 0 ${(props) => (props.cols / props.theme.grid.totalCols) * 100}%;
    width: ${(props) => (props.cols / props.theme.grid.totalCols) * 100}%;
    padding: ${(props) => props.theme.grid.gutter};
 `}
`;

export default GridItem;
