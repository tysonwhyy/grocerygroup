import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ items, setItems, item, setItem }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (item.name != "") {
      setItem({ ...item, name: "", editValue: "" });
      setItems(items.concat(item)); // concatenates the item item to the list
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles["item-input"]}
        type="text"
        value={item.name}
        placeholder="Enter Item"
        onChange={(e) => setItem({ ...item, name: e.target.value })} // handles typing in form
      />
      <button
        className={styles["add-btn"]}
        type="submit"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
}
