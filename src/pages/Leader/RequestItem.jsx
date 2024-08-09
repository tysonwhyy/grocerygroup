import styles from "./requestitem.module.css";
export default function RequestItem({
  setRequestItem,
  requestItems,
  setRequestItems,
  items,
  setItems,
  rItem,
  archivedItems,
  setArchivedItems,
}) {
  function handleCheck() {
    setRequestItems(
      requestItems.filter((currentRItem) => currentRItem !== rItem)
    );
    setItems([...items, { name: rItem.name, isChecked: false }]);
  }

  function handleX() {
    setRequestItems(
      requestItems.filter((currentRItem) => currentRItem !== rItem)
    );
    setArchivedItems([
      ...archivedItems,
      { name: rItem.name, isChecked: false },
    ]);
  }

  return (
    <div className={styles["ritem-container"]}>
      <div>{rItem.name}</div>
      <div>
        <button className={styles[("cbtn", "btn")]} onClick={handleCheck}>
          ✅
        </button>
        <button className={styles[("xbtn", "btn")]} onClick={handleX}>
          ❌
        </button>
      </div>
    </div>
  );
}
