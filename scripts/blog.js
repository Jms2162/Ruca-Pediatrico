const articulos = [
  {
    titulo: 'Fiebre en niños: ¿Cuándo preocuparse?',
    icono: '🤒',
    extracto: 'La fiebre es una respuesta natural del cuerpo ante infecciones. Aprende a identificar cuándo es necesario consultar al pediatra y cómo manejarla en casa.',
    contenido: `
      <h3>¿Qué es la fiebre?</h3>
      <p>Se considera fiebre cuando la temperatura corporal supera los 38°C. Es un mecanismo de defensa del organismo.</p>
      <h3>Signos de alarma</h3>
      <ul>
        <li>Fiebre mayor a 40°C</li>
        <li>Duración mayor a 3 días</li>
        <li>Dificultad respiratoria</li>
        <li>Decaimiento marcado</li>
        <li>Rechazo de líquidos</li>
        <li>Convulsiones</li>
      </ul>
      <h3>Recomendaciones</h3>
      <ul>
        <li>Mantener hidratación constante</li>
        <li>Ropa ligera y ambiente fresco</li>
        <li>Controlar temperatura cada 2-3 horas</li>
        <li>Consultar si persiste o empeora</li>
      </ul>
    `
  },
  {
    titulo: 'Alimentación complementaria: Guía básica',
    icono: '🍼',
    extracto: 'Todo lo que necesitas saber sobre la introducción de alimentos sólidos en la dieta de tu bebé a partir de los 6 meses.',
    contenido: `
      <h3>¿Cuándo comenzar?</h3>
      <p>La alimentación complementaria se inicia alrededor de los 6 meses, cuando el bebé muestra signos de estar listo (sostiene la cabeza, muestra interés por la comida).</p>
      <h3>Primeros alimentos recomendados</h3>
      <ul>
        <li>Verduras cocidas (zapallo, zanahoria)</li>
        <li>Frutas blandas (banana, pera)</li>
        <li>Cereales sin gluten</li>
        <li>Carnes bien cocidas</li>
      </ul>
      <h3>Método BLW (Baby-Led Weaning)</h3>
      <p>Permite que el bebé explore alimentos con sus manos. Consulta con nuestro equipo de nutrición para implementarlo de forma segura.</p>
      <h3>Consejos importantes</h3>
      <ul>
        <li>Introducir un alimento nuevo cada 3 días</li>
        <li>No agregar sal ni azúcar</li>
        <li>Mantener la lactancia materna o fórmula</li>
        <li>Respetar las señales de saciedad del bebé</li>
      </ul>
    `
  },
  {
    titulo: 'Sueño infantil: Rutinas y consejos',
    icono: '😴',
    extracto: 'El sueño es fundamental para el desarrollo. Aprende a establecer rutinas saludables según la edad de tu hijo.',
    contenido: `
      <h3>Horas de sueño recomendadas</h3>
      <ul>
        <li>Recién nacidos (0-3 meses): 14-17 horas</li>
        <li>Bebés (4-11 meses): 12-15 horas</li>
        <li>Niños pequeños (1-2 años): 11-14 horas</li>
        <li>Preescolares (3-5 años): 10-13 horas</li>
        <li>Escolares (6-13 años): 9-11 horas</li>
      </ul>
      <h3>Crear una rutina de sueño</h3>
      <ul>
        <li>Horarios consistentes para acostarse</li>
        <li>Baño tibio relajante</li>
        <li>Ambiente tranquilo y oscuro</li>
        <li>Evitar pantallas 1 hora antes</li>
        <li>Cuento o canción de cuna</li>
      </ul>
      <h3>Problemas comunes</h3>
      <p>Despertares nocturnos, dificultad para conciliar el sueño, pesadillas. Consulta si afectan el descanso familiar.</p>
    `
  },
  {
    titulo: 'Calendario de vacunación',
    icono: '💉',
    extracto: 'Las vacunas protegen a tus hijos de enfermedades graves. Mantén el calendario al día para una protección completa.',
    contenido: `
      <h3>Vacunas del primer año</h3>
      <ul>
        <li><strong>Recién nacido:</strong> BCG, Hepatitis B</li>
        <li><strong>2 meses:</strong> Pentavalente, Neumococo, Rotavirus</li>
        <li><strong>4 meses:</strong> Pentavalente, Neumococo, Rotavirus</li>
        <li><strong>6 meses:</strong> Pentavalente, Neumococo, Gripe</li>
        <li><strong>12 meses:</strong> Triple viral, Hepatitis A</li>
      </ul>
      <h3>Refuerzos importantes</h3>
      <p>A los 15-18 meses, 5-6 años y 11 años se aplican refuerzos. Es fundamental no saltearlos.</p>
      <h3>Vacunas opcionales</h3>
      <p>Meningococo, Varicela, Rotavirus adicional. Consulta disponibilidad y recomendaciones.</p>
    `
  },
  {
    titulo: 'Resfríos y gripe: Cuidados en casa',
    icono: '🤧',
    extracto: 'Los resfríos son muy comunes en niños. Aprende a cuidarlos en casa y cuándo es necesario consultar.',
    contenido: `
      <h3>Síntomas comunes</h3>
      <ul>
        <li>Congestión nasal</li>
        <li>Tos</li>
        <li>Estornudos</li>
        <li>Dolor de garganta leve</li>
        <li>Fiebre baja (puede no presentarse)</li>
      </ul>
      <h3>Tratamiento en casa</h3>
      <ul>
        <li>Reposo y mucho líquido</li>
        <li>Lavados nasales con solución fisiológica</li>
        <li>Aspirar secreciones nasales a los mas pequeños</li>
        <li>Alimentación según tolerancia</li>
        <li>NO dar aspirina en menores de 18 años</li>
      </ul>
      <h3>Cuándo consultar</h3>
      <ul>
        <li>Dificultad para respirar</li>
        <li>Fiebre alta o prolongada</li>
        <li>Dolor de oído intenso</li>
        <li>Rechazo total de líquidos</li>
        <li>Malestar general</li>
      </ul>
    `
  },
  {
    titulo: 'Desarrollo psicomotor: Hitos importantes',
    icono: '🏃',
    extracto: 'Cada niño se desarrolla a su propio ritmo, pero hay hitos importantes a observar en cada etapa.',
    contenido: `
      <h3>0-6 meses</h3>
      <ul>
        <li>Sostiene la cabeza</li>
        <li>Sonrisa social</li>
        <li>Sigue objetos con la mirada</li>
        <li>Se lleva manos a la boca</li>
      </ul>
      <h3>6-12 meses</h3>
      <ul>
        <li>Se sienta sin apoyo</li>
        <li>Gatea</li>
        <li>Dice mamá/papá</li>
        <li>Juega a las escondidas</li>
      </ul>
      <h3>1-2 años</h3>
      <ul>
        <li>Camina solo</li>
        <li>Dice varias palabras</li>
        <li>Señala lo que quiere</li>
        <li>Comienza a correr</li>
      </ul>
      <h3>¿Cuándo preocuparse?</h3>
      <p>Si notas retrasos significativos en varios hitos o pérdida de habilidades ya adquiridas, consulta con el pediatra.</p>
    `
  }
];

