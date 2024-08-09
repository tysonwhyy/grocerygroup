import Item from "./Item";
import styles from "./list.module.css";

export default function List({ items, setItems, item, setItem }) {
  return (
    <div className={styles["list-container"]}>
      <h1 className={styles["list-header"]}>Items</h1>
      {items.map((item) => (
        <Item
          items={items}
          setItems={setItems}
          item={item}
          setItem={setItem}
          key={item.name}
        />
      ))}
    </div>
  );
}
