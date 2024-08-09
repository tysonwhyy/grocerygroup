import ArchivedItem from "./ArchivedItem";
import styles from "./archiveditem.module.css";
export default function ArchivedList({
  setArchivedItem,
  archivedItems,
  setArchivedItems,
  requestItems,
  setRequestItems,
}) {
  return (
    <div>
      {archivedItems.slice(0, 5).map((item) => (
        <ArchivedItem
          setArchivedItem={setArchivedItem}
          archivedItems={archivedItems}
          setArchivedItems={setArchivedItems}
          requestItems={requestItems}
          setRequestItems={setRequestItems}
          archivedItem={item}
          key={item.name}
        />
      ))}
      {archivedItems.length > 5 && (
        <strong className={styles["aitem-container"]}>...</strong>
      )}
    </div>
  );
}
