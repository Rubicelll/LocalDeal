import React, { useState } from 'react';
import axios from 'axios';

function CreateProduct({token}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Location error:', error);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!location.lat || !location.lng) {
      setMessage('Please allow location access first.');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('lat', location.lat);
    data.append('lng', location.lng);
    if (image) data.append('image', image);
    try {
      const res = await axios.post('http://localhost:50000/api/products',data ,
        {
            headers: {
              // 'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        }
    );

      setMessage('Product created successfully!');
      setFormData({ title: '', description: '', price: '' });
      setImage(null);
    } catch (err) {
      // console.error(err);
      setMessage('Error creating product.');
    }
  };

  return (
    <div>
      <h2>Create a Product</h2>
      <button onClick={getLocation}>Use My Location</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />
        <br />
        <button type="submit">Create</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateProduct;
