import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Asidebar.module.css';

// function for menu in mobile app (it's only for change the active class on the links)
  function handleMenuCategories(e){
    console.log(e.currentTarget);
    
    const buttons = document.getElementsByClassName(styles["sidebar__list--item"])
    for (const element of buttons) {
      element.classList.remove(styles['active'])
    }
    
    e.currentTarget.classList.add(styles['active'])
  }

function Asidebar(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`http://localhost:50000/api/categories`)
                setCategories(res.data)
                
            } catch (err) {
                console.error('Error to fetch categories:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return (
        <aside className={styles["sidebar"]}>
            <div className={styles["sidebar__header"]}>
                <p className={styles["sidebar__title"]}>Marketplace</p>
                <div className={styles["sidebar__settings-icon"]}><ion-icon name="settings-sharp"></ion-icon></div>
            </div>
            <div className={styles["sidebar__search"]}>
                <div className={styles["sidebar__search-icon"]}>
                    <ion-icon name="search-sharp"></ion-icon>
                </div>
                <input className={styles["sidebar__search-input"]} type="text" placeholder="Search Marketplace"/>
            </div>
            <hr/>
            <ul className={styles["sidebar__list"]}>
                <li className={`${styles["sidebar__list--item"]} ${styles["active"]}`} onClick={handleMenuCategories}>
                    <Link to={"/"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="storefront-sharp"></ion-icon></div>Browse all</Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/notifications"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="notifications-sharp"></ion-icon></div>Notifications</Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/inbox"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="mail-unread-sharp"></ion-icon></div>Inbox</Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/marketplace-access"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="key-sharp"></ion-icon></div>Marketplace access</Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/buying"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="bag-handle-sharp"></ion-icon></div>Buying<ion-icon name="chevron-forward-sharp"></ion-icon></Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/selling"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="pricetag-sharp"></ion-icon></div>Selling<ion-icon name="chevron-forward-sharp"></ion-icon></Link>
                </li>
            </ul>
            <button className={`${styles["sidebar__button"]} ${styles["sidebar__button--primary"]}`}>+ Create new listing</button>
            <button className={`${styles["sidebar__button"]} ${styles["sidebar__button--secondary"]}`}>Create multiple listing</button>
            <hr/>
            <p className={styles["sidebar__subtitle"]}>Location</p>
            <a className={styles["sidebar__location"]} href="">Calgary, Alberta * Within 72 km</a>
            <hr/>
            <p className={styles["sidebar__subtitle"]}>Categories</p>
            <p>Loading categories...</p>
        </aside>
    )

    return (
        <aside className={styles["sidebar"]}>
            <div className={styles["sidebar__header"]}>
                <p className={styles["sidebar__title"]}>Marketplace</p>
                <div className={styles["sidebar__settings-icon"]}><ion-icon name="settings-sharp"></ion-icon></div>
            </div>
            <div className={styles["sidebar__search"]}>
                <div className={styles["sidebar__search-icon"]}>
                    <ion-icon name="search-sharp"></ion-icon>
                </div>
                <input className={styles["sidebar__search-input"]} type="text" placeholder="Search Marketplace"/>
            </div>
            <hr/>
            <ul className={styles["sidebar__list"]}>
                <li className={`${styles["sidebar__list--item"]} ${styles["active"]}`} onClick={handleMenuCategories}>
                    <Link to={"/"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="storefront-sharp"></ion-icon></div>Browse all</Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/notifications"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="notifications-sharp"></ion-icon></div>Notifications</Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/inbox"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="mail-unread-sharp"></ion-icon></div>Inbox</Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/marketplace-access"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="key-sharp"></ion-icon></div>Marketplace access</Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/buying"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="bag-handle-sharp"></ion-icon></div>Buying<ion-icon name="chevron-forward-sharp"></ion-icon></Link>
                </li>
                <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                    <Link to={"/selling"} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="pricetag-sharp"></ion-icon></div>Selling<ion-icon name="chevron-forward-sharp"></ion-icon></Link>
                </li>
            </ul>
            <button className={`${styles["sidebar__button"]} ${styles["sidebar__button--primary"]}`}>+ Create new listing</button>
            <button className={`${styles["sidebar__button"]} ${styles["sidebar__button--secondary"]}`}>Create multiple listing</button>
            <hr/>
            <p className={styles["sidebar__subtitle"]}>Location</p>
            <a className={styles["sidebar__location"]} href="">Calgary, Alberta * Within 72 km</a>
            <hr/>
            <p className={styles["sidebar__subtitle"]}>Categories</p>
                {categories.length === 0 ? (<p>There are no categories</p>) :(
                <ul className={styles["sidebar__list"]}>
                    {
                        categories.map((c)=>(
                            <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories} key={c.slug}>
                                <Link to={`/products-by-category?slug=${c.slug}&category=${c.name}`} className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name={c.icon}></ion-icon></div>{c.name}</Link>
                            </li>
                        ))
                    }
                    {/* <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="home-sharp"></ion-icon></div>property rentals</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="shirt-sharp"></ion-icon></div>apparel</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="pricetag-sharp"></ion-icon></div>classifieds</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="phone-portrait-sharp"></ion-icon></div>electronics</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="videocam-sharp"></ion-icon></div>enternainment</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="heart-sharp"></ion-icon></div>family</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="pricetags-sharp"></ion-icon></div>free stuff</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="hammer-sharp"></ion-icon></div>garden & outdoor</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="color-palette-sharp"></ion-icon></div>hobbies</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="home-sharp"></ion-icon></div>home goods</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="build-sharp"></ion-icon></div>home improvement supplies</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="home-sharp"></ion-icon></div>home sales</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="musical-notes-sharp"></ion-icon></div>musical instruments</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="pricetag-sharp"></ion-icon></div>office supplies</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="paw-sharp"></ion-icon></div>pet supplies</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="walk-sharp"></ion-icon></div>sporting goods</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="game-controller-sharp"></ion-icon></div>toys & games</Link>
                    </li>
                    <li className={styles["sidebar__list--item"]} onClick={handleMenuCategories}>
                        <Link to="/" className={styles["sidebar__list--link"]}><div className={styles["sidebar__list--icon"]}><ion-icon name="people-circle-sharp"></ion-icon></div>buy and sell groups</Link>
                    </li> */}
                </ul>
                )}
        </aside>
    );
}

export default Asidebar;