document.addEventListener("DOMContentLoaded", () => {
    // Simulación de datos existentes (esto vendría de una base de datos en una app real)
    const existingProduct = {
        name: "Manzana",
        quantity: 5,
        category: "frutas-verduras",
        price: 3.50,
        description: "Manzanas frescas importadas."
    };

    // Precargar los datos en el formulario
    document.getElementById("edit-product-name").value = existingProduct.name;
    document.getElementById("edit-quantity").value = existingProduct.quantity;
    document.getElementById("edit-category").value = existingProduct.category;
    document.getElementById("edit-price").value = existingProduct.price;
    document.getElementById("edit-description").value = existingProduct.description;

    // Manejar la actualización del producto
    document.getElementById("edit-product-form").addEventListener("submit", (event) => {
        event.preventDefault();
        
        const updatedProduct = {
            name: document.getElementById("edit-product-name").value,
            quantity: document.getElementById("edit-quantity").value,
            category: document.getElementById("edit-category").value,
            price: document.getElementById("edit-price").value,
            description: document.getElementById("edit-description").value,
        };

        console.log("Producto actualizado:", updatedProduct);
        alert("¡Producto actualizado con éxito!");
    });
});
