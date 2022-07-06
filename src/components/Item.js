const Item = ({ item }) => {
  return (
    <>
      <div style={styles.card}>
        <img style={styles.imagen} src={item.pictureUrl} alt={item.title} />
        <h2>{item.title}</h2>
        {/* <p>{item.description}</p> */}
        <p>${item.price}</p>
      </div>
    </>
  )
}

export default Item

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: '0.5rem',
    boxShadow: '0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)',
  },
  imagen: {
    width: "100%",
    borderRadius: '0.5rem 0.5rem 0 0',
    objectFit: 'cover',
    height: 'max(10rem, 35vh)',
    maxHeight: 'max(10rem, 35vh)',
    aspectRatio: 4/3,
  },
}