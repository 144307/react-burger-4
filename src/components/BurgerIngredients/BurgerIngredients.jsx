import React from "react";
// import { setSyntheticLeadingComments } from "typescript";
import styles from "./BurgerIngredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { ListItem } from "../ListItem/ListItem";

export const BurgerIngredients = ({ data, openIngredientDetails }) => {
  const [current, setCurrent] = React.useState("one");

  const tabs = (
    <div style={{ display: "flex" }}>
      <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab
        value="Основное"
        active={current === "Основное"}
        onClick={setCurrent}
      >
        Основное
      </Tab>
    </div>
  );

  // function scrollTo(hash) {
  //   location.hash = "#" + hash;
  // }
  return (
    <div className={styles.mainBox}>
      <div className={styles.tilte}>
        <div className="p-4">
          <p className="text text_type_main-large">Соберите бургер</p>
        </div>
        <div style={{ display: "flex" }}>{tabs}</div>
      </div>
      <div className={styles.box}>
        <div className="m-2">
          <p className="text text_type_main-medium">Булки</p>
        </div>
        <ul className={styles.ingredients}>
          {data
            .filter((e) => e.type === "bun")
            .map((item, index) => (
              <ListItem
                itemType={"gridItem"}
                type={item.type}
                key={item._id}
                _id={item._id}
                name={item.name}
                index={index}
                image={item.image}
                image_large={item.image_large}
                price={item.price}
                onClick={() => {
                  openIngredientDetails(item._id, data);
                }}
              />
            ))}
        </ul>
        <div className="m-2">
          <p className="text text_type_main-medium">Соусы</p>
        </div>
        <ul className={styles.ingredients}>
          {data
            .filter((e) => e.type === "sauce")
            .map((item, index) => (
              <ListItem
                itemType={"gridItem"}
                type={item.type}
                key={item._id}
                _id={item._id}
                name={item.name}
                index={index}
                image={item.image}
                image_large={item.image_large}
                price={item.price}
                onClick={() => {
                  openIngredientDetails(item._id, data);
                }}
              />
            ))}
        </ul>
        <div className="m-2">
          <p className="text text_type_main-medium">Основное</p>
        </div>
        <ul className={styles.ingredients}>
          {data
            .filter((e) => e.type === "main")
            .map((item, index) => (
              <ListItem
                itemType={"gridItem"}
                type={item.type}
                key={item._id}
                _id={item._id}
                name={item.name}
                index={index}
                image={item.image}
                image_large={item.image_large}
                price={item.price}
                onClick={() => {
                  openIngredientDetails(item._id, data);
                }}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};
