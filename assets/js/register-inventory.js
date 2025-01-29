

    // Obtener productos desde el backend y llenar el campo de selección
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(products => {
        const productSelect = document.getElementById('product-name');
        products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.name;
          option.textContent = product.name;
          productSelect.appendChild(option);
        });
      })
      .catch(error => console.error('Error al obtener los productos:', error));
  });

  // JavaScript para manejar el formulario
  document.getElementById('product-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    const product = {
      name: productName,
      quantity: quantity,
      category: category,
      price: price,
      description: description
    };

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (response.ok) {
        alert('Producto registrado exitosamente');
        document.getElementById('product-form').reset();
      } else {
        alert('Error al registrar el producto');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al registrar el producto');
    }
  });