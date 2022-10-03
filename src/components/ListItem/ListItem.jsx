import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ListItem.module.css";

// {
//   itemType,
//   type,
//   index,
//   _id,
//   name,
//   image,
//   image_large,
//   price,
//   moveListItem,
//   handleClose,
// }
export const ListItem = ({
  itemType,
  type,
  index,
  _id,
  name,
  image,
  image_large,
  price,
  moveListItem,
  handleClose,
  onClick,
}) => {
  const firstRef = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { itemType, type, _id, name, index, image, image_large, price },

    // collect: (monitor) => ({
    //   isDragging: monitor.isDragging(),
    // }),
  });

  const [spec, dropRef] = useDrop({
    accept: "item",
    drop: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (moveListItem) {
        moveListItem(dragIndex, hoverIndex);
      }
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  // const opacity = isDragging ? 0 : 1;

  const listHandleClose = (e) => {
    // console.log("e", e);
    e.stopPropagation();
    handleClose(_id);
  };

  const testImage = "https://code.s3.yandex.net/react/code/bun-02.png";

  // const testFunc = () => {
  //   onClick();
  // };

  if (itemType === "listItem") {
    return (
      <div
        className={styles.listItem}
        ref={dragDropRef}
        onClick={() => {
          onClick();
        }}
      >
        <ConstructorElement
          key={_id}
          // type={"top"}
          isLocked={false}
          text={name}
          price={price}
          thumbnail={image}
          handleClose={listHandleClose}
        />
      </div>
    );
  } else {
    return (
      <div
        className={styles.gridItem}
        ref={dragDropRef}
        onClick={() => {
          onClick();
        }}
      >
        <img className={styles.gridImage} src={image} />
        <div className={styles.price}>
          <p className="text text_type_digits-medium">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles.title}>
          <p className="text text_type_main-small">{name}</p>
        </div>
      </div>
    );
  }
};
