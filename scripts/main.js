const servicios = [
  {
    titulo: 'Consultas Pediátricas Generales',
    imagen: 'images/consulta-pediatrica.jpg',
    descripcion: 'Evaluaciones de salud, diagnóstico y tratamiento de enfermedades, seguimiento del crecimiento y desarrollo.'
  },
  {
    titulo: 'Atención pediátrica fines de semana',
    imagen: 'images/guardia-medica.jpg',
    descripcion: 'Contamos con una guardia pediátrica pasiva todos los fines de semana y feriados de 9 a 20 hs para dar respuesta a problemas de salud inesperados de forma ágil y personalizada. Consulta por nuestra afiliación (para agendar un turno llamanos a nuestro Whatsapp) <a href="https://wa.me/5492954447555" target="_blank">Turnos por Whatsapp</a>'
  },
  {
    titulo: 'Consultorio de alergia',
    imagen: 'images/alergia-e-inmunologia.jpeg',
    descripcion: 'Diagnóstico y tratamientos de enfermedades alérgicas. Identificar la causa de tu alergia es la mejor manera de controlarla.'
  },
  {
    titulo: 'Asesoramiento Nutricional',
    imagen: 'images/foto-nutricion.jpeg',
    descripcion: 'Con nuestro equipo de nutricionistas brindamos la mejor información sobre nutrición integral, alimentación complementaria y BLW (Baby-Led weaning).'
  },
  {
    titulo: 'Talleres',
    imagen: 'images/talleres-medicos.jpg',
    descripcion: 'Sesiones informativas y talleres para la comunidad: RCP, Uso del DEA, Alimentación complementaria, Sueño, entre otros.'
  }
];

function renderizarServicios() {
  const contenedorServicios = document.querySelector('.seccion-servicios');
  if (!contenedorServicios) return;

  contenedorServicios.innerHTML = '';

  const encabezado = document.createElement('div');
  const imagenEncabezado = document.createElement('img');
  const tituloSeccion = document.createElement('h3');
  tituloSeccion.textContent = 'Nuestros Servicios';
  encabezado.appendChild(imagenEncabezado);
  encabezado.appendChild(tituloSeccion);
  contenedorServicios.appendChild(encabezado);

  servicios.forEach(servicio => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'card card';

    const tituloServicio = document.createElement('p');
    tituloServicio.className = 'servicios';
    tituloServicio.innerHTML = `<span class="negrita">${servicio.titulo}</span>`;
    tarjeta.appendChild(tituloServicio);

    const imagenServicio = document.createElement('img');
    imagenServicio.className = 'card-img-top';
    imagenServicio.src = servicio.imagen;
    imagenServicio.alt = servicio.titulo;
    tarjeta.appendChild(imagenServicio);

    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.className = 'card-body';
    const descripcion = document.createElement('p');
    descripcion.className = 'card-text background';
    descripcion.innerHTML = servicio.descripcion;
    cuerpoTarjeta.appendChild(descripcion);
    tarjeta.appendChild(cuerpoTarjeta);

    contenedorServicios.appendChild(tarjeta);
  });
}

renderizarServicios();
