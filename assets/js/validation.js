function validateAndRedirect() {
    const email = document.getElementById('user-email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(email)) {
      window.location.href = 'confirmacion.html';
    } else {
      alert('Por favor ingrese un correo electrónico válido.');
    }
  }

  