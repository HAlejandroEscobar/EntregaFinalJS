// CONSTRUCTOR

const Producto = function (nombre, precio, stock, id) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.id = id

}

// PRODUCTOS

const producto1 = new Producto ("banano", 500, 100, 111)
const producto2 = new Producto ("manzana", 500, 200, 222)
const producto3 = new Producto ("kiwi", 700, 210, 333)
const producto4 = new Producto ("cereza", 200, 110, 444)
const producto5 = new Producto ("pera", 300, 50, 555)
const producto6 = new Producto ("piña", 400, 10, 666)
const producto7 = new Producto ("limon", 120, 20, 777)
const producto8 = new Producto ("sandia", 1200, 25, 888)
const producto9 = new Producto ("naranja", 155, 30, 999)
const producto10 = new Producto ("melon", 900, 150, 122)
const producto11 = new Producto ("brocoli", 170, 250, 133)
const producto12 = new Producto ("tomate", 250, 350, 144)
const producto13 = new Producto ("zanahoria", 280, 50, 155)
const producto14 = new Producto ("lulo", 300, 30, 166)
const producto15 = new Producto ("calabaza", 800, 1000, 177)
const producto16 = new Producto ("papaya", 700, 1200,188)
const producto17 = new Producto ("uva", 30, 400, 199)
const producto18 = new Producto ("fresa", 45, 455, 211)
const producto19 = new Producto ("guayaba", 78, 600, 222)
const producto20 = new Producto ("coco", 1400, 300, 233)


let lista = [producto1, producto2, producto3, producto4, producto5, 
  producto6, producto7, producto8, producto9, producto10,
  producto11, producto12, producto13, producto14, producto15, 
  producto16, producto17, producto18, producto19, producto20]


// STORAGE


if (localStorage.getItem("productos")) {
lista = JSON.parse(localStorage.getItem("productos"));
} else {
lista = lista
}

// FUNCION FILTRAR CON LIBRERIA

function filtrar(){

    Swal.fire({
        title: 'Ingresa el producto que deseas buscar',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,

        preConfirm: (palabraClave) => {
            palabraClave = palabraClave.trim().toUpperCase()
            let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

             if (resultado.length > 0){
                console.table(resultado)
               
                Swal.fire({
                    title: 'Resultado:',
                    html: '<table><tr><th>Nombre</th><th>Precio</th><th>Stock</th><th>ID</th></tr>' +
                          resultado.map(producto => `<tr><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.stock}</td><td>${producto.id}</td></tr>`).join('') +
                          '</table>',
                    confirmButtonText: 'OK'
                })
                
            } else {
                Swal.fire({
                    title: 'No se encontraron coincidencias',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        }
    });

}


// FUNCION AGREGAR SIN LIBRERIA



function agregarProducto() {

  const body = document.querySelector('body');
  const form = document.createElement('form');
  form.innerHTML = `
    <label for="nombre">Nombre:</label>
    <input id="nombre" type="text" required>
    
    <label for="precio">Precio:</label>
    <input id="precio" type="number" step="10" required>
    
    <label for="stock">Stock:</label>
    <input id="stock" type="number" step="1" required>

    <label for="id">ID:</label>
    <input id="id" type="number" step="1" required>
    
    <button id="boton3" type="submit">Agregar</button>
  `;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);
    const stock = parseInt(document.getElementById('stock').value);
    const id = parseInt(document.getElementById('id').value);

    if (isNaN(precio) || isNaN(stock) || nombre === '' || isNaN(id)) {
      alert('Por favor ingresa valores válidos.');
      return;
    }

    const producto = new Producto(nombre, precio, stock, id);

    if (lista.some((elemento) => elemento.nombre === producto.nombre)) {
      alert('El producto ya existe.');
      return;
    }

    lista.push(producto);


    localStorage.setItem("productos", JSON.stringify(lista));

    alert(`Se ha agregado el producto "${producto.nombre}".`);


    form.reset();
  });

  
  body.appendChild(form);

}



// CODIGO CREADO POR DOM



let contenedor = document.createElement("div")

contenedor.innerHTML = `
			<header>
			<h1 class="tituloProductos">Frulicius &#127822;</h1>
			<div class="container-icon">
				<div class="container-cart-icon">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="iconCAR">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
			  		</svg>
			  			<div class="count-products">
				  			<span id="contador-productos">0</span>
			  			</div>
				
				
				</div>
			
			<div class="container-cart-products  hidden-cart">
				<div class="row-product">
					<div class="cart-product">
						<div class="info-cart-product">
						<span class="cantidad-producto-carrito">1</span>
						<p class="titulo-producto-carrito">Banana</p>
						<span class="precio-producto-carrito">$500</span>
						<p class="id-producto-carrito"></p>
					</div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="iconCLOSE">
  						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
				
				
				
				</div>
				

				<div class="cart-total">
					<h3>Total:</h3>
					<span class="total-pagar">$500</span>
				</div>
			</div>
			</div>
			</header>

              <h2>Productos disponibles:</h2>
              <div id="contenedorFrutas"></div>
              <input type="text" id="filtrarProducto">
              <button id="filtrar">Filtrar</button>
              <button id="agregar">Agregar producto nuevo</button>
			  


			 
			 
			 
			 
			 
			 
			 
			  `

