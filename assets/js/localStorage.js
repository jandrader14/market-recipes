//Guardar en local Storage

document.getElementById("product-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Get form data
    const product = {
        name: document.getElementById("product-name").value,
        quantity: document.getElementById("quantity").value,
        category: document.getElementById("category").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value
    };

    // Obtener productos previos del localStorage
    let products = JSON.parse(localStorage.getItem("products")) || [];

    // Agregar el nuevo producto
    products.push(product);

    // Guardar en localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Limpiar el formulario después de guardar
    document.getElementById("product-form").reset();


    alert("✅ Producto guardado correctamente");
});

//Recuperar datos
function loadProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Limpiar lista antes de agregar productos

    products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `
        <p><strong>Nombre:</strong> ${product.name}</p>
        <p><strong>Cantidad:</strong> ${product.quantity}</p>
        <p><strong>Categoría:</strong> ${product.category}</p>
        <p><strong>Precio:</strong> $${product.price}</p>
        <p><strong>Descripción:</strong> ${product.description}</p>
        <button onclick="deleteProduct(${index})">🗑️ Eliminar</button>
      `;
        productList.appendChild(productItem);
    });
}

// Llamar a la función cuando la página cargue
document.addEventListener("DOMContentLoaded", loadProducts);

function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1); // Elimina el producto en la posición index
    localStorage.setItem("products", JSON.stringify(products)); // Actualiza localStorage
    loadProducts(); // Recarga la lista
}
