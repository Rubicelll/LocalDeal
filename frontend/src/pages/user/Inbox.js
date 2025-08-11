import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styles from './Inbox.module.css';
import default_product_image from '../../assets/images/default.png';

function Inbox(){
    return (
        <section className={styles['inbox-section']}>
            <div className={styles['inbox-section__overview']}>
                <p className={styles["inbox-section__title"]}>Inbox</p>
                <div className={styles["inbox-section__filters"]}>
                    <div className={styles["inbox-section__buttons"]}>
                        <a className={`${styles["inbox-section__sell-button"]} ${styles["active"]}`}>Selling</a>
                        <a className={styles["inbox-section__buy-button"]}>Buying</a>
                    </div>
                    <div>
                        <hr/>
                        <p>Filter by label</p>
                        <div className={styles["inbox-section__pill-list"]}>
                            <a className={styles["inbox-section__pill"]}>All</a>
                            <a className={styles["inbox-section__pill"]}>Pending payment</a>
                            <a className={styles["inbox-section__pill"]}>Paid</a>
                            <a className={styles["inbox-section__pill"]}>To be shipped</a>
                            <a className={styles["inbox-section__pill"]}>Shipped</a>
                            <a className={styles["inbox-section__pill"]}>Cash on delivery</a>
                            <a className={styles["inbox-section__pill"]}>Completed</a>
                        </div>
                    </div>
                </div>
                <ul className={styles['inbox-section__cards']}>
                    <li className={styles['inbox-card']}>
                        <img className={styles["inbox-card__image"]} src={default_product_image}/>
                        <div className={styles["inbox-card__info"]}>
                            <p className={styles['inbox-card__title']}>Nabin - Skechers Men's</p>
                            <p className={styles['inbox-card__description']}>You: Okay</p>
                            <small className={styles['inbox-card__label']}>Completed</small>
                        </div>
                        <small className={styles['inbox-card__date']}>Fri</small>
                    </li>
                    <li className={styles['inbox-card']}>
                        <img className={styles["inbox-card__image"]} src={default_product_image}/>
                        <div className={styles["inbox-card__info"]}>
                            <p className={styles['inbox-card__title']}>Nabin - Skechers Men's</p>
                            <p className={styles['inbox-card__description']}>You: Okay</p>
                            <small className={styles['inbox-card__label']}>Completed</small>
                        </div>
                        <small className={styles['inbox-card__date']}>Fri</small>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Inbox