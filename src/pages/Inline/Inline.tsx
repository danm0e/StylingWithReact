import { Nav, Content } from "components";
import style from "./Inline.styles";

const Inline = () => (
  <main>
    <header>
      <h1>Inline styles</h1>
      <Nav />
    </header>

    <div style={style.row}>
      <div style={style.grid}>
        <section style={style.column}>
          <Content />
          <button style={style.button}>Some call to action</button>
        </section>

        <section style={style.column}>
          <Content />
          <button style={style.button}>Some call to action</button>
        </section>

        <section style={style.column}>
          <Content />
          <button style={style.button}>Some call to action</button>
        </section>
      </div>
    </div>

    <footer>
      <h5>Some footer</h5>
    </footer>
  </main>
);

export default Inline;
