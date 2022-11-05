import styled from "styled-components";
import { Button } from "components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 1rem;
`;

export const Row = styled.div``;

export const Column = styled.section`
  border-radius: 0.75rem;
  box-shadow: 0 0 10px #ccc;
  padding: 1rem;
`;

export const StyledButton = styled(Button)``;
