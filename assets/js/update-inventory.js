document.getElementById("edit-product-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const updatedProduct = {
        nombre: document.getElementById("edit-product-name").value,
        cantidad: document.getElementById("edit-quantity").value,
        categoria: document.getElementById("edit-category").value,
        precio: document.getElementById("edit-price").value,
        descripcion: document.getElementById("edit-description").value,
    };

    const response = await fetch("http://localhost:5000/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct)
    });

    if (response.ok) {
        alert("Producto actualizado en la base de datos✅");
    } else {
        alert("Error al actualizar producto😭");
    }
});
