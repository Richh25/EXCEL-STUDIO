const module4 = {
    id: 'analysis', title: 'Dashboards & Tablas Dinámicas', level: 'advanced', icon: 'fa-solid fa-chart-pie',
    lessons: [
        {
            id: 'l15', title: 'Tablas Dinámicas Nivel 1', desc: 'Sintetizando Data Inmensa', icon: 'fa-table-cells-large',
            content: `
                <h3>El Pívot del Análisis Moderno</h3>
                <p>Las tablas dinámicas agrupan información repetitiva o de grandes volúmenes para totalizar métricas sin usar fórmulas matemáticas manuales. Si en 100,000 registros tienes 24 ciudades mezcladas, la tabla dinámica las sintetiza devolviendo una tabla limpia con 24 filas exactas y la suma de sus ventas al lado.</p>
                
                <div class="tutorial-step">
                <strong>Anatomía del Resumen:</strong><br>
                <ul>
                    <li><strong>Filas / Rows:</strong> Arrastra aquí Campos Cualitativos (Eje X del análisis) como "Ciudades", "Meses" o "Nombres del Vendedor".</li>
                    <li><strong>Valores / Values:</strong> Arrastra aquí las métricas matemáticas Cuantitativas (Eje Y). Como "Venta Total", "Descuento", "Costo". Excel los sumará o promediará.</li>
                    <li><strong>Filtros / Filters:</strong> Para discriminar información nivel país, estatus pagado o años específicos sin que estorben en el gráfico.</li>
                </ul>
                </div>
            `
        },
        {
            id: 'l16', title: 'Campos Calculados Pro', desc: 'No ensucies la base original', icon: 'fa-square-root-variable',
            content: `
                <h3>Matemáticas Fantasma</h3>
                <p>Imagina que en tu Tabla Dinámica has resumido el total de Ingresos y el total de Costos. De pronto el jefe te pide que muestres la ganancia (Margen). Un usuario novato iría a la tabla original a crear una columna nueva restando <code>Ingreso-Costo</code>, la cual cargará memoria al archivo.</p>
                
                <h3>La Solución Premium</h3>
                <p>Un analista pro no toca la base cruda. Toca su tabla dinámica, navega al menú <strong>Análisis de Tabla Dinámica > Campos, Elementos y Conjuntos > Campo Calculado</strong>.</p>
                <p>Ahí nombras tu nueva métrica (ej. Margen) y creas la fórmula seleccionando los campos existentes. Esta columna "ficticia" vivirá únicamente en tu tabla de reporte y cambiará automáticamente según las dimensiones de cálculo. Tu peso de archivo se mantiene limpio y ligero.</p>
            `
        },
        {
            id: 'l17', title: 'Gráficos Dinámicos Visuales', desc: 'Convierte el texto en Arte', icon: 'fa-chart-column',
            content: `
                <h3>La Interpretación Final</h3>
                <p>A las juntas no se llega mostrando una tabla kilométrica; los directivos las odian. Se llega con gráficos que puedan contar historias concretas de un vistazo.</p>
                
                <h3>El Gráfico Dinámico</h3>
                <p>Si la Tabla responde a los clics e interacciones de jerarquías, su gráfico conectado directamente a su alma será exactamente igual. Haz click dentro de la tabla dinámica, presiona <strong>Insertar > Gráfico Dinámico</strong> y opta por Barras Horizontales en caso de comparar vendedores o etiquetas de texto largar o Tendencias en Líneas si tu eje es de tiempo y fechas para visibilidad temporal.</p>
            `
        },
        {
            id: 'l18', title: 'Slicers (Panel de Control Real)', desc: 'Botones que vuelven loco al Management', icon: 'fa-sliders',
            content: `
                <h3>Botones Interactivos Dashboard</h3>
                <p>Un Dashboard (Panel de Control Administrativo) se siente aburrido si no tiene botones que los usuarios finales puedan reventar a clics creyéndose en Wall Street.</p>
                
                <div class="tutorial-step">
                Pestaña Análisis, click en <strong>Insertar Segmentación de Datos (Slicer)</strong>.
                <br>
                Saldrán cajas preciosas con un diseño de botones. Si conectas tus 2 tablas y 4 gráficos a este mismo Slicer mediante "Conexión de Informes", al hacer click en el botón de "Año 2024", todas las entidades visuales del archivo colapsarán y recalcularán simultáneamente su data a ese año filtrado. Tu reporte dejará de ser una hoja de cálculo anticuada y se sentirá como una *App Ejecutable*.
                </div>
            `
        }
    ]
};
