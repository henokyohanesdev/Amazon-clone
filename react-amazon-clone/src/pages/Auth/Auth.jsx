import React, { useState, useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import logo from "../../assets/amazon-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import styles from "./Auth.module.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { ActionTypes } from "../../utils/actionType";
import { FadeLoader } from "react-spinners";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signin: false, signup: false });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    const actionType = e.target.name === "signin" ? "signin" : "signup";
    setLoading({ ...loading, [actionType]: true });

    try {
      const userCredential =
        actionType === "signin"
          ? await signInWithEmailAndPassword(auth, email, password)
          : await createUserWithEmailAndPassword(auth, email, password);

      dispatch({ type: ActionTypes.SET_USER, user: userCredential.user });
      setLoading({ ...loading, [actionType]: false });
      navigate("/");
    } catch (error) {
      setError(error.message);
      setLoading({ ...loading, [actionType]: false });
    }
  };

  return (
    <Layout>
      <div>
        <Link to="/">
          <img src={logo} alt="Amazon logo" className={styles.logo} />
        </Link>
        <div className={styles.container}>
          <h1 className={styles.title}>Sign In</h1>
          <form>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={styles.button}
              name="signin"
              type="button"
              onClick={handleAuth}
            >
              {loading.signin ? <FadeLoader /> : "Sign In"}
            </button>
          </form>
          <p className={styles.text}>
            By continuing, you agree to my Amazon-clone Conditions of Use and
            Privacy Notice.
          </p>
          <p>New to Amazon?</p>
          <button
            className={styles.button}
            name="signup"
            type="button"
            onClick={handleAuth}
          >
            {loading.signup ? <FadeLoader /> : "Create your Amazon account"}
          </button>
        </div>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </Layout>
  );
}

// import React, { useState, useContext } from 'react'
// import Layout from '../../Components/Layout/Layout'
// import logo from '../../assets/amazon-logo.png'
// import { Link, useNavigate } from 'react-router-dom'
// import { auth } from '../../utils/firebase'
// import styles from './Auth.module.css'
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
// import { DataContext } from '../../Components/DataProvider/DataProvider'
// import { ActionTypes } from '../../utils/actionType'
// import { FadeLoader } from 'react-spinners'

// export default function Auth() {

//   const [email, setEmail] = React.useState('')
//   const [password, setPassword] = React.useState('')
//   const [error, setError] = React.useState('')
//   const [loading, setLoading] = React.useState({signin: false, signup: false})

//   const [{ user }, dispatch] = useContext(DataContext)
//   const navigate = useNavigate()

//   const handleAuth = async (e) => {
//     e.preventDefault()
//     if (e.target.name === 'signin') {
//       setLoading({...loading, signin: true})
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed in
//           dispatch({ type: ActionTypes.SET_USER, user: userCredential.user })
//           setLoading({...loading, signin: false})
//           navigate('/')
//         })
//         .catch((error) => {
//           setError(error.message)
//           setLoading({...loading, signin: false})
//           console.log(error.message)
//         })
//     }

//     else {
//       setLoading({...loading, signup: true})
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed in
//           dispatch({ type: ActionTypes.SET_USER, user: userCredential.user })
//           setLoading({...loading, signup: false})
//           navigate('/')
//         })
//         .catch((error) => {
//           setError(error.message)
//           setLoading({...loading, signup: false})
//           console.log(error.message)
//         })
//     }
//   }

//   return (
//     <Layout>
//       <div>
//         <Link to="/"><img src={logo} alt="Amazon logo" className={styles.logo} /></Link>
//         <div className={styles.container}>
//           <h1 className={styles.title}>sign in</h1>
//           <form>
//             <label className={styles.label} htmlFor='email'>Email</label>
//             <input type="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
//             <label className={styles.label} htmlFor='password'>Password</label>
//             <input type="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button className={styles.button} name='signin' type='submit' onClick={handleAuth}>{loading.signin ? (<FadeLoader />) : 'Sign In'}</button>
//           </form>
//           <p className={styles.text}>By continuing, you agree to my Amazon-clone Conditions of Use and Privacy Notice.</p>
//           <p>new to Amazon?</p>
//           <button className={styles.button} name='signup' type='submit' onClick={handleAuth}>{loading.signup ? (<FadeLoader />) : 'Create your Amazon account'}</button>
//         </div>
//           {error && <span className={styles.error}>{error}</span>}
//       </div>
//     </Layout>
//   )
// }
