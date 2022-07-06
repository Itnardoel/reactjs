const ItemDetail = ({ item }) => {
  return (
    <div style={styles.container}>
        <img style={styles.imagen} src={item[0].pictureUrl} alt={item.title} />
        <div style={styles.caja}>
        <h2>{item[0].title}</h2>
        <p style={styles.texto}>{item[0].description}</p>
        <p>${item[0].price}</p>
        </div>
    </div>
  )
}

export default ItemDetail

const styles = {
    container: {
        display: 'flex',
    },
    caja: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    texto: {
        whiteSpace: 'pre-wrap',
    },
    imagen: {
        width: "25%",
      },
}