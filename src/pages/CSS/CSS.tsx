import { Nav, Content } from "components";
import "./CSS.styles.css";

const CSS = () => (
  <main>
    <header>
      <h1>Good ole' css</h1>
      <Nav />
    </header>

    <div className="row">
      <div className="grid">
        <section className="column">
          <Content />
          <button className="button">Some call to action</button>
        </section>

        <section className="column">
          <Content />
          <button className="button">Some call to action</button>
        </section>

        <section className="column">
          <Content />
          <button className="button">Some call to action</button>
        </section>
      </div>
    </div>

    <footer>
      <h5>Some footer</h5>
    </footer>
  </main>
);

export default CSS;
