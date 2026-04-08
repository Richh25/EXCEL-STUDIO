const courseModules = [
    typeof m0 !== 'undefined' ? m0 : null,
    typeof m1 !== 'undefined' ? m1 : null,
    typeof m2 !== 'undefined' ? m2 : null,
    typeof m3 !== 'undefined' ? m3 : null,
    typeof m4 !== 'undefined' ? m4 : null,
    typeof m5 !== 'undefined' ? m5 : null,
    typeof m6 !== 'undefined' ? m6 : null,
    typeof m7 !== 'undefined' ? m7 : null,
    typeof m8 !== 'undefined' ? m8 : null
].filter(Boolean);

// --- Helpers ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const excelTips = [
    { title: 'Seleccionar toda la tabla', shortcut: 'Ctrl + E', desc: 'Sombreado rápido de todos los datos continuos sin usar el ratón.' },
    { title: 'Autosuma instantánea', shortcut: 'Alt + =', desc: 'Inserta mágicamente la fórmula de suma. (En LatAm usa Alt + Shift + =).' },
    { title: 'Nueva línea en celda', shortcut: 'Alt + Enter', desc: 'Fuerza un salto de línea de texto dentro de una misma celda.' },
    { title: 'Fijar Referencias (Dólar)', shortcut: 'F4', desc: 'Congela celdas ($A$1) para que no se muevan al arrastrar la fórmula.' },
    { title: 'Convertir en Tabla', shortcut: 'Ctrl + T', desc: 'Transforma datos sueltos en una Tabla oficial.' },
    { title: 'Activar Filtros', shortcut: 'Ctrl + Shift + L', desc: 'Enciende o apaga los embudos de filtrado en el encabezado.' },
    { title: 'Pegado Especial', shortcut: 'Ctrl + Alt + V', desc: 'Abre el menú avanzado para pegar solo valores o solo formatos.' },
    { title: 'Formato de Celdas', shortcut: 'Ctrl + 1', desc: 'El menú maestro para bordes, colores y formatos de número.' },
    { title: 'Insertar Fecha Actual', shortcut: 'Ctrl + ;', desc: 'Estampa la fecha de hoy. Se queda estática, no dinámica.' },
    { title: 'Insertar Hora Actual', shortcut: 'Ctrl + Shift + :', desc: 'Anota la hora civil o militar exacta instantáneamente.' },
    { title: 'Ocultar Fila', shortcut: 'Ctrl + 9', desc: 'Haz invisible la fila seleccionada drásticamente sin perder datos.' },
    { title: 'Ocultar Columna', shortcut: 'Ctrl + 0', desc: 'Desaparece la columna actual encogiendo el reporte.' },
    { title: 'Insertar Celdas', shortcut: 'Ctrl + +', desc: 'Añade una fila o columna nueva dependiendo de la selección.' },
    { title: 'Eliminar Celdas', shortcut: 'Ctrl + -', desc: 'Borra y elimina filas enteras o columnas de un tajo.' },
    { title: 'Formato Dinero', shortcut: 'Ctrl + Shift + $', desc: 'Aplica formato de divisa con punto decimal instantáneamente.' },
    { title: 'Formato Porcentaje', shortcut: 'Ctrl + Shift + %', desc: 'Pone el símbolo matemático y escala el valor x100.' },
    { title: 'Seleccionar Fila', shortcut: 'Shift + Espacio', desc: 'Selecciona hasta la última columna de la fila en uso.' },
    { title: 'Seleccionar Columna', shortcut: 'Ctrl + Espacio', desc: 'Sombreado vertical absoluto hasta la fila 1 millón de abajo.' },
    { title: 'Cambiar de Hoja', shortcut: 'Ctrl + Av Pág', desc: 'Navega a velocidad luz entre las pestañas inferiores del libro excel.' },
    { title: 'Gráfico Inmediato', shortcut: 'Alt + F1', desc: 'Dibuja y renderiza un gráfico de barras instantáneo por defecto.' },
    { title: 'Flash Fill (Relleno Rápido)', shortcut: 'Ctrl + Mayús + E', desc: 'Detecta patrones de texto y completa el resto de la columna por ti.' },
    { title: 'Insertar Comentario', shortcut: 'Mayús + F2', desc: 'Añade notas rápidas en celdas para explicar datos complejos.' },
    { title: 'Editar Celda Activa', shortcut: 'F2', desc: 'Entra en modo edición sin soltar el teclado para corregir fórmulas.' },
    { title: 'Ir al Inicio de Hoja', shortcut: 'Ctrl + Inicio', desc: 'Teletranspórtate a la celda A1 sin importar lo grande que sea el archivo.' },
    { title: 'Ir al Final de Datos', shortcut: 'Ctrl + Fin', desc: 'Salta directamente a la última celda con contenido de tu reporte.' },
    { title: 'Seleccionar Celdas Visibles', shortcut: 'Alt + ;', desc: 'Copia solo lo que ves en pantalla ignorando filas ocultas o filtradas.' },
    { title: 'Hipervínculo Rápido', shortcut: 'Ctrl + K', desc: 'Crea enlaces a páginas web o a otras hojas de tu mismo archivo.' },
    { title: 'Guardar Como (Backup)', shortcut: 'F12', desc: 'Abre el menú de guardado para crear una copia de seguridad al instante.' },
    { title: 'Cerrar Libro Actual', shortcut: 'Ctrl + W', desc: 'Cierra el archivo sin cerrar todo el programa Excel.' },
    { title: 'Buscar en todo el Libro', shortcut: 'Ctrl + B', desc: 'Localiza ese dato perdido entre miles de celdas rápidamente.' },
    { title: 'Reemplazar Masivo', shortcut: 'Ctrl + L', desc: 'Busca un error de dedo y corrígelo en todas las celdas a la vez.' },
    { title: 'Minimizar Ventana', shortcut: 'Ctrl + F9', desc: 'Oculta tu Excel rápidamente cuando alguien se acerca a tu pantalla.' },
    { title: 'Nueva Hoja En Blanco', shortcut: 'Mayús + F11', desc: 'Crea una pestaña nueva instantáneamente para empezar cálculos limpios.' },
    { title: 'Autoajustar Columnas', shortcut: 'Alt + O + C + A', desc: 'Ajusta el ancho de todas las celdas al contenido más largo de un tajo.' },
    { title: 'Modo Python en Excel', shortcut: '=PY', desc: 'Escribe código Python directamente en una celda en versiones modernas.' },
    { title: 'Selección de Extremo', shortcut: 'Ctrl + Shift + Flecha', desc: 'Selecciona hasta el final de una columna o fila velozmente.' },
    { title: 'Suma Todo Vertical', shortcut: 'Alt + Mayús + =', desc: 'Similar a Autosuma pero con control total sobre el rango detectado.' },
    { title: 'Editor de Macros', shortcut: 'Alt + F11', desc: 'Abre el motor de Visual Basic para programar automatizaciones avanzadas.' },
    { title: 'Insertar Función', shortcut: 'Mayús + F3', desc: 'Abre el asistente de fórmulas si no recuerdas el orden de los argumentos.' },
    { title: 'Repetir Formato', shortcut: 'F4', desc: 'Aplica el último color o borde que usaste a otra celda sin dar más clics.' }
];


