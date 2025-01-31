document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita el envío del formulario
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Credenciales por defecto
      const defaultEmail = 'usuario@ejemplo.com';
      const defaultPassword = 'Ejemplo123#';
  
      // Verifica las credenciales
      if (email === defaultEmail && password === defaultPassword) {
        // Redirige a otra página
        window.location.href = 'src/dashboard/dashboard.html';
      } else {
        alert('Credenciales incorrectas o usuario no válido. Por favor, inténtalo de nuevo.');
      }
    });
  });