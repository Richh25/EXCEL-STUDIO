const m2 = {
    id: 'm2', title: 'Módulo 2: Lógica y Concatenación', level: 'basic', icon: 'fa-solid fa-code-branch',
    lessons: [
        { 
            id: 'm2_l1', title: 'El Amperstand (&)', desc: 'Une A1 y B1 con un espacio en C1.', icon: 'fa-link', 
            mockData: { 'A1': 'Juan', 'B1': 'Pérez', 'C1': '' }, challenge: { cell: 'C1', value: 'Juan Pérez', requireFormula: true },
            content: `<h3>Pegamento Sideral</h3><p>Une textos sin fórmulas usando <b>&</b>. Escribe <code>=A1 & " " & B1</code> para juntar nombre y apellido con un espacio entre comillas.</p><div class="tutorial-step"><strong>RETO:</strong> Une A1 y B1 en C1.</div>`
        },
        { 
            id: 'm2_l2', title: 'La Prueba del SI', desc: 'Si A1 > 10, escribe "OK" en B1.', icon: 'fa-question', 
            mockData: { 'A1': 15, 'B1': '' }, challenge: { cell: 'B1', value: 'OK', requireFormula: true },
            content: `<h3>Toma de Decisiones</h3><p><code>=SI(A1>10, "SÍ", "NO")</code> permite a Excel elegir entre dos caminos. El punto y coma (o coma según tu Windows) separa las partes.</p><div class="tutorial-step"><strong>RETO:</strong> En B1 escribe <code>=SI(A1>10, "OK", "MAL")</code>.</div>`
        },
        { 
            id: 'm2_l3', title: 'Comparar Totales', desc: 'Si A1=B1 escribe 1 en C1.', icon: 'fa-equals', 
            mockData: { 'A1': 100, 'B1': 100, 'C1': '' }, challenge: { cell: 'C1', value: 1, requireFormula: true },
            content: `<h3>Igualdad Lógica</h3><p>Usa <code>=SI(A1=B1, 1, 0)</code> para detectar si dos celdas son gemelas. Útil en conciliaciones.</p><div class="tutorial-step"><strong>RETO:</strong> En C1 escribe el SI de igualdad.</div>`
        },
        { 
            id: 'm2_l4', title: 'SI Anidado (Nivel 1)', desc: 'Si A1=10, 100; si no, 0.', icon: 'fa-layer-group', 
            mockData: { 'A1': 10, 'B1': '' }, challenge: { cell: 'B1', value: 100, requireFormula: true },
            content: `<h3>Estructura Lógica</h3><p>Domina el flujo básico del SI antes de los niveles Dios de anidación.</p><div class="tutorial-step"><strong>RETO:</strong> En B1 haz que si A1=10, el resultado sea 100.</div>`
        },
        { 
            id: 'm2_l5', title: 'Función Y (Condiciones Dobles)', desc: 'Escribe VERDADERO en C1 si A1=1 y B1=2.', icon: 'fa-vials', 
            mockData: { 'A1': 1, 'B1': 2, 'C1': '' }, challenge: { cell: 'C1', value: 'VERDADERO', requireFormula: true },
            content: `<h3>Doble Filtro con Y</h3><p>La función <code>=Y(B1>0, B2>0)</code> solo dice VERDADERO si AMBAS se cumplen. Se usa mucho dentro del SI.</p><div class="tutorial-step"><strong>RETO:</strong> En C1 usa <code>=Y(A1=1, B1=2)</code>.</div>`
        },
        { 
            id: 'm2_l6', title: 'Función O (Cualquiera)', desc: 'Escribe VERDADERO en C1 si A1=1 o B1=5.', icon: 'fa-vial-circle-check', 
            mockData: { 'A1': 1, 'B1': 3, 'C1': '' }, challenge: { cell: 'C1', value: 'VERDADERO', requireFormula: true },
            content: `<h3>Flexibilidad con O</h3><p><code>=O(celda="Azul", celda="Rojo")</code> acepta cualquier opción de la lista para dar por bueno el resultado.</p><div class="tutorial-step"><strong>RETO:</strong> En C1 usa <code>=O(A1=1, B1=5)</code>.</div>`
        },
        { 
            id: 'm2_l7', title: 'Función NO (Invertir)', desc: 'Niega A1 en B1.', icon: 'fa-ban', 
            mockData: { 'A1': 'VERDADERO', 'B1': '' }, challenge: { cell: 'B1', value: 'FALSO', requireFormula: true },
            content: `<h3>Contra-lógica</h3><p><code>=NO(verdadero)</code> se vuelve <b>FALSO</b>. Invierte cualquier resultado lógico de un plumazo.</p><div class="tutorial-step"><strong>RETO:</strong> En B1 usa <code>=NO(A1)</code>.</div>`
        },
        { 
            id: 'm2_l8', title: 'SI.ERROR (Limpieza)', desc: 'Evita el #DIV/0! en C1.', icon: 'fa-shield-halved', 
            mockData: { 'A1': 10, 'B1': 0, 'C1': '' }, challenge: { cell: 'C1', value: 'Error', requireFormula: true },
            content: `<h3>Escudo contra Errores</h3><p><code>=SI.ERROR(operacion, "Aviso")</code> es fundamental para reportes limpios que no tengan horribles #N/A o #DIV/0!.</p><div class="tutorial-step"><strong>RETO:</strong> En C1 usa <code>=SI.ERROR(A1/B1, "Error")</code>.</div>`
        },
        { 
            id: 'm2_l9', title: 'Uniendo Celda con Fecha', desc: 'Escribe Ventas2024 en A1.', icon: 'fa-calendar-day', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'Ventas2024', requireFormula: true },
            content: `<h3>Títulos Dinámicos</h3><p>Usa <code>="Ventas" & 2024</code> para generar encabezados que se actualicen solos.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>Ventas2024</b> en A1.</div>`
        },
        { 
            id: 'm2_l10', title: 'Atajo: Formato Porcentaje', desc: 'Escribe 0.5 en A1.', icon: 'fa-percent', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: '0.5' },
            content: `<h3>Escalado Visual</h3><p>Pulsa <b>Ctrl + Shift + %</b> para transformar un decimal en su versión porcentual legible.</p><div class="tutorial-step"><strong>RETO FINAL:</strong> Escribe <b>0.5</b> en A1 para terminar.</div>`
        }
    ]
};