const moduleQuizzes = {
   'm0': [
       { q: '¿Cuál es la regla fundamental para decirle a Excel que ejecute un cálculo en una celda?', options: ['Escribir en MAYÚSCULAS', 'Poner el signo = al principio', 'Hacer doble click', 'Usar la barra invertida /'], answer: 1 },
       { q: 'Si estás en la primera celda superior izquierda, ¿cuál es tu ubicación?', options: ['A1', '1A', 'AA'], answer: 0 },
       { q: '¿Para qué sirve el atajo Ctrl + E?', options: ['Borrar todo', 'Seleccionar el rango actual de datos', 'Exportar a PDF'], answer: 1 },
       { q: '¿Cómo se llaman los cuadritos individuales donde escribimos en Excel?', options: ['Bloques', 'Celdas', 'Píxeles'], answer: 1 },
       { q: 'Para insertar un comentario rápido sin usar el mouse, ¿qué combinación usas?', options: ['Ctrl + Shift + M', 'Alt + F4', 'Ctrl + C'], answer: 0 },
       { q: '¿Qué sucede si haces click derecho en una letra de columna y eliges "Ocultar"?', options: ['Se borran los datos', 'La columna se vuelve invisible pero los datos siguen ahí', 'Se cambia el color a blanco'], answer: 1 }
   ],
   'm1': [
       { q: '¿Por qué es sumamente útil Fijar Referencias ($A$1) con F4?', options: ['Hace que el archivo pese menos', 'Evita que las celdas de origen se desplacen al arrastrar una fórmula hacia abajo', 'Pone la fuente en negrita'], answer: 1 },
       { q: '¿Qué atajo seleccionaría velozmente todo un bloque de datos sin ratón?', options: ['Ctrl + E', 'Shift + Espacio', 'Ctrl + C'], answer: 0 },
       { q: '¿Cuál es la función correcta para encontrar el valor más bajo en un grupo de números?', options: ['=BAJO()', '=MIN()', '=MENOR()'], answer: 1 },
       { q: 'Diferencia entre CONTAR y CONTARA:', options: ['CONTAR suma números, CONTARA suma letras', 'CONTAR solo cuenta números, CONTARA cuenta cualquier celda no vacía'], answer: 1 },
       { q: '¿Cómo aplicas el formato de Moneda ($) rápidamente?', options: ['Ctrl + Shift + $', 'Ctrl + F1', 'Alt + M'], answer: 0 },
       { q: 'Si una celda muestra #######, ¿qué significa?', options: ['Error de fórmula grave', 'La columna es demasiado estrecha para mostrar el número', 'El archivo tiene virus'], answer: 1 }
   ],
   'm2': [
       { q: 'Si tienes =SI(B2>1000, "Bono", "Nada"), y B2 es 500, ¿qué resulta?', options: ['Bono', 'Error', '500', 'Nada'], answer: 3 },
       { q: '¿Para qué sirve el símbolo & (Amperstand) en una fórmula?', options: ['Para sumar números', 'Para unir (concatenar) textos de diferentes celdas', 'Para multiplicar'], answer: 1 },
       { q: '¿Qué función usarías para "limpiar" un error como #DIV/0! y mostrar un mensaje personalizado?', options: ['=SI()', '=SI.ERROR()', '=LIMPIAR()'], answer: 1 },
       { q: 'La función Y(A1=1, B1=2) dará VERDADERO si:', options: ['Cualquiera de las dos se cumple', 'Ambas condiciones se cumplen al mismo tiempo', 'Ninguna se cumple'], answer: 1 },
       { q: '¿Cuál es el atajo para convertir un decimal (0.5) en porcentaje (50%)?', options: ['Ctrl + Shift + %', 'Alt + P', 'Ctrl + 5'], answer: 0 },
       { q: 'En la función SI, ¿qué separa la prueba lógica del valor si es verdadero?', options: ['Un espacio', 'Una coma o punto y coma (depende de la región)', 'Un signo de igual'], answer: 1 }
   ],
   'm3': [
       { q: '¿Qué ventaja corporativa crítica tiene BUSCARX sobre el viejo BUSCARV?', options: ['Busca hacia la izquierda libremente y no necesita el número de columna', 'Usa muchísima menos RAM', 'Es compatible con Excel 97'], answer: 0 },
       { q: 'Las Matrices Dinámicas (Spill arrays):', options: ['Desbordan resultados en las celdas adyacentes automáticamente', 'Requieren forzosamente Ctrl+Shift+Enter', 'Solo funcionan con números'], answer: 0 },
       { q: '¿Cuál es la función para traer solo los valores únicos de una lista con duplicados?', options: ['=SOLO()', '=UNICOS()', '=LIMPIAR.LISTA()'], answer: 1 },
       { q: 'Si quieres sumar ventas solo si el cliente es "Premium", usas:', options: ['=SUMA()', '=SUMAR.SI()', '=BUSCARV()'], answer: 1 },
       { q: '¿Qué hace la función FILTRAR?', options: ['Pone los embudos en los encabezados', 'Extrae dinámicamente un rango que cumple con los criterios que tú definas', 'Borra las filas que no te gustan'], answer: 1 },
       { q: 'Atajo para convertir un número serial (45398) en una Fecha legible:', options: ['Ctrl + Shift + #', 'Alt + F', 'Ctrl + D'], answer: 0 }
   ],
   'm4': [
       { q: '¿Cuál es el propósito real de la "Validación de Datos"?', options: ['Poner contraseña al archivo', 'Evitar que el usuario capture errores restringiendo el ingreso a listas o números fijos'], answer: 1 },
       { q: 'Para pintar en automático de rojo a los clientes morosos usarías:', options: ['Una macro', 'Formato Condicional'], answer: 1 },
       { q: 'Si buscas "*Tech*" en un filtro de Excel, ¿qué encontrará?', options: ['Solo la palabra Tech', 'Cualquier celda que contenga la palabra Tech en cualquier posición', 'Nada, es un error'], answer: 1 },
       { q: '¿Cómo proteges una hoja para que otros no modifiquen tus fórmulas?', options: ['Cerrando el archivo', 'Pestaña Revisar -> Proteger Hoja', 'Poniendo la fuente en blanco'], answer: 1 },
       { q: '¿Qué hace la herramienta "Quitar Duplicados" de la pestaña Datos?', options: ['Oculta las filas repetidas', 'Elimina físicamente los registros duplicados dejando solo uno de cada uno', 'Los pone de color gris'], answer: 1 },
       { q: 'Atajo para Formato Científico:', options: ['Ctrl + Shift + ^', 'Alt + C', 'Ctrl + 1'], answer: 0 }
   ],
   'm5': [
       { q: '¿Qué algoritmo interno usarías para descubrir cuáles ventas necesitas para llegar exactamente a $10,000?', options: ['Buscar Objetivo', 'Tabla Dinámica', 'BuscarX'], answer: 0 },
       { q: 'Solver se diferencia de Buscar Objetivo porque...', options: ['Evalúa múltiples variables y limites simultáneamente', 'Es más rápido', 'Viene de color verde'], answer: 0 },
       { q: '¿Para qué sirven los "Escenarios" en Excel?', options: ['Para poner fotos de fondo', 'Para guardar y comparar diferentes conjuntos de valores (ej: Optimista, Pesimista)'], answer: 1 },
       { q: 'Las Tablas de Datos (de 1 o 2 variables) permiten:', options: ['Hacer gráficos', 'Ver rápidamente múltiples resultados de una fórmula cambiando sus entradas en una cuadrícula'], answer: 1 },
       { q: '¿Dónde se encuentra la herramienta Solver normalmente?', options: ['Pestaña Inicio', 'Pestaña Datos (a veces requiere activarse como Complemento)', 'Pestaña Insertar'], answer: 1 },
       { q: 'Si quieres que Excel maximice tus utilidades respetando tu presupuesto, usas:', options: ['Autosuma', 'Solver', 'Filtros'], answer: 1 }
   ],
   'm6': [
       { q: '¿Qué es conceptualmente un "Slicer" (Segmentación de Datos) en un Dashboard?', options: ['Una fórmula de gráficos', 'Un panel de botones visuales e interactivos para filtrar tablas dinámicas'], answer: 1 },
       { q: 'Al arrastrar un campo Fecha en una Tabla Dinámica moderna, ¿qué sucede?', options: ['Se agrupa automáticamente por años, trimestres y meses', 'Marca error de formato', 'Se borra la fecha'], answer: 0 },
       { q: 'Para actualizar una Tabla Dinámica después de cambiar los datos de origen:', options: ['Debes borrarla y hacerla de nuevo', 'Click derecho -> Actualizar', 'Reiniciar Excel'], answer: 1 },
       { q: '¿Qué es un Campo Calculado?', options: ['Una fórmula que haces fuera de la tabla', 'Una nueva columna lógica creada dentro de la memoria de la Tabla Dinámica'], answer: 1 },
       { q: 'La "Escala de Tiempo" es útil para:', options: ['Medir cuánto tardas en Excel', 'Filtrar períodos de tiempo (meses/años) de forma visual en un Dashboard'], answer: 1 },
       { q: '¿Qué pestaña aparece solo cuando tienes seleccionada una Tabla Dinámica?', options: ['Diseño y Analizar tabla dinámica', 'Programador', 'Ayuda'], answer: 0 }
   ],
   'm7': [
       { q: '¿Qué componente es mundialmente conocido como el "Motor ETL" dentro de Excel?', options: ['Power Pivot', 'Power Query', 'Power BI'], answer: 1 },
       { q: 'El lenguaje de fórmulas subyacente para modelado en Power Pivot (DAX) se parece a:', options: ['Las fórmulas tradicionales de Excel pero mucho más potentes', 'Código Java', 'No tiene fórmulas'], answer: 0 },
       { q: '¿Qué significa ETL?', options: ['Excel Total Logic', 'Extract, Transform and Load (Extraer, Transformar y Cargar)', 'Enter The Logo'], answer: 1 },
       { q: 'Power Query sirve principalmente para:', options: ['Cambiar colores', 'Conectar, limpiar y remodelar datos de diferentes fuentes antes de usarlos', 'Hacer dibujos'], answer: 1 },
       { q: 'En Power Pivot, una "Medida" es:', options: ['El tamaño de la celda', 'Un cálculo dinámico (como una suma o promedio) que se evalúa según el contexto del reporte'], answer: 1 },
       { q: '¿Cuál es el lenguaje de programación que usa Power Query internamente?', options: ['Lenguaje M', 'Lenguaje X', 'VBA'], answer: 0 }
   ],
   'm8': [
       { q: '¿Cómo activas el entorno nativo de cálculo de Python en cualquier celda?', options: ['=PY()', '=PYTHON', '=RUN_PY()'], answer: 0 },
       { q: 'La función LAMBDA introdujo el poder de:', options: ['Sumar números rápidos', 'Inventar funciones personalizadas y lógicas propias sin usar macros', 'Cambiar el idioma'], answer: 1 },
       { q: 'La función LET sirve para:', options: ['Traducir al inglés', 'Asignar nombres a resultados de cálculos intermedios para ganar velocidad y orden', 'Borrar datos'], answer: 1 },
       { q: '¿Qué hace VSTACK?', options: ['Borra columnas', 'Pega (apila) rangos de datos uno debajo del otro verticalmente', 'Hace gráficos de barras'], answer: 1 },
       { q: '¿Cuál es el beneficio de usar Matrices Dinámicas?', options: ['Que se ven más bonitas', 'Que una sola fórmula puede llenar cientos de celdas automáticamente (Spill)', 'Que ocupan menos espacio'], answer: 1 },
       { q: '¿Se necesita saber programar avanzado para usar Python en Excel?', options: ['Sí, es obligatorio ser ingeniero', 'No, puedes usarlo para análisis de datos básico como si fueran funciones potentes', 'Ya no existe'], answer: 1 }
   ]
};

// --- Estado de la Aplicación ---
let currentUser = null;
let activeCell = null; // Variable GLOBAL para tracking de celda activa
let userProgress = []; // Array of completed lesson IDs
let userQuizzes = []; // Array of passed module IDs
let excelCoins = 0;
let skillPoints = {
    logic: 0,
    formulas: 0,
    analysis: 0,
    formatting: 0,
    shortcuts: 0
};
let currentLessonId = null;
let streakDays = 0;
let lastLoginDate = null;
let godModeActive = false;

