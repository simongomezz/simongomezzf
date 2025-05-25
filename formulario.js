document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  const modal = document.getElementById('modal-exito');
  const cerrarBtn = document.getElementById('cerrar-modal');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Mostrar modal
    modal.style.display = 'flex';

    // Resetear el formulario
    form.reset();
  });

  cerrarBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
