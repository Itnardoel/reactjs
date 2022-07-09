import React from 'react';
import Item from "./Item"

const ItemList = ({ items }) => {
  return (
    <div style={styles.container}>
      {items.map(item => (
        <Item key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default ItemList

const styles = {
  container: {
    display: 'grid',
    margin: '0px 25px',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1.5rem',
  }
}