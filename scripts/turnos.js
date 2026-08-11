document.addEventListener('DOMContentLoaded', function() {
  const turnoForm = document.getElementById('turnoForm');
  
  if (turnoForm) {
    turnoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value.trim();
      const apellido = document.getElementById('apellido').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const email = document.getElementById('email').value.trim();
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      const motivo = document.getElementById('motivo').value.trim();

      if (!nombre || !apellido || !telefono || !fecha) {
        alert('Por favor complete los campos requeridos: Nombre, Apellido, Teléfono y Fecha.');
        return;
      }
      let mensaje = `Nueva solicitud de turno:\n
      Nombre: ${nombre}\n
      Apellido: ${apellido}\n` +
      `Teléfono: ${telefono}\n` +
      (email ? `Email: ${email}\n` : '') +
      `Fecha: ${fecha}\n` +
      (hora ? `Hora: ${hora}\n` : '') +
      (motivo ? `Motivo: ${motivo}\n` : '');
      const formContainer = turnoForm.parentElement;
      formContainer.innerHTML = `
        <div class="success-message">
          <h2 class="success-title">¡Se recibió su solicitud!</h2>
          <p>Mensaje: ${mensaje}</p>
          <p class="success-text">A la brevedad lo contactaremos.</p>
        </div>
      `;
    });
  }
});
