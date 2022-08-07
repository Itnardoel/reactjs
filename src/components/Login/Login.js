import React from 'react'
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../Firebase/Firebase"
import { useFormik } from "formik";
import * as Yup from 'yup';

const Login = () => {

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
              .min(6, "6 o mas caracteres")
              .required("Obligatorio"),
            email: Yup.string()
              .email("Email no valido")
              .required("Obligatorio")
        }),
      });

    const [user, setUser] = useState({});

    useEffect(() => {
        
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

    }, [])

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password);
        } catch (error) {
            console.log(error.message);
        }
    }

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, formik.values.email, formik.values.password);
        } catch (error) {
            console.log(error.message);
        }
    }

    const logOut = async () => {
        await signOut(auth);
    }


  return (
    <>
        {user ? 
            <div style={styles.formulario}>
                <h4>{user.email}</h4>
                <button onClick={logOut}>Logout</button>
            </div> 
              : 
            <div style={styles.formulario}>
                <div>
                    <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <p style={styles.p}>{formik.errors.email}</p> : null}
                </div>
                <div>
                    <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? <p style={styles.p}>{formik.errors.password}</p> : null}
                </div>
                <button style={styles.boton} onClick={register}>Register</button>
                {/* <Link to="/register"><button>Registrarse</button></Link> */}
                <button style={styles.boton} onClick={logIn}>Login</button>
            </div>
        }
    </>
  )
}

export default Login

const styles = {
    p: {
      margin: 0,
      marginBottom: '-19px',
      color: 'red',
    },
    formulario: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
    },
    boton: {
        marginBottom: '1rem',
        border: '2px solid #ffffff',
        color: 'white',
        // padding: '16px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '16px',
        margin: '4px 2px',
        transitionDuration: '0.4s',
        cursor: 'pointer',
        backgroundColor: 'black',
    }
}