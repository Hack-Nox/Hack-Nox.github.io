import products from '../js apps/productos.js';

const cartData = JSON.parse(localStorage.getItem('cart'));
const cartItemsContainer = document.getElementById('cart-items');

// Definir variable para el subtotal
let subtotal = 0;

// Verificar si hay datos en el carrito
if (cartData && cartData.length > 0) {
    // Iterar sobre los productos en el carrito
    cartData.forEach(item => {
        // Encontrar el producto correspondiente en la lista de productos
        const product = products.find(product => product.id === parseInt(item.product_id));

        // Verificar si se encontró el producto
        if (product) {
            // Crear una nueva fila de tabla para el producto
            const row = document.createElement('tr');

            // Agregar las celdas de la fila con la información del producto
            row.innerHTML = `
                <td><img src="${product.image}" alt="${product.name}" style="width: 50px;"></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${item.quantity}</td>
                <td>${product.price * item.quantity}</td>
                <td><button class="delete-item" data-id="${product.id}">Eliminar</button></td>
            `;

            // Agregar la fila a la tabla
            cartItemsContainer.appendChild(row);

            // Calcular el subtotal sumando el precio del producto
            subtotal += product.price * item.quantity;
        } else {
            console.error(`No se encontró el producto con ID ${item.product_id}`);
        }
    });

    // Calcular el IVA (13% del subtotal)
    const iva = subtotal * 0.13;

    // Calcular el total (subtotal + IVA)
    const total = subtotal + iva;

    // Actualizar subtotal, IVA y total en el HTML
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('igv').innerText = iva.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);
} else {
    // Si no hay productos en el carrito, mostrar un mensaje
    cartItemsContainer.innerHTML = '<tr><td colspan="6">No hay productos en el carrito</td></tr>';
}

// Agregar evento de escucha a los botones "Eliminar"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-item')) {
        // Obtener el ID del producto a eliminar
        const productId = event.target.dataset.id;

        // Filtrar los productos en el carrito para excluir el que se va a eliminar
        const updatedCart = cartData.filter(item => item.product_id !== productId);

        // Actualizar el carrito en el localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Eliminar la fila correspondiente en la vista
        event.target.closest('tr').remove();

        // Recalcular el subtotal
        subtotal = updatedCart.reduce((acc, item) => {
            const product = products.find(product => product.id === parseInt(item.product_id));
            return acc + (product.price * item.quantity);
        }, 0);

        // Recalcular el IVA (13% del subtotal)
        const iva = subtotal * 0.13;

        // Recalcular el total (subtotal + IVA)
        const total = subtotal + iva;

        // Actualizar subtotal, IVA y total en el HTML
        document.getElementById('subtotal').innerText = subtotal.toFixed(2);
        document.getElementById('igv').innerText = iva.toFixed(2);
        document.getElementById('total').value = total.toFixed(2);
    }
});

document.getElementById('procesar-compra').addEventListener('click', function() {
        // Limpiar el carrito
        localStorage.clear();
        // Redirigir a otra página (opcional)
        window.location.href = 'Pantallagracias.html';
});

