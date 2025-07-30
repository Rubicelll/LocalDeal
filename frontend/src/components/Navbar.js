import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import logo from '../assets/logos/logo_yard_sale.svg';
import default_image_profile from '../assets/images/default.png'

function toggleMenu(){
    const button = document.getElementById('profile-menu')
    button.classList.toggle('active')
    const menu = document.getElementById("modal-profile")
    menu.classList.toggle(styles.active)
}


function Navbar(){
    return (
        <>
            <nav className={styles["navbar"]}>
                <div className={styles["navbar__left"]}>
                    <img src={logo} alt="logo" className={styles["logo"]}/>
                </div>
                <p className={styles["navbar__title"]}>Marketplace</p>
                <div className={styles["navbar__right"]}>
                    <ul>
                        <li>
                            <div className={styles["navbar__chat"]}><ion-icon name="chatbubble-ellipses-sharp"></ion-icon></div>
                        </li>
                        <li>
                            <div className={styles["navbar__notifications"]}><ion-icon name="notifications-sharp"></ion-icon></div>
                        </li>
                        <li>
                            <button id="profile-menu" onClick={toggleMenu} className={styles["navbar__profile"]}><ion-icon name="person-circle-sharp" className={styles["navbar__profile-img"]}></ion-icon><div className={styles["navbar__profile-bullet"]}><ion-icon name="chevron-down-sharp"></ion-icon></div></button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="modal-profile" className={styles["modal-profile"]}>
                <div className={styles["card"]}>
                    <img className={styles["card__image"]} src={default_image_profile}/>
                    <p className={styles["card__name"]}>Rubicel Rojo</p>
                </div>
                <ul className={styles["card__list"]}>
                    <li className={styles["card__list--item"]}>
                        <a className={styles["card__list--link"]} href="">
                            <div className={styles["card__list--icon"]}>
                                <ion-icon name="log-out-sharp"></ion-icon>
                            </div>Log out
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;