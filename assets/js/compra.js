function finalizaCompra(productos){
    let bodyPago = document.getElementById("bodyPago");
    let formCompra = document.getElementById("formCompra");
    let metodoPago = document.getElementById("metodoPago");
    formCompra.innetHTML = "";
    metodoPago.innetHTML= "";
    let compraTittle = document.createElement("div");

    if (carritoCompra.length==0){
        compraTittle.innerHTML = `
        <div class="carritoTitle">
            <h6 class="carritoVacio carritoTitle">No se han agregado productos al carrito</h6>
        </div>
        <div class="d-flex justify-content-center butonCatalogo">
            <button type="button" id="verCatalogo" class="btn btn-primary"><a class="finalizaCompra" href="index.html">Cerrar</a></button>
        </div>`;
        bodyPago.innerHTML = "";
        formCompra.appendChild(compraTittle);
    }

    else{
        metodoPago.className += "row d-flex justify-content-around"
        metodoPago.innerHTML = `
        <div class="row">
            <h4>El valor total de la compra es $ ${montoFinal()}<h4>
        </div>
        <div class="row">
            <div class="col-6 d-flex justify-content-center">
                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off">
                <label class="btn btn-primary" for="option1">Efectivo</label>
            </div>

            <div class="col-6 d-flex justify-content-center">
                <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
                <label class="btn btn-primary" for="option2">tarjeta</label>
            </div>
        </div>`
        bodyPago.appendChild(metodoPago);
        let metodoPago1 = document.getElementById("option1");
        let metodoPago2 = document.getElementById("option2");
        metodoPago1.addEventListener('click',()=>{compraEfectivo()});
        metodoPago2.addEventListener('click',()=>{compraTarjeta()});
    }
}


function compraTarjeta(){
    formEfectivo = document.createElement("form");
    formEfectivo.innerHTML = ``;
    formCompra.innerHTML = ``;
    formCompra.innerHTML = `
    <form>
        <div class="form-row d-flex justify-content-between">
            <div class="col-6 me-1">
                <label for="validationServer01">Nombre</label>
                <input type="text" class="form-control mt-2" id="validationServer01" placeholder="Nombre" value="" required>
            </div>
            <div class="col-6 ms-1">
                <label for="validationServer02">Apellido</label>
                <input type="text" class="form-control mt-2" id="validationServer02" placeholder="Apellido" value="" required>
            </div>
        </div>
        <div class="form-row d-flex justify-content-between mt-3">
            <div class="col-6 me-1">
                <label for="formGroupExampleInput">Email</label>
                <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Email">
            </div>
            <div class="col-6 ms-1">
                <label for="formGroupExampleInput">Telefono</label>
                <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Telefono">
            </div>
        </div>
        <div class="form-row d-flex justify-content-between mt-3">
            <div class="col-4 me-1">
                <label for="validationServer03">Ciudad</label>
                <input type="text" class="form-control mt-2" id="validationServer03" placeholder="Ciudad" required>
            </div>
            <div class="col-4 me-1">
                <label for="validationServer04">Provincia</label>
                <input type="text" class="form-control mt-2" id="validationServer04" placeholder="State" required>
            </div>
            <div class="col-4">
                <label for="validationServer05">Código Postal</label>
                <input type="text" class="form-control mt-2" id="validationServer05" placeholder="CP" required>
            </div>
        </div>
        <div class="form-row d-flex justify-content-between mt-3">
            <div class="col-4 me-1">
                <label for="validationServer03">DNI</label>
                <input type="text" class="form-control mt-2" id="validationServer03" placeholder="DNI" required>
            </div>
        </div>
        <div class="form-row d-flex justify-content-between mt-3">

            <div class="col-12 mb-2 ms-1 me-1">
                <label for="validationServer04">N° de Tarjeta</label>
                <input type="text" class="form-control mt-2" id="validationServer04" placeholder="N° de Tarjeta" required>
            </div>
        </div>
        <div class="form-row d-flex justify-content-between mt-3">
            <div class="col-6 me-1">
                <label for="validationServer05">Fecha Vencimiento</label>
                <input type="text" class="form-control mt-2" id="validationServer05" placeholder="Vencimiento" required>
            </div>
            <div class="col-6 ms-1">
                <label for="validationServer05">N° seguridad</label>
                <input type="text" class="form-control mt-2" id="validationServer05" placeholder="N° seguridad" required>
            </div>
        </div>
        <div class="form-row mt-3">
            <label for="exampleFormControlSelect1">Cantidad de Cuotas</label>
            <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>3</option>
            <option>6</option>
            <option>12</option>
            </select>
        </div>
        <button id="confirmaCompra" class="btn btn-primary mt-3" type="button">Confirmar Compra</button>
    </form>`;
    let confirmaCompra = document.getElementById("confirmaCompra");
    confirmaCompra.addEventListener('click',()=>{confirmarCompra()}); 
}

function compraEfectivo(){
    formEfectivo = document.createElement("form");
    formEfectivo.innerHTML = ``;
    formCompra.innerHTML = ``;
    formCompra.innerHTML = `
    <form>
        <div class="form-row d-flex justify-content-between">
            <div class="col-6 me-1">
                <label for="validationServer01">Nombre</label>
                <input type="text" class="form-control mt-2" id="validationServer01" placeholder="Nombre" value="" required>
            </div>

            <div class="col-6 ms-1">
                <label for="validationServer02">Apellido</label>
                <input type="text" class="form-control mt-2" id="validationServer02" placeholder="Apellido" value="" required>
            
            </div>
        </div>

        <div class="form-row d-flex justify-content-between mt-3">
            <div class="col-6 me-1">
                <label for="formGroupExampleInput">Email</label>
                <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Email">
            </div>
            <div class="col-6 ms-1">
                <label for="formGroupExampleInput">Telefono</label>
                <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Telefono">
            </div>
        </div>

        <div class="form-row d-flex justify-content-between mt-3">
            <div class="col-6 me-1">
                <label for="validationServer03">Ciudad</label>
                <input type="text" class="form-control mt-2" id="validationServer03" placeholder="Ciudad" required>
            </div>
            <div class="col-6 ms-1">
                <label for="validationServer04">Provincia</label>
                <input type="text" class="form-control mt-2" id="validationServer04" placeholder="State" required>
            </div>
        </div>
        <div class="form-row d-flex justify-content-between mt-3">
            <div class="col-md-3 mb-3">
                <label for="validationServer05">Código Postal</label>
                <input type="text" class="form-control mt-2" id="validationServer05" placeholder="CP" required>
            </div>
        </div>
        <button id="confirmaCompra" class="btn btn-primary" type="button">Confirmar Compra</button>
    </form>`;
    let confirmaCompra = document.getElementById("confirmaCompra");
    confirmaCompra.addEventListener('click',()=>{confirmarCompra()});   
}

function montoFinal(){
    let precios = [];
    let valor;
    carritoCompra.forEach((element)=> {precios.push(element.precio)});
    return(suma(...precios))
    function suma(...precios){
        let resultado = precios.reduce((a,b)=> a + b , 0)
        return (resultado)
    }
}

function confirmarCompra(){
    carritoCompra = [];
    localStorage.removeItem("Carrito");
    Swal.fire({
        title:"Compra Realiada con Exito",
        text:"Recibirá una mail con el detalle de la compra y nos comunicaremos para coordinar la entrega",
        icon:"success",
        duration:"3000",
        confirmButtonText:`<a class="finalizaCompra" href="index.html">Ok</a>`,
        confirmButtonColor:"#0275d8",
    });
}