// Banderas de Quizzes (Estado Modal)
let currentQuizMod = null;
let currentQuizIdx = 0;

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', () => {
    loadState(); // Intenta cargar la sesión activa
    if (currentUser) {
        showApp();
        if(godModeActive) document.body.classList.add('god-mode-active');
        renderUserData();
        renderModules();
        renderTips();
        renderShop();
        updateDashboardStats();
        initSkillRadar();
    } else {
        showLogin();
    }
    setupEventListeners();
});

// --- Funciones Principales ---
function setupEventListeners() {
    // Login form
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        if (username) {
            login(username);
        }
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        if (!item.classList.contains('logout-btn')) {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = item.getAttribute('data-target');
                navigateTo(target);
            });
        }
    });

    // Dashboard Buttons
    document.getElementById('btn-continue').addEventListener('click', () => {
        navigateTo('course-modules');
    });

    // Modal Events
    document.getElementById('close-modal-btn').addEventListener('click', closeLessonModal);
    document.getElementById('btn-complete-lesson').addEventListener('click', (e) => {
        if(currentLessonId) {
            const isFirstTime = !userProgress.includes(currentLessonId);
            if(isFirstTime) {
                fireReward(e);
                addRewardPoints(currentLessonId);
            }
            toggleLessonProgress(currentLessonId);
            loadNextLesson(currentLessonId);
        }
    });

    // Clippy Events
    document.getElementById('clippy-close-btn').addEventListener('click', hideClippy);
    document.getElementById('clippy-hint-btn').addEventListener('click', buyHint);
}

function login(username) {
    currentUser = username;
    loadState(username); // Cargar datos específicos del usuario
    showApp();
    renderUserData();
    renderModules();
    renderTips();
    updateDashboardStats();
    if(godModeActive) document.body.classList.add('god-mode-active');
    else document.body.classList.remove('god-mode-active');
    renderShop();
    showClippy(`¡Bienvenido de nuevo a Aprende BAMX, ${username}! 🍎`);
}

function logout() {
    saveState(); // Guardar antes de salir
    currentUser = null;
    userProgress = [];
    userQuizzes = [];
    excelCoins = 0;
    streakDays = 0;
    lastLoginDate = null;
    godModeActive = false;
    skillPoints = { logic: 0, formulas: 0, analysis: 0, formatting: 0, shortcuts: 0 };
    document.body.classList.remove('god-mode-active');
    
    // Solo removemos la sesión activa, NO la base de datos
    localStorage.removeItem('bamx_active_session'); 
    showLogin();
}

function showLogin() {
    document.getElementById('app-view').classList.remove('active-view');
    document.getElementById('login-view').classList.add('active-view');
    document.getElementById('username').value = '';
}

function showApp() {
    document.getElementById('login-view').classList.remove('active-view');
    document.getElementById('app-view').classList.add('active-view');
}

