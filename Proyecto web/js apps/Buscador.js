import products from './js apps/productos';

const searchInput = document.getElementById('searchInput');
const productsList = document.getElementById('productsList');

// Función para mostrar los productos que coincidan con la búsqueda
function showProducts(productsToShow) {
    productsList.innerHTML = '';

    productsToShow.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - Precio: $${product.price}`;
        productsList.appendChild(li);
    });
}

// Función para filtrar los productos según la búsqueda
function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    showProducts(filteredProducts);
}

// Mostrar todos los productos al cargar la página
showProducts(products);

// Escuchar cambios en el campo de búsqueda y filtrar los productos en consecuencia
searchInput.addEventListener('input', () => {
    filterProducts(searchInput.value);
});
