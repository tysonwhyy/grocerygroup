import React, { useState } from "react";
import styles from "./item.module.css";

export default function Item({ items, setItems, item }) {
  const [editValue, setEditValue] = useState(item.name);

  function handleDelete() {
    setItems(items.filter((i) => i !== item));
  }

  function handleChange() {
    setItems(
      items.map((currentItem) =>
        currentItem === item
          ? { ...item, isChecked: !item.isChecked }
          : currentItem
      )
    );
  }

  function handleEditClick() {
    setEditValue(item.name);
    setItems(
      items.map((currentItem) =>
        currentItem === item
          ? { ...item, isEditMode: !item.isEditMode }
          : currentItem
      )
    );
  }

  function handleSave() {
    setItems(
      items.map((currentItem) =>
        currentItem === item
          ? { ...item, name: editValue, isEditMode: false }
          : currentItem
      )
    );
  }

  function handleCancel() {
    setItems(
      items.map((currentItem) =>
        currentItem === item ? { ...item, isEditMode: false } : currentItem
      )
    );
  }

  return (
    <div>
      <div className={styles["item-container"]}>
        {item.isEditMode ? (
          <div className={styles["form-container"]}>
            <form
              className={styles["edit-form"]}
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              <input
                className={styles["edit-input"]}
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                autoFocus
              />
              <button type="submit" className={styles["ebtn"]}>
                ✓
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className={styles["ebtn"]}
              >
                ✗
              </button>
            </form>
          </div>
        ) : (
          <div className={styles["item-container-2"]} onClick={handleChange}>
            <input
              className={styles["checkbox"]}
              type="checkbox"
              onChange={handleChange}
              checked={item.isChecked}
            />
            {item.isChecked ? (
              <div className={styles["item_checked"]}>
                <s>{item.name}</s>
              </div>
            ) : (
              <div className={styles["item_unchecked"]}>{item.name}</div>
            )}
          </div>
        )}
        <div className={styles["btn-container"]}>
          <button
            className={styles[("edit-btn", "btn")]}
            onClick={handleEditClick}
          >
            📝
          </button>
          <button className={styles[("xbtn", "btn")]} onClick={handleDelete}>
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}
