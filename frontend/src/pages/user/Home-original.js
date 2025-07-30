import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // const res = await axios.get(`http://localhost:6000/api/products/nearby?lat=${latitude}&lng=${longitude}`);
          const res = await axios.get(`http://192.168.137.1:50000/api/products/nearby?lat=${51.045}&lng=${-114.07}`);
          setProducts(res.data);
        } catch (err) {
          console.error('Error al obtener productos:', err);
        }

        setLoading(false);
      },
      (error) => {
        console.error('Geolocalización denegada:', error);
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <p className="text-center">Cargando productos cercanos...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Productos cerca de ti</h2>
      {products.length === 0 ? (
        <p>No hay productos cercanos.</p>
      ) : (
        <div className='products-container'>
          {products.map((p) => (
              <div className='card' key={p._id}>
                <img className='card__image' src={process.env.REACT_APP_SERVER_URI + (p.image ? p.image : "/uploads/default.png")}/>
                <div className='card__info'>
                  <h3 className="card__title font-semibold">{p.title}</h3>
                  <p className='card__description'>{p.description}</p>
                  <p className="card__price text-sm text-gray-500">${p.price}</p>
                </div>
              </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
