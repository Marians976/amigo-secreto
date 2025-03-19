// Seleccionamos los elementos del DOM  
const inputAmigo = document.getElementById("amigo");  
const listaAmigos = document.getElementById("listaAmigos");  
const resultadoSorteo = document.getElementById("resultado"); // Actualiza el ID a "resultado"   
const amigosArray = []; // Crear un array vacío para almacenar nombres de amigos  

// Función para agregar un amigo a la lista  
function agregarAmigo() {  
    const nombre = inputAmigo.value.trim(); // Obtenemos el valor del input y eliminamos espacios extra  
    
    if (nombre === "") {  
        alert("Por favor, ingresa un nombre válido.");  
        inputAmigo.value = ""; // Limpiamos la casilla de texto  
        inputAmigo.focus(); // Colocamos el foco en la entrada  
        return;  
    }  
    
    // Verificar si el nombre contiene números  
    if (/\d/.test(nombre)) {  
        alert("El nombre no puede contener números.");  
        inputAmigo.value = ""; // Limpiamos la casilla de texto  
        inputAmigo.focus(); // Colocamos el foco en la entrada  
        return;  
    }  

    // Verificar si el nombre ya está en el array  
    if (amigosArray.includes(nombre)) {  
        alert("Este nombre ya está en la lista."); // Mensaje de alerta si el nombre ya existe  
        inputAmigo.value = ""; // Limpiamos la casilla de texto  
        inputAmigo.focus(); // Colocamos el foco en la entrada  
        return;  
    }  

    // Agregar el nombre al array  
    amigosArray.push(nombre);  

    // Mostrar el nombre en la lista  
    mostrarAmigos();  

    // Limpiar el input después de agregar el nombre  
    inputAmigo.value = "";   

    // Colocar el foco de nuevo en la entrada  
    inputAmigo.focus();  
}  

// Función para mostrar todos los amigos en la lista  
function mostrarAmigos() {  
    // Limpiar la lista actual antes de mostrar los amigos  
    listaAmigos.innerHTML = "";   

    // Usar un bucle for para recorrer el array amigosArray  
    for (let i = 0; i < amigosArray.length; i++) {  
        const nuevoElemento = document.createElement("li"); // Crear un nuevo elemento <li>  
        nuevoElemento.textContent = amigosArray[i]; // Asignar el contenido del nombre  
        listaAmigos.appendChild(nuevoElemento); // Añadir el elemento a la lista  
    }  
}  

// Función para sortear un amigo de manera aleatoria  
function sortearAmigo() {  
    // Validar que haya amigos disponibles  
    if (amigosArray.length === 0) {  
        alert("No hay amigos en la lista para sortear.");  
        return;  
    }  

    // Generar un índice aleatorio  
    const indiceAleatorio = Math.floor(Math.random() * amigosArray.length);  

    // Obtener el nombre sorteado  
    const amigoSorteado = amigosArray[indiceAleatorio];  

    // Mostrar el resultado en el elemento HTML correspondiente  
    resultadoSorteo.innerHTML = `El amigo seleccionado es: ${amigoSorteado}`;  

    // eliminar el amigo sorteado del array  
    amigosArray.splice(indiceAleatorio, 1);  

    // Mostrar la lista actualizada  
    mostrarAmigos();  

    // Colocar el foco nuevamente en el input  
    inputAmigo.focus();  
}  

// Evento para agregar un amigo al presionar la tecla Enter  
inputAmigo.addEventListener("keypress", function(event) {  
    if (event.key === "Enter") {  
        agregarAmigo();  
    }  
});  