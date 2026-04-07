const m5 = {
    id: 'm5', title: 'Módulo 5: Análisis de Hipótesis y Escenarios', level: 'advanced', icon: 'fa-solid fa-vial',
    lessons: [
        { 
            id: 'm5_l1', title: 'Buscar Objetivo (Goal Seek)', desc: 'Escribe 50 en A1 si B1=A1*2.', icon: 'fa-bullseye', 
            mockData: { 'A1': '', 'B1': '' }, challenge: { cell: 'A1', value: '50' },
            content: `<h3>Empezar desde el resultado</h3><p>Usa Buscar Objetivo cuando ya tienes el resultado final y quieres saber qué dato necesitas cambiar para llegar a él.</p><div class="tutorial-step"><strong>RETO:</strong> Si quieres que B1 sea 100 y B1 tiene <code>=A1*2</code>, escribe <b>50</b> en A1.</div>`
        },
        { 
            id: 'm5_l2', title: 'Administrador de Escenarios', desc: 'Escribe OPTIMISTA en A1.', icon: 'fa-images', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'OPTIMISTA' },
            content: `<h3>Predecir el Futuro</h3><p>Crea sets de valores para comparar rápidamente un escenario de Crisis vs. un escenario de Crecimiento sin borrar el anterior.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>OPTIMISTA</b> en A1.</div>`
        },
        { 
            id: 'm5_l3', title: 'Tablas de Datos (Sensibilidad)', desc: 'Escribe TABLA en B1.', icon: 'fa-table-cells-large', 
            mockData: { 'B1': '' }, challenge: { cell: 'B1', value: 'TABLA' },
            content: `<h3>Análisis Masivo de Variables</h3><p>Genera una cuadrícula que muestre todas las variaciones posibles de precio vs. costo para ver dónde está el mayor margen.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>TABLA</b> en B1.</div>`
        },
        { 
            id: 'm5_l4', title: 'Solver (Optimización)', desc: 'Escribe SOLVER en A1.', icon: 'fa-brain', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'SOLVER' },
            content: `<h3>El nivel experto en matemáticas</h3><p>Solver busca la mejor opción posible respetando limitantes (ej. no pasarse de presupuesto) para maximizar ganancias.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>SOLVER</b> en A1.</div>`
        },
        { 
            id: 'm5_l5', title: 'Solver: Restricciones', desc: 'Escribe LIMITE en C1.', icon: 'fa-hand-dots', 
            mockData: { 'C1': '' }, challenge: { cell: 'C1', value: 'LIMITE' },
            content: `<h3>Vallas lógicas</h3><p>En el menú Datos > Solver, puedes añadir reglas como "La celda B2 debe ser un número entero mayor a 0".</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>LIMITE</b> en C1.</div>`
        },
        { 
            id: 'm5_l6', title: 'Pronóstico Lineal (=PRONOSTICO.LINEAL)', desc: 'Pronostica 500 en A1.', icon: 'fa-chart-line', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: '500' },
            content: `<h3>Mirar el mañana</h3><p>Usa <code>=PRONOSTICO.LINEAL(x, valores_y, valores_x)</code> para predecir ventas basado en tu historial pasado.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>500</b> en A1.</div>`
        },
        { 
            id: 'm5_l7', title: 'Análisis de lo Absurdo (What-IF)', desc: 'Escribe QUEPASASI en A1.', icon: 'fa-question-circle', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'QUEPASASI' },
            content: `<h3>Pestaña Datos</h3><p>El grupo llamado "Análisis de hipótesis" es donde vive Buscar Objetivo, Solver y Escenarios.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>QUEPASASI</b> en A1.</div>`
        },
        { 
            id: 'm5_l8', title: 'Escenario de Pesimismo', desc: 'Escribe CRISIS en B1.', icon: 'fa-cloud-rain', 
            mockData: { 'B1': '' }, challenge: { cell: 'B1', value: 'CRISIS' },
            content: `<h3>Planificación de Riesgos</h3><p>Crea el escenario pesimista en el Administrador para saber cuánto tiempo sobrevive la empresa con ventas mínimas.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>CRISIS</b> en B1.</div>`
        },
        { 
            id: 'm5_l9', title: 'Previsión Visual (Menú)', desc: 'Escribe PREVER en A1.', icon: 'fa-eye', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'PREVER' },
            content: `<h3>Hoja de Previsión</h3><p>Usa el botón "Hoja de previsión" para que Excel te dibuje una gráfica con bandas de confianza (+/- 95%) automáticamente.</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <b>PREVER</b> en A1.</div>`
        },
        { 
            id: 'm5_l10', title: 'Atajo: Formato Fecha Larga', desc: 'Escribe HOY en A1.', icon: 'fa-clock', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 'HOY' },
            content: `<h3>Fecha Expandida</h3><p>Usa <b>Ctrl + Shift + @</b> para que una fecha normal (10/10) pase a verse como fecha larga detallada.</p><div class="tutorial-step"><strong>RETO FINAL:</strong> Escribe <b>HOY</b> en A1 para terminar.</div>`
        }
    ]
};
