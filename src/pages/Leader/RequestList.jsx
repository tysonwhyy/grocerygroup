import RequestItem from "./RequestItem";
import styles from "./requestitem.module.css";
export default function RequestList({
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
    <div>
      {requestItems.slice(0, 5).map((rItem) => (
        <RequestItem
          setRequestItem={setRequestItem}
          requestItems={requestItems}
          setRequestItems={setRequestItems}
          items={items}
          setItems={setItems}
          rItem={rItem}
          key={rItem.name}
          archivedItems={archivedItems}
          setArchivedItems={setArchivedItems}
        />
      ))}
      {requestItems.length > 5 && (
        <strong className={styles["ritem-container"]}>...</strong>
      )}
    </div>
  );
}
