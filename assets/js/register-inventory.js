document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-main-container');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission

      // Recopilar los datos del formulario
      const data = {
        productName: document.getElementById('product-name').value,
        productQuantity: parseInt(document.getElementById('quantity').value, 10),
        productCategory: document.getElementById('category').value,
        productPrice: parseFloat(document.getElementById('price').value),
        productDescription: document.getElementById('description').value
      };

      // Enviar los datos a la API
      fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Request error');
          }
          return response.json();
        })
        .then(() => {
          alert('Registro guardado exitosamente✅');

          form.reset();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error saving the record✖️');
        });
    });
  }
});