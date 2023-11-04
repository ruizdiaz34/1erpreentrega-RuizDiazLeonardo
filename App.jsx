
import CartWidget from "./Components/CartWidget/CartWidget"
import ItemListContainer from "./Components/Contenedor/ItemListContainer"
import Navbar from "./Components/Navbar/Navbar"
import styles from "./app.module.css"
function App() {
  

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Bienvenidos a mi tienda"}/>
    </>
  )
}

export default App
