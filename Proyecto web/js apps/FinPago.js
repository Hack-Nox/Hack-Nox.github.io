// Array de URLs de imágenes de carga
const loadingImages = [
    '/Img/AguaVeggi.png',
    '/Img/GuanaFresh.png',
    '/Img/LimonVeggi.png',
    '/Img/KiwiFresh.png'
];

let index = 0;
const imageElement = document.querySelector('#procesando-pedido img');

// Función para cambiar la imagen de carga
function changeImage() {
    imageElement.src = loadingImages[index];
    index = (index + 1) % loadingImages.length;
}

// Cambiar la imagen cada 500 milisegundos (medio segundo)
setInterval(changeImage, 500);

// Simular el proceso de pedido con un temporizador
setTimeout(function () {
    document.getElementById('procesando-pedido').style.display = 'none';
    document.getElementById('pedido-confirmado').style.display = 'block';
    setTimeout(function () {
        window.location.href = 'productos.html'; // Cambiar 'productos.html' por la página a la que quieres redireccionar
    }, 5000); // Redirigir después de 5 segundos (5000 milisegundos)
}, 3000); // Cambia 3000 a la cantidad de milisegundos que desees que dure el proceso
