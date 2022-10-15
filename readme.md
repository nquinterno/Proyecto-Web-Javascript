# Web QLentes
## Proyecto: Ecomerce de negocio de venta de Lentes
## Desarrollador: Ing. Agrim. Nicolás Quinterno

### Contacto: 
####    Mail: nquinterno@gmail.com
####    Telefono: +54 011 49453747

***
### Descripción del proyecto

#### El proyecto consta de una pagina web (One Page Web) para un ecomerce de venta de lentes.
#### Se han desarrollado distintos archivos javascript que ejecutan las distintas acciones sobre la pagina para:

* Codigo principal que analiza el localstorage y carga el catalogo de un archivo JSON o del local storage si existiera ya cargado (al no contar con herramientas de desarrollo backend se simulo la base de datos de productos, el control de stock y el carrito de compras dentro del localstorage del navegador).

* Despliegue y Ocultamiento del Catalogo de productos.

* Funcion de busqueda de productos por marca, modelo o codigo ID.

* Funcion de Agregar productos al carrito ya sea por despligue del carrito o por busqueda, al agregar productos al carrito disminuye el stock disponible de ese producto, si el produscto no contará con stock el mismo no puede agregarse al carrito y alerta al usuario.

* Función de visualización de Carrito de compras el cual se carga del Local storage y es que existe, almacenando la compra hasta tanto se realice, aun cuando se cierre el navegador.

* Funcion de eliminación de productos y vaciado del carrito, el cual restarura el stock para el producto eliminado.

* Funcion de finalización de compra que calcula el monto total a abonar y solicita al comprador distintos atos según el metodo de pago elegido (efectivo / tarjeta)

***
## Tecnologias utilizadas 

* [JavaScript](https://www.javascript.com/)
* [JSON](https://www.json.org/json-es.html)
* [Bootstrap](https://getbootstrap.com/): Version 5.2
* [Sweet Alert](https://sweetalert.js.org/): Version 2.1.2
* [Tostify](https://www.npmjs.com/package/toastify-js): Version 1.12.0