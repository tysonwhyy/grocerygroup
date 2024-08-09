import { Link } from "react-router-dom";
import styles from "./choices.module.css";

export default function Choices() {
  return (
    <div>
      <Link to="/leader">
        <button className={styles["btn"]}>Group Leader</button>
      </Link>
      <Link to="/member">
        <button className={styles["btn"]}>Group Member</button>
      </Link>
    </div>
  );
}
