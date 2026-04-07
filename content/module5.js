const module5 = {
    id: 'god', title: 'Modo Dios (Developer)', level: 'god', icon: 'fa-solid fa-crown',
    lessons: [
        {
            id: 'l19', title: 'Power Query (La Revolución ETL)', desc: 'Conquista la extracción de Data Masiva', icon: 'fa-bolt',
            content: `
                <h3>El Sustituto Histórico a la Talacha Semanal</h3>
                <p>Power Query es un add-in oficial incluido en Excel. Su función: importar datos sucios, arreglarlos y escupirlos limpios. Cuando te mandan un SAP donde las fechas están al revés (08/01 como enero en vez de agosto), con celdas combinadas y títulos rotos; limpiarlo a mano todas las semanas es el infierno del analista.</p>
                
                <h3>Motor de Pasos Grabados</h3>
                <p>Usa <strong>Datos > Obtener Datos</strong> y carga tu basura. En el editor especial, cada clic que des para limpiar la data se guardará como un "Paso Aplicado". Cambiar formato de columnas, eliminar nulos, separar con comas... Al finalizar, dale a "Cargar y Cerrar".</p>
                <div class="tutorial-step">La Próxima semana: Simplemente vuelcas el archivo nuevo crudo donde mismo y en Excel Das "Click Derecho > Actualizar". Power Query ejecutará todo ese código grabado en 0.5 Segundos y tendrás tu base inmaculada. ¡Adiós manualidad!</div>
            `
        },
        {
            id: 'l20', title: 'Matrices Dinámicas Spill', desc: 'Una fórmula que domina rangos', icon: 'fa-layer-group',
            content: `
                <h3>El Poder M365 (Spill Arrays)</h3>
                <p>Una característica que hace al Excel de hace 5 años parecer obsoleto. Las nuevas funciones son capaces de vomitar sus resultados derramándose a las celdas adyacentes vacías.</p>
                
                <h3>ÚNICOS y ORDENAR</h3>
                <p>En lugar del extenuante menú quitar duplicados, escribe en C1: <code>=ORDENAR(UNICOS(A1:A100))</code>.</p>
                <p>De un plumazo, tu nueva celda sacó la matriz de productos quitó los repetidos copiados y la arrojó a la columna C completamente alfabetizada. Un proceso complejo reducido a una función de 30 caracteres.</p>
            `
        },
        {
            id: 'l21', title: 'Power Pivot y Lenguaje DAX', desc: 'Rompimos la barrera del millón', icon: 'fa-infinity',
            content: `
                <h3>Si 1,048,576 de filas no son suficientes</h3>
                <p>Mucha gente migra a Python porque Excel "estalla" o se traba al cargar casi 1 millón de registros límite o al conectar muchas hojas usando buscarV. Te presento <strong>Power Pivot</strong> y los modelos de datos estrella.</p>
                
                <p>PowerPivot te permite conectar a Excel con bases de 50 millones de filas sin abrirlas físicamente ni forzar a la cuadrícula humana. Al generar "Relaciones" diagramadas conectando la tabla "Ventas" y la tabla "Clientes" con una "Vía Principal de ID", destruimos la imperiosa necesidad computacional del BUSCARV. Aquí es donde se crean las fórmulas usando <strong>Cálculos Funcionales en lenguaje DAX</strong>.</p>
            `
        },
        {
            id: 'l22', title: 'Macros con VBA (Visual Basic)', desc: 'Botones y Automatización Pura', icon: 'fa-robot',
            content: `
                <h3>Grabar la interación Robot</h3>
                <p>La pestaña "Programador > Grabar Macro" literalmente prende una cámara. Cada click tuyo se traducirá internamente a código de "Visual Basic para Aplicaciones" o VBA.</p>
                <div class="tutorial-step">
                <code>Sub Saludar()<br>
                MsgBox "Hola Mundo de Excel"<br>
                Range("A1").Value = "Master Finalizado"<br>
                End Sub</code>
                </div>
                <h3>Lógica Imperativa Hardcore</h3>
                <p>A través del VBE (Alt + F11), editas el código para escribir cosas como los famosos "Ciclos For". <code>For each Celda in Selection... Si Celda.Valor = 0 Luego Borrala End if</code>. Básicamente estás haciendo un script que manipulará la interfaz a velocidades extremas. Bienvenido al Modo Dios.</p>
            `
        }
    ]
};
