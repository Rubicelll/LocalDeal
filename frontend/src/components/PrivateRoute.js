import { Navigate, Routes, Route, Link } from 'react-router-dom';
import styles from '../App.module.css';

// components
import Navbar from './Navbar';
import Asidebar from './Asidebar';

// pages
import Home from '../pages/user/Home';
import Categories from '../pages/user/Categories';
import ProducsByCategory from '../pages/user/ProductsByCategory';
import Selling from '../pages/user/Selling'
import CreateProduct from '../CreateProduct';

const PrivateRoute = ({ token }) => {
  // validate token
  if (!token) <Navigate to="/login" />

  // function for menu in mobile app (it's only for change the active class on the links)
  function handleMenu(e){
    const buttons = document.getElementsByClassName(styles["home__button"])
    for (const element of buttons) {
      element.classList.remove(styles['active'])
    }
    
    e.currentTarget.classList.add(styles['active'])
  }

  return (
    <>
    <Navbar/>
      <main>
        <Asidebar/>
        <div className={styles["container"]}>
          {/* options mobile menu */}
          <div className={styles["home__buttons-list"]}>
            <Link to="/selling" onClick={handleMenu} className={styles["home__button"]}>Sell</Link>
            <Link to="/" onClick={handleMenu} className={`${styles["home__button"]} ${styles["active"]}`}>For you</Link>
            <Link to="/categories" onClick={handleMenu} className={styles["home__button"]}>Categories</Link>
          </div>

          <Routes>
            {/* protected routes */}
            <Route path="/" element={<Home />} /> { /* all products */ }
            <Route path="/products/" element={<Home />} /> { /* products by category */ }
            <Route path="/notifications" element={<Selling />} />
            <Route path="/inbox" element={<Selling />} />
            <Route path="/marketplace-access" element={<Selling />} />
            <Route path="/buying" element={<Selling />} />
            <Route path="/selling" element={<Selling />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/nearby" element={<Home />} />
            <Route path="/recovery" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products-by-category" element={<ProducsByCategory />} />
          </Routes>
        </div>
      </main>
    </>
  )
};

export default PrivateRoute;