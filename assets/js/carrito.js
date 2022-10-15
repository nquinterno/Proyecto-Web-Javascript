function agregarCarritob(prod){
    let compra = anteojos.find((elemento) => elemento.id == prod.id);
    let compraIndex = anteojos.findIndex(elemento => elemento.id == prod.id);
    if (anteojos[compraIndex].stock>0){
        anteojos[compraIndex].stock = anteojos[compraIndex].stock - 1;
        carritoCompra.push(compra);
        localStorage.setItem('Carrito', JSON.stringify(carritoCompra));
        localStorage.setItem('Anteojos', JSON.stringify(anteojos));
        Toastify({
            text: `Producto ${compra.marca} ${compra.modelo} agregado al carrito`,
            className: "productoAgregado",
            gravity:"bottom",
            duration:"2000",
            position:"right",
            style: {
              background: "#0275d8",
            }
        }).showToast();
        compra="";
        mostrarBusqueda();
    }
    else{
        Swal.fire({
            title:`No contamos con stock para el producto ${compra.marca} ${compra.modelo}`,
            icon:"error",
            duration:"3000",
            confirmButtonText:`<a class="botonStockNo">Ok</a>`,
            confirmButtonColor:"#0275d8",
        })
        compra="";
        mostrarBusqueda();
    }
}

function agregarCarritoc(prod){
    let compra = anteojos.find((elemento) => elemento.id == prod.id);
    let compraIndex = anteojos.findIndex(elemento => elemento.id == prod.id);
    if (anteojos[compraIndex].stock>0){
        anteojos[compraIndex].stock = anteojos[compraIndex].stock - 1;
        carritoCompra.push(compra);
        compra="";
        localStorage.setItem('Carrito', JSON.stringify(carritoCompra));
        localStorage.setItem('Anteojos', JSON.stringify(anteojos));
        Toastify({
            text: `Producto ${prod.marca} ${prod.modelo} agregado al carrito`,
            className: "productoAgregado",
            gravity:"bottom",
            duration:"2000",
            position:"right",
            style: {
              background: "#0275d8",
            }
        }).showToast();
        mostrarCatalogo()
    }
    else{
        mostrarCatalogo()
          Swal.fire({
            title:`No contamos con stock para el producto ${prod.marca} ${prod.modelo}`,
            icon:"error",
            duration:"3000",
            confirmButtonText:`<a class="botonStockNo">Ok</a>`,
            confirmButtonColor:"#0275d8",
        })
    }
}

function verCarrito(){
    let productosModal = document.getElementById("productosModal");
    productosModal.innerHTML="";
    let a = 0;
    carritoCompra.forEach((compra)=>{
        cardModal = document.createElement("div")
        cardModal.innerHTML = "";
        cardModal.className += "col-12 mt-3"
        cardModal.innerHTML = `<img src="${compra.img1}" class="card-img-top imgCarrito" alt="Lentes ${compra.marca} modelo ${compra.modelo}"
        <div class="card-body">
            <h5 class="card-title">${compra.marca} ${compra.modelo}</h5>
            <p class="">Precio: $ ${compra.precio} + iva</p>
            <button type="button" id="elim_${compra.id}_${a}" class="btn btn-danger comprar"><i class="fa-regular fa-trash-can"></i></button>
        </div>` 
        productosModal.appendChild(cardModal)
        elimProducto = document.getElementById(`elim_${compra.id}_${a}`);
        elimProducto.addEventListener("click",()=>{elimProductoCarrito(compra)})
        a = a + 1;
    })
    console.log(`Carrito de compra ${JSON.stringify(carritoCompra)}`)
}

function elimProductoCarrito(prod){
    let indiceElimina = carritoCompra.findIndex(elemento => elemento.id == prod.id);
    let indicestock = anteojos.findIndex(elemento => elemento.id == prod.id);
    console.log(indicestock)
    anteojos[indicestock].stock = anteojos[indicestock].stock + 1;
    localStorage.setItem('Anteojos', JSON.stringify(anteojos));
    carritoCompra.splice(indiceElimina, 1);
    localStorage.setItem('Carrito', JSON.stringify(carritoCompra))
    console.log(`Carrito con eliminación ${JSON.stringify(carritoCompra)}`)
    verCarrito();
    mostrarCatalogo();
}

function vaciarCarrito(){
    localStorage.removeItem('Carrito');
    carritoCompra = [];
    productosModal.innerHTML = "";
    localStorage.setItem('Anteojos',JSON.stringify(anteojos0));
    anteojos=[];
    anteojos0.forEach((ant)=>{anteojos.push(ant)});
    mostrarCatalogo()
    Swal.fire({
        title:"Carrito vaciado con exito",
        icon:"info",
        duration:"3000",
        confirmButtonText:`<a class="finalizaCompra" href="index.html">Ok</a>`,
        confirmButtonColor:"#0275d8",
    })
}