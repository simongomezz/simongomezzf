document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  const modal = document.getElementById('modal-exito');
  const cerrarBtn = document.getElementById('cerrar-modal');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    modal.style.display = 'flex';
    form.reset();
  });

  cerrarBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
