const m0 = {
    id: 'm0', title: 'Módulo 0: Mi Primer Día en Excel', level: 'basic', icon: 'fa-solid fa-seedling',
    lessons: [
        {
            id: 'm0_l1', title: '¿Qué es esta cuadrícula infinita?', desc: 'Escribe 100 en A1.', icon: 'fa-border-all',
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: '100' },
            content: `<h3>Celdas y Coordenadas</h3><p>Excel es un mapa infinito de cuadritos llamados <strong>Celdas</strong>. Cada una tiene un nombre único formado por su Columna (Letra) y su Fila (Número). El primer cuadro es <strong>A1</strong>.</p><div class="tutorial-step"><strong>RETO:</strong> Selecciona A1 y escribe <b>100</b>.</div>`
        },
        {
            id: 'm0_l2', title: 'Escribiendo tu primer texto', desc: 'Escribe "EXCEL" en B2.', icon: 'fa-keyboard',
            mockData: { 'B2': '' }, challenge: { cell: 'B2', value: 'EXCEL' },
            content: `<h3>Datos y Texto</h3><p>No todo son números. Puedes organizar listas, nombres y notas. Al presionar ENTER, guardas el dato y bajas a la siguiente celda.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>EXCEL</b> en B2 y presiona ENTER.</div>`
        },
        {
            id: 'm0_l3', title: 'Tu primera suma instantánea', desc: 'Suma 50+50 en C3.', icon: 'fa-calculator',
            mockData: { 'C3': '' }, challenge: { cell: 'C3', value: 100, requireFormula: true },
            content: `<h3>El Poder del Igual (=)</h3><p>Para que Excel calcule, inicia con el signo <b>=</b>. Es el disparador de fórmulas.</p><div class="tutorial-step"><strong>RETO:</strong> En C3 escribe <code>=50+50</code> y presiona ENTER.</div>`
        },
        {
            id: 'm0_l4', title: 'Pintando celdas (Formato)', desc: 'Escribe 3 en A3.', icon: 'fa-paint-roller',
            mockData: { 'A3': '' }, challenge: { cell: 'A3', value: '3' },
            content: `<h3>Resaltado Visual</h3><p>Usa el icono del bote de pintura para resaltar información clave.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>3</b> en A3 para confirmar tu posición.</div>`
        },
        {
            id: 'm0_l5', title: 'Ocultar Filas y Columnas', desc: 'Escribe Oculto en D1.', icon: 'fa-eye-slash',
            mockData: { 'D1': '' }, challenge: { cell: 'D1', value: 'Oculto' },
            content: `<h3>Limpieza de Datos</h3><p>A veces sobran datos. Haz click derecho en el número de fila o letra de columna y selecciona "Ocultar".</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>Oculto</b> en D1.</div>`
        },
        {
            id: 'm0_l6', title: 'Insertar Comentarios', desc: 'Escribe Nota en B5.', icon: 'fa-comment',
            mockData: { 'B5': '' }, challenge: { cell: 'B5', value: 'Nota' },
            content: `<h3>Anotaciones en Celda</h3><p>Usa Ctrl+Shift+M para insertar comentarios sin ensuciar la cuadrícula.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>Nota</b> en B5.</div>`
        },
        {
            id: 'm0_l7', title: 'Atajo: Seleccionar Todo', desc: 'Escribe Todo en A1.', icon: 'fa-object-group',
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'Todo' },
            content: `<h3>Ctrl + E</h3><p>Este atajo selecciona todo tu rango actual de golpe. ¡Esencial para ganar velocidad!</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>Todo</b> en A1.</div>`
        },
        {
            id: 'm0_l8', title: 'Eliminar Celdas (Ctrl + -)', desc: 'Escribe Borrar en C1.', icon: 'fa-trash-can',
            mockData: { 'C1': 'Dato Antiguo' }, challenge: { cell: 'C1', value: 'Borrar' },
            content: `<h3>Limpieza Veloz</h3><p>Con Ctrl y la tecla menos (-), puedes eliminar filas o columnas enteras seleccionadas.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>Borrar</b> sobre C1.</div>`
        },
        {
            id: 'm0_l9', title: 'Zoom Dinámico (Ctrl+Shift+L)', desc: 'Escribe Zoom en A1.', icon: 'fa-magnifying-glass-plus',
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'Zoom' },
            content: `<h3>Mejor Visibilidad</h3><p>Usa la rueda del ratón con Ctrl para acercarte a los detalles o alejarte para ver todo el tablero.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>Zoom</b> en A1.</div>`
        },
        {
            id: 'm0_l10', title: 'Hojas de Cálculo (Libros)', desc: 'Escribe "FINAL" en D5.', icon: 'fa-book-open',
            mockData: { 'D5': '' }, challenge: { cell: 'D5', value: 'FINAL' },
            content: `<h3>Organización por Pestañas</h3><p>Un archivo de Excel (Libro) puede tener muchas hojas abajo. Divídelas por meses o departamentos.</p><div class="tutorial-step"><strong>RETO FINAL:</strong> Escribe <b>FINAL</b> en D5 para cerrar este nivel.</div>`
        }
    ]
};
