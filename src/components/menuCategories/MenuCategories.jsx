import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

export const MenuCategories = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=travel"
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          Travel
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          Culture
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Food
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>
      </div>
    </div>
  );
};
