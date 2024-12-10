import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 classname={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 classname={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>

            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 12.12.24</span>
            </div>
          </div>
        </Link>

        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 classname={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>

            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 12.12.24</span>
            </div>
          </div>
        </Link>

        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 classname={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>

            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 12.12.24</span>
            </div>
          </div>
        </Link>

        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 classname={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>

            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 12.12.24</span>
            </div>
          </div>
        </Link>
      </div>
      <div>
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
    </div>
  );
};
