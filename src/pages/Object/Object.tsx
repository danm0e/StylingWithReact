import { Nav, Content } from "components";
import { rowStyle, gridStyle, columnStyle, buttonStyle } from "./Object.styles";

const Object = () => (
  <main>
    <header>
      <h1>Inline styles</h1>
      <Nav />
    </header>

    <div style={rowStyle}>
      <div style={gridStyle}>
        <section style={columnStyle}>
          <Content />
          <button style={buttonStyle}>Some call to action</button>
        </section>

        <section style={columnStyle}>
          <Content />
          <button style={buttonStyle}>Some call to action</button>
        </section>

        <section style={columnStyle}>
          <Content />
          <button style={buttonStyle}>Some call to action</button>
        </section>
      </div>
    </div>

    <footer>
      <h5>Some footer</h5>
    </footer>
  </main>
);

export default Object;
