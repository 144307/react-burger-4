import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { useCallback } from "react";
import styles from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DATA } from "../../utils/data";
import { ListItem } from "../ListItem/ListItem";

export const BurgerConstructor = ({
  data,
  openIngredientDetails,
  openOrderDetails,
}) => {
  const [price, setPrice] = useState();
  useEffect(() => {
    // console.log("useEffect");
    updatePrice();
  });

  const [basket, setBasket] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "item",
    // drop: (item, monitor) => {
    drop: (item) => {
      // console.log("item", item.name);
      // console.log("price", item.price);
      if (basket.length === 0 && item.type === "bun") {
        setBasket((basket) =>
          !basket.includes(item) ? [...basket, item] : basket
        );
      } else if (basket.length > 0 && item.type != "bun") {
        if (basket.filter((e) => e._id === item._id).length === 0) {
          setBasket((basket) =>
            !basket.includes(item) ? [...basket, item] : basket
          );
        }
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const moveListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = basket[dragIndex + 1];
      const hoverItem = basket[hoverIndex + 1];
      // console.log("dragItem", dragItem.name);
      // console.log("hoverItem", hoverItem.name);
      setBasket((basket) => {
        const updatedListItems = [...basket];
        updatedListItems[dragIndex + 1] = hoverItem;
        updatedListItems[hoverIndex + 1] = dragItem;
        return updatedListItems;
      });
    },
    [basket]
  );

  const updatePrice = () => {
    let price = 0;
    for (let i = 0; i < basket.length; i++) {
      // console.log("basket at i", basket[i]);
      price += basket[i].price;
    }
    // console.log("MAIN Price", price);
    setPrice(price);
  };

  const handleClose = (id) => {
    // console.log("handleClose id", id);
    // console.log("basket", basket.length);
    // console.log(
    //   "basket",
    //   basket.filter((e) => e._id === id)
    // );
    setBasket(basket.filter((e) => e._id != id));
  };

  const ListItems = () => {
    // let newArray = basket.slice(1, DATA.length - 1);
    let newArray = basket.slice(1, data.length - 1);
    return (
      <ul
        className={styles.constructorWindow}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        ref={dropRef}
      >
        {newArray.map((item, index) => (
          <ListItem
            itemType={"listItem"}
            type={item.type}
            key={item._id}
            _id={item._id}
            name={item.name}
            index={index}
            image={item.image}
            price={item.price}
            moveListItem={moveListItem}
            handleClose={handleClose}
            onClick={() => {
              openIngredientDetails(item._id, data);
            }}
          />
        ))}
      </ul>
    );
  };

  const TopItem = () => {
    if (basket.length > 0) {
      return (
        <div className={styles.topItem}>
          <ConstructorElement
            key={basket[0]._id}
            type={"top"}
            isLocked={true}
            text={basket[0].name + " (верх)"}
            price={basket[0].price}
            thumbnail={basket[0].image}
          />
        </div>
      );
    }
  };

  const BotttomItem = () => {
    if (basket.length > 0) {
      return (
        <div className={styles.topItem}>
          <ConstructorElement
            key={basket[0]._id}
            type={"bottom"}
            isLocked={true}
            text={basket[0].name + " (низ)"}
            price={basket[0].price}
            thumbnail={basket[0].image}
          />
        </div>
      );
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.border}>
        <TopItem />
        <ListItems />
        <BotttomItem />
      </div>
      <div className={styles.orderDetails}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            openOrderDetails(basket);
            // console.log("basket", basket);
          }}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