function renderizarBlog() {
  const contenedor = document.getElementById('blog-grid-container');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  articulos.forEach((articulo) => {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'blog-card';

    const iconoEl = document.createElement('div');
    iconoEl.className = 'blog-icon';
    iconoEl.textContent = articulo.icono;

    const tituloEl = document.createElement('h2');
    tituloEl.textContent = articulo.titulo;

    const extractoEl = document.createElement('p');
    extractoEl.className = 'blog-excerpt';
    extractoEl.textContent = articulo.extracto;

    const contenidoEl = document.createElement('div');
    contenidoEl.className = 'blog-content';
    contenidoEl.innerHTML = articulo.contenido;

    const boton = document.createElement('button');
    boton.className = 'blog-toggle';
    boton.type = 'button';
    boton.textContent = 'Leer más';
    boton.addEventListener('click', function () {
      const abierto = contenidoEl.classList.toggle('show');
      boton.textContent = abierto ? 'Leer menos' : 'Leer más';
      boton.setAttribute('aria-expanded', abierto);
    });

    tarjeta.appendChild(iconoEl);
    tarjeta.appendChild(tituloEl);
    tarjeta.appendChild(extractoEl);
    tarjeta.appendChild(contenidoEl);
    tarjeta.appendChild(boton);

    contenedor.appendChild(tarjeta);
  });
}

renderizarBlog();

