import React from 'react'
import Layout from '../../Components/Layout/Layout'
import logo from '../../assets/amazon-logo.png'
import { Link } from 'react-router-dom'
import styles from './Auth.module.css'

export default function Auth() {
  return (
    <Layout>
      <div>
        <Link to="/"><img src={logo} alt="Amazon logo" className={styles.logo} /></Link>
        <div className={styles.container}>
          <h1 className={styles.title}>sign in</h1>
          <form>
            <h5 className={styles.label}>Email</h5>
            <input type="text" className={styles.input} />
            <h5 className={styles.label}>Password</h5>
            <input type="password" className={styles.input} />
            <button className={styles.button}>Sign In</button>
          </form>
          <p className={styles.text}>By continuing, you agree to my Amazon-clone Conditions of Use and Privacy Notice.</p>
          <p>new to Amazon?</p>
          <button className={styles.button}>Create your Amazon account</button>
      </div>
    </div>
    </Layout>
  )
}
