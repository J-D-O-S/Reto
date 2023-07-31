window.onload = (e) => {
	console.log(e);
	const carrito = document.getElementById("carrito");
	const elementos = document.getElementById("lista-1");

	// const lista = document.querySelector("#lista-carrito tbody");
	// const lista = valorLista();
	const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

	cargarEventListeners(elementos, carrito, vaciarCarritoBtn);
};

function cargarEventListeners(elementos, carrito, vaciarCarritoBtn) {
	elementos.addEventListener("click", comprarElemento);
	carrito.addEventListener("click", eliminarElemento);
	vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
	// document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarElemento(e) {
	e.preventDefault();
	if (e.target.classList.contains("agregar-carrito")) {
		const elemento = e.target.parentElement.parentElement;
		leerDatosElemento(elemento);
	}
}

function leerDatosElemento(elemento) {
	const infoElemento = {
		imagen: elemento.querySelector("img").src,
		titulo: elemento.querySelector("h3").textContent,
		precio: elemento.querySelector(".precio").textContent,
		id: elemento.querySelector("a").getAttribute("data-id")
		// cantidad: 1,
	};

	insertarCarrito(infoElemento);
}

function valorLista() {
	const lista = document.querySelector("#lista-carrito tbody");
	return lista;
}

function insertarCarrito(elemento) {
	const row = document.createElement("tr");
	row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>${elemento.titulo}</td>
        <td>${elemento.precio}</td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;

	const lista = valorLista();
	lista.appendChild(row);
	// guardarElementoLocalStorage(elemento);
}

function eliminarElemento(e) {
	e.preventDefault();
	let elemento, elementoId;
	if (e.target.classList.contains("borrar")) {
		e.target.parentElement.parentElement.remove();
		elemento = e.target.parentElement.parentElement;
		elementoId = elemento.querySelector("a").getAttribute("data-id");
	}
	// eliminarElementoLocalStorage(elementoId);
}

function vaciarCarrito() {
	const lista = valorLista();
	while (lista.firstChild) {
		lista.removeChild(lista.firstChild);
	}
	// vaciarLocalStorage();
	return false;
}
