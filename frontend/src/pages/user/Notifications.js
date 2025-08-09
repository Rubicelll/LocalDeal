import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styles from './Notifications.module.css';
import default_product_image from '../../assets/images/default.png';

function Notifications(){
    return (
        <section className={styles['notifications-section']}>
            <div className={styles['notifications-section__overview']}>
                <p className={styles["notifications-section__title"]}>Notifications</p>
                <ul className={styles['notifications-section__cards']}>
                    <li className={styles['notifications-card']}>
                        <img className={styles["notifications-card__image"]} src={default_product_image}/>
                        <div className={styles["notifications-card__info"]}>
                            <p className={styles['notifications-card__description']}>Chats to answer</p>
                            <p className={styles['notifications-card__time']}>8h</p>
                        </div>
                    </li>
                    <li className={styles['notifications-card']}>
                        <img className={styles["notifications-card__image"]} src={default_product_image}/>
                        <div className={styles["notifications-card__info"]}>
                            <p className={styles['notifications-card__description']}>Chats to answer</p>
                            <p className={styles['notifications-card__time']}>8h</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Notifications