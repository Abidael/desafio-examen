// script.js
document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('miFormulario');
  const mensajeEnviado = document.getElementById('mensajeEnviado');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    mensajeEnviado.innerText = 'Mensaje enviado!';
    mensajeEnviado.style.display = 'block';
    formulario.reset();
  });
});

// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
