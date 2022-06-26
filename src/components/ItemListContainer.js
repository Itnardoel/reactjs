import ItemCount from "./ItemCount";

const ItemListContainer = ({catalogo}) => {
    const onAdd = () => {
        alert("Agregado al carrito")
    }

    return (
        <>
        <h2>{catalogo}</h2>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;