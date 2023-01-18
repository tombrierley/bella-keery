import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${(props) => props.theme.grid.base};

  ${(props) => props.theme.breakpoints.small`
    margin: 0 -${(props) => props.theme.grid.gutter};
  `}
`;

export default Grid;
