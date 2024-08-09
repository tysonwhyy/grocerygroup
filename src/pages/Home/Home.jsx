import Header from "./Header";
import Choices from "./Choices";

import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Header />
      <Choices />
    </div>
  );
}