function navigateTo(sectionId) {
    // Update nav links
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-target="${sectionId}"]`).classList.add('active');

    // Update sections
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active-section'));
    document.getElementById(sectionId).classList.add('active-section');
}

// --- Renderizado y Lógica UI ---
function renderUserData() {
    document.getElementById('display-name').textContent = currentUser;
    document.getElementById('streak-count').textContent = streakDays;
    document.getElementById('coin-count').textContent = excelCoins;
}

function renderModules() {
    const container = document.getElementById('modules-list');
    container.innerHTML = '';

    let isPreviousPassed = true; // El Módulo 0 (primer módulo) siempre está desbloqueado

    courseModules.forEach(mod => {
        const group = document.createElement('div');
        group.className = 'module-group';
        
        let levelClass = `level-${mod.level}`;
        const isUnlocked = isPreviousPassed;
        const isPassed = userQuizzes.includes(mod.id);
        const allLessonsCompleted = mod.lessons.every(lesson => userProgress.includes(lesson.id));
        
        group.innerHTML = `
            <h2>
                <i class="${mod.icon}"></i> ${mod.title} <span class="level-tag ${levelClass}">${mod.level}</span>
                ${!isUnlocked ? '<span style="color:#ef4444; font-size:1rem; margin-left:15px;"><i class="fa-solid fa-lock"></i> Requisito Previo</span>' : ''}
                ${isPassed ? '<span style="color:#10b981; font-size:1rem; margin-left:15px;"><i class="fa-solid fa-check-double"></i> Aprobado</span>' : ''}
            </h2>
            <div class="lessons-grid ${isUnlocked ? '' : 'locked-grid'}">
                ${mod.lessons.map(lesson => renderLessonCard(lesson)).join('')}
                ${isUnlocked ? renderQuizCard(mod.id, isPassed, allLessonsCompleted) : ''}
            </div>
        `;
        container.appendChild(group);
        isPreviousPassed = isPassed; // Siguiente módulo depende de este exam
    });

    // Attach events to standard lessons
    document.querySelectorAll('.lesson-card:not(.quiz-card)').forEach(card => {
        card.addEventListener('click', (e) => {
            const lessonId = card.getAttribute('data-id');
            openLessonModal(lessonId);
        });
    });
    
    // Attach events to Quizzes
    document.querySelectorAll('.quiz-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if(card.classList.contains('quiz-locked')) {
                alert("Rango Insuficiente. Debes repasar y completar TODAS las lecciones de la unidad superior antes de tomar la prueba de fuego.");
                return;
            }
            const modId = card.getAttribute('data-quiz-id');
            openQuizModal(modId);
        });
    });
}

function renderQuizCard(modId, isPassed, allLessonsCompleted) {
    const completedClass = isPassed ? 'completed' : '';
    const lockedClass = (!isPassed && !allLessonsCompleted) ? 'quiz-locked' : '';
    const btnText = isPassed ? 'Score: 100%' : (allLessonsCompleted ? 'Tomar Examen' : 'Rango Insuficiente');
    
    let borderCol = isPassed ? '#10b981' : (allLessonsCompleted ? '#f59e0b' : '#334155');
    let iconCol = isPassed ? '#10b981' : (allLessonsCompleted ? '#f59e0b' : '#334155');
    let opacityStyle = lockedClass ? 'opacity: 0.6; cursor: not-allowed; filter: grayscale(0.8);' : 'cursor: pointer;';
    
    return `
        <div class="lesson-card quiz-card ${completedClass} ${lockedClass}" data-quiz-id="${modId}" style="border-width: 2px; border-color: ${borderCol}; ${opacityStyle}">
            ${isPassed ? '<i class="fa-solid fa-circle-check" style="position:absolute; top:1rem; right:1rem; color:var(--primary); font-size:1.2rem;"></i>' : ''}
            <div class="lesson-icon"><i class="fa-solid fa-brain" style="color: ${iconCol};"></i></div>
            <h3 style="color:${lockedClass ? '#94a3b8' : '#fff'}">Examen Final del Módulo</h3>
            <p style="color:#f8fafc;">${allLessonsCompleted ? 'Demuestra lo aprendido para desbloquear el siguiente nivel.' : 'Aún no posees el nivel. Estudia y marca todas las lecciones de arriba primero para desbloquear tu examen.'}</p>
            <button class="btn-secondary quiz-btn" style="border-color:${borderCol}; color:${borderCol}; pointer-events:none;">${btnText}</button>
        </div>
    `;
}

function renderLessonCard(lesson) {
    const isCompleted = userProgress.includes(lesson.id);
    const completedClass = isCompleted ? 'completed' : '';
    const checkIcon = isCompleted ? '<i class="fa-solid fa-circle-check" style="position:absolute; top:1rem; right:1rem; color:var(--primary); font-size:1.2rem;"></i>' : '';
    
    return `
        <div class="lesson-card ${completedClass}" data-id="${lesson.id}">
            ${checkIcon}
            <div class="lesson-icon"><i class="fa-solid ${lesson.icon}"></i></div>
            <h3>${lesson.title}</h3>
            <p>${lesson.desc}</p>
            <button class="btn-secondary lesson-btn">${isCompleted ? 'Repasar' : 'Aprender'}</button>
        </div>
    `;
}

function renderTips() {
    const container = document.getElementById('tips-feed');
    container.innerHTML = '';

    excelTips.forEach(tip => {
        container.innerHTML += `
            <div class="tiktok-card">
                <div class="tiktok-card-content">
                    <h2>${tip.title}</h2>
                    <p class="tt-desc">${tip.desc}</p>
                    <div class="tt-shortcut">${tip.shortcut}</div>
                </div>
            </div>
        `;
    });

    // Feed Navigation Logic
    const feed = document.getElementById('tips-feed');
    const btnUp = document.getElementById('tiktok-up');
    const btnDown = document.getElementById('tiktok-down');
    
    if(btnUp && btnDown) {
        btnUp.onclick = () => { feed.scrollBy(0, -feed.clientHeight); };
        btnDown.onclick = () => { feed.scrollBy(0, feed.clientHeight); };
    }
}

function toggleLessonProgress(lessonId) {
    if (userProgress.includes(lessonId)) {
        return; // Already completed
    } else {
        userProgress.push(lessonId);
    }
    
    saveState();
    renderModules(); // Re-render to update UI
    updateDashboardStats();
}

// --- Lógica del Modal ---
function renderMiniExcel(initialData = {}) {
    let html = `<div class="mini-excel-container">
        <div class="mini-excel-toolbar">
            <span class="formula-fx">fx</span>
            <button id="btn-autosum-ui" title="Autosuma (Alt + =)" style="background: #f59e0b; color: white; border: none; border-radius: 4px; padding: 2px 8px; font-weight: bold; cursor: pointer; margin: 0 5px; font-size: 1.1rem; display: flex; align-items: center; justify-content: center;">Σ</button>
            <input type="text" id="mini-excel-formula" placeholder="Ingresa datos o una fórmula..." />
        </div>
        <table class="mini-excel-table">
            <tr><th class="mini-excel-row-header"></th><th>A</th><th>B</th><th>C</th><th>D</th></tr>`;
            
    for(let r = 1; r <= 5; r++) {
        html += `<tr><th class="mini-excel-row-header">${r}</th>`;
        for(let c = 1; c <= 4; c++) {
            const colLetter = String.fromCharCode(64 + c);
            const cellId = `${colLetter}${r}`;
            const cellVal = initialData[cellId] !== undefined ? initialData[cellId] : '';
            html += `<td><input type="text" class="mini-cell" data-id="${cellId}" id="cell-${cellId}" value="${cellVal}" data-formula="${cellVal}" /></td>`;
        }
        html += `</tr>`;
    }
    
    html += `</table></div>`;
    return html;
}

function attachMiniExcelLogic() {
    const cells = document.querySelectorAll('.mini-cell');
    const formulaBar = document.getElementById('mini-excel-formula');
    
    // Vincular Botón Sigma físico
    const btnSigma = document.getElementById('btn-autosum-ui');
    if (btnSigma) {
        btnSigma.onclick = (e) => {
            e.preventDefault();
            if (activeCell) {
                applyAutosumLogic(activeCell);
                activeCell.focus();
            } else {
                showClippy("Primero selecciona una celda para sumar.", 2000);
            }
        };
    }
    
    formulaBar.addEventListener('input', (e) => {
        if(activeCell) {
            activeCell.value = e.target.value;
            activeCell.setAttribute('data-formula', e.target.value);
            evaluateCell(activeCell); 
        }
    });

    formulaBar.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' && activeCell) {
            evaluateCell(activeCell);
            activeCell.focus();
        }
    });

    // --- ESCUCHA GLOBAL DE ATAJOS (Centralizada) ---
    // Esto asegura que funcionen incluso si el foco baila entre elementos
    window.onkeydown = (e) => {
        if (!activeCell) return;
        
        // 1. Autosuma (Alt + =)
        if (isAutosumKeyEvent(e)) {
            e.preventDefault();
            e.stopPropagation();
            applyAutosumLogic(activeCell);
            return;
        }

        // 2. Referencia Absoluta (F4)
        if (e.key === 'F4') {
            e.preventDefault();
            applyF4Logic(activeCell);
            return;
        }

        // 3. Formatos (Ctrl + Shift + $ / %)
        if (e.ctrlKey && e.shiftKey) {
            if (e.key === '$' || e.keyCode === 52) { 
                e.preventDefault(); 
                applyFormatLogic(activeCell, '$'); 
                return; 
            }
            if (e.key === '%' || e.keyCode === 53) { 
                e.preventDefault(); 
                applyFormatLogic(activeCell, '%'); 
                return; 
            }
        }

        // 4. Eliminar Celda (Ctrl + -)
        if (e.ctrlKey && (e.key === '-' || e.keyCode === 189 || e.keyCode === 109)) {
            e.preventDefault();
            activeCell.value = '';
            activeCell.setAttribute('data-formula', '');
            evaluateCell(activeCell);
            
            // Animación de pulso de borrado
            activeCell.style.transition = 'all 0.3s';
            activeCell.style.background = 'rgba(239, 68, 68, 0.4)';
            setTimeout(() => { 
                activeCell.style.background = '#fff';
            }, 300);
            
            showClippy("Celda eliminada (Ctrl + -). ¡Limpieza impecable! 🧹", 2000);
            return;
        }
    };
    
    formulaBar.addEventListener('blur', () => {
        if(activeCell) evaluateCell(activeCell);
    });

    cells.forEach(cell => {
        cell.addEventListener('mousedown', (e) => {
            const fBar = document.getElementById('mini-excel-formula');
            // Si el foco está en la barra de fórmulas y se empieza con =, permitimos selección
            if (document.activeElement === fBar && fBar.value.startsWith('=')) {
                e.preventDefault(); // IMPORTANTE: Evita que la celda robe el foco
                const cellId = e.target.getAttribute('data-id');
                fBar.value += cellId;
                if (activeCell) {
                    activeCell.value = fBar.value;
                    activeCell.setAttribute('data-formula', fBar.value);
                    evaluateCell(activeCell);
                }
                fBar.focus(); // Asegurar que el cursos siga en la barra
            }
        });

        cell.addEventListener('focus', (e) => {
            activeCell = e.target;
            cells.forEach(c => c.classList.remove('active-cell'));
            e.target.classList.add('active-cell');
            formulaBar.value = e.target.getAttribute('data-formula') || e.target.value;
        });
        
        cell.addEventListener('input', (e) => {
            formulaBar.value = e.target.value;
            e.target.setAttribute('data-formula', e.target.value);
        });

        // --- Navegación tipo Excel (Enter / Tab / Flechas / Atajos) ---
        cell.addEventListener('keydown', (e) => {
            const fBar = document.getElementById('mini-excel-formula');
            const currentId = e.target.getAttribute('data-id'); // Ej. "A1"
            const col = currentId.charAt(0);
            const row = parseInt(currentId.substring(1));
            
            let nextCellId = null;

            // Los atajos ahora se manejan en el listener GLOBAL `window.onkeydown`
            // para mayor fiabilidad y consistencia.
            
            if (e.key === 'Enter') {
                e.preventDefault(); 
                evaluateCell(e.target);
                nextCellId = `${col}${row + 1}`;
            } 
            else if (e.key === 'Tab') {
                e.preventDefault();
                evaluateCell(e.target);
                const nextCol = String.fromCharCode(col.charCodeAt(0) + 1);
                nextCellId = `${nextCol}${row}`;
            }
            else if (e.key === 'ArrowDown') {
                nextCellId = `${col}${row + 1}`;
            }
            else if (e.key === 'ArrowUp') {
                nextCellId = `${col}${row - 1}`;
            }
            else if (e.key === 'ArrowRight') {
                const nextCol = String.fromCharCode(col.charCodeAt(0) + 1);
                nextCellId = `${nextCol}${row}`;
            }
            else if (e.key === 'ArrowLeft') {
                const prevCol = String.fromCharCode(col.charCodeAt(0) - 1);
                nextCellId = `${prevCol}${row}`;
            }

            if (nextCellId) {
                const nextCell = document.querySelector(`.mini-cell[data-id="${nextCellId}"]`);
                if (nextCell) {
                    if (e.key.startsWith('Arrow')) e.preventDefault(); // Evitar scroll de página
                    nextCell.focus();
                }
            }
        });


        cell.addEventListener('blur', (e) => {
            evaluateCell(e.target);
        });
    });
}

// --- Soporte de Atajos (Refactorizado para ser Universal) ---

function isAutosumKeyEvent(e) {
    // Detecta Alt + = (Universal: LatAm, US, Mac, Win)
    // 187: =, 61: =, 107: +, 48: 0 (con Shift para =)
    const isEquals = e.key === '=' || e.keyCode === 187 || e.keyCode === 61 || e.keyCode === 107 || (e.shiftKey && (e.key === '0' || e.keyCode === 48));
    return e.altKey && isEquals;
}

function applyAutosumLogic(cell) {
    if(!cell) return;
    const fBar = document.getElementById('mini-excel-formula');
    const currentId = cell.getAttribute('data-id');
    const col = currentId.charAt(0), row = parseInt(currentId.substring(1));

    // Función auxiliar para "Limpiar" valores financieros (ej: $100.00 -> 100.00)
    const cleanNum = (str) => {
        if(!str) return '';
        const cleaned = str.toString().replace(/[^\d.-]/g, '');
        return isNaN(cleaned) || cleaned === '' ? NaN : parseFloat(cleaned);
    };

    // Buscar números arriba
    let startRow = row - 1;
    while (startRow > 0) {
        const val = document.getElementById(`cell-${col}${startRow}`).value.trim();
        if (val === '' || isNaN(cleanNum(val))) break;
        startRow--;
    }
    startRow++;
    
    if (startRow < row) {
        const formula = `=SUMA(${col}${startRow}:${col}${row-1})`;
        cell.value = formula;
        cell.setAttribute('data-formula', formula);
        fBar.value = formula;
        evaluateCell(cell);
        
        // Efecto visual de aplicación
        cell.style.transition = 'all 0.2s';
        cell.style.boxShadow = '0 0 15px #f59e0b';
        setTimeout(() => { cell.style.boxShadow = 'none'; }, 500);
        
        showClippy("¡Atajo Maestro! Autosuma aplicada verticalmente. ✨", 3000);
        return;
    }

    // Buscar números a la izquierda
    let startColCode = col.charCodeAt(0) - 1;
    while (startColCode >= 65) {
        const val = document.getElementById(`cell-${String.fromCharCode(startColCode)}${row}`).value.trim();
        if (val === '' || isNaN(cleanNum(val))) break;
        startColCode--;
    }
    startColCode++;
    
    if (String.fromCharCode(startColCode) < col) {
        const formula = `=SUMA(${String.fromCharCode(startColCode)}${row}:${String.fromCharCode(col.charCodeAt(0)-1)}${row})`;
        cell.value = formula;
        cell.setAttribute('data-formula', formula);
        fBar.value = formula;
        evaluateCell(cell);

        // Efecto visual de aplicación
        cell.style.transition = 'all 0.2s';
        cell.style.boxShadow = '0 0 15px #f59e0b';
        setTimeout(() => { cell.style.boxShadow = 'none'; }, 500);
        
        showClippy("¡Atajo Maestro! Autosuma aplicada horizontalmente. ✨", 3000);
    }
}

function applyF4Logic(cell) {
    const fBar = document.getElementById('mini-excel-formula');
    let fVal = fBar.value;
    if (!fVal.startsWith('=')) return;
    
    const match = fVal.match(/(\$?[A-D]\$?[1-5])(?!.*\$?[A-D]\$?[1-5])/);
    if (match) {
        const oldRef = match[0], cleanRef = oldRef.replace(/\$/g, '');
        const c = cleanRef.charAt(0), r = cleanRef.substring(1);
        let newRef = '';
        if (!oldRef.includes('$')) newRef = `$${c}$${r}`;
        else if (oldRef.startsWith('$') && oldRef.includes('$', 2)) newRef = `${c}$${r}`;
        else if (!oldRef.startsWith('$') && oldRef.includes('$')) newRef = `$${c}${r}`;
        else newRef = cleanRef;
        
        fBar.value = fVal.replace(oldRef, newRef);
        cell.value = fBar.value;
        cell.setAttribute('data-formula', fBar.value);
        evaluateCell(cell);
    }
}

function applyFormatLogic(cell, type) {
    let v = parseFloat(cell.value) || 0;
    if (type === '$') {
        cell.value = `$${v.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
    } else if (type === '%') {
        if (v < 10) v = v * 100;
        cell.value = `${v}%`;
    }
    evaluateCell(cell);
    showClippy(type === '$' ? "Formato Moneda aplicado. 💰" : "Formato Porcentaje aplicado. 📈", 2000);
}


