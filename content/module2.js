const module2 = {
    id: 'intermediate', title: 'Arsenal Analítico', level: 'advanced', icon: 'fa-solid fa-flask',
    lessons: [
        {
            id: 'l5', title: 'Suma y Promedio (Estadística Exprés)', desc: 'Más allá de sumar celda por celda a mano', icon: 'fa-plus',
            content: `
                <h3>Para qué estar sumando "+ Celda..."</h3>
                <p>Las fórmulas estadísticas nativas de Excel están preprogramadas para devorar inmensos bloques de rangos completos sin quejar, evitándonos hacer cosas obsoletas como <code>=A1+A2+A3+A4...</code></p>
                
                <h3>Las Los Cuatro Fantásticos del Análisis</h3>
                <ul>
                    <li><code>=SUMA(A1:A100)</code>: Retorna el gran total de todos los números dentro del rango.</li>
                    <li><code>=PROMEDIO(B:B)</code>: Al poner <code>B:B</code> indicas que analice la columna completa. Suma todos los registros y los divide entre el contaje. ¡Ojo que ignora celdas vacías solas!</li>
                    <li><code>=MAX(C1:C100)</code> / <code>=MIN(C1:C100)</code>: Buscan y escupen el valor más alto (ej. el pico de ventas del mes) y el más bajo respectivamente.</li>
                    <li><code>=CONTAR(A1:A100)</code> y <code>=CONTARA(A1:A100)</code>: Mucha gente los confunde. <strong>CONTAR</strong> solo contabiliza celdas que traigan números puros. <strong>CONTARA</strong> es todoterreno, cuenta celdas que tengan números, letras, o espacios, es decir, todo lo que "no este vacío".</li>
                </ul>
            `
        },
        {
            id: 'l6', title: 'Lógica SI (La Base Condicional)', desc: 'Si ocurre esto, haz aquello, sino haz esto.', icon: 'fa-code-branch',
            content: `
                <h3>Otórgar Cerebro Artificial a Tu Hoja</h3>
                <p>La función <code>=SI()</code> es probablemente el inicio de la programación en la mente de todos. Permite que Excel tome "decisiones" y arroje un resultado diferente basado en que una condición se cumpla o no.</p>
                
                <h3>Anatomía del Científico Lógico</h3>
                <p><code>=SI(Prueba_Lógica, Valor_Si_Verdadero, Valor_Si_Falso)</code></p>
                <ol>
                    <li><strong>Prueba:</strong> Evalúa la matemática. Ej: <code>A1 > 600</code> (¿Es A1 mayor a 600?).</li>
                    <li><strong>Si es Verdad:</strong> ¿Qué debe arrojar o calcular? Ej: <code>"Aprobó el crédito"</code> (Textos van entre comillas).</li>
                    <li><strong>Si es Falso:</strong> ¿Qué arroja si no superó los 600? Ej: <code>"Rechazar"</code>.</li>
                </ol>
                <p>Junto: <code>=SI(B2>10000, "Cobrar Comisión", "No llega a meta")</code>. Al arrastrarla hacia abajo, automatizas cientos de decisiones crediticias al segundo.</p>
            `
        },
        {
            id: 'l7', title: 'Lógica SI.CONJUNTO', desc: 'Destruyendo el "SI Anidado" de los 90s', icon: 'fa-sitemap',
            content: `
                <h3>El Problema Antiguo</h3>
                <p>Antes de 2019, si querías evaluar notas escolares (A, B, C, F), la única manera era poner la función SI *adentro de otra función SI*, creando monstruos ilegibles llamados condicionales "anidados": <code>=SI(X=1, "Mal", SI(X=2, "Bien", SI...)))</code></p>
                
                <h3>La Evolución Actual: SI.CONJUNTO</h3>
                <p>M365 y las versiones nuevas traen <code>=SI.CONJUNTO()</code>, que procesa en pareja plana (Condición, Resultado).</p>
                <p><code>=SI.CONJUNTO(A1<60, "F", A1<80, "C", A1<90, "B", A1>=90, "A")</code></p>
                <div class="tutorial-step">Excel leerá de izquierda a derecha de forma secuencial. Entrará al primer criterio que se cumpla, entregará el valor, y descartará leer el resto. ¡Organiza siempre del límite más chico al más grande o viceversa!</div>
            `
        },
        {
            id: 'l8', title: 'Cirugía de Textos', desc: 'IZQUIERDA, DERECHA, EXTRAE (Limpieza)', icon: 'fa-font',
            content: `
                <h3>Cuando el sistema exporta basura</h3>
                <p>A veces un ERP como SAP entrega un código sucio todo junto: <code>PROD-XYZ-2023</code>, donde te urgen extraer las partes.</p>
                <ul>
                    <li><code>=IZQUIERDA(A1, 4)</code>: Comenzará desde la izquierda y cortará cuatro letras. Resultado: "PROD".</li>
                    <li><code>=DERECHA(A1, 4)</code>: Comenzará desde el extremo final al inicio. Resultado: "2023"</li>
                    <li><code>=EXTRAE(A1, 6, 3)</code>: Extracción a lo francotirador. Toma tu celda (A1), brinca hasta el 6to carácter (-), y en adelante toma 3 caracteres totales. Resultado: "XYZ".</li>
                </ul>
                <p>Si unes estas funciones con otras, tienes una navaja suiza de la limpieza corporativa sin usar Macros.</p>
            `
        },
        {
            id: 'l9', title: 'Formato Condicional Térmico', desc: 'Detectando Fugas a Simple Vista', icon: 'fa-palette',
            content: `
                <h3>Mapas de Calor Ejecutivos</h3>
                <p>El cerebro humano procesa colores mucho más rápido que paredes gigantescas de texto. Para crear reportes que los Gerentes adoren e identifiquen tendencias a 1 metro de su monitor, usaremos Formato Condicional visual.</p>
                
                <div class="tutorial-step">
                <strong>¿Cómo lograr el efecto Térmico (Heatmap)?</strong><br>
                1. Selecciona TODA tu tabla de ventas en los puros números (NO en los títulos u horas).<br>
                2. Pestaña <strong>Inicio</strong> -> <strong>Formato Condicional</strong> -> <strong>Escalas de Color</strong>.<br>
                3. Elige el formato Verde/Amarillo/Rojo (Verde mayores).<br>
                4. ¡Magia! Excel evaluó el Promedio de tus datos. Automáticamente pintó tus ventas mas bajas de rojo alarma, y tu mayor venta histórico un brillante verde de forma relativa. Si un valor mañana sube, el color se ajusta en vivo.
                </div>
            `
        }
    ]
};
