const module1 = {
    id: 'basic', title: 'Fundamentos Cero a Héroe', level: 'basic', icon: 'fa-solid fa-seedling',
    lessons: [
        {
            id: 'l1', title: 'Navegación Intensa (Sin Ratón)', desc: 'Domina el atajo más productivo de Excel.', icon: 'fa-plane',
            content: `
                <h3>¿Por qué dejar el ratón?</h3>
                <p>En bases de datos de la vida real corporativa con miles de filas, usar la rueda del ratón para bajar te hace perder cientos de horas de tu vida al año. Usar el teclado es instantáneo.</p>
                
                <h3>Los Saltos Cuánticos</h3>
                <p>El atajo maestro es combinar la tecla <code>Ctrl</code> con las <strong>Flechas de Dirección</strong>.</p>
                <ul>
                    <li><code>Ctrl + Flecha Abajo</code>: Salta directamente a la última celda con datos en esa columna. Si hay un espacio en blanco, se detendrá justo en la frontera.</li>
                    <li><code>Ctrl + Flecha Derecha</code>: Brinca instantáneamente a la última columna con información.</li>
                    <li><code>Ctrl + Inicio (Home)</code>: Te lleva de regreso a la celda A1, sin importar qué tan perdido estés en la fila millón.</li>
                </ul>
                
                <h3>La Selección Inmensa</h3>
                <p>Si quieres seleccionar todos esos datos por los que viajas (para copiarles, pintarles el fondo o borrarles), añade la tecla <code>Shift</code> al combo.</p>
                <div class="tutorial-step">
                    <strong>Ejercicio Práctico Maestro:</strong><br>
                    Imagina una base gigante de empleados.<br>
                    1. Posiciónate en A1.<br>
                    2. Presiona <code>Ctrl + Shift + Flecha Derecha</code> (seleccionará instantáneamente de Nombre hasta Departamento).<br>
                    3. Sin soltar, presiona <code>Flecha Abajo</code>. Acabas de agarrar toda la tabla al instante, listo para hacer magia.
                </div>
            `
        },
        {
            id: 'l2', title: 'Anatomía de las Fórmulas', desc: 'Suma, Resta, Multiplicación y División', icon: 'fa-calculator',
            content: `
                <h3>El Cerebro de Excel</h3>
                <p>Excel no es solo una calculadora, es una máquina de relacionar celdas. Lo primordial: <strong>toda operación o fórmula debe comenzar siempre con el signo =</strong>. Si no lo pones, Excel pensará que solo estás escribiendo texto narrativo.</p>
                
                <h3>Los 4 Operadores Matemáticos Universales</h3>
                <p>Se usan idéntico a las matemáticas del colegio:</p>
                <ul>
                    <li><strong>Suma (+):</strong> <code>=A1 + B1</code></li>
                    <li><strong>Resta (-):</strong> <code>=A1 - B1</code></li>
                    <li><strong>Multiplicación (*):</strong> <code>=A1 * B1</code> (Es el asterisco, no la x)</li>
                    <li><strong>División (/):</strong> <code>=A1 / B1</code> (La diagonal frontal)</li>
                </ul>
                
                <h3>Ley de Jerarquía de Operaciones (PEMDAS)</h3>
                <p>¿Qué pasa si escribes <code>=5+2*3</code>? Excel primero multiplicará 2x3 (6) y luego sumará 5, dando 11. No va de izquierda a derecha. Si querías que primero sumara, <strong>DEBES</strong> usar paréntesis: <code>=(5+2)*3</code> lo cual da 21.</p>
            `
        },
        {
            id: 'l3', title: 'Formatos Mágicos', desc: 'Da formato financiero sin alterar los datos', icon: 'fa-paint-brush',
            content: `
                <h3>La diferencia entre Valor vs Vista</h3>
                <p>Uno de los mayores secretos de Excel es que lo que ves en la celda no siempre es lo que Excel procesa matemáticamente. El <strong>Formato de número</strong> cambia la "ropa" de los datos, pero el número desnudo (valor) se mantiene igual.</p>
                <p>Por ejemplo, si tienes <code>1500</code> y le aplicas formato de moneda, se verá <code>$1,500.00</code> pero Excel en el fondo sigue calculando con un simple <code>1500</code>. ¡Nunca escribas el signo $ o la coma a mano con tu teclado!</p>
                
                <h3>El Panel Supremo de Formato (Ctrl + 1)</h3>
                <p>El atajo más usado por los profesionales es <code>Ctrl + 1</code>. Abre el panel maestro de "Formato de celdas", y ahí puedes:</p>
                <ul>
                    <li><strong>Número:</strong> Decidir cuántos decimales quieres que se muestren.</li>
                    <li><strong>Moneda / Contabilidad:</strong> Alinear mágicamente los signos de dólar y puntos decimales.</li>
                    <li><strong>Fecha:</strong> Transformar un "44890" en "Jueves, 25 de Agosto de 2023" con dos clics. (Las fechas en Excel son solo números contabilizando días).</li>
                </ul>
            `
        },
        {
            id: 'l4', title: 'Fijar Celdas (El error #1)', desc: 'Llamado oficialmente Referencias Absolutas', icon: 'fa-lock',
            content: `
                <h3>La Ley de la Relatividad de Excel</h3>
                <p>Cuando tú haces una fórmula como <code>=A1+B1</code> y usas el pequeño cuadro verde para arrastrar esa fórmula hacia abajo, Excel es "amable" y adapta tu fórmula a <code>=A2+B2</code>, luego <code>=A3+B3</code>. A eso se le llama <strong>Referencia Relativa</strong>, y la mayor parte del tiempo es útil.</p>
                
                <h3>El Desastre que Arruina Modelos Financieros</h3>
                <p>Imagina que B1 es un "Porcentaje de Descuento" especial fijado ($A$1). Quieres multiplicar toda la columna A (salarios) por ESA única celda. Si arrastras, Excel bajará la referencia A a la A2... ¡pero también bajará B1 a B2 (la cual está vacía)! Tu cálculo se habrá roto devolviendo ceros.</p>
                
                <div class="tutorial-step">
                    <strong>La Solución: El seguro de vida F4</strong><br>
                    Cuando estés escribiendo tu fórmula y hagas clic en el "Porcentaje de Impuesto" (B1), presiona una vez la tecla <strong>F4</strong> en tu teclado.<br>
                    Verás que aparece así: <code>$B$1</code>.<br>
                    Ese signo Dólar actúa como un candado, fijando perpetuamente la Columna y la Fila para que NUNCA se muevan de ahí, no importa a dónde arrastres tu fórmula. Haz esto para impuestos, comisiones, o variables globales en Excel.
                </div>
            `
        }
    ]
};
