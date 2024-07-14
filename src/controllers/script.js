import Contacto from "../models/Contacto.js";
import arbol from "./dependencies.js";

let add = document.getElementById("agregar");
let search = document.getElementById("buscar");
let searchFirst = document.getElementById("buscarPrimero");
let searchLast = document.getElementById("buscarUltimo");
let print = document.getElementById("imprimir");

let resultado = document.getElementById("result")
let text;
add.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let numero = document.getElementById("numero").value;

    let contacto = new Contacto(nombre, numero);
    if (arbol.add(contacto)) {
        Swal.fire({
            title: "Exito",
            text: "Contacto agregado",
            icon: "success"
        });
    }
})
search.addEventListener("click", () => {
    let contactoBuscar = document.getElementById("busqueda");
    if (!contactoBuscar.value) {
        text = "Por favor, ingresa un nombre para buscar.";
    } else {
        let nodeValue = arbol.search(contactoBuscar.value);
        if (nodeValue) {
            text = "Nombre: " + nodeValue.value.nombre + " Telefono: " + nodeValue.value.numero;
        } else {
            text = "Contacto no encontrado.";
        }
    }
    resultado.value = text;
});
searchFirst.addEventListener("click", () => {
    let busqueda = arbol.searchMinimun()
    if (!busqueda) {
        text = "No hay ningun contacto"
    } else {
        text = "Nombre: " + busqueda.value.nombre + " Telefono: " + busqueda.value.numero;

    }
    resultado.value = text;
})
searchLast.addEventListener("click", () => {
    let busqueda = arbol.searchMaximun()
    if (!busqueda) {
        text = "No hay ningun contacto"
    } else {
        text = "Nombre: " + busqueda.value.nombre + " Telefono: " + busqueda.value.numero;

    }
    resultado.value = text;
})
print.addEventListener("click", () => {
    const contactos = document.querySelector(".contactos");
    contactos.innerHTML = ''; 

    arbol.print((contact) => {
        let data = document.createElement("p");
        data.textContent = `Nombre: ${contact.nombre}, Numero: ${contact.numero}`;
        contactos.appendChild(data); // Append to the DOM
    });
});
