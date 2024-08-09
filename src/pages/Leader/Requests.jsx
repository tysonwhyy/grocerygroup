import styles from "./requests.module.css";
import RequestList from "./RequestList";
export default function Requests({
  requestItem,
  setRequestItem,
  requestItems,
  setRequestItems,
  items,
  setItems,
  archivedItems,
  setArchivedItems,
}) {
  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <span>Requests ({requestItems.length})</span>
      </div>
      <div>
        <RequestList
          setRequestItem={setRequestItem}
          requestItems={requestItems}
          setRequestItems={setRequestItems}
          items={items}
          setItems={setItems}
          archivedItems={archivedItems}
          setArchivedItems={setArchivedItems}
        />
      </div>
    </div>
  );
}
