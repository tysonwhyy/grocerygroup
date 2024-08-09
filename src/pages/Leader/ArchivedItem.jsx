import styles from "./archiveditem.module.css";
export default function ArchivedItem({
  archivedItem,
  setArchivedItem,
  archivedItems,
  setArchivedItems,
  requestItems,
  setRequestItems,
}) {
  function handleCheck() {
    setArchivedItems(
      archivedItems.filter((currentAItem) => currentAItem !== archivedItem)
    );
    setRequestItems([...requestItems, { name: archivedItem.name }]);
  }

  function handleX() {
    setArchivedItems(
      archivedItems.filter((currentAItem) => currentAItem !== archivedItem)
    );
  }

  return (
    <div className={styles["aitem-container"]}>
      <div>{archivedItem.name}</div>
      <div>
        <button onClick={handleCheck} className={styles[("cbtn", "btn")]}>
          ✅
        </button>
        <button onClick={handleX} className={styles[("xbtn", "btn")]}>
          ❌
        </button>
      </div>
    </div>
  );
}
