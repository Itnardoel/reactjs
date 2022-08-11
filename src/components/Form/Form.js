import React from 'react';
import { useState, useEffect } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { auth } from "../Firebase/Firebase"
import { onAuthStateChanged } from "firebase/auth"

const Form = ({ checkout }) => {

  const [user, setUser] = useState({});
  
  useEffect(() => {
    
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  })
    
  }, [])

  const ArgTelVal = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/

  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: user ? `${user.email}` : "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .max(15, "Nombre no valido")
        .required("Obligatorio"),
      telefono: Yup.string()
        .matches(ArgTelVal, "Telefono no valido")
        .required("Obligatorio"),
      email: Yup.string()
        .email("Email no valido")
        .required("Obligatorio")
    }),
    onSubmit: (values) => {
      checkout(values);
    }
  });

  return (

    <form style={styles.formulario} onSubmit={formik.handleSubmit}>
      <div style={styles.inputContainer}>
        <input style={styles.input}
          id='nombre'
          type='text'
          name='nombre'
          placeholder='Nombre'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombre}
        />
        {formik.touched.nombre && formik.errors.nombre ? <p style={styles.p}>{formik.errors.nombre}</p> : null}
      </div>
      <div style={styles.inputContainer}>
        <input style={styles.input}
          id='telefono'
          type='tel'
          name='telefono'
          placeholder='Telefono'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.telefono}
        />
        {formik.touched.telefono && formik.errors.telefono ? <p style={styles.p}>{formik.errors.telefono}</p> : null}
      </div>
      {user ? <button style={styles.boton} type="submit">Comprar como {user.email}</button>
            : <>
                <div style={styles.inputContainer}>
                  <input style={styles.input} 
                    id='email2'
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? <p style={styles.p}>{formik.errors.email}</p> : null}
                </div>
                <button style={styles.boton} type='submit'>Confirmar</button>
              </>
      }
    </form>

  )
}

export default Form

const styles = {
  formulario: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    textAlign: 'left',
  },
  input: {
    marginTop: '0.5rem',
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#555555',
    color: 'white',
  },
  p: {
    margin: 0,
    marginBottom: '0.25rem',
    color: 'red',
  },
  boton: {
    margin: '0.5rem 0',
    border: '2px solid #555555',
    color: 'black',
    padding: '16px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    transitionDuration: '0.4s',
    cursor: 'pointer',
    backgroundColor: 'white',
  }
}