function mostrarCatalogo(){
    catalogo = document.getElementById("catalogoRow");
    catalogo.innerHTML = "";
    muestraBusqueda.innerHTML = "";
    let titulo = document.createElement("div");
    titulo.innerHTML = "";
    titulo.innerHTML = `<h1 class="tittle">Productos</h1>`;
    catalogo.appendChild(titulo);
    
    anteojos.forEach((ant) => {let card = document.createElement("div")
    card.className += "card col-3 mb-3 tarjProd"
    card.innerHTML = `<img src="${ant.img1}" class="card-img-top" alt="Lentes ${ant.marca} modelo ${ant.modelo}">
    <div class="card-body">
        <div class="row d-flex justify-center">
            <h5 class="card-title">${ant.marca} ${ant.modelo}</h5>
        </div>
        <div class="row">
            <p class="lenteCarecteristica">Marco: ${ant.colorMarco}</p>
            <p class="lenteCarecteristica">Lente: ${ant.colorLente}</p>
            <p class= ${ant.stock>0 ? "stock" : "nostock"}>Stock: ${ant.stock}</p>
            <p class="">Precio: $ ${ant.precio} + iva</p>
        </div>
        <div class="row d-flex justify-center">
            <button type="button" id="${ant.id}" class="btn btn-primary comprar">Agregar al Carrito</button>
        </div>
    </div>` 
    catalogo.appendChild(card)
    let buttoncomp = document.getElementById(`${ant.id}`);
    buttoncomp.addEventListener("click",()=>{agregarCarritoc(ant)})}
    )
}


function ocultarCatalogo(){
    catalogo = document.getElementById("catalogoRow");
    catalogo.innerHTML = "";
    muestraBusqueda.innerHTML ="";
}

function buscar(producto){
    ocultarCatalogo();
    productoEncontrado = anteojos.filter(elemento=> elemento.marca.toLowerCase() == producto || elemento.modelo.toLowerCase() == producto || elemento.id.toLowerCase() == producto);
    muestraBusqueda.innerHTML = "";
    if(productoEncontrado.length == 0) { 
        errorBusqueda = document.createElement("div")
        errorBusqueda.innerHTML = `<h6 class="textbusquedaUndefined">No hemos podido encontrar ningun producto con nombre de marca o modelo</h6>`;
        muestraBusqueda.appendChild(errorBusqueda);
    }

    else{
        mensajeBusqueda = document.createElement("div")
        mensajeBusqueda.innerHTML = `
        <div class="divBusqueda">
            <h6 class="textbusqueda">Hemos encontrado los siguientes productos para la marca o modelo buscado</h6>
        </div>`;
        muestraBusqueda.appendChild(mensajeBusqueda);
        for (ant of productoEncontrado){    
            let {id, marca, modelo,precio ,img1} = ant;       
            let cardBusqueda = document.createElement("div")
            cardBusqueda.className += "card col-3 mb-3 tarjProd"
            cardBusqueda.innerHTML = `<img src="${ant.img1}" class="card-img-top" alt="Lentes ${ant.marca} modelo ${ant.modelo}">
            <div class="card-body">
                <div class="row d-flex justify-center">
                    <h5 class="card-title">${ant.marca} ${ant.modelo}</h5>
                </div>
                <div class="row">
                    <p class="lenteCarecteristica">Marco: ${ant.colorMarco}</p>
                    <p class="lenteCarecteristica">Lente: ${ant.colorLente}</p>
                    <p class= ${ant.stock>0 ? "stock" : "nostock"}>Stock: ${ant.stock}</p>
                    <p class="">Precio: $ ${ant.precio} + iva</p>
                </div>
                <div class="row d-flex justify-center">
                    <button type="button" id="${ant.id}" class="btn btn-primary comprar">Agregar al Carrito</button>
                </div` 
            muestraBusqueda.appendChild(cardBusqueda)
        }
        let buttoncomp = document.getElementsByClassName("comprar");
        for (let buton of buttoncomp){
            buton.addEventListener("click", ()=>{agregarCarritob(buton)});
        }
    }
}

function mostrarBusqueda(){
    muestraBusqueda.innerHTML ="";
    mensajeBusqueda = document.createElement("div")
    mensajeBusqueda.innerHTML = `
    <div class="divBusqueda">
        <h6 class="textbusqueda">Hemos encontrado los siguientes productos para la marca o modelo buscado</h6>
    </div>`;
    
    muestraBusqueda.appendChild(mensajeBusqueda);
    for (ant of productoEncontrado){    
        let {id, marca, modelo,precio ,img1} = ant;       
        let cardBusqueda = document.createElement("div")
        cardBusqueda.className += "card col-3 mb-3 tarjProd"
        cardBusqueda.innerHTML = `<img src="${ant.img1}" class="card-img-top" alt="Lentes ${ant.marca} modelo ${ant.modelo}">
        <div class="card-body">
            <div class="row d-flex justify-center">
                <h5 class="card-title">${ant.marca} ${ant.modelo}</h5>
            </div>
            <div class="row">
                <p class="lenteCarecteristica">Marco: ${ant.colorMarco}</p>
                <p class="lenteCarecteristica">Lente: ${ant.colorLente}</p>
                <p class= ${ant.stock>0 ? "stock" : "nostock"}>Stock: ${ant.stock}</p>
                <p class="">Precio: $ ${ant.precio} + iva</p>
            </div>
            <div class="row d-flex justify-center">
                <button type="button" id="${ant.id}" class="btn btn-primary comprar">Agregar al Carrito</button>
            </div` 
        muestraBusqueda.appendChild(cardBusqueda)
    }
    let buttoncomp = document.getElementsByClassName("comprar");
    for (let buton of buttoncomp){
        buton.addEventListener("click", ()=>{agregarCarritob(buton)});
    }
}