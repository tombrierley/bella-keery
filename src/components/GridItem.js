import styled from "styled-components";

const GridItem = styled.div`
  padding: ${(props) => props.theme.grid.gutter};
  flex: 0 0 ${(props) => (props.cols / props.theme.grid.totalCols) * 100}%;
  width: ${(props) => (props.cols / props.theme.grid.totalCols) * 100}%;

  ${(props) => props.theme.breakpoints.small`
    flex: 0 0 ${(props) => (props.colsSm / props.theme.grid.totalCols) * 100}%;
    width: ${(props) => (props.colsSm / props.theme.grid.totalCols) * 100}%;

 `}
`;

export default GridItem;
