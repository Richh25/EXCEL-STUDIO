const m6 = {
    id: 'm6', title: 'VI. Tablas Dinámicas y Dashboards', level: 'god', icon: 'fa-solid fa-chart-pie',    lessons: [
        { 
            id: 'm6_l1', 
            title: 'Crear Tabla Dinámica', 
            desc: 'Escribe "TD" en B1 para confirmar.', 
            icon: 'fa-table', 
            mockData: { 'A1': 'Datos', 'B1': '' },
            challenge: { cell: 'B1', value: 'TD' },
            content: `<h3>El resumen máximo</h3><p>Las Tablas Dinámicas permiten resumir miles de filas en segundos.</p>
            <div class="tutorial-step"><strong>RETO:</strong> Escribe <b>TD</b> en la celda <b>B1</b>.</div>` 
        },
        { 
            id: 'm6_l2', 
            title: 'Segmentación (Slicers)', 
            desc: 'Escribe "FILTRO" en A1.', 
            icon: 'fa-filter', 
            mockData: { 'A1': '' },
            challenge: { cell: 'A1', value: 'FILTRO' },
            content: `<h3>Botones Interactivos</h3><p>Los Slicers son botones visuales para filtrar tus tablas dinámicas.</p>
            <div class="tutorial-step"><strong>RETO:</strong> Escribe <b>FILTRO</b> en la celda <b>A1</b>.</div>` 
        },
        { 
            id: 'm6_l3', 
            title: 'Dashboard de 1 Clic', 
            desc: 'Escribe "MODO DIOS" en D5.', 
            icon: 'fa-chart-line', 
            mockData: { 'D5': '' },
            challenge: { cell: 'D5', value: 'MODO DIOS' },
            content: `<h3>Visualización Maestra</h3><p>Uniendo gráficos y segmentadores creas un panel de control profesional.</p>
            <div class="tutorial-step"><strong>RETO:</strong> Escribe <b>MODO DIOS</b> en la celda <b>D5</b>.</div>` 
        }
    ]
};
