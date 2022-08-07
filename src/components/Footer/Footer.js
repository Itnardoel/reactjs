import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.pie}>
        <a href='https://github.com/Itnardoel' target="_blank" rel="noopener noreferrer" style={styles.enlaces}><h4>https://github.com/Itnardoel</h4></a>
    </footer>
  )
}

export default Footer

const styles = {
    pie: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        marginTop: '1rem',
    },
    enlaces: {
        margin: 10,
        textDecoration: 'none',
        color: '#fff',
    }
}