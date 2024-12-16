import React from "react";
import styles from "./menu.module.css";
import { MenuCategories } from "../menuCategories/MenuCategories";
import { MenuPosts } from "../menuPosts/MenuPosts";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <MenuPosts />
      <MenuCategories />
    </div>
  );
};
