let carritoCompra = JSON.parse(localStorage.getItem('Carrito')) || [];
let anteojos = JSON.parse(localStorage.getItem('Anteojos')) || [];
let anteojos0 = [];

let catalogo = "";
let productoEncontrado="";

function anteojo (id,tipo,marca,modelo,colorMarco,colorLente,precio,img1,img2,stock){
    this.id = id;
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.colorMarco = colorMarco;
    this.colorLente = colorLente;
    this.precio = precio;
    this.img1 = img1;
    this.img2 = img2;
    this.stock = stock;
}


let cargaAnteojos = async ()=>{
    let cargaJson = await fetch("./assets/json/catalogo.json");
    let data = await cargaJson.json();
    data.forEach((ant)=>{
        anteojos0.push(new anteojo(ant.id, ant.tipo, ant.marca, ant.modelo, ant.colorMarco, ant.colorLente, ant.precio, ant.img1,ant.img2,ant.stock))
        
        anteojos.push(new anteojo(ant.id, ant.tipo, ant.marca, ant.modelo, ant.colorMarco, ant.colorLente, ant.precio, ant.img1,ant.img2,ant.stock))
    })

}

if (anteojos.length == 0){
    cargaAnteojos();

    localStorage.setItem('Anteojos',JSON.stringify(anteojos0))
}
else{

}


// Mostrar Catalogo 
let botonMostarCatalogo = document.getElementById("mostrarCatalogo");
botonMostarCatalogo.addEventListener("click", mostrarCatalogo);

// Ocultar Catalogo

let botonOcultarCatalogo = document.getElementById("ocultarCatalogo");
botonOcultarCatalogo.addEventListener("click", ocultarCatalogo);

// Buscar producto

let botonBuscarProducto = document.getElementById("botonBuscar");
let productoBuscado = document.getElementById("productoBuscado");
let muestraBusqueda = document.getElementById("busquedaRow");
botonBuscarProducto.addEventListener("click",()=>{buscar(productoBuscado.value.toLowerCase())});


// Pagar / Vaiar Carrito

let finalizarCompra = document.getElementById("finalizarCompra");
let limpiarCarrito = document.getElementById("vaciarCarrito");

finalizarCompra.addEventListener("click",()=>{finalizaCompra(carritoCompra)});
limpiarCarrito.addEventListener("click",()=>{vaciarCarrito()});

// Ver Carrito

let verelCarrito = document.getElementById("verCarrito");
verelCarrito.addEventListener("click",verCarrito);

