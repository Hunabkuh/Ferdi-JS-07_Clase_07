// MUESTRARIO DE MASCOTAS

// Tienes un div con la puerta de una tienda de mascotas.
// Tienes un input donde le dices qué animal quieres (al menos tres, ej. perro, gato, canario)
// botón enviar
// y según lo que haya escrito, mostrar foto del animal y nombre en ese div, o solo cambiar la foto en el div, y el nombre en otro sitio (p.ej. Pie de foto)

function cambiadorFotos() {
    let animal = document.getElementById("seleccion-lista").value;

    if (animal == "1") {
        document.getElementById("div-lobo").style = "background-color: black; font-size: 18px; visibility: visible";
        document.getElementById("tabla-anim").style.display = "none";
        document.getElementById("div-leon").style.display = "none";
        document.getElementById("div-aguila").style.display = "none";
        document.getElementById("div-oso").style.display = "none";

    } else if (animal == "2") {
        document.getElementById("div-leon").style = "background-color: black; font-size: 18px; visibility: visible";
        document.getElementById("tabla-anim").style.display = "none";
        document.getElementById("div-lobo").style.display = "none";
        document.getElementById("div-aguila").style.display = "none";
        document.getElementById("div-oso").style.display = "none";

    } else if (animal == "3") {
        document.getElementById("div-aguila").style = "background-color: black; font-size: 18px; visibility: visible";
        document.getElementById("tabla-anim").style.display = "none";
        document.getElementById("div-leon").style.display = "none";
        document.getElementById("div-lobo").style.display = "none";
        document.getElementById("div-oso").style.display = "none";

    } else if (animal == "4") {
        document.getElementById("div-oso").style = "background-color: black; font-size: 18px; visibility: visible";
        document.getElementById("tabla-anim").style.display = "none";
        document.getElementById("div-leon").style.display = "none";
        document.getElementById("div-aguila").style.display = "none";
        document.getElementById("div-lobo").style.display = "none";

    } else {
        alert("Escoge un animal de la lista mostrada");
    }
}