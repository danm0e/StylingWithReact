import { Nav, Content } from "components";
import styles from "./ScssModules.styles.module.scss";

const ScssModules = () => (
  <main>
    <header>
      <h1>Scss modules</h1>
      <Nav />
    </header>

    <div className={styles.row}>
      <div className={styles.grid}>
        <section className={styles.column}>
          <Content />
          <button className={styles.button}>Some call to action</button>
        </section>

        <section className={styles.column}>
          <Content />
          <button className={styles.button}>Some call to action</button>
        </section>

        <section className={styles.column}>
          <Content />
          <button className={styles.button}>Some call to action</button>
        </section>
      </div>
    </div>

    <footer>
      <h5>Some footer</h5>
    </footer>
  </main>
);

export default ScssModules;
