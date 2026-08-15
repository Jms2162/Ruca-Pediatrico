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
        alert('Por favor complete los campos requeridos.');
        return;
      }

      const fechaFormateada = new Date(fecha).toLocaleDateString('es-AR');

      let mensaje = `🩺 SOLICITUD DE TURNO

Nombre: ${nombre}
Apellido: ${apellido}
Teléfono: ${telefono}
${email ? `Email: ${email}` : ''}
Fecha preferida: ${fechaFormateada}
${hora ? `Horario preferido: ${hora}` : ''}
${motivo ? `Motivo de la consulta: ${motivo}` : ''}

Enviado desde la web de Ruca Pediatría`;

      const numeroWhatsapp = "5492954447555";

      const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;

      window.open(url, '_blank');

    });

  }

});