document.body.appendChild(contenedor)


let boton1 = document.getElementById("filtrar")
boton1.addEventListener("click", filtrar)

let boton2 = document.getElementById("agregar")
boton2.addEventListener("click", agregarProducto)


// LISTA DE MIS PRODUCTOS CON VALORES PUESTOS EN EL EJEMPLO  PARA EJEMPLO CON CARRITO FUNCIONAL


// let listaProductos = document.getElementById("listaFinal");

// let productosFinal = [
// `Banano |  $500  | 100 Unidades | ID: 111   |   <button class="agregar">Agregar al carrito</button>`,
// `Manzana  | $500 |  200 Unidades  |  ID: 222  |   <button class="agregar">Agregar al carrito</button>`,
// `Kiwi |  $700  | 210 Unidades  |  ID: 333  |   <button class="agregar">Agregar al carrito</button>`,
// `Cereza  | $200  | 110 Unidades  |  ID: 444  |   <button class="agregar">Agregar al carrito</button>`,
// `Pera |  $300 |  50 Unidades  |  ID: 555  |   <button class="agregar">Agregar al carrito</button>`,
// `Piña |  $400  | 10 Unidades  |  ID: 666  |   <button class="agregar">Agregar al carrito</button>`, 
// `Limon |  $120  | 20 Unidades  |  ID: 777  |   <button class="agregar">Agregar al carrito</button>`,
// `Sandia |  $1200 |  25 Unidades  |  ID: 888  |   <button class="agregar">Agregar al carrito</button>`,
// `Naranja  | $155 |  30 Unidades  |  999  |   <button class="agregar">Agregar al carrito</button>`, 
// `Melon  | $900  | 150 Unidades  |  ID:  122  |   <button class="agregar">Agregar al carrito</button>`,
// `Brocoli |  $170  | 250 Unidades  |  ID: 133  |   <button class="agregar">Agregar al carrito</button>`,
// `Tomate  | $250  | 350 Unidades  |  ID: 144  |   <button class="agregar">Agregar al carrito</button>`, 
// `Zanahoria  | $280  | 50 Unidades  |  ID: 155  |   <button class="agregar">Agregar al carrito</button>`,
// `Lulo |  $300 |  30 Unidades  |  ID:  166  |   <button class="agregar">Agregar al carrito</button>`,
// `Calabaza  | $800 |  1000 Unidades  |  ID: 177  |   <button class="agregar">Agregar al carrito</button>`, 
// `Papaya  | $700  | 1200 Unidades  |  ID: 188  |   <button class="agregar">Agregar al carrito</button>`,
// `Uva  | $30 |  400 Unidades  |  199  |   <button class="agregar">Agregar al carrito</button>`,
// `Fresa |  $45 |  455 Unidades  |  ID:  211  |   <button class="agregar">Agregar al carrito</button>`, 
// `Guayaba  | $78 |  600 Unidades  |  ID: 222  |   <button class="agregar">Agregar al carrito</button>`,
// `Coco  | $1400  | 300 Unidades  |  ID: 233  |   <button class="agregar">Agregar al carrito</button>`]

// for (const nuevo of productosFinal) {
// let li = document.createElement("li");
// li.innerHTML = nuevo
// listaProductos.appendChild(li);

// }

// BOTON DEL CARRITO

const btnCart = document.querySelector(`.container-cart-icon`)
const containerCartProducts = document.querySelector(`.container-cart-products`)

btnCart.addEventListener(`click`, () => {
	containerCartProducts.classList.toggle(`hidden-cart`)
})

// FUNCION DEL CARRITO PENDIENTE











// USO DEL FETCH

fetch ("../productos.json")
  .then(response => response.json())
  .then(data => {

    const listaFrutas = data.productos;

    const frutasContainer = document.getElementById("contenedorFrutas")

    listaFrutas.forEach((x) => {
      const frutaElement = document.createElement("p")
      frutaElement.textContent = `${x.nombre} ||  Precio: ${x.precio} || Stock: ${x.stock} || ID: ${x.id}`  
      frutasContainer.appendChild(frutaElement)

    })  
  })


  .catch(error =>{
    alert("Error")
  })
