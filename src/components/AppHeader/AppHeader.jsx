import React from "react"; // импорт библиотеки
import styles from "./AppHeader.module.css";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

class AppHeader extends React.Component {
  render() {
    return (
      <>
        <nav className={styles.AppHeader}>
          {/* buttons */}
          <div className={styles.buttons}>
            <a className={styles.buttonActive} href="#">
              <BurgerIcon type="primary" />
              <div className={styles.label}>Конструктор</div>
            </a>
            <a className={styles.button} href="#">
              <ListIcon type="secondary" />
              <div className={styles.label}>Конструктор</div>
            </a>
          </div>
          <div className={styles.logo}>
            <Logo />
          </div>
          <a className={styles.profileGrpoup} href="#">
            <ProfileIcon type="secondary" />
            <div className={styles.label}>Конструктор</div>
          </a>
        </nav>
      </>
    );
  }
}

export default AppHeader;
