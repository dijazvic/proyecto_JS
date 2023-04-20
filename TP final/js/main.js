const btnCart = document.querySelector(".container-cart-icon")
const containerCartProducts = document.querySelector(".container-cart-products")

btnCart.addEventListener("click", () => {
    containerCartProducts.classList.toggle("hidden-cart")
})


const cartInfo = document.querySelector(".cart-product")
const rowProduct = document.querySelector(".row-product")

const productsList = document.querySelector(".container-items")

let todosLosProductos = []

const valorTotal = document.querySelector(".total-pagar")
const contadorProductos = document.querySelector("#contador-productos")

productsList.addEventListener("click", event => {
    if (event.target.classList.contains ("btn-add-cart")) {
    const producto = event.target.parentElement
    const infoProducto = {
        cantidad: 1,
        titulo: producto.querySelector("h2").textContent,
        precio: producto.querySelector("p").textContent
    }
    const existe = todosLosProductos.some(producto => producto.titulo === infoProducto.titulo)
    if (existe) {
        const productos = todosLosProductos.map (producto => {
            if(producto.titulo === infoProducto.titulo){
                producto.cantidad++
                return producto
            }
            else {
                return producto 
            }
        })
        todosLosProductos = [...productos]
    }
    else {
        todosLosProductos = [...todosLosProductos, infoProducto]
    }
    mostrarHTML()
        }
    let listaProductosJSON = JSON.stringify(todosLosProductos)
    localStorage.setItem("carrito_compra", listaProductosJSON)
})


listaProductosJSON = JSON.stringify(todosLosProductos);
localStorage.getItem ("carrito_compra"), listaProductosJSON

rowProduct.addEventListener("click", (event) => {
    if(event.target.classList.contains("icon-close")){
        const producto = event.target.parentElement
        const titulo = producto.querySelector("p").textContent
        todosLosProductos = todosLosProductos.filter(
            producto => producto.titulo !== titulo
        )
        mostrarHTML()
    }
})
 
const mostrarHTML = () => {
    rowProduct.innerHTML = ""
    let total = 0
    let totalDeProductos = 0

    todosLosProductos.forEach(producto => {
        const productosContenedor = document.createElement("div")
        productosContenedor.classList.add("cart-product")
        productosContenedor.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${producto.cantidad}</span>
                <p class="titulo-producto-carrito">${producto.titulo}</p>
                <span class="precio-producto-carrito">${producto.precio}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `
    rowProduct.append(productosContenedor)
    total = total + parseInt(producto.cantidad * producto.precio.slice(1))
    totalDeProductos = totalDeProductos + producto.cantidad
    })
    valorTotal.innerText = `$${total}`
    contadorProductos.innerText = totalDeProductos
}

const aniadirAlCarrito = document.getElementById("btn-add-carrito")
aniadirAlCarrito.onclick = mostrarToast

function mostrarToast () {
    Toastify({
        text: "Haz añadido el producto al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

const cierreCarrito = document.getElementById("btnCarrito")
cierreCarrito.onclick = mostrarSWAL

function mostrarSWAL () {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Su compra finalizó correctamente",
        showConfirmButton: false,
        timer: 3000
      })
}

let variableAlmacenar = "DECO_HOGAR"
localStorage.setItem ("deco-hogar-ss", variableAlmacenar)
let textoAlmacenado = localStorage.getItem ("deco-hogar-ss")
console.log (textoAlmacenado)



let productosAlmacenados = localStorage.getItem("carrito_compra")
let productosArray = JSON.parse(productosAlmacenados)
console.log(productosArray)