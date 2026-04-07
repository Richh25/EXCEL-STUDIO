const m4 = {
    id: 'm4', title: 'Módulo 4: Limpieza e Higiene de Datos', level: 'advanced', icon: 'fa-solid fa-broom',
    lessons: [
        { 
            id: 'm4_l1', title: 'Filtros con Comodines (*)', desc: 'Escribe "*Tech*" en B1.', icon: 'fa-filter', 
            mockData: { 'A1': 'FinTech', 'B1': '' }, challenge: { cell: 'B1', value: '*Tech*' },
            content: `<h3>Busca por aproximación</h3><p>Usa el asterisco (*) para filtrar lo que "contenga" algo. Si buscas <code>*Tech*</code>, Excel encontrará "FinTech", "BioTech" o "TechInnova".</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>*Tech*</b> en B1.</div>`
        },
        { 
            id: 'm4_l2', title: 'Formato Condicional (Semáforo)', desc: 'Escribe RANGO en A1.', icon: 'fa-palette', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'RANGO' },
            content: `<h3>Alerta Visual Dinámica</h3><p>Pinta celdas de rojo si son negativas o verde si son metas logradas sin hacerlo a mano. ¡Excel lo hace por ti al detectar el valor!</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>RANGO</b> en A1.</div>`
        },
        { 
            id: 'm4_l3', title: 'Validación: La Lista Blanca', desc: 'Escribe LISTA en C2.', icon: 'fa-list-ul', 
            mockData: { 'C2': '' }, challenge: { cell: 'C2', value: 'LISTA' },
            content: `<h3>Adiós Errores Humanos</h3><p>Crea menús desplegables en las celdas para que el usuario solo elija opciones válidas de una lista cerrada.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>LISTA</b> en C2.</div>`
        },
        { 
            id: 'm4_l4', title: 'Contraseña de Hoja', desc: 'Escribe LLAVE en A1.', icon: 'fa-key', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'LLAVE' },
            content: `<h3>Blindaje de Celdas</h3><p>Protege tu planilla para que nadie borre tus fórmulas por accidente. Define qué celdas son editables y cuáles no.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>LLAVE</b> en A1.</div>`
        },
        { 
            id: 'm4_l5', title: 'Validación de Números (1-100)', desc: 'Escribe 50 en A1.', icon: 'fa-hashtag', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: '50' },
            content: `<h3>Restringir Magnitudes</h3><p>Evita que alguien escriba un "1000" donde debe ir un porcentaje del 1 al 100 usando validación de número entero.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>50</b> en A1.</div>`
        },
        { 
            id: 'm4_l6', title: 'Validación de Fechas (Solo 2024)', desc: 'Escribe 2024 en B1.', icon: 'fa-calendar-day', 
            mockData: { 'B1': '' }, challenge: { cell: 'B1', value: '2024' },
            content: `<h3>Cronología Protegida</h3><p>Configura la validación para que solo se acepten fechas de un año específico, evitando que capturen años pasados.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>2024</b> en B1.</div>`
        },
        { 
            id: 'm4_l7', title: 'Formato Condicional con Fórmula', desc: 'Escribe VERDE en A1.', icon: 'fa-brush', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'VERDE' },
            content: `<h3>Reglas Personalizadas</h3><p>Usa fórmulas dentro del formato condicional para pintar toda una fila basado en el valor de una sola celda lejana.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>VERDE</b> en A1.</div>`
        },
        { 
            id: 'm4_l8', title: 'Quitar Duplicados (Menú)', desc: 'Escribe UNICO en C1.', icon: 'fa-user-minus', 
            mockData: { 'A1': 'A', 'A2': 'A', 'C1': '' }, challenge: { cell: 'C1', value: 'UNICO' },
            content: `<h3>Limpieza de Listas</h3><p>Usa el botón "Quitar Duplicados" de la pestaña Datos para purgar miles de registros repetidos con un click.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>UNICO</b> en C1.</div>`
        },
        { 
            id: 'm4_l9', title: 'Agrupar y Esquema', desc: 'Escribe AGRUPAR en A1.', icon: 'fa-indent', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'AGRUPAR' },
            content: `<h3>Reportes Desplegables</h3><p>Usa la función Agrupar (Shift+Alt+Flecha) para esconder secciones de tu reporte y abrirlas solo cuando necesiten el detalle.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>AGRUPAR</b> en A1.</div>`
        },
        { 
            id: 'm4_l10', title: 'Atajo: Formato Científico', desc: 'Escribe 1e6 en A1.', icon: 'fa-atom', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: '1e6' },
            content: `<h3>Números Astrales</h3><p>Usa <b>Ctrl + Shift + ^</b> para cambiar un número a notación científica. Muy útil para ingeniería y ciencia de datos.</p><div class="tutorial-step"><strong>RETO FINAL:</strong> Escribe <b>1e6</b> en A1 para terminar.</div>`
        }
    ]
};
