const preguntas = [
  {
    pregunta: '¿Cómo puedo solicitar un turno?',
    icono: '❓',
    respuesta: `<p>Podés solicitar turnos de tres maneras: completando el formulario en nuestra <a href="turnos.html">página de turnos</a>, escribiendo por WhatsApp al <strong>+54 9 2954 447555</strong>, o atraves del sistema <a href="omnia.com.ar">Omnia</a>.</p>`
  }, 
  {
    pregunta: '¿Cuáles son los horarios de atención?',
    icono: '🕒',
    respuesta: `<p>Nuestros horarios son:</p>
      <ul>
        <li><strong>Lunes a Viernes:</strong> 9:00 a 12:00 y 16:00 a 19:00 hs</li>
        <li><strong> Fines de semana y feriados:</strong> 9:00 a 20:00 hs para pacientes afiliados a Ruca. </li>
      </ul>`
  },
  {
    pregunta: '¿Qué obras sociales aceptan?',
    icono: '💳',
    respuesta: `<p>Trabajamos con las principales obras sociales de la región. Para confirmar si tu obra social está incluida, consultanos por WhatsApp o llamada telefónica antes de sacar el turno.</p>`
  },
  {
    pregunta: '¿Qué debo traer a la primera consulta?',
    icono: '🩺',
    respuesta: `<p>Para la primera consulta es importante traer:</p>
      <ul>
        <li>DNI del paciente</li>
        <li>Credencial de obra social (si corresponde)</li>
        <li>Libreta sanitaria o cartilla de vacunación</li>
        <li>Estudios previos si los tiene</li>
        <li>Lista de medicamentos que toma actualmente</li>
      </ul>`
  },
  {
    pregunta: '¿Cuánto tiempo dura una consulta?',
    icono: '⏰',
    respuesta: `<p>Las consultas pediátricas tienen una duración aproximada de 20 a 30 minutos. En el caso de controles de niño sano o consultas especializadas (alergia, asesoramiento en sueño), pueden extenderse hasta 40 minutos.</p>`
  },
  {
    pregunta: '¿Atienden urgencias?',
    icono: '🚨',
    respuesta: `<p>Sí, contamos con guardia pasiva los fines de semana y feriados. Te recomendamos comunicarte primero por WhatsApp para coordinar el horario de la consulta.</p>`
  },
  {
    pregunta: '¿Desde qué edad atienden?',
    icono: '🍼',
    respuesta: `<p>Atendemos desde recién nacidos hasta adolescentes de 18 años. Contamos con experiencia en todas las etapas del desarrollo infantil.</p>`
  },
  {
    pregunta: '¿Es necesario una orden medica para que vacunen a mi hijo?',
    icono: '💉',
    respuesta: `<p> No es necesario contar con una orden para solicitar la administracion de las vacunas que estan incluidas en el calendario nacional de vacunacion. Link a <a href="https://www.argentina.gob.ar/salud/vacunas"> Calendario Nacional de vacunacion</a> </p>`
  },
  {
    pregunta: '¿Puedo cancelar o reprogramar un turno?',
    icono: '🔄',
    respuesta: `<p>Sí, podés cancelar o reprogramar tu turno comunicándote por WhatsApp o teléfono con al menos 24 horas de anticipación. Esto nos ayuda a organizar mejor la agenda y atender a otros pacientes.</p>`
  },
  {
    pregunta: '¿Realizan consultas virtuales?',
    icono: '📱',
    respuesta: `<p>Sí, ofrecemos teleconsultas para seguimientos, consultas sobre medicación o situaciones que no requieran examen físico. Consultanos por WhatsApp para coordinar una videollamada.</p>`
  }
];

function renderizarPreguntas() {
  const contenedor = document.getElementById('faq-list-container');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  preguntas.forEach((item) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';

    const boton = document.createElement('button');
    boton.className = 'faq-question';
    boton.type = 'button';
    boton.setAttribute('aria-expanded', 'false');

    const iconoSpan = document.createElement('span');
    iconoSpan.className = 'faq-icon';
    iconoSpan.textContent = item.icono;

    const texto = document.createTextNode(item.pregunta);

    const flecha = document.createElement('span');
    flecha.className = 'faq-arrow';
    flecha.textContent = '▼';

    boton.appendChild(iconoSpan);
    boton.appendChild(texto);
    boton.appendChild(flecha);

    const respuesta = document.createElement('div');
    respuesta.className = 'faq-answer';
    respuesta.innerHTML = item.respuesta;

    boton.addEventListener('click', () => {
      const abierto = boton.classList.toggle('active');
      respuesta.classList.toggle('show');
      boton.setAttribute('aria-expanded', abierto);
    });

    faqItem.appendChild(boton);
    faqItem.appendChild(respuesta);
    contenedor.appendChild(faqItem);
  });
}

renderizarPreguntas();

