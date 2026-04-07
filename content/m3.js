const m3 = {
    id: 'm3', title: 'Módulo 3: Búsqueda y Referencias', level: 'advanced', icon: 'fa-solid fa-magnifying-glass',
    lessons: [
        { 
            id: 'm3_l1', title: 'SUMAR.SI Selective', desc: 'Suma D1 si A1 > 100.', icon: 'fa-plus', 
            mockData: { 'A1': 150, 'D1': '' }, challenge: { cell: 'D1', value: 150 },
            content: `<h3>Suma con Condición</h3><p><code>=SUMAR.SI(rango, "condicion")</code> permite sumar solo si se cumple una regla. Útil para sumar ventas de un solo vendedor.</p><div class="tutorial-step"><strong>RETO:</strong> En D1 suma A1 solo si es > 100.</div>`
        },
        { 
            id: 'm3_l2', title: 'CONTAR.SI Frecuencias', desc: 'Cuenta cuántos 50 hay en B1.', icon: 'fa-tally', 
            mockData: { 'A1': 50, 'A2': 100, 'A3': 50, 'B1': '' }, challenge: { cell: 'B1', value: 2 },
            content: `<h3>Conteo Selectivo</h3><p>Dile a Excel que cuente cuántas veces se repite un valor con <code>=CONTAR.SI(A1:A3, 50)</code>.</p><div class="tutorial-step"><strong>RETO:</strong> Cuenta los cincuentas en B1.</div>`
        },
        { 
            id: 'm3_l3', title: 'BUSCARV (Nivel Básico)', desc: 'Busca el valor 10 en B1.', icon: 'fa-binoculars', 
            mockData: { 'A1': 10, 'A2': 20, 'B1': '' }, challenge: { cell: 'B1', value: 10 },
            content: `<h3>Vertical Lookup</h3><p>Busca en la primera columna y tráete el dato de la columna de al lado. <code>=BUSCARV(10, A1:A2, 1, 0)</code>.</p><div class="tutorial-step"><strong>RETO:</strong> Busca 10 en B1.</div>`
        },
        { 
            id: 'm3_l4', title: 'BUSCARX (Moderno)', desc: 'Busca A2 en C1.', icon: 'fa-crosshairs', 
            mockData: { 'A1': 'ID-5', 'A2': 'ID-9', 'B1': 'Carlos', 'B2': 'Ana', 'C1': '' }, challenge: { cell: 'C1', value: 'Ana' },
            content: `<h3>La Evolución Suprema</h3><p><code>=BUSCARX(A2, A1:A2, B1:B2)</code> es más seguro y potente que BUSCARV. No necesita índices de columna.</p><div class="tutorial-step"><strong>RETO:</strong> En C1 busca el nombre de A2.</div>`
        },
        { 
            id: 'm3_l5', title: 'SUMAR.SI.CONJUNTO', desc: 'Suma A1 si B1=1 y C1=2 en D1.', icon: 'fa-plus-circle', 
            mockData: { 'A1': 1000, 'B1': 1, 'C1': 2, 'D1': '' }, challenge: { cell: 'D1', value: 1000 },
            content: `<h3>Múltiples Filtros</h3><p>Suma solo si se cumplen 2 o más criterios simultáneos. <code>=SUMAR.SI.CONJUNTO(rangoSuma, Rango1, Criterio1, Rango2, Criterio2)</code>.</p><div class="tutorial-step"><strong>RETO:</strong> En D1 suma A1 con 2 condiciones.</div>`
        },
        { 
            id: 'm3_l6', title: 'INDICE y COINCIDIR', desc: 'Trae A1 en B1.', icon: 'fa-chess-knight', 
            mockData: { 'A1': 'Dato', 'B1': '' }, challenge: { cell: 'B1', value: 'Dato' },
            content: `<h3>El Dúo Dinámico Antiguo</h3><p>Antes de BUSCARX, combinábamos INDICE con COINCIDIR para buscar hacia la izquierda. Sigue siendo muy robusto.</p><div class="tutorial-step"><strong>RETO:</strong> En B1 escribe <code>=INDICE(A1, 1)</code>.</div>`
        },
        { 
            id: 'm3_l7', title: 'FILTRAR (Desbordamiento)', desc: 'Filtra A1 si es 500 en C1.', icon: 'fa-filter', 
            mockData: { 'A1': 500, 'A2': 100, 'C1': '' }, challenge: { cell: 'C1', value: 500 },
            content: `<h3>Matrices Dinámicas</h3><p><code>=FILTRAR(rango, condicion)</code> no solo trae un dato, sino que puede "derramar" toda una tabla filtrada en segundos.</p><div class="tutorial-step"><strong>RETO:</strong> En C1 filtra A1=500.</div>`
        },
        { 
            id: 'm3_l8', title: 'UNICOS (Limpieza)', desc: 'Obtén valor único de A1 en B1.', icon: 'fa-user-check', 
            mockData: { 'A1': 'Repetido', 'A2': 'Repetido', 'B1': '' }, challenge: { cell: 'B1', value: 'Repetido' },
            content: `<h3>Adiós Duplicados</h3><p><code>=UNICOS(rango)</code> limpia tus listas instantáneamente trayendo solo una vez cada valor distinto.</p><div class="tutorial-step"><strong>RETO:</strong> En B1 usa <code>=UNICOS(A1)</code>.</div>`
        },
        { 
            id: 'm3_l9', title: 'COINCIDIRX (Búsqueda exacta)', desc: 'Encuentra posición de 50 en A1.', icon: 'fa-bullseye', 
            mockData: { 'A1': 50, 'A2': 20, 'B1': '' }, challenge: { cell: 'B1', value: 1 },
            content: `<h3>Ubicación Precisa</h3><p><code>=COINCIDIRX(50, A1:A2)</code> te dirá en qué número de fila del rango está tu buscado.</p><div class="tutorial-step"><strong>RETO:</strong> En B1 encuentra posición de A1.</div>`
        },
        { 
            id: 'm3_l10', title: 'Atajo: Formato Fecha', desc: 'Escribe 45398 en A1.', icon: 'fa-calendar-check', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: '45398' },
            content: `<h3>El Calendario Interior</h3><p>Usa <b>Ctrl + Shift + #</b> para revelar la fecha que se esconde detrás de un número serial en Excel.</p><div class="tutorial-step"><strong>RETO FINAL:</strong> Escribe <b>45398</b> en A1 para terminar.</div>`
        }
    ]
};
