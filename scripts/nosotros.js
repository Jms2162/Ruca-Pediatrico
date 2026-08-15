const equipo = [
  {
    nombre: 'Dra. Patricia Jannello',
    imagen: '../images/foto-patricia.jpg',
    rol: 'Pediatría - Alergia e Inmunología',
    perfil: 'Pediatra especialista en Alergia e Inmunología.'
  },
  {
    nombre: 'Dra. Soledad Hernandez',
    imagen: '../images/foto-soledad.jpg',
    rol: 'Pediatra - Neonatóloga',
    perfil: 'Pediatra - Neonatóloga con experiencia en seguimiento de recién nacidos.'
  },
  {
    nombre: 'Dra. Maria Gabriela Rossi',
    imagen: '../images/Dra-Gabriela-Rossi.jpg',
    rol: 'Cardióloga Infantil',
    perfil: '(Mp: 2971) Cardióloga infantil. Atención en patologías cardíacas pediátricas.'
  },
  {
    nombre: 'Lic. Romina Mormont',
    imagen: '../images/Lic-Romina-Mormont.jpg',
    rol: 'Psicopedagoga',
    perfil: 'Nutricionista integral de niños y adultos. Asesoramiento en alimentación complementaria y BLW.'
  },
  {
    nombre: 'Lic. Rayen Pedrosa',
    imagen: '../images/lic-rayen-pedrosa.jpg',
    rol: 'Fonoaudióloga',
    perfil: 'Consultas en motricidad orofacial: evaluación y rehabilitación de succión, deglución y respiración. Tratamiento de habla y lenguaje.'
  },
  {
    nombre: 'Lic. Agustina Lafitte',
    imagen: '../images/agustina-lafitte.jpg',
    rol: 'Psicóloga',
    perfil: 'Atención psicológica con foco en infancia y adolescencia.'
  },
  {
    nombre: 'Betiana Paccioni',
    imagen: '../images/betiana-paccioni.jpg',
    rol: 'Puericultora',
    perfil: 'Acompañamiento integral en lactancia: prenatal, postnatal y regreso al trabajo.'
  },
  {
    nombre: 'Alicia Bravo',
    imagen: '../images/betiana-paccioni.jpg',
    rol: 'Psiquiatra',
    perfil: 'Acompañamiento integral en lactancia: prenatal, postnatal y regreso al trabajo.'
  },
  {
    nombre: 'Maria de Leon',
    imagen: '../images/betiana-paccioni.jpg',
    rol: 'Psiquiatra',
    perfil: 'Acompañamiento integral en lactancia: prenatal, postnatal y regreso al trabajo.'
  },
  {
    nombre: 'Anabella Aimar',
    imagen: '../images/betiana-paccioni.jpg',
    rol: 'Neumonologa Infantil',
    perfil: 'Acompañamiento integral en lactancia: prenatal, postnatal y regreso al trabajo.'
  },
  {
    nombre: 'Sec. Valeria Canales',
    imagen: '../images/Secretaria.png',
    rol: 'Secretaria',
    perfil: 'Encargada de la parte administrativa en Ruca Pediátrico.'
  }
];

function renderizarNosotros() {
  const contenedorNosotros = document.getElementById('nosotros-container');
  if (!contenedorNosotros) return;

  contenedorNosotros.innerHTML = '';

  equipo.forEach((miembro) => {
    const tarjetaPersonal = document.createElement('div');
    tarjetaPersonal.className = 'tarjeta-personal';

    const contenedorTarjeta = document.createElement('div');
    contenedorTarjeta.className = 'card-container';

    const tarjeta = document.createElement('div');
    tarjeta.className = 'card-nosotros';

    const frente = document.createElement('div');
    frente.className = 'card-front';

    const nombreElem = document.createElement('h3');
    nombreElem.textContent = miembro.nombre;

    const imagenElem = document.createElement('img');
    imagenElem.className = 'foto-soledad';
    imagenElem.src = miembro.imagen;
    imagenElem.alt = miembro.nombre;

    const rolElem = document.createElement('p');
    rolElem.textContent = miembro.rol;

    frente.appendChild(nombreElem);
    frente.appendChild(imagenElem);
    frente.appendChild(rolElem);

    const detras = document.createElement('div');
    detras.className = 'card-back';
    const tituloPerfil = document.createElement('h3');
    tituloPerfil.textContent = 'Perfil Profesional';
    const parrafoPerfil = document.createElement('p');
    parrafoPerfil.innerHTML = miembro.perfil;
    detras.appendChild(tituloPerfil);
    detras.appendChild(parrafoPerfil);

    tarjeta.appendChild(frente);
    tarjeta.appendChild(detras);
    contenedorTarjeta.appendChild(tarjeta);
    tarjetaPersonal.appendChild(contenedorTarjeta);
    contenedorNosotros.appendChild(tarjetaPersonal);
  });
}
renderizarNosotros();
