const module3 = {
    id: 'database', title: 'Limpieza y Cruce de Bases', level: 'advanced', icon: 'fa-solid fa-database',
    lessons: [
        {
            id: 'l10', title: 'El legendario BUSCARV (Vlookup)', desc: 'La prueba de fuego en entrevistas laborales', icon: 'fa-search',
            content: `
                <h3>Conecta dos islas de datos separadas</h3>
                <p>Es la función más famosa y pedida de Excel (Búsqueda Vertical). Te salva la vida cuando tienes en la Hoja 1 un millón de "Claves de Empleado" sin nombres, y en la Hoja 2 el directorio de Recursos Humanos completo.</p>
                
                <h3>Construyendo el Puente</h3>
                <p><code>=BUSCARV(¿Quién?, ¿Dónde buscamos?, ¿Qué columna queremos?, FALSO)</code></p>
                <ul>
                    <li><strong>Valor Buscado:</strong> El identificador único que tienen en común (La Celda A2, un ID de Empleado, código de barras...).</li>
                    <li><strong>Matriz Tabla:</strong> Te vas a la "Hoja 2", y arrastras tu mouse seleccionando DESDE la columna que tiene los IDs, hasta el final de la tabla. ¡Fíjala con F4!</li>
                    <li><strong>Indicador Columnas:</strong> Un número. Dentro de esta matriz que agarraste en la Hoja 2 (supongamos de A hacia el D), si el "Nombre" del Empleado radica en la "B", el número de indicador de columna será un "2". </li>
                    <li><strong>Rango:</strong> SIEMPRE escribe la palabra "FALSO" o el número "0" al final de la fórmula. Esto exige a Excel hacer "Coincidencia Exacta". Si omites el FALSO, Excel traerá a gente incorrecta, lo que causará estragos.</li>
                </ul>
            `
        },
        {
            id: 'l11', title: 'El moderno BUSCARX (Xlookup)', desc: 'Reemplazando años de técnicas y errores', icon: 'fa-bolt',
            content: `
                <h3>La Evolución Definitiva y el Retiro del BUSCARV</h3>
                <p>BUSCARV tenía un terrible defecto: Solo sabía buscar "hacia la derecha". Si en tu matriz madre, el ID del empleado estaba en la derecha y los nombres a la izquierda, BUSCARV entraba en pánico y marcaba #N/D. Te obligaba a alterar bases de datos de la empresa y hacer copia/pega o a usar el asqueroso método <code>INDICE(COINCIDIR)</code>.</p>
                
                <h3>El Poder Sin Cadenas</h3>
                <p><code>=BUSCARX(Valor_buscado, Columna_de_búsqueda, Columna_de_entrega, "Si no está")</code></p>
                <div class="tutorial-step">
                Con BUSCARX (En Excel M365), seleccionas "A1" (El código de barra), luego le pasas la puritita columna de la "Hoja 2" que trae tu ID maestro, y como tercer argumento la puritita columna de la "Hoja 2" que quieres extraer como resultado.<br>
                Al ser independientes, la búsqueda funciona hacia cualquier orientación geográfica.<br>
                Y mejor aún: trae un cuarto argumento incorporado para control de errores ("Not Found") matando la necesidad de encadenarlo con  un SI.ERROR().
                </div>
            `
        },
        {
            id: 'l12', title: 'Quitar Duplicados', desc: 'No ensucies métricas reales fidedignas', icon: 'fa-eraser',
            content: `
                <h3>El Problema de los Reportes</h3>
                <p>Es común que un evento, digamos el Check-in de un proveedor, se marque en tu tabla 10 veces el mismo día por un error informático de servidor. En un Dashboard esto saldrá como +10 ingresos causando un pico en los gráficos falso y una estafa contable.</p>
                
                <h3>El Botón Salvador</h3>
                <p>En el menú superior <strong>Datos > Quitar Duplicados</strong>. El poder real no es sólo darle "Ok". Excel te listará todas tus columnas. Podrás seleccionar los "Drivers" correctos para dictar qué constituye realmente como "Duplicado".</p>
                <p>Por ejemplo, desmarca "Toda la tabla" y deja sólo marcado la columna "ID Transacción" o "DNI de Persona". Automáticamente, Excel extirpará las filas viejas sobrantes dejando solo un registro virgen único de cada ID de inmediato.</p>
            `
        },
        {
            id: 'l13', title: 'Texto en Columnas', desc: 'El milagro de separar variables amarradas', icon: 'fa-scissors',
            content: `
                <h3>Cuando sistemas arcaicos te atacan</h3>
                <p>Sueles descargar exportaciones desde software web viejo que meten en la celda A1: <code>"Nombre, Apellido, Edad, Email"</code>. Todo apiñado. No necesitas mil horas separándolos con la mano ni haciendo magia con Fórmulas de Texto pesadas.</p>
                
                <h3>Destripando la Exportación</h3>
                <p>Selecciona toda esa horrenda columna "A". Navega al menú de <strong>Datos > Texto en columnas</strong>.</p>
                <ul>
                    <li>Elíge el método: <strong>Delimitados</strong>.</li>
                    <li>¿Qué es lo que separa tu contenido? Activa "Coma", y desactiva las demás. Verás una preview debajo donde Excel mágicamente previsualiza particiones hermosas. Dale finalizar y se destruirán las comas inyectando el valor real en columnas contiguas B, C, D limpiamente.</li>
                </ul>
            `
        },
        {
            id: 'l14', title: 'Validación de Datos Básica', desc: 'Controla qué toca el usuario', icon: 'fa-list-check',
            content: `
                <h3>Listas Desplegables Strictas</h3>
                <p>¿Qué pasa al hacer una Tabla Dinámica si durante el mes alguien escribió "EEUU", alguien escribio "usa", alguien "EE.UU." y otro "Estados Unidos"? Tu análisis final tendrá 4 clasificaciones sucias para un solo país asquerosas de ver.</p>
                
                <div class="tutorial-step">
                Evita la estupidez humana desde su origen con Menús Obligatorios:<br>
                1. Selecciona en tu hoja una columna vacía donde se digitará el País.<br>
                2. Click en pestaña <strong>Datos</strong> -> <strong>Validación de datos</strong>.<br>
                3. En configuración, de "Cualquier Valor" cambias a "Lista".<br>
                4. En el espacio tecleas: <code>México, USA, Canadá</code><br>
                5. Dale Aceptar. Al ver tus celdas verás que ahora nacieron pestañas dropdown y bloquearán sonoramente si alguien trata de inventarse y escribir sus propias etiquetas. Excel se blindó a prueba de balas.
                </div>
            `
        }
    ]
};
