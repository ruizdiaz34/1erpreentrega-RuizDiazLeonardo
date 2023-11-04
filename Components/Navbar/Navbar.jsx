import CartWidget from "../CartWidget/CartWidget";
const Navbar = ()=>{
    return (
        <>
       <nav class="navbar navbar-expand-lg bg-success p-2 text-dark bg-opacity-50">
  <div class="container-fluid">
    <a class="navbar-brand text-éxito" href="#">Tienda Online</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav texto-luz">
        <a class="nav-link active texto-blanco" aria-current="page" href="#">Inicio</a>
        <a class="nav-link texto-luz" href="#">Productos</a>
        <a class="nav-link" href="#">Nosotros</a>
        <a class="nav-link disabled" aria-disabled="true"></a>
      </div>
    </div>
  </div>
  <CartWidget/>
</nav>
        </>
        
    )
}

export default Navbar;