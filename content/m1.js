const m1 = {
    id: 'm1', title: 'Módulo 1: Fórmulas y Referencias', level: 'basic', icon: 'fa-solid fa-calculator',
    lessons: [
        { 
            id: 'm1_l1', title: 'Operaciones de Hierro', desc: 'Suma 10+20 en A1.', icon: 'fa-plus-minus', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: 30, requireFormula: true },
            content: `<h3>Suma, Resta, Multiplicación y División</h3><p>Usa <code>+</code>, <code>-</code>, <code>*</code> y <code>/</code> respectivamente. Excel respeta el orden matemático (Paréntesis primero).</p><div class="tutorial-step"><strong>RETO:</strong> Escribe <code>=10+20</code> en A1.</div>`
        },
        { 
            id: 'm1_l2', title: 'Porcentajes Rápidos', desc: 'Calcula 50% de 100 en B1.', icon: 'fa-percent', 
            mockData: { 'A1': 100, 'B1': '' }, challenge: { cell: 'B1', value: 50, requireFormula: true },
            content: `<h3>Calcular el %</h3><p>Para sacar el porcentaje de algo, multiplica el número base por el porcentaje (ej. <code>=A1 * 50%</code>).</p><div class="tutorial-step"><strong>RETO:</strong> En B1 escribe <code>=A1*50%</code>.</div>`
        },
        { 
            id: 'm1_l3', title: 'Referencias Absolutas ($)', desc: 'Fija A1 escribiendo =$A$1 en C1.', icon: 'fa-lock', 
            mockData: { 'A1': 500, 'C1': '' }, challenge: { cell: 'C1', value: 500, requireFormula: true },
            content: `<h3>Congelar Celdas con F4</h3><p>Si arrastras una fórmula, las celdas se mueven. Para evitarlo, usa el signo <b>$</b> (ej. <code>$A$1</code>). Presiona F4 para activarlo rápido.</p><div class="tutorial-step"><strong>RETO:</strong> En C1 escribe <code>=$A$1</code>.</div>`
        },
        { 
            id: 'm1_l4', title: 'Autosuma (Alt + =)', desc: 'Suma el rango A1 y A2 en A3.', icon: 'fa-sigma', 
            mockData: { 'A1': 10, 'A2': 20, 'A3': '' }, challenge: { cell: 'A3', value: 30, requireFormula: true },
            content: `<h3>Magia instantánea</h3><p>Selecciona una celda vacía al final de tus números y presiona <b>Alt + =</b> para insertar la suma total. <br><small>(Si tu teclado es Latinoamericano, usa <b>Alt + Shift + =</b>).</small></p><div class="tutorial-step"><strong>RETO:</strong> Usa <code>=SUMA(A1:A2)</code> en A3.</div>`
        },
        { 
            id: 'm1_l5', title: 'El Mínimo y el Máximo', desc: 'Encuentra el máximo entre A1(10) y A2(50) en B1.', icon: 'fa-arrow-up-9-1', 
            mockData: { 'A1': 100, 'A2': 500, 'B1': '' }, challenge: { cell: 'B1', value: 500, requireFormula: true },
            content: `<h3>Análisis de Extremos</h3><p>Usa <code>=MAX(rango)</code> o <code>=MIN(rango)</code> para detectar rápidamente topes y mínimos.</p><div class="tutorial-step"><strong>RETO:</strong> En B1 escribe <code>=MAX(A1:A2)</code>.</div>`
        },
        { 
            id: 'm1_l6', title: 'Promedio de Ventas', desc: 'Promedia 100 y 200 en C1.', icon: 'fa-chart-line', 
            mockData: { 'A1': 100, 'B1': 200, 'C1': '' }, challenge: { cell: 'C1', value: 150, requireFormula: true },
            content: `<h3>La Media Aritmética</h3><p><code>=PROMEDIO(A1:B1)</code> suma todo y lo divide entre la cantidad de elementos.</p><div class="tutorial-step"><strong>RETO:</strong> En C1 promedia A1 y B1.</div>`
        },
        { 
            id: 'm1_l7', title: 'CONTAR números', desc: 'Cuenta las celdas con números en B1.', icon: 'fa-list-ol', 
            mockData: { 'A1': 10, 'A2': 20, 'A3': 'HOLA', 'A4': 30, 'B1': '' }, challenge: { cell: 'B1', value: 3, requireFormula: true },
            content: `<h3>Censo numérico</h3><p>La función <code>=CONTAR()</code> ignora textos y solo cuenta celdas con cifras. En este rango (A1:A4), solo hay 3 números.</p><div class="tutorial-step"><strong>RETO:</strong> En la celda resaltada (B1), escribe <code>=CONTAR(A1:A4)</code>.</div>`
        },
        { 
            id: 'm1_l8', title: 'CONTARA (No vacías)', desc: 'Cuenta cuántas celdas tienen algo en B1.', icon: 'fa-list-check', 
            mockData: { 'A1': 'A', 'A2': 'B', 'A3': '', 'A4': 'C', 'B1': '' }, challenge: { cell: 'B1', value: 3, requireFormula: true },
            content: `<h3>Censo total</h3><p><code>=CONTARA()</code> cuenta todo lo que no esté vacío (textos y números).</p><div class="tutorial-step"><strong>RETO:</strong> En la celda resaltada (B1), aplica <code>=CONTARA(A1:A4)</code>.</div>`
        },
        { 
            id: 'm1_l9', title: 'Redondear decimales', desc: 'Redondea 10.55 en B1.', icon: 'fa-arrows-left-right', 
            mockData: { 'A1': 10.55, 'B1': '' }, challenge: { cell: 'B1', value: 11, requireFormula: true },
            content: `<h3>Cifras Exactas</h3><p>Usa <code>=REDONDEAR(A1, 0)</code> para quitar decimales al entero más cercano.</p><div class="tutorial-step"><strong>RETO:</strong> Redondea A1 en B1 con 0 decimales.</div>`
        },
        { 
            id: 'm1_l10', title: 'Atajo: Formato Moneda', desc: 'Escribe 1000 en A1.', icon: 'fa-money-bill-wave', 
            mockData: { 'A1': '' }, challenge: { cell: 'A1', value: '1000' },
            content: `<h3>Vistazo Financiero</h3><p>Usa <b>Ctrl + Shift + $</b> para poner rápidamente el signo de pesos y decimales.</p><div class="tutorial-step"><strong>RETO FINAL:</strong> Escribe <b>1000</b> en A1 para terminar.</div>`
        }
    ]
};
