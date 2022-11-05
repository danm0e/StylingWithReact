import { Nav, Content } from "components";
import { Grid, Row, Column, StyledButton } from "./StyledComponents.styles";

const StyledComponents = () => (
  <main>
    <header>
      <h1>Styled components</h1>
      <Nav />
    </header>

    <Row>
      <Grid>
        <Column>
          <Content />
          <StyledButton />
        </Column>

        <Column>
          <Content />
          <StyledButton />
        </Column>

        <Column>
          <Content />
          <StyledButton />
        </Column>
      </Grid>
    </Row>

    <footer>
      <h5>Some footer</h5>
    </footer>
  </main>
);

export default StyledComponents;
