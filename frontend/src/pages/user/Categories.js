import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Categories.module.css';

function Categories(){
    const [topCategories, setTopCategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopCategories = async () => {
            try {
                const res = await axios.get(`http://localhost:50000/api/categories/top`)
                setTopCategories(res.data)
                
            } catch (err) {
                console.error('Error to fetch top categories:', err);
            } finally {
                setLoading(false);
            }
        };

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

        
        
        fetchTopCategories();
        fetchCategories();
    }, []);

    if (loading) return (
        <section className={styles["category-section"]}>
            <p className="text-center">Loading categories...</p> 
        </section>
    )


    return (
        <section className={styles['category-section']}>
            <div className={styles['category-section__top']}>
                <p className={styles["category-section__title"]}>Top categories</p>
                {topCategories.length === 0 ? (<p>There are no categories</p>) : (
                    <ul className={styles["category__list"]}>
                        {
                            topCategories.map((c) => (
                                <li className={styles["category__list--item"]} key={c.slug}>
                                    <Link to={`/products-by-category?slug=${c.slug}&category=${c.name}`} className={styles["category__list--link"]}><div className={styles["category__list--icon"]}><ion-icon name={c.icon}></ion-icon></div>{c.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </div>
            <div className={styles['category-section__all']}>
                <p className={styles["category-section__title"]}>All categories</p>
                {categories.length === 0 ? (<p>There are no categories</p>) : (
                    <ul className={styles["category__list"]}>
                        {
                            categories.map((c) => (                                    
                                <li className={styles["category__list--item"]} key={c.slug}>
                                    <Link to={`/products-by-category?slug=${c.slug}&category=${c.name}`} className={styles["category__list--link"]}><div className={styles["category__list--icon"]}><ion-icon name={c.icon}></ion-icon></div>{c.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </div>
        </section>
    )
}

export default Categories