function getRangeValues(rangeStr) {
    // Limpiar $ para procesamiento de rango
    rangeStr = rangeStr.replace(/\$/g, '');
    if(!rangeStr.includes(':')) {
        const refInput = document.getElementById('cell-' + rangeStr.toUpperCase());
        return [parseFloat(refInput ? refInput.value : 0) || 0];
    }
    const [start, end] = rangeStr.split(':');
    const startCol = start.charAt(0).toUpperCase();
    const startRow = parseInt(start.substring(1));
    const endCol = end.charAt(0).toUpperCase();
    const endRow = parseInt(end.substring(1));
    
    let values = [];
    for (let r = Math.min(startRow, endRow); r <= Math.max(startRow, endRow); r++) {
        for (let c = startCol.charCodeAt(0); c <= endCol.charCodeAt(0); c++) {
            const cellId = String.fromCharCode(c) + r;
            const refInput = document.getElementById('cell-' + cellId);
            if (!refInput) {
                values.push(0);
                continue;
            }
            
            let rawVal = refInput.value.trim();
            
            // Detección numérica avanzada (ignora símbolos pero valida si es número)
            let cleanStr = rawVal.replace(/[^\d.-]/g, '');
            let num = parseFloat(cleanStr);
            
            if (!isNaN(num) && cleanStr !== "" && !rawVal.match(/[a-zA-Z]/)) {
                // Es un número real (no tiene letras mezcladas)
                values.push(num);
            } else {
                // Es texto o vacío
                values.push(rawVal);
            }
        }
    }
    return values;
}

