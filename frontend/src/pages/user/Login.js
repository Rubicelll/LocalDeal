import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import styles from './Login.module.css'

import logo from '../../assets/logos/logo_yard_sale.svg'

function Login({ onLogin }) {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: '', password: '' })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('/api/auth/login', form)
            const token = res.data.token
            const user  = JSON.stringify(res.data.user)
            
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            onLogin(token) // actualiza el estado global del token
            navigate('/')
        } catch (err) {
            setError('Login failed. Check your credentials.')
        }
    }

    return (
        <div className={styles["login"]}>
            <div className={styles["form-container"]}>
                <img src={logo} alt="logo" className={styles["logo"]}/>
                <form onSubmit={handleSubmit} className={styles["form"]}>
                    <label htmlFor="email" className={styles["label"]}>Email address</label>
                    <input type="text" id="email" name="email" placeholder="camilayokoo@gmail.com" onChange={handleChange} required className={`${styles.input} ${styles["input-email"]}`}/>
                    <label htmlFor="password" className={styles["label"]}>Password</label>
                    <input type="password" id="password" name="password" placeholder="*********" onChange={handleChange} required className={`${styles.input} ${styles["input-password"]}`}/>
                    <input type="submit" value="Log in" className={`${styles["primary-button"]} ${styles["login-button"]}`}/>
                    {error && <small className={styles["form__error-message"]}>{error}</small>}
                    <a href="/recovery">Forgot my password</a>
                </form>

                <button className={`${styles["secondary-button"]} ${styles["signup-button"]}`}>Sign up</button>
            </div>
        </div>
    )
}

export default Login;