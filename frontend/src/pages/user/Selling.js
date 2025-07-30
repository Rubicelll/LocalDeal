import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styles from './Selling.module.css';

function Selling(){
    return (
        <section className={styles['sell-section']}>
            <div className={styles['sell-section__overview']}>
            <p className={styles["sell-section__title"]}>Overview</p>
            <div className={styles['sell-section__cards']}>
                <div className={styles['sell-card']}>
                    <p className={styles['sell-card__number']}>0</p>
                    <div className={styles['sell-card__icon']}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                    <p className={styles['sell-card__description']}>Chats to answer</p>
                </div>
                <div className={styles['sell-card']}>
                    <p className={styles['sell-card__number']}>2</p>
                    <div className={styles['sell-card__icon']}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                    <p className={styles['sell-card__description']}>Active listings</p>
                </div>
                <div className={styles['sell-card']}>
                    <p className={styles['sell-card__number']}>2</p>
                    <div className={styles['sell-card__icon']}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                    <p className={styles['sell-card__description']}>Add video to listings</p>
                </div>
                <div className={styles['sell-card']}>
                    <p className={styles['sell-card__number']}>2</p>
                    <div className={styles['sell-card__icon']}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                    <p className={styles['sell-card__description']}>listings to renew</p>
                </div>
                <div className={styles['sell-card']}>
                    <p className={styles['sell-card__number']}>0</p>
                    <div className={styles['sell-card__icon']}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                    <p className={styles['sell-card__description']}>Listing to delete & relist</p>
                </div>
            </div>
            </div>
            <div className={styles['sell-section__performance']}>
            <p className={styles["sell-section__title"]}>Performance</p>
            <div className={styles['sell-section__cards']}>
                <div className={styles['sell-card']}>
                    <p className={styles['sell-card__number']}>0</p>
                    <div className={styles['sell-card__icon']}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                    <p className={styles['sell-card__description']}>Listing to delete & relist</p>
                </div>
            </div>
            </div>
            <div className={styles['sell-section__ideas']}>
            <p className={styles["sell-section__title"]}>Listing ideas</p>
            <div className={styles['sell-section__cards']}>
                <div className={styles['sell-card']}>
                    <p className={styles['sell-card__number']}>0</p>
                    <div className={styles['sell-card__icon']}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                    <p className={styles['sell-card__description']}>Listing to delete & relist</p>
                </div>
            </div>
            </div>
            <div className={styles['sell-section__trending-searches']}>
            <p className={styles["sell-section__title"]}>Trending searches this week</p>
            <div className={styles['sell-section__cards']}>
                <div className={styles['sell-card']}>
                    <p className={styles['sell-card__number']}>0</p>
                    <div className={styles['sell-card__icon']}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                    <p className={styles['sell-card__description']}>Listing to delete & relist</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Selling