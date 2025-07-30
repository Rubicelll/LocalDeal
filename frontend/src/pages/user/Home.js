import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios';
import styles from './Home.module.css';
import default_product_image from '../../assets/images/default.png';
// import bt_add_to_cart from "../../assets/icons/bt_add_to_cart.svg";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:50000/api/products/all`);
        setProducts(res.data);
      } catch (err) {
        console.error('Error al obtener productos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return (
    <>
    <div className={styles["section-home"]}>
      {/* <Asidebar/> */}
      <div className={styles["main-container"]}>
        <p className="text-center">Cargando productos cercanos...</p> 
      </div>
    </div>
    </>
  )

  return (
    <>
    <div className={styles["section-home"]}>
    {/* <Asidebar/> */}
      <div className={styles["main-container"]}>
        {/* For you section */}
        <section className={styles['for-you-section']}>
          <div className={styles["home__category-info"]}>
            <p className={styles["home__category-title"]}>Today's picks</p>
            <Link to="/" className={styles["home__location"]}><ion-icon name="location-sharp"></ion-icon>Calgary, AB</Link>
          </div>
          {/* products list */}
          {products.length === 0 ? ( <p>There are no products</p> ) : (
            <div className={styles["cards-container"]}>
              {products.map((p) => (
                  <div className={styles["card"]} key={p._id}>
                    <img className={styles["card__image"]} src={
                      (p.image 
                      ? process.env.REACT_APP_SERVER_URI + p.image
                      : default_product_image)}/>
                    <div className={styles["card__info"]}>
                      <div>
                        <p className={styles["card__price"]}>${p.price}</p>
                        <p className={styles["card__title"]}>{p.title}</p>
                        {/* <p className={styles["card__description"]}>{p.description}</p> */}
                      </div>
                      {/* <figure>
                          <img className={styles["card__add-to-car"]} src={bt_add_to_cart} alt="add to cart" />
                      </figure> */}
                    </div>
                  </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
    </>
  );
}

export default Home;