function evaluateCell(cell) {
    let val = cell.getAttribute('data-formula') || cell.value;
    val = val.trim();
    cell.setAttribute('data-formula', val); 
    
    if (val.startsWith('=')) {
        try {
            let formula = val.substring(1).toUpperCase();
            
            // 1. Funciones de Rango y Condicionales (SUMA, SUMAR.SI, etc.)
            formula = formula.replace(/(SUMAR\.SI|CONTAR\.SI|SUMA|PROMEDIO|MAX|MIN|CONTARA|CONTAR|REDONDEAR)\((.+)\)/g, (match, func, args) => {
                const argParts = args.split(',').map(a => a.trim());
                if (func === 'REDONDEAR') {
                    const v = parseFloat(argParts[0].replace(/([\$]?[A-D][\$]?[1-5])/g, m => document.getElementById('cell-'+m.replace(/\$/g,'')).value));
                    const d = parseInt(argParts[1]) || 0;
                    return Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
                }
                if (func === 'SUMAR.SI' || func === 'CONTAR.SI') {
                    const range = argParts[0];
                    const cond = argParts[1].replace(/"/g, '');
                    const vals = getRangeValues(range);
                    const process = (v) => {
                        /* eslint-disable no-eval */
                        if (cond.startsWith('>') || cond.startsWith('<') || cond.startsWith('=')) return eval(`${v}${cond}`);
                        return v.toString() === cond;
                    };
                    if (func === 'SUMAR.SI') return vals.reduce((acc, v) => process(v) ? acc + v : acc, 0);
                    return vals.filter(process).length;
                }
                const vals = getRangeValues(argParts[0]);
                // --- Filtro Numérico Universal para funciones matemáticas ---
                const numVals = vals.filter(v => typeof v === 'number' && !isNaN(v));

                if (func === 'SUMA') return numVals.reduce((a, b) => a + b, 0);
                if (func === 'PROMEDIO') return numVals.length ? (numVals.reduce((a, b) => a + b, 0) / numVals.length) : 0;
                if (func === 'MAX') return numVals.length ? Math.max(...numVals) : 0;
                if (func === 'MIN') return numVals.length ? Math.min(...numVals) : 0;
                // --- Soporte Especial para Conteo ---
                if (func === 'CONTAR') return numVals.length;
                if (func === 'CONTARA') return vals.filter(v => v !== "" && v !== null).length;
                return 0;
            });

            // 2. Funciones de Búsqueda
            formula = formula.replace(/(BUSCARV|BUSCARX)\((.+)\)/g, (match, func, args) => {
                const argParts = args.split(',').map(a => a.trim());
                const searchVal = argParts[0].replace(/"/g, '').replace(/([\$]?[A-D][\$]?[1-5])/g, m => document.getElementById('cell-'+m.replace(/\$/g,'')).value);
                if (func === 'BUSCARV') {
                    const range = argParts[1], colIdx = parseInt(argParts[2]) - 1;
                    const [start, end] = range.split(':'), sCol = start.charAt(0);
                    const sRow = parseInt(start.substring(1)), eRow = parseInt(end.substring(1));
                    for (let r = sRow; r <= eRow; r++) {
                        if (document.getElementById(`cell-${sCol}${r}`).value.toString() === searchVal.toString()) {
                            return document.getElementById(`cell-${String.fromCharCode(sCol.charCodeAt(0) + colIdx)}${r}`).value;
                        }
                    }
                    return '#N/A';
                }
                if (func === 'BUSCARX') {
                    const idx = getRangeValues(argParts[1]).findIndex(v => v.toString() === searchVal.toString());
                    return idx !== -1 ? getRangeValues(argParts[2])[idx] : '#N/A';
                }
                return '#ERROR!';
            });

            // 3. Mats Dinámicas (Simplificado)
            formula = formula.replace(/(UNICOS|FILTRAR)\((.+)\)/g, (match, func, args) => {
                const argParts = args.split(',').map(a => a.trim());
                if (func === 'UNICOS') return [...new Set(getRangeValues(argParts[0]))][0] || '';
                if (func === 'FILTRAR') return getRangeValues(argParts[0])[0] || '';
                return '#ERROR!';
            });

            // 4. Funciones de Apoyo (INDICE, COINCIDIRX)
            formula = formula.replace(/(INDICE|COINCIDIRX)\((.+)\)/g, (match, func, args) => {
                const argParts = args.split(',').map(a => a.trim());
                const range = argParts[0];
                const vals = getRangeValues(range);
                if (func === 'INDICE') {
                    const idx = parseInt(argParts[1]) - 1;
                    return vals[idx] || '#OFFSET!';
                }
                if (func === 'COINCIDIRX') {
                    const searchVal = argParts[0].replace(/"/g, '').replace(/([A-D][1-5])/g, m => document.getElementById('cell-'+m).value);
                    const idx = vals.findIndex(v => v.toString() === searchVal.toString());
                    return idx !== -1 ? idx + 1 : '#N/A';
                }
                return '#ERROR!';
            });

            // 5. Funciones Lógicas (Y, O, NO, SI.ERROR)
            formula = formula.replace(/(SI\.ERROR|Y|O|NO)\((.+)\)/g, (match, func, args) => {
                const argParts = args.split(',').map(a => a.trim());
                const resolveCondition = (c) => {
                    let eCond = c.replace(/([\$]?[A-D][\$]?[1-5])/g, m => {
                        let v = document.getElementById('cell-' + m.replace(/\$/g,'')).value;
                        if(v === 'VERDADERO') return 'true';
                        if(v === 'FALSO') return 'false';
                        return isNaN(v) ? `"${v}"` : v;
                    });
                    /* eslint-disable no-eval */
                    try { return eval(eCond); } catch(e) { return false; }
                };

                if (func === 'Y') return argParts.every(resolveCondition) ? 'VERDADERO' : 'FALSO';
                if (func === 'O') return argParts.some(resolveCondition) ? 'VERDADERO' : 'FALSO';
                if (func === 'NO') return !resolveCondition(argParts[0]) ? 'VERDADERO' : 'FALSO';
                if (func === 'SI.ERROR') {
                    try {
                        let res = argParts[0].replace(/([\$]?[A-D][\$]?[1-5])/g, m => document.getElementById('cell-'+m.replace(/\$/g,'')).value);
                        return eval(res);
                    } catch(e) { return argParts[1].replace(/"/g, ''); }
                }
                return '#ERROR!';
            });

            // 6. SI y Concatenación
            formula = formula.replace(/SI\((.+),(.+),(.+)\)/g, (match, cond, v1, v2) => {
                let eCond = cond.replace(/([\$]?[A-D][\$]?[1-5])/g, m => {
                    let v = document.getElementById('cell-' + m.replace(/\$/g,'')).value;
                    if(v === 'VERDADERO') return 'true';
                    if(v === 'FALSO') return 'false';
                    return isNaN(v) ? `"${v}"` : v;
                });
                /* eslint-disable no-eval */
                try {
                   return eval(eCond) ? v1.trim().replace(/"/g, '') : v2.trim().replace(/"/g, '');
                } catch(e) { return '#ERROR!'; }
            });

            if (formula.includes('&')) {
                cell.value = formula.split('&').map(p => {
                    p = p.trim();
                    if (p.startsWith('"') && p.endsWith('"')) return p.replace(/"/g, '');
                    return /^[\$]?[A-D][\$]?[1-5]$/.test(p) ? document.getElementById('cell-' + p.replace(/\$/g,'')).value : p;
                }).join('');
                return finalizeValidation(cell);
            }

            // 7. Aritmética y Porcentajes con soporte de $
            let calc = formula.replace(/([\$]?[A-D][\$]?[1-5])/g, m => {
                let v = document.getElementById('cell-' + m.replace(/\$/g,'')).value;
                return isNaN(v) || v === '' ? 0 : parseFloat(v);
            }).replace(/([0-9.]+)%/g, '($1/100)');
            
            if (/^[0-9+\-*/().\s|/100]+$/.test(calc)) {
                /* eslint-disable no-eval */
                cell.value = eval(calc);
            } else {
                cell.value = calc;
            }
        } catch (err) {
            cell.value = '#ERROR!';
        }
    }
    finalizeValidation(cell);
}

function finalizeValidation(cell) {
    // --- Validación de Reto ---
    if (window.activeChallenge) {
        const targetCellId = window.activeChallenge.cell;
        const targetVal = window.activeChallenge.value;
        const requireFormula = window.activeChallenge.requireFormula || false;
        
        const currentCell = document.querySelector(`.mini-cell[data-id="${targetCellId}"]`);
        
        if (currentCell) {
            const currentVal = currentCell.value;
            const currentFormula = currentCell.getAttribute('data-formula') || "";
            
            // 1. Verificar si el valor es correcto
            const isValueCorrect = currentVal.toString().toUpperCase() === targetVal.toString().toUpperCase();
            
            // 2. Verificar si se requiere fórmula y si se usó
            const isFormulaUsed = currentFormula.startsWith('=');
            
            if (isValueCorrect) {
                if (requireFormula && !isFormulaUsed) {
                    // El valor es correcto pero no usó fórmula
                    const btnComplete = document.getElementById('btn-complete-lesson');
                    if (btnComplete) {
                        btnComplete.disabled = true;
                        btnComplete.style.opacity = '0.7';
                        btnComplete.style.background = '#f59e0b';
                        btnComplete.style.cursor = 'not-allowed';
                        btnComplete.innerHTML = '<span>¡Usa una Fórmula (=)! </span> <i class="fa-solid fa-triangle-exclamation" style="margin-left:5px;"></i>';
                    }
                    currentCell.style.borderColor = '#f59e0b';
                    showClippy("¡Casi! Recuerda que para este reto Excel exige el uso de una fórmula que empiece con =.");
                } else {
                    // Todo perfecto
                    const btnComplete = document.getElementById('btn-complete-lesson');
                    if (btnComplete) {
                        btnComplete.disabled = false;
                        btnComplete.style.opacity = '1';
                        btnComplete.style.cursor = 'pointer';
                        btnComplete.style.background = '#10b981';
                        btnComplete.innerHTML = '<span>¡Excelente! Siguiente </span> <i class="fa-solid fa-forward-step" style="margin-left:5px;"></i>';
                    }
                    currentCell.style.borderColor = '#10b981';
                    currentCell.style.background = 'rgba(16, 185, 129, 0.1)';
                    hideClippy();
                }
            } else {
                // El valor es incorrecto
                const btnComplete = document.getElementById('btn-complete-lesson');
                if (btnComplete) {
                    btnComplete.disabled = true;
                    btnComplete.style.opacity = '0.5';
                    btnComplete.innerHTML = '<span>Resuelve el Reto </span> <i class="fa-solid fa-lock" style="margin-left:5px;"></i>';
                }
                // Si el usuario escribió algo y falló, Clippy puede dar una pista genérica después de 2 segundos
                if (currentVal !== "") {
                    setTimeout(() => {
                        if (!window.btnCompleteEnabled) showClippy("¿Te bloqueaste? Recuerda que puedes comprar una pista en la burbuja de abajo.");
                    }, 3000);
                }
            }
        }
    }
}


// --- Activating Button in Modal ---
function openLessonModal(lessonId) {
    const btnComplete = document.getElementById('btn-complete-lesson');
    btnComplete.style.display = 'flex';
    btnComplete.disabled = true; // Empieza bloqueado
    btnComplete.style.opacity = '0.5';
    btnComplete.style.cursor = 'not-allowed';
    btnComplete.innerHTML = '<span>Resuelve el Reto </span> <i class="fa-solid fa-lock" style="margin-left:5px;"></i>';

    currentLessonId = lessonId;
    
    // Find lesson
    let selectedLesson = null;
    let selectedModule = null;
    
    courseModules.forEach(mod => {
        mod.lessons.forEach(l => {
            if (l.id === lessonId) {
                selectedLesson = l;
                selectedModule = mod;
            }
        });
    });
    
    if(!selectedLesson) return;

    // Guardar el reto actual en la lección para validación
    window.activeChallenge = selectedLesson.challenge || null;

    // Populate Modal
    document.getElementById('modal-title').textContent = selectedLesson.title;
    document.getElementById('modal-level').textContent = selectedModule.title;
    document.getElementById('modal-level').className = 'level-tag level-' + selectedModule.level;
    document.getElementById('modal-icon-elem').className = 'fa-solid ' + selectedLesson.icon;
    
    // Contenido base
    const baseContent = selectedLesson.content || '<p>' + selectedLesson.desc + '</p>';
    
    // MockData dinámico desde la lección (o el default si no hay -> Vacío para evitar residuos)
    const mockData = selectedLesson.mockData || {};
    
    // Solo mostrar el simulador si hay un reto (challenge)
    const simulatorHtml = (selectedLesson.challenge) ? `
        <div class="playground-section">
            <h3><i class="fa-solid fa-laptop-code"></i> Práctica Interactiva en Vivo</h3>
            <p style="font-size:0.95rem; color:#94a3b8; margin-bottom:1rem;">Ocupa la barra de fórmula superior para editar la función, o las celdas directamente.</p>
            ${renderMiniExcel(mockData)}
        </div>
    ` : `
        <div class="theory-done-section" style="margin-top: 2rem; padding: 2rem; background: rgba(59, 130, 246, 0.1); border-radius: 12px; border: 1px dashed #3b82f6; text-align: center;">
            <i class="fa-solid fa-circle-check" style="font-size: 3rem; color: #3b82f6; margin-bottom: 1rem; display: block;"></i>
            <p>Has completado la lectura teórica. ¡Bien hecho!</p>
        </div>
    `;
    
    // Desbloquear botón si no hay simulador
    if (!selectedLesson.challenge) {
        btnComplete.disabled = false;
        btnComplete.style.opacity = '1';
        btnComplete.style.cursor = 'pointer';
        btnComplete.style.background = '#10b981';
        btnComplete.innerHTML = '<span>Entendido. Siguiente </span> <i class="fa-solid fa-forward-step" style="margin-left:5px;"></i>';
    }

    const modalBody = document.getElementById('modal-body-content');
    modalBody.innerHTML = baseContent + simulatorHtml;
    modalBody.style.opacity = '1';
    modalBody.style.display = 'block';

    // Asegurar que la barra de fórmulas esté limpia al inicio
    const formulaBar = document.getElementById('mini-excel-formula');
    if(formulaBar) formulaBar.value = '';

    // Activar Time Attack si es Nivel Dios (Módulo 8)
    if (selectedModule.id === 'm8') {
        startSpeedChallenge(30);
        showClippy("¡MODO DIOS ACTIVADO! Tienes 30 segundos para resolver este reto técnico.", 5000);
    } else {
        stopSpeedChallenge();
    }

    // Show modal
    const modal = document.getElementById('lesson-modal');
    modal.classList.add('active');
    
    // Asegurar que el scroll empiece arriba para ver las instrucciones
    modalBody.scrollTop = 0;
    
    // Auto-scroll al inicio del modal para ver las instrucciones (Desplazamiento Suave)
    if (modalBody) {
        modalBody.scrollTo({ top: 0, behavior: 'smooth' });
    }


    
    // Wire up excel sandbox js and prevent scroll
    setTimeout(() => {
        attachMiniExcelLogic();
        // --- Guía Visual: Resaltar la celda objetivo del reto ---
        if (window.activeChallenge && window.activeChallenge.cell) {
            const targetCell = document.getElementById('cell-' + window.activeChallenge.cell);
            if (targetCell) {
                targetCell.classList.add('target-cell-hint');
                targetCell.placeholder = "Escribe aquí...";
                // Quitar el resalte al ganar foco
                targetCell.addEventListener('focus', () => {
                    targetCell.classList.remove('target-cell-hint');
                }, { once: true });
            }
        }
    }, 50);

    document.body.style.overflow = 'hidden';
}

function closeLessonModal() {
    stopSpeedChallenge();
    document.getElementById('lesson-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function openQuizModal(modId) {
    let questions = moduleQuizzes[modId];
    if(!questions || questions.length === 0) {
        console.error("No se encontraron preguntas para el módulo:", modId);
        // Fallback or Alert
        alert("Error: No se han configurado preguntas para este módulo todavía.");
        return;
    }
    
    // Clonar y barajar preguntas para que el examen sea diferente cada vez
    window.currentQuizQuestions = shuffleArray([...questions]);
    currentQuizMod = modId;
    currentQuizIdx = 0;
    
    renderQuizQuestion();
    document.getElementById('lesson-modal').classList.add('active');
    document.getElementById('btn-complete-lesson').style.display = 'none'; // Hide lesson completion core button
}

function renderQuizQuestion() {
    const questions = window.currentQuizQuestions;
    const quizData = questions[currentQuizIdx];
    
    // Barajar opciones
    const optionsWithIndices = quizData.options.map((opt, i) => ({ text: opt, originalIndex: i }));
    shuffleArray(optionsWithIndices);
    
    document.getElementById('modal-title').textContent = `Prueba de Rendimiento (${currentQuizIdx + 1}/${questions.length})`;
    document.getElementById('modal-level').textContent = "Examen Oficial";
    document.getElementById('modal-level').className = 'level-tag level-god';
    document.getElementById('modal-icon-elem').className = 'fa-solid fa-graduation-cap';
    
    let html = `<div class="quiz-container" id="quiz-container-box" style="color:#fff;">
        <h3 style="margin-bottom:1.5rem; color:#fff;">${quizData.q}</h3>
        <div class="quiz-options">
            ${optionsWithIndices.map((opt) => `
                <div class="quiz-option" onclick="window.selectQuizOption(${opt.originalIndex}, this)" style="color:#fff; border: 1px solid rgba(255,255,255,0.1); padding: 1rem; margin-bottom: 0.5rem; border-radius: 8px; cursor: pointer;">${opt.text}</div>
            `).join('')}
        </div>
        <p id="quiz-feedback" style="margin-top:1.5rem; font-weight:bold; color:#fff;"></p>
    </div>`;
    
    document.getElementById('modal-body-content').innerHTML = html;
    document.getElementById('modal-body-content').style.opacity = '1'; // Forzar visibilidad
    document.getElementById('modal-body-content').style.display = 'block'; // Asegurar display


    // Auto-scroll al inicio en cada pregunta de examen
    const modalBody = document.getElementById('modal-body-content');
    if (modalBody) {
        modalBody.scrollTo({ top: 0, behavior: 'smooth' });
    }
}


window.selectQuizOption = function(selectedIdx, element) {
    const questions = window.currentQuizQuestions;
    const quizData = questions[currentQuizIdx];
    const feedback = document.getElementById('quiz-feedback');
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(o => o.style.pointerEvents = 'none'); 
    
    if(selectedIdx === quizData.answer) {
        element.style.background = 'rgba(16, 185, 129, 0.4)';
        element.style.borderColor = '#10b981';
        feedback.style.color = '#10b981';
        feedback.innerHTML = "<i class='fa-solid fa-bolt'></i> ¡Acierto! Evaluando siguiente fase...";
        playSuccessSound();
        
        currentQuizIdx++;
        
        if (currentQuizIdx < questions.length) {
            setTimeout(() => {
                renderQuizQuestion();
            }, 1200);
        } else {
            feedback.innerHTML = "<i class='fa-solid fa-trophy'></i> ¡EXAMEN PERFECTO! Dominio Total. Módulo Desbloqueado.";
            if(window.confetti) { confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 }}); }
            
            if(!userQuizzes.includes(currentQuizMod)) {
                userQuizzes.push(currentQuizMod);
                saveState();
                setTimeout(() => {
                    closeLessonModal();
                    renderModules(); 
                    updateDashboardStats();
                }, 3500);
            } else {
                setTimeout(closeLessonModal, 2500);
            }
        }
    } else {
        element.style.background = 'rgba(239, 68, 68, 0.4)';
        element.style.borderColor = '#ef4444';
        feedback.style.color = '#ef4444';
        feedback.innerHTML = "<i class='fa-solid fa-skull'></i> Respuesta Fatal.<br><span style='color:#f8fafc'>MUERTE SÚBITA: Reprobaste. Tu score bajó a 0%. Se han bloqueado los demás módulos. Regresas a Básico.</span>";
        
        // Muerte Súbita: El usuario pierde todo el progreso del curso
        userProgress = [];
        userQuizzes = [];
        saveState();
        
        setTimeout(() => {
            options.forEach(o => { o.style.pointerEvents = 'auto'; o.style.background=''; o.style.borderColor='';});
            feedback.innerHTML = '';
            closeLessonModal();
            renderModules(); // UI locks everything again
            updateDashboardStats(); // Drops score perfectly to 0% and "Principiante"
            
            // Teletransportar físicamente a la primera lección del módulo básico (m0)
            setTimeout(() => {
                alert("Penalidad Máxima: Tu score es 0%. Has vuelto al inicio.");
                openLessonModal(courseModules[0].lessons[0].id);
            }, 300);
        }, 5500);
    }
}

// --- Binge Learning Auto-Advance Logic ---
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function playSuccessSound() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.1); // C6
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    } catch(e) {}
}

function loadNextLesson(currentId) {
    playSuccessSound();
    let foundCurrent = false;
    let nextId = null;
    let currentModId = null;
    let nextModId = null;
    
    for (const mod of courseModules) {
        for (const l of mod.lessons) {
            if (foundCurrent) {
                nextId = l.id;
                nextModId = mod.id;
                break;
            }
            if (l.id === currentId) {
                foundCurrent = true;
                currentModId = mod.id;
            }
        }
        if (nextId) break;
    }
    
    document.getElementById('modal-body-content').style.opacity = '0';
    setTimeout(() => {
        // Encontrar info del modulo actual para validar completitud
        const mod = courseModules.find(m => m.id === currentModId);
        const allCompleted = mod ? mod.lessons.every(l => userProgress.includes(l.id)) : false;

        // Did we cross the module boundary or reach the end?
        if ((currentModId && nextModId && currentModId !== nextModId) || !nextId) {
            if(!userQuizzes.includes(currentModId)) {
                if (allCompleted) {
                    closeLessonModal();
                    alert("¡Lecciones completadas! Ya tienes el nivel necesario para tomar el Examen Final. Elige la tarjeta del examen en el dashboard para demostrar tu dominio.");
                    renderModules(); 
                    return;
                } else {

                    closeLessonModal();
                    alert("¡Atención! Aún tienes lecciones pendientes en este módulo. Complétalas todas para desbloquear el examen final.");
                    renderModules(); // Actualizar UI
                    return;
                }
            }
        }
        
        if (nextId) {
            openLessonModal(nextId);
            document.getElementById('modal-body-content').style.opacity = '1';
        } else {
            closeLessonModal();
        }
    }, 250);

}

function updateDashboardStats() {
    const totalLessons = courseModules.reduce((acc, mod) => acc + mod.lessons.length, 0);
    const completedCount = userProgress.length;
    const progressPercent = totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

    // Update Progress Bar
    document.getElementById('overall-progress-text').textContent = `${progressPercent}%`;
    document.getElementById('overall-progress-bar').style.width = `${progressPercent}%`;

    // Update Stats
    document.getElementById('stat-completed').textContent = completedCount;
    document.getElementById('stat-tips').textContent = excelTips.length;

    // Update Last Lesson
    if (completedCount > 0) {
        const lastId = userProgress[userProgress.length - 1];
        let lastTitle = '...';
        courseModules.forEach(mod => {
            mod.lessons.forEach(l => {
                if (l.id === lastId) lastTitle = l.title;
            });
        });
        document.getElementById('last-lesson-text').textContent = lastTitle;
    } else {
        document.getElementById('last-lesson-text').textContent = 'Ninguna todavía';
    }

    // Update Badge
    let badgeText = 'Principiante';
    if (progressPercent >= 30) badgeText = 'Intermedio';
    if (progressPercent >= 60) badgeText = 'Avanzado';
    if (progressPercent >= 100) badgeText = 'Modo Dios';
    document.getElementById('current-level-badge').textContent = badgeText;
}

// --- Animaciones de Recompensa ---
function fireReward(e) {
    if (window.confetti) {
        confetti({
            particleCount: 150, spread: 70, origin: { y: 0.8 },
            colors: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444']
        });
    }

    const container = document.getElementById('xp-floating-container');
    const xp = document.createElement('div');
    xp.className = 'xp-float';
    xp.innerHTML = '+50 XP 🔥';
    
    if(e && e.clientX) {
        xp.style.left = e.clientX + 'px'; xp.style.top = e.clientY + 'px';
    } else {
        xp.style.left = '50%'; xp.style.top = '70%';
    }
    
    container.appendChild(xp);
    setTimeout(() => { xp.remove(); }, 1500);
}

// --- Almacenamiento Local (LocalStorage) ---
function saveState() {
    if (!currentUser) return;
    const prefix = `bamx_user_${currentUser}_`;
    localStorage.setItem('bamx_active_session', currentUser);
    localStorage.setItem(`${prefix}progress`, JSON.stringify(userProgress));
    localStorage.setItem(`${prefix}quizzes`, JSON.stringify(userQuizzes));
    localStorage.setItem(`${prefix}streak`, streakDays);
    localStorage.setItem(`${prefix}date`, lastLoginDate);
    localStorage.setItem(`${prefix}coins`, excelCoins);
    localStorage.setItem(`${prefix}skills`, JSON.stringify(skillPoints));
    localStorage.setItem(`${prefix}godmode`, godModeActive);
}

function loadState(username) {
    const userToLoad = username || localStorage.getItem('bamx_active_session');
    if (!userToLoad) return;
    
    currentUser = userToLoad;
    const prefix = `bamx_user_${userToLoad}_`;
    
    const storedProgress = localStorage.getItem(`${prefix}progress`);
    const storedQuizzes = localStorage.getItem(`${prefix}quizzes`);
    const storedStreak = localStorage.getItem(`${prefix}streak`);
    const storedDate = localStorage.getItem(`${prefix}date`);
    const storedCoins = localStorage.getItem(`${prefix}coins`);
    const storedSkills = localStorage.getItem(`${prefix}skills`);
    const storedGod = localStorage.getItem(`${prefix}godmode`);
    
    userProgress = storedProgress ? JSON.parse(storedProgress) : [];
    userQuizzes = storedQuizzes ? JSON.parse(storedQuizzes) : [];
    streakDays = storedStreak ? parseInt(storedStreak) : 0;
    lastLoginDate = storedDate || null;
    excelCoins = storedCoins ? parseInt(storedCoins) : 0;
    skillPoints = storedSkills ? JSON.parse(storedSkills) : { logic: 0, formulas: 0, analysis: 0, formatting: 0, shortcuts: 0 };
    godModeActive = (storedGod === 'true');

    if (currentUser) {
        const todayStr = new Date().toISOString().split('T')[0];
        if (lastLoginDate !== todayStr) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];
            
            if (lastLoginDate === yesterdayStr) { streakDays++; } 
            else if (lastLoginDate !== null) { streakDays = 1; } 
            else { streakDays = 1; }
            
            lastLoginDate = todayStr;
            setTimeout(saveState, 500); 
        }
    }
}

