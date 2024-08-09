import List from "./List";
import Form from "./Form";
import Requests from "./Requests";
import Archived from "./Archived";
import BackBtn from "../../../src/components/BackBtn";
import styles from "./leader.module.css";
import { useState } from "react";

export default function Leader() {
  const [items, setItems] = useState([
    {
      name: "Eggs",
      isChecked: false,
      isEditMode: false,
    },
    {
      name: "Apples",
      isChecked: false,
      isEditMode: false,
    },
    {
      name: "Bananas",
      isChecked: false,
      isEditMode: false,
    },
  ]);
  const [item, setItem] = useState({
    name: "",
    isChecked: false,
    isEditMode: false,
  });

  const [requestItem, setRequestItem] = useState({ name: "" });
  const [requestItems, setRequestItems] = useState([
    { name: "Ligma", isShown: true },
    { name: "Skibidi", isShown: true },
    { name: "Chicken Nuggets", isShown: true },
    { name: "Ham", isShown: true },
    { name: "Cheese", isShown: true },
  ]);

  const [archivedItem, setArchivedItem] = useState({ name: "", isShown: true });
  const [archivedItems, setArchivedItems] = useState([
    { name: "Bacon", isShown: true },
    { name: "Cheddar", isShown: true },
    { name: "Swiss", isShown: true },
  ]);

  return (
    <div>
      <BackBtn route="/home" />
      <div className={styles["container"]}>
        <div className={styles["container-2"]}>
          <div className={styles["form-container"]}>
            <Form
              items={items}
              setItems={setItems}
              item={item}
              setItem={setItem}
            />
          </div>
          <div className={styles["list-container"]}>
            <div className={styles["list-container-2"]}>
              <List
                items={items}
                setItems={setItems}
                item={item}
                setItem={setItem}
              />
            </div>
          </div>
          <div className={styles["side-container"]}>
            <div className={styles["requests-container"]}>
              <Requests
                setRequestItem={setRequestItem}
                requestItems={requestItems}
                setRequestItems={setRequestItems}
                items={items}
                setItems={setItems}
                archivedItems={archivedItems}
                setArchivedItems={setArchivedItems}
              />
            </div>
            <div className={styles["archived-container"]}>
              <Archived
                setArchivedItem={setArchivedItem}
                archivedItems={archivedItems}
                setArchivedItems={setArchivedItems}
                requestItems={requestItems}
                setRequestItems={setRequestItems}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
