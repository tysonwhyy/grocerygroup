import { useState } from "react";
import styles from "./archived.module.css";
import ArchivedList from "./ArchivedList";
export default function Archived({
  archivedItem,
  setArchivedItem,
  archivedItems,
  setArchivedItems,
  requestItems,
  setRequestItems,
}) {
  const [isArchivedShown, setIsArchivedShown] = useState(false);
  function toggleVisibility() {
    setIsArchivedShown(!isArchivedShown);
  }
  return isArchivedShown ? (
    <div className={styles["container"]}>
      <div className={styles["header-container"]} onClick={toggleVisibility}>
        Archived ▼ ({archivedItems.length})
      </div>
      <div>
        <ArchivedList
          setArchivedItem={setArchivedItem}
          archivedItems={archivedItems}
          setArchivedItems={setArchivedItems}
          requestItems={requestItems}
          setRequestItems={setRequestItems}
        />
      </div>
    </div>
  ) : (
    <div className={styles["hidden-archive"]} onClick={toggleVisibility}>
      Archived ▶
    </div>
  );
}