// --- Skill Radar Chart (Chart.js) ---
let skillChart = null;
function initSkillRadar() {
    const ctx = document.getElementById('skillRadarChart').getContext('2d');
    const data = {
        labels: ['Lógica', 'Fórmulas', 'Análisis', 'Formato', 'Atajos'],
        datasets: [{
            label: 'Dominio de Excel',
            data: [skillPoints.logic, skillPoints.formulas, skillPoints.analysis, skillPoints.formatting, skillPoints.shortcuts],
            fill: true,
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: '#10b981',
            pointBackgroundColor: '#10b981',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#10b981'
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: { color: '#94a3b8', font: { size: 12 } },
                    ticks: { display: false, stepSize: 20 },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false
        }
    };

    skillChart = new Chart(ctx, config);
}

function updateRadarChart() {
    if (skillChart) {
        skillChart.data.datasets[0].data = [
            skillPoints.logic, skillPoints.formulas, skillPoints.analysis, skillPoints.formatting, skillPoints.shortcuts
        ];
        skillChart.update();
    }
}

// --- Tienda de Items ---
const shopItems = [
    { id: 'hint', title: 'Pista de Oro', desc: 'Revela la fórmula del reto actual.', price: 5, icon: 'fa-wand-magic-sparkles' },
    { id: 'shield', title: 'Escudo de Racha', desc: 'Protege tu racha diaria por 1 día.', price: 20, icon: 'fa-shield-halved' },
    { id: 'skin_god', title: 'Skin Modo Dios', desc: 'Transforma la interfaz a un tono dorado.', price: 50, icon: 'fa-crown' },
    { id: 'error_pro', title: 'Detector Pro', desc: 'Sugerencias de error avanzadas.', price: 15, icon: 'fa-bug-slash' }
];

function renderShop() {
    const list = document.getElementById('shop-items-list');
    if(!list) return;
    list.innerHTML = shopItems.map(item => {
        let buttonHtml = `<button class="btn-primary" onclick="buyItem('${item.id}', ${item.price})">Comprar</button>`;
        
        if (item.id === 'skin_god' && godModeActive) {
            buttonHtml = `<button class="btn-primary" style="background:var(--accent);" onclick="refundGodMode()">Reembolsar</button>`;
        }

        return `
            <div class="shop-item">
                <i class="fa-solid ${item.icon}"></i>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <div class="shop-price">${item.price} EC</div>
                ${buttonHtml}
            </div>
        `;
    }).join('');
}

window.buyItem = function(id, price) {
    if (excelCoins >= price) {
        excelCoins -= price;
        saveState();
        if(id === 'skin_god') {
            godModeActive = true;
            document.body.classList.add('god-mode-active');
            saveState();
            renderShop();
        }
        renderUserData();
        alert(`¡Has comprado: ${id}! El item se ha activado automáticamente.`);
    } else {
        alert("Excel Coins insuficientes. ¡Sigue aprendiendo para ganar más!");
    }
};

window.refundGodMode = function() {
    if (godModeActive) {
        godModeActive = false;
        excelCoins += 50; // Reembolso total
        document.body.classList.remove('god-mode-active');
        saveState();
        renderUserData();
        renderShop();
        alert("Skin desactivada. Se han reembolsado 50 EC a tu cuenta.");
    }
};

// --- Clippy 2.0 (IA Tutor) ---
function showClippy(msg, duration = 8000) {
    const container = document.getElementById('clippy-container');
    const msgElem = document.getElementById('clippy-msg');
    if(!container || !msgElem) return;

    msgElem.textContent = msg;
    container.classList.remove('clippy-hidden');

    if(duration > 0) {
        setTimeout(hideClippy, duration);
    }
}

function hideClippy() {
    const container = document.getElementById('clippy-container');
    if(container) container.classList.add('clippy-hidden');
}

function buyHint() {
    if (excelCoins >= 5) {
        if (window.activeChallenge) {
            excelCoins -= 5;
            saveState();
            renderUserData();
            const hint = `Prueba con: =${window.activeChallenge.value} o revisa la celda ${window.activeChallenge.cell}`;
            showClippy(`Pista comprada: ${hint}`, 10000);
        }
    } else {
        alert("Pobre de Coins. Necesitas 5 EC.");
    }
}

// --- Recompensas y Habilidades ---
function addRewardPoints(lessonId) {
    excelCoins += 10; // 10 coins per lesson
    
    // Asignar puntos por categoría (basado en prefijo de ID de módulo)
    if (lessonId.startsWith('m0') || lessonId.startsWith('m1')) {
        skillPoints.formulas += 15;
        skillPoints.shortcuts += 5;
    } else if (lessonId.startsWith('m2')) {
        skillPoints.logic += 20;
    } else if (lessonId.startsWith('m3') || lessonId.startsWith('m5')) {
        skillPoints.analysis += 20;
    } else if (lessonId.startsWith('m4') || lessonId.startsWith('m6')) {
        skillPoints.formatting += 20;
    } else {
        skillPoints.formulas += 10;
        skillPoints.logic += 10;
    }

    // Normalizar a max 100
    for (let key in skillPoints) {
        if (skillPoints[key] > 100) skillPoints[key] = 100;
    }

    saveState();
    renderUserData();
    updateRadarChart();
    
    // Mostrar a Clippy celebrando
    setTimeout(() => {
        showClippy("¡Increíble! Has ganado 10 Coins y subido tus habilidades. Sigue así.", 5000);
    }, 1000);
    checkAchievements();
}

// --- Modo Time Attack (Speed Challenges) ---
let timerInterval = null;
let timeLeft = 0;

function startSpeedChallenge(seconds = 15) {
    timeLeft = seconds;
    const timerBox = document.querySelector('.timer-attack-box');
    if(!timerBox) return;
    
    timerBox.style.display = 'block';
    timerBox.textContent = `¡RÁPIDO! ${timeLeft}s`;
    
    if(timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerBox.textContent = `¡RÁPIDO! ${timeLeft}s`;
        
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            timerBox.style.display = 'none';
            alert("¡Tiempo Agotado! El reto ha expirado.");
            closeLessonModal();
        }
    }, 1000);
}

