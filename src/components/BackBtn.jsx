import { Link } from "react-router-dom";
import styles from "./backbtn.module.css";
export default function BackBtn({ route }) {
  return (
    <div className={styles["button-container"]}>
      <Link to={route}>
        <button className={styles["back-btn"]}>⬅️ Back</button>
      </Link>
    </div>
  );
}