function stopSpeedChallenge() {
    if(timerInterval) clearInterval(timerInterval);
    const timerBox = document.querySelector('.timer-attack-box');
    if(timerBox) timerBox.style.display = 'none';
}

// Logros Secretos
function checkAchievements() {
    if(excelCoins >= 100 && !userProgress.includes('ach_wealthy')) {
        userProgress.push('ach_wealthy');
        showClippy("¡LOGRO DESBLOQUEADO: Magnate de Excel! 💰", 6000);
        if(window.confetti) confetti();
        saveState();
    }
}

// --- Admin Panel Logic ---
let avatarClickCount = 0;
let avatarClickTimer = null;

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const userImg = document.querySelector('.user-img');
        if(userImg) {
            userImg.style.cursor = 'help';
            userImg.addEventListener('click', () => {
                avatarClickCount++;
                if(avatarClickTimer) clearTimeout(avatarClickTimer);
                avatarClickTimer = setTimeout(() => { avatarClickCount = 0; }, 1000);
                
                if(avatarClickCount === 3) {
                    const modal = document.getElementById('admin-modal');
                    if(modal) {
                        modal.classList.add('active');
                        document.getElementById('admin-coins-input').value = excelCoins;
                    }
                    avatarClickCount = 0;
                }
            });
        }
    }, 1500);
});

window.adminSetCoins = function() {
    const newVal = parseInt(document.getElementById('admin-coins-input').value);
    if(!isNaN(newVal)) {
        excelCoins = newVal;
        saveState();
        renderUserData();
        alert(`¡Saldo actualizado a ${newVal} EC!`);
    }
};

window.adminUnlockAll = function() {
    if(confirm("¿Seguro que quieres completar todo el curso automáticamente?")) {
        courseModules.forEach(mod => {
            mod.lessons.forEach(l => { if(!userProgress.includes(l.id)) userProgress.push(l.id); });
            if(!userQuizzes.includes(mod.id)) userQuizzes.push(mod.id);
        });
        saveState();
        location.reload();
    }
};

window.adminResetAll = function() {
    if(confirm("¿Borrar todo el progreso?")) {
        localStorage.clear();
        location.reload();
    }
};
