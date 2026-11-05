const courses = [
  { id: "agua", title: "El agua que nos da vida", subject: "Ciencia", duration: "12 min", description: "Acompaña una gota desde el río hasta las nubes y aprende a protegerla.", emoji: "💧", art: "water", label: "CUIDEMOS EL AGUA", lessonTitle: "De la laguna a las nubes", lesson: "Imagina una gota en una laguna. Cuando el Sol calienta la superficie, parte del agua se transforma en vapor y asciende: es la evaporación. En las zonas frías de la atmósfera, el vapor se enfría y forma gotitas que se agrupan en nubes; este cambio se llama condensación. Cuando las gotas pesan, caen como lluvia. El agua puede infiltrarse en el suelo, alimentar plantas y regresar a ríos y lagos. Así funciona el ciclo del agua, que conecta el cielo, la tierra y los seres vivos.", fact: "Los árboles devuelven parte del agua al aire mediante sus hojas, por eso los bosques también participan en el ciclo del agua.", challenges: [
    { prompt: "Una charca se hace más pequeña durante un día soleado. ¿Qué cambio explica mejor lo ocurrido?", answers: ["El agua se evaporó con el calor", "El agua se convirtió en piedra", "El agua dejó de existir"], correct: 0 },
    { prompt: "Ordena el viaje de una gota después de que el vapor se enfría.", answers: ["Forma nubes y luego puede caer como lluvia", "Se vuelve hielo dentro de la tierra y sube al Sol", "Cae como lluvia antes de formar vapor"], correct: 0 },
    { prompt: "En casa detectan un grifo que gotea. ¿Qué decisión ahorra agua de manera directa?", answers: ["Avisar y reparar la fuga", "Abrir otro grifo para compensarla", "Dejar un recipiente debajo sin cerrar la llave"], correct: 0 },
  ] },
  { id: "fracciones", title: "Fracciones en la cocina", subject: "Matemática", duration: "10 min", description: "Prepara una receta y descubre cómo las fracciones representan partes iguales.", emoji: "🥧", art: "math", label: "NÚMEROS COTIDIANOS", lessonTitle: "Una receta en partes iguales", lesson: "Al cocinar, a veces necesitamos solo una parte de un ingrediente. Una fracción representa partes iguales de un todo: en 3/4, el denominador 4 indica que el todo se dividió en cuatro partes iguales y el numerador 3 señala cuántas usamos. Si duplicas una receta que pide 1/2 taza de leche, necesitas 1 taza. Para comparar fracciones con el mismo denominador, es mayor la que tiene más partes tomadas.", fact: "Para repartir una tortilla en porciones justas, las partes deben tener el mismo tamaño.", challenges: [
    { prompt: "Vas a preparar dos veces una receta que pide 1/2 taza de leche. ¿Cuánto necesitas en total?", answers: ["1 taza", "1/2 taza", "2 tazas"], correct: 0 },
    { prompt: "Una naranja se divide en 8 gajos iguales y comes 3. ¿Qué fracción de la naranja comiste?", answers: ["3/8", "8/3", "5/8"], correct: 0 },
    { prompt: "¿Cuál porción es mayor si ambas tortas tienen el mismo tamaño?", answers: ["2/6", "5/6", "1/6"], correct: 1 },
  ] },
  { id: "lectura", title: "Historias de mi comunidad", subject: "Comunicación", duration: "8 min", description: "Explora relatos de tu comunidad, sus personajes y los detalles que les dan vida.", emoji: "📚", art: "reading", label: "LEER PARA CRECER", lessonTitle: "Una historia que nace en el barrio", lesson: "En el pueblo de Ana, cada verano los vecinos limpian el canal que lleva agua a sus huertos. Ana invita a sus compañeros, prepara carteles y organiza turnos. Al final del día, el agua vuelve a correr y todos celebran el trabajo compartido. En un relato, los personajes realizan acciones en un lugar y un tiempo. Los detalles —como los carteles y los turnos— ayudan a imaginar la escena; la idea principal resume lo más importante que sucede.", fact: "Las historias de una comunidad pueden conservar recuerdos, costumbres y formas de colaborar.", challenges: [
    { prompt: "¿Qué acción de Ana ayuda a organizar la limpieza del canal?", answers: ["Prepara carteles y propone turnos", "Cierra el canal para siempre", "Se lleva las herramientas a casa"], correct: 0 },
    { prompt: "¿Cuál oración resume mejor el relato de Ana?", answers: ["Una comunidad se organiza para limpiar su canal", "Ana tiene carteles de muchos colores", "El verano tiene días calurosos"], correct: 0 },
    { prompt: "¿Qué detalle permite imaginar cómo se repartió el trabajo?", answers: ["Los vecinos prepararon turnos", "El canal estaba en otro país", "Ana olvidó el nombre del pueblo"], correct: 0 },
  ] },
  { id: "energia", title: "Energía que nos rodea", subject: "Ciencia", duration: "10 min", description: "Investiga cómo se transforma la energía del Sol, el viento y la electricidad.", emoji: "☀️", art: "water", label: "CIENCIA COTIDIANA", lessonTitle: "La energía cambia de forma", lesson: "La energía produce cambios: permite que una pelota se mueva, que una olla se caliente o que una lámpara ilumine. La energía no aparece de la nada; puede transformarse. Un panel solar convierte la energía de la luz del Sol en electricidad, mientras que un ventilador transforma electricidad en movimiento. En una comunidad también se puede aprovechar el viento o el agua en movimiento para generar electricidad. Usarla con cuidado ayuda a evitar desperdicios.", fact: "Una cocina eléctrica transforma energía eléctrica en calor para cocinar los alimentos.", challenges: [
    { prompt: "Un panel solar recibe luz y hace funcionar una lámpara. ¿Qué transformación ocurre primero?", answers: ["Luz del Sol en electricidad", "Sonido en agua", "Movimiento en papel"], correct: 0 },
    { prompt: "¿Qué forma de energía produce principalmente un ventilador al funcionar?", answers: ["Movimiento del aire", "Luz del Sol", "Agua líquida"], correct: 0 },
    { prompt: "La clase termina y el salón queda vacío. ¿Qué hábito reduce el consumo eléctrico?", answers: ["Apagar las luces y equipos que no se usan", "Dejar los equipos encendidos toda la tarde", "Abrir y cerrar la refrigeradora"], correct: 0 },
  ] },
  { id: "ecosistemas", title: "La vida en los ecosistemas", subject: "Ciencia", duration: "11 min", description: "Sigue las relaciones entre los seres vivos y el lugar que comparten.", emoji: "🌿", art: "reading", label: "VIDA Y AMBIENTE", lessonTitle: "Una red de vida en la loma", lesson: "En una loma, las plantas crecen gracias a la luz, el agua y los nutrientes del suelo. Los insectos visitan sus flores; algunas aves comen insectos y dispersan semillas. El suelo, el clima y el agua también forman parte de este ecosistema. Como los seres vivos se relacionan, un cambio puede afectar a otros: si desaparecen muchas plantas, algunos animales pierden alimento y refugio. Cuidar el ambiente significa proteger estas conexiones, no solo una especie aislada.", fact: "Las lombrices ayudan a airear el suelo y a descomponer restos de hojas.", challenges: [
    { prompt: "En la loma, ¿qué relación se describe entre las aves y las plantas?", answers: ["Las aves pueden dispersar semillas de las plantas", "Las plantas construyen nidos para las aves", "Las aves convierten el suelo en agua"], correct: 0 },
    { prompt: "Si desaparecen muchas plantas, ¿qué consecuencia es más probable?", answers: ["Algunos animales pierden alimento o refugio", "Todos los animales consiguen más alimento", "El ecosistema deja de necesitar agua"], correct: 0 },
    { prompt: "¿Cuál ejemplo incluye un ser vivo y un elemento no vivo del ecosistema?", answers: ["Una planta y el suelo donde crece", "Dos piedras sin relación con seres vivos", "Una hoja dibujada y un cuaderno"], correct: 0 },
  ] },
  { id: "multiplicacion", title: "Multiplicar en la feria", subject: "Matemática", duration: "9 min", description: "Calcula cantidades y precios con los productos de una feria.", emoji: "🧺", art: "math", label: "MATEMÁTICA DIARIA", lessonTitle: "Cuentas entre puestos y canastas", lesson: "En la feria, los productos suelen venderse en grupos. Si una caja trae 6 tomates y compras 3 cajas, puedes sumar 6 + 6 + 6 o multiplicar 3 × 6. El resultado es 18 tomates. También puedes calcular precios: si cada kilo cuesta 4 soles y compras 2 kilos, pagas 8 soles. Multiplicar permite resolver situaciones de grupos iguales y revisar rápidamente una cuenta.", fact: "Para comprobar una multiplicación pequeña, puedes representarla con grupos de objetos o una suma repetida.", challenges: [
    { prompt: "La vendedora arma 4 bolsas con 6 mandarinas en cada una. ¿Cuántas mandarinas prepara?", answers: ["24", "10", "20"], correct: 0 },
    { prompt: "¿Qué suma representa 3 × 7?", answers: ["7 + 7 + 7", "3 + 7", "3 + 3 + 3"], correct: 0 },
    { prompt: "Un kilo de papa cuesta 5 soles. ¿Cuánto pagas por 3 kilos?", answers: ["15 soles", "8 soles", "10 soles"], correct: 0 },
  ] },
  { id: "medidas", title: "Medimos nuestro entorno", subject: "Matemática", duration: "10 min", description: "Elige unidades, compara distancias y estima capacidades en situaciones reales.", emoji: "📏", art: "math", label: "MEDIR Y COMPARAR", lessonTitle: "La medida justa para cada objeto", lesson: "Medir es comparar una cantidad con una unidad. Para objetos pequeños convienen los centímetros; para la distancia entre dos aulas, los metros. El tiempo puede expresarse en minutos u horas, y la capacidad de una botella en mililitros o litros. Una estimación ayuda antes de medir: un lápiz suele medir menos de un metro, mientras que una puerta mide cerca de dos metros. Usar una unidad apropiada hace que la respuesta sea clara.", fact: "Un metro tiene 100 centímetros y un litro tiene 1 000 mililitros.", challenges: [
    { prompt: "Quieres anotar el largo de una hoja de cuaderno. ¿Qué unidad resulta más práctica?", answers: ["Centímetros", "Kilómetros", "Litros"], correct: 0 },
    { prompt: "La clase empezó a las 9:00 y terminó a las 9:45. ¿Cuánto duró?", answers: ["45 minutos", "9 horas", "45 metros"], correct: 0 },
    { prompt: "Una jarra contiene 2 litros de refresco. ¿Cuántos envases de 1 litro puedes llenar?", answers: ["2 envases", "1 envase", "3 envases"], correct: 0 },
  ] },
  { id: "comprension", title: "Comprendemos un texto", subject: "Comunicación", duration: "9 min", description: "Lee una breve escena, encuentra pistas y deduce lo que no se dice directamente.", emoji: "🔎", art: "reading", label: "LEER CON ATENCIÓN", lessonTitle: "Leer entre líneas con Mateo", lesson: "Lee esta escena: “Mateo entró al aula sacudiendo su paraguas. Dejó sus zapatos mojados junto a la puerta y miró por la ventana, donde caía una lluvia intensa”. El texto no afirma directamente que Mateo caminó bajo la lluvia, pero sus zapatos mojados y el paraguas permiten inferirlo. Comprender también implica ordenar acciones y distinguir el tema principal de los detalles. Una inferencia debe apoyarse en pistas reales del texto, no en una suposición sin fundamento.", fact: "Al responder una pregunta de inferencia, explica qué pista del texto te ayudó a pensar la respuesta.", challenges: [
    { prompt: "¿Qué es lo más probable que haya hecho Mateo antes de entrar al aula?", answers: ["Caminó bajo la lluvia", "Nadó en una piscina", "Pintó sus zapatos"], correct: 0 },
    { prompt: "¿Qué dos pistas apoyan la idea de que estaba lloviendo?", answers: ["El paraguas y los zapatos mojados", "La ventana y el aula", "El nombre de Mateo y la puerta"], correct: 0 },
    { prompt: "¿Cuál afirmación sí aparece de manera directa en la escena?", answers: ["Mateo dejó sus zapatos mojados junto a la puerta", "Mateo llegó en bicicleta", "Mateo olvidó su mochila"], correct: 0 },
  ] },
  { id: "puntuacion", title: "Palabras y puntuación", subject: "Comunicación", duration: "8 min", description: "Edita mensajes breves para que las ideas se lean con orden y claridad.", emoji: "✍️", art: "reading", label: "ESCRIBIR MEJOR", lessonTitle: "Un mensaje claro, paso a paso", lesson: "La puntuación orienta a quien lee. Una oración afirmativa empieza con mayúscula y suele terminar con punto. En español, las preguntas llevan signo de apertura y de cierre (¿?). La coma puede separar elementos de una lista: “Traje lápices, colores y papel”. Los signos no son adornos: ayudan a reconocer pausas, preguntas y el sentido de cada frase. Después de escribir, releer permite encontrar letras mayúsculas o signos que faltan.", fact: "Una pregunta en español necesita el signo de apertura (¿) además del signo de cierre (?).", challenges: [
    { prompt: "Elige la versión escrita correctamente para saludar a Rosa.", answers: ["Hola, Rosa. ¿Cómo estás?", "hola rosa cómo estas", "¡Hola Rosa cómo estás."], correct: 0 },
    { prompt: "¿Qué signo completa la oración afirmativa “La biblioteca está abierta___”?", answers: ["Punto (.)", "Signo de interrogación (?)", "Coma (, )"], correct: 0 },
    { prompt: "Vas a preguntar la hora. ¿Qué signos deben enmarcar la pregunta en español?", answers: ["¿ y ?", "( y )", "¡ y !"], correct: 0 },
  ] },
];

const STORAGE_KEY = "semilla-learning-v1";
const ACCOUNTS_KEY = "aula-libre-accounts-v1";
const CURRENT_USER_KEY = "aula-libre-current-user-v1";
const PASSWORD_HASH_ITERATIONS = 210000;
courses.forEach((course) => {
  course.challenges = course.challenges.map((challenge, index) => ({ ...challenge, id: `${course.id}-${index + 1}` }));
});
const defaultState = { schemaVersion: 2, completed: [], completedChallenges: [], answers: {}, notes: {}, assignments: [], messages: [], grades: {} };
let currentUser = null;
let state = createEmptyState();
let activeCourse = null;
let activeReading = null;
let toastTimer;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function createEmptyState() {
  return { ...defaultState, completed: [], completedChallenges: [], answers: {}, notes: {}, assignments: [], messages: [], grades: {} };
}

function getStorageKey() {
  return currentUser ? `${STORAGE_KEY}-user-${currentUser.id}` : STORAGE_KEY;
}

$("#today-date").textContent = new Intl.DateTimeFormat("es-PE", {
  weekday: "long",
  day: "numeric",
  month: "long",
}).format(new Date()).toLocaleUpperCase("es-PE");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(getStorageKey()) || "null");
    return normalizeState(saved);
  } catch (error) {
    console.error("No se pudo leer el progreso guardado.", error);
    return createEmptyState();
  }
}

function normalizeState(saved) {
  try {
    if (!saved || typeof saved !== "object") return createEmptyState();
    const savedCompleted = Array.isArray(saved.completed) ? [...new Set(saved.completed.filter((id) => courses.some((course) => course.id === id)))] : [];
    const answers = {};
    const notes = {};
    const grades = {};
    const completedChallenges = new Set(Array.isArray(saved.completedChallenges)
      ? saved.completedChallenges.filter((id) => courses.some((course) => course.challenges.some((challenge) => challenge.id === id)))
      : []);
    if (saved.answers && typeof saved.answers === "object") {
      courses.forEach((course) => {
        const previousAnswers = saved.answers[course.id];
        if (Number.isInteger(previousAnswers) && previousAnswers >= 0 && previousAnswers < course.challenges[0].answers.length) {
          answers[course.challenges[0].id] = previousAnswers;
        }
        course.challenges.forEach((challenge) => {
          const answer = saved.answers[challenge.id] ?? (previousAnswers && typeof previousAnswers === "object" ? previousAnswers[challenge.id] : undefined);
          if (Number.isInteger(answer) && answer >= 0 && answer < challenge.answers.length) answers[challenge.id] = answer;
        });
      });
    }
    courses.forEach((course) => {
      if (savedCompleted.includes(course.id) && !Array.isArray(saved.completedChallenges)) completedChallenges.add(course.challenges[0].id);
    });
    if (Array.isArray(saved.completedChallenges)) {
      saved.completedChallenges.forEach((id) => {
        if (typeof id === "string" && courses.some((course) => course.challenges.some((challenge) => challenge.id === id))) completedChallenges.add(id);
      });
    }
    const completed = courses.filter((course) => course.challenges.every((challenge) => completedChallenges.has(challenge.id))).map((course) => course.id);
    if (saved.notes && typeof saved.notes === "object") {
      courses.forEach((course) => {
        if (typeof saved.notes[course.id] === "string") notes[course.id] = saved.notes[course.id].slice(0, 1000);
      });
    }
    if (saved.grades && typeof saved.grades === "object") {
      courses.forEach((course) => {
        const grade = saved.grades[course.id];
        if (grade && Number.isInteger(grade.score) && grade.score >= 0 && grade.score <= 20 && typeof grade.comment === "string") grades[course.id] = { score: grade.score, comment: grade.comment.slice(0, 300), updatedAt: typeof grade.updatedAt === "string" ? grade.updatedAt : "", synced: grade.synced === true };
      });
    }
    return {
      schemaVersion: defaultState.schemaVersion,
      completed,
      completedChallenges: [...completedChallenges],
      answers,
      notes,
      assignments: Array.isArray(saved.assignments) ? saved.assignments.filter((item) => item && typeof item.id === "string" && courses.some((course) => course.id === item.courseId) && typeof item.instructions === "string").map((item) => ({ id: item.id, courseId: item.courseId, instructions: item.instructions.slice(0, 300), dueDate: typeof item.dueDate === "string" ? item.dueDate : "", createdAt: typeof item.createdAt === "string" ? item.createdAt : "", synced: item.synced === true })) : [],
      messages: Array.isArray(saved.messages) ? saved.messages.filter((item) => item && typeof item.id === "string" && typeof item.text === "string" && typeof item.sender === "string").map((item) => ({ id: item.id, sender: item.sender.slice(0, 140), text: item.text.slice(0, 500), createdAt: typeof item.createdAt === "string" ? item.createdAt : "", synced: item.synced === true })) : [],
      grades,
    };
  } catch (error) {
    console.error("No se pudo leer el progreso guardado.", error);
    return createEmptyState();
  }
}

function createEventId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function saveState() {
  try {
    if (!currentUser) return;
    localStorage.setItem(getStorageKey(), JSON.stringify(state));
    updateProgress();
  } catch (error) {
    console.error("No se pudo guardar el progreso.", error);
    showToast("No pudimos guardar tu progreso. Revisa el espacio disponible en este dispositivo.");
  }
}

function readAccounts() {
  const saved = localStorage.getItem(ACCOUNTS_KEY);
  if (!saved) return [];
  const accounts = JSON.parse(saved);
  if (!Array.isArray(accounts)) throw new Error("No se pudieron leer las cuentas guardadas en este dispositivo.");
  return accounts;
}

function bytesToHex(bytes) {
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function hexToBytes(hex) {
  if (typeof hex !== "string" || !/^(?:[0-9a-f]{2})+$/i.test(hex)) throw new Error("La cuenta guardada está dañada.");
  return Uint8Array.from(hex.match(/.{2}/g), (byte) => Number.parseInt(byte, 16));
}

async function hashPassword(password, salt) {
  if (!globalThis.crypto?.subtle) throw new Error("Este navegador no permite crear cuentas locales. Abre la web desde localhost o HTTPS.");
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({
    name: "PBKDF2",
    salt: hexToBytes(salt),
    iterations: PASSWORD_HASH_ITERATIONS,
    hash: "SHA-256",
  }, key, 256);
  return bytesToHex(new Uint8Array(bits));
}

function hashesMatch(first, second) {
  if (typeof first !== "string" || typeof second !== "string" || first.length !== second.length) return false;
  let difference = 0;
  for (let index = 0; index < first.length; index += 1) difference |= first.charCodeAt(index) ^ second.charCodeAt(index);
  return difference === 0;
}

let authMode = "login";

function setAuthMode(mode) {
  authMode = mode;
  const registering = mode === "register";
  $("#auth-name").classList.toggle("hidden", !registering);
  $("#auth-name-label").classList.toggle("hidden", !registering);
  $("#auth-name").required = registering;
  $("#auth-password").autocomplete = registering ? "new-password" : "current-password";
  $("#auth-title").textContent = registering ? "Crear cuenta" : "Inicia sesión";
  $("#auth-description").textContent = registering
    ? "Crea tu cuenta sin Internet. Tu nombre y progreso se guardarán en este dispositivo."
    : "Entra sin Internet para ver tu nombre y continuar tu aprendizaje en este dispositivo.";
  $("#auth-submit").textContent = registering ? "Crear cuenta" : "Iniciar sesión";
  $("#auth-switch").textContent = registering ? "¿Ya tienes cuenta? Iniciar sesión" : "¿No tienes cuenta? Crear cuenta";
  $("#auth-error").textContent = "";
}

function initializeUser(user) {
  currentUser = user;
  state = loadState();
  const fullName = user.name.trim();
  const firstName = fullName.split(/\s+/)[0];
  const initials = fullName.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toLocaleUpperCase("es");
  $("#welcome-name").textContent = firstName;
  $("#profile-name").textContent = fullName;
  $("#profile-avatar").textContent = initials;
  $("#teacher-progress-title").textContent = `Progreso de ${fullName}`;
  $("#message-sender").value = `${fullName} · Estudiante`;
  $("#auth-screen").classList.add("hidden");
  $("#app-shell").classList.remove("hidden");
  $("#tutor-panel").classList.remove("hidden");
  renderCourses();
  updateConnection();
}

$("#auth-switch").addEventListener("click", () => setAuthMode(authMode === "login" ? "register" : "login"));
$("#auth-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const submit = $("#auth-submit");
  const username = $("#auth-username").value.trim().toLocaleLowerCase("en");
  const password = $("#auth-password").value;
  submit.disabled = true;
  $("#auth-error").textContent = "";
  try {
    const accounts = readAccounts();
    let user;
    if (authMode === "register") {
      const name = $("#auth-name").value.trim();
      if (!name || name.length > 120) throw new Error("Escribe tu nombre completo (máximo 120 caracteres).");
      if (!/^[a-z0-9._-]{3,30}$/.test(username)) throw new Error("El usuario debe tener entre 3 y 30 letras, números, punto, guion o guion bajo.");
      if (password.length < 8 || password.length > 128) throw new Error("La contraseña debe tener entre 8 y 128 caracteres.");
      if (accounts.some((account) => account.username === username)) throw new Error("Ese usuario ya existe en este dispositivo. Elige otro.");
      const salt = bytesToHex(crypto.getRandomValues(new Uint8Array(16)));
      user = { id: createEventId(), name, username, salt, passwordHash: await hashPassword(password, salt) };
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify([...accounts, user]));
    } else {
      const account = accounts.find((item) => item.username === username);
      if (!account || !hashesMatch(await hashPassword(password, account.salt), account.passwordHash)) {
        throw new Error("Usuario o contraseña incorrectos.");
      }
      user = { id: account.id, name: account.name, username: account.username };
    }
    localStorage.setItem(CURRENT_USER_KEY, user.id);
    $("#auth-form").reset();
    initializeUser(user);
  } catch (error) {
    console.error("No se pudo acceder a la cuenta local.", error);
    $("#auth-error").textContent = error.message || "No se pudo guardar la cuenta en este dispositivo.";
  } finally {
    submit.disabled = false;
  }
});

$("#logout-button").addEventListener("click", () => {
  const button = $("#logout-button");
  button.disabled = true;
  try {
    localStorage.removeItem(CURRENT_USER_KEY);
    currentUser = null;
    state = createEmptyState();
    $("#app-shell").classList.add("hidden");
    $("#tutor-panel").classList.add("hidden");
    $("#auth-screen").classList.remove("hidden");
    $("#auth-form").reset();
    setAuthMode("login");
  } catch (error) {
    console.error("No se pudo cerrar la sesión local.", error);
    showToast("No se pudo cerrar la sesión en este dispositivo.");
  } finally {
    button.disabled = false;
  }
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function getCourseProgress(course) {
  const completedCount = course.challenges.filter((challenge) => state.completedChallenges.includes(challenge.id)).length;
  return Math.round(completedCount / course.challenges.length * 100);
}

function getCourseCompletedChallengeCount(course) {
  return course.challenges.filter((challenge) => state.completedChallenges.includes(challenge.id)).length;
}

function hasCourseStarted(course) {
  return getCourseCompletedChallengeCount(course) > 0 || course.challenges.some((challenge) => Object.hasOwn(state.answers, challenge.id));
}

function updateCourseCompletion(course) {
  const isComplete = course.challenges.every((challenge) => state.completedChallenges.includes(challenge.id));
  state.completed = isComplete
    ? [...new Set([...state.completed, course.id])]
    : state.completed.filter((id) => id !== course.id);
}

function renderCourseCard(course) {
  const progress = getCourseProgress(course);
  return `<article class="course-card">
    <div class="course-art art-${course.art}"><span class="art-emoji" aria-hidden="true">${course.emoji}</span><span class="art-label">${course.label}</span></div>
    <div class="course-body">
      <div class="course-meta"><span>${course.subject} · ${course.challenges.length} retos</span><span class="offline-label">⌁ Sin conexión</span></div>
      <h3>${course.title}</h3><p>${course.description}</p>
      <div class="progress-track" role="progressbar" aria-label="Progreso de ${course.title}" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:${progress}%"></div></div>
      <div class="card-footer"><span>${getCourseCompletedChallengeCount(course)}/${course.challenges.length} retos · ${progress === 100 ? "Completado" : hasCourseStarted(course) ? "En progreso" : "Por comenzar"}</span><button class="card-link" data-open-lesson="${course.id}">${progress === 100 ? "Repasar" : hasCourseStarted(course) ? "Continuar" : "Empezar"} →</button></div>
    </div>
  </article>`;
}

function renderCourses() {
  $("#course-grid").innerHTML = courses.map(renderCourseCard).join("");
  $("#library-grid").innerHTML = courses.map(renderCourseCard).join("");
  $("#library-summary").textContent = `${courses.length} cursos y ${courses.reduce((sum, course) => sum + course.challenges.length, 0)} retos disponibles sin conexión.`;
  renderProgress();
}

function renderProgress() {
  const count = state.completed.length;
  const total = courses.length;
  const totalChallenges = courses.reduce((sum, course) => sum + course.challenges.length, 0);
  const completedChallengeCount = state.completedChallenges.length;
  const percent = Math.round(completedChallengeCount / totalChallenges * 100);
  $("#completed-stat").textContent = `${count}/${total}`;
  $("#total-stat").textContent = `${percent}%`;
  $("#streak-stat").innerHTML = `${count ? count + 1 : 3} <i>días</i>`;
  $("#streak-count").textContent = `${count ? count + 1 : 3} días`;
  $("#progress-items").innerHTML = courses.map((course) => {
    const progress = getCourseProgress(course);
    const finishedChallenges = getCourseCompletedChallengeCount(course);
    return `<div class="progress-row"><div class="progress-row-icon" aria-hidden="true">${course.emoji}</div><div><strong>${course.title}</strong><small>${course.subject} · ${finishedChallenges}/${course.challenges.length} retos · ${progress === 100 ? "Completado" : hasCourseStarted(course) ? "En progreso" : "Por comenzar"}</small></div><span class="progress-value">${progress}%</span></div>`;
  }).join("");
  $("#grade-items").innerHTML = courses.map((course) => {
    const grade = state.grades[course.id];
    return `<div class="progress-row"><div class="progress-row-icon" aria-hidden="true">✎</div><div><strong>${course.title}</strong><small>${grade ? escapeHtml(grade.comment) : "Aún no hay comentarios docentes."}</small></div><span class="progress-value">${grade ? `${grade.score}/20` : "—"}</span></div>`;
  }).join("");
  renderTeacherData();
  renderMessages();
  $("#progress-sync-description").textContent = "Tu avance se guarda en este dispositivo y no necesita Internet.";
}

function renderTeacherData() {
  const options = courses.map((course) => `<option value="${course.id}">${course.subject} · ${course.title}</option>`).join("");
  $("#assignment-course").innerHTML = options;
  $("#feedback-course").innerHTML = options;
  $("#teacher-progress").innerHTML = courses.map((course) => {
    const progress = getCourseProgress(course);
    const grade = state.grades[course.id];
    return `<div class="teacher-progress-row"><strong>${course.title}</strong><span>${getCourseCompletedChallengeCount(course)}/${course.challenges.length} retos · ${progress}%</span><small>${grade ? `Calificación: ${grade.score}/20` : "Sin calificación"}</small></div>`;
  }).join("");
  $("#assignment-list").innerHTML = state.assignments.length ? [...state.assignments].reverse().map((assignment) => {
    const course = courses.find((item) => item.id === assignment.courseId);
    return `<div class="progress-row"><div class="progress-row-icon" aria-hidden="true">✓</div><div><strong>${escapeHtml(course.title)}</strong><small>${escapeHtml(assignment.instructions)}${assignment.dueDate ? ` · Entrega: ${escapeHtml(assignment.dueDate)}` : ""}</small></div><span class="sync-state">${assignment.synced ? "Enviada" : "Pendiente"}</span></div>`;
  }).join("") : '<p class="empty-state">Aún no hay tareas asignadas.</p>';
  $("#student-assignments").innerHTML = state.assignments.length ? [...state.assignments].reverse().map((assignment) => {
    const course = courses.find((item) => item.id === assignment.courseId);
    return `<div class="progress-row"><div class="progress-row-icon" aria-hidden="true">✦</div><div><strong>${escapeHtml(course.title)}</strong><small>${escapeHtml(assignment.instructions)}${assignment.dueDate ? ` · Entrega: ${escapeHtml(assignment.dueDate)}` : ""}</small></div><button class="card-link" data-open-lesson="${course.id}">Abrir →</button></div>`;
  }).join("") : '<p class="empty-state">Tu docente aún no ha asignado actividades.</p>';
}

function renderMessages() {
  $("#message-list").innerHTML = state.messages.length ? [...state.messages].reverse().map((message) => {
    const initials = message.sender.split(/\s+/).slice(0, 2).map((part) => part[0] || "").join("").toLocaleUpperCase("es");
    return `<article class="message-row">
      <div class="message-avatar" aria-hidden="true">${escapeHtml(initials)}</div>
      <div><strong>${escapeHtml(message.sender)}</strong><p>${escapeHtml(message.text)}</p><small>${message.createdAt ? new Date(message.createdAt).toLocaleString("es-PE", { dateStyle: "medium", timeStyle: "short" }) : ""}</small></div>
      <span class="sync-state">En dispositivo</span>
    </article>`;
  }).join("") : '<p class="empty-state">Todavía no hay mensajes en este dispositivo.</p>';
}

function updateProgress() {
  renderCourses();
  $("#sync-title").textContent = "Tu aprendizaje está guardado";
  $("#sync-description").textContent = "El progreso queda guardado en este dispositivo y funciona sin Internet.";
  updateConnection();
}

function updateReadingButton(courseId) {
  const button = document.querySelector(`[data-speak="${courseId}"]`);
  if (!button) return;
  const isActive = activeReading?.courseId === courseId;
  button.textContent = isActive ? activeReading.paused ? "▶ Reanudar lectura" : "⏸ Pausar lectura" : "▶ Escuchar lectura";
  button.setAttribute("aria-label", button.textContent);
  button.setAttribute("aria-pressed", String(isActive && !activeReading.paused));
}

function stopReading() {
  if (!activeReading) return;
  const { courseId } = activeReading;
  activeReading = null;
  window.speechSynthesis.cancel();
  updateReadingButton(courseId);
}

function openView(viewName) {
  if (viewName !== "leccion") stopReading();
  const views = { inicio: "home-view", biblioteca: "library-view", progreso: "progress-view", docente: "teacher-view", mensajes: "messages-view", proyecto: "project-view", leccion: "lesson-view" };
  Object.entries(views).forEach(([name, id]) => $(`#${id}`).classList.toggle("hidden", name !== viewName));
  $$(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === viewName));
  const labels = { inicio: "Mi aprendizaje", biblioteca: "Biblioteca", progreso: "Mi progreso", docente: "Espacio docente", mensajes: "Mensajes", proyecto: "El proyecto", leccion: "Mi aprendizaje" };
  $("#breadcrumb-current").textContent = labels[viewName];
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openLesson(id) {
  const course = courses.find((item) => item.id === id);
  if (!course) return;
  if (activeReading && activeReading.courseId !== course.id) stopReading();
  activeCourse = course;
  const completedChallengeCount = getCourseCompletedChallengeCount(course);
  $("#lesson-content").innerHTML = `<article class="lesson-wrap">
    <div class="lesson-hero art-${course.art}">
      <div class="lesson-hero-copy"><span class="tag" style="background:#ffffffb8;color:#365b42">${course.subject.toUpperCase()} · ${course.duration.toUpperCase()}</span><h1>${course.title}</h1><p>${completedChallengeCount} de ${course.challenges.length} retos completados.</p></div>
      <span class="art-emoji" aria-hidden="true">${course.emoji}</span>
    </div>
    <div class="lesson-steps"><p class="eyebrow">DESCUBRE</p><h2>${course.lessonTitle}</h2><p>${course.lesson}</p><div class="lesson-fact"><strong>¿Sabías que…?</strong> ${course.fact}</div>
      <div class="material-actions"><button class="button button-outline" data-speak="${course.id}" aria-label="${activeReading?.courseId === course.id ? activeReading.paused ? "Reanudar lectura" : "Pausar lectura" : "Escuchar lectura"}" aria-pressed="${activeReading?.courseId === course.id && activeReading.paused}">${activeReading?.courseId === course.id ? activeReading.paused ? "▶ Reanudar lectura" : "⏸ Pausar lectura" : "▶ Escuchar lectura"}</button><button class="button button-outline" data-print="${course.id}">Imprimir / guardar como PDF</button></div>
      <label class="note-label" for="lesson-note">Mis apuntes (se guardan en este dispositivo)</label><textarea id="lesson-note" rows="3" maxlength="1000" placeholder="Escribe una nota para recordar...">${escapeHtml(state.notes[course.id] || "")}</textarea><button class="button button-outline" id="save-note">Guardar apuntes</button>
    </div>
    <div class="challenge-list"><div class="section-heading"><div><p class="eyebrow">ACTIVIDADES DEL CURSO</p><h2>${course.challenges.length} retos para practicar</h2></div></div>
      ${course.challenges.map((challenge, challengeIndex) => {
        const selected = state.answers[challenge.id];
        const isComplete = state.completedChallenges.includes(challenge.id);
        const feedback = isComplete
          ? "¡Reto completado! Tu avance quedó guardado."
          : selected !== undefined
            ? selected === challenge.correct ? "¡Muy bien! Completa este reto para guardar tu resultado." : "No pasa nada. Repasa la lectura e inténtalo otra vez."
            : "Elige una respuesta para continuar.";
        return `<div class="quiz-card"><p class="eyebrow">RETO ${challengeIndex + 1} DE ${course.challenges.length}${isComplete ? " · COMPLETADO" : ""}</p><h2>${challenge.prompt}</h2>
          <div class="quiz-options" role="group" aria-label="Opciones del reto ${challengeIndex + 1}">${challenge.answers.map((answer, index) => `<button class="quiz-option${selected === index ? " selected" : ""}" data-answer="${index}" data-challenge-id="${challenge.id}" ${isComplete ? "disabled" : ""}>${answer}</button>`).join("")}</div>
          <div class="quiz-feedback" aria-live="polite">${feedback}</div>
          <button class="button button-outline" data-complete-challenge="${challenge.id}" ${selected !== challenge.correct || isComplete ? "disabled" : ""}>${isComplete ? "Reto completado ✓" : "Completar reto ✓"}</button>
        </div>`;
      }).join("")}
    </div>
  </article>`;
  openView("leccion");
}

function answerQuestion(challengeId, index) {
  const challenge = activeCourse?.challenges.find((item) => item.id === challengeId);
  if (!activeCourse || !challenge || state.completedChallenges.includes(challenge.id) || !Number.isInteger(index) || index < 0 || index >= challenge.answers.length) return;
  state.answers[challenge.id] = index;
  saveState();
  openLesson(activeCourse.id);
  if (index === challenge.correct) showToast("¡Respuesta correcta! Completa el reto para registrar tu resultado.");
}

function completeChallenge(challengeId) {
  const challenge = activeCourse?.challenges.find((item) => item.id === challengeId);
  if (!activeCourse || !challenge || state.answers[challenge.id] !== challenge.correct || state.completedChallenges.includes(challenge.id)) return;
  state.completedChallenges.push(challenge.id);
  updateCourseCompletion(activeCourse);
  saveState();
  const courseCompleted = state.completed.includes(activeCourse.id);
  openLesson(activeCourse.id);
  showToast(courseCompleted ? "¡Curso completado! Tus retos están guardados sin conexión." : "¡Reto completado! Tu avance está guardado sin conexión.");
}

function updateConnection() {
  const online = navigator.onLine;
  const status = $("#connection-status");
  status.classList.toggle("offline", !online);
  $("#connection-label").textContent = online ? "No se necesita Internet" : "Sin Internet · guardado local";
  [$("#sync-button"), $("#progress-sync-button")].forEach((button) => {
    button.disabled = false;
    button.title = "Guardar tu progreso en este dispositivo";
  });
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

$("#assignment-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const courseId = $("#assignment-course").value;
  const instructions = $("#assignment-instructions").value.trim();
  if (!courses.some((course) => course.id === courseId) || !instructions) return;
  state.assignments.push({ id: createEventId(), courseId, instructions, dueDate: $("#assignment-due").value, createdAt: new Date().toISOString(), synced: false });
  $("#assignment-instructions").value = "";
  $("#assignment-due").value = "";
  saveState();
  showToast("Tarea guardada en este dispositivo.");
});

$("#feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const courseId = $("#feedback-course").value;
  const score = Number($("#feedback-grade").value);
  const comment = $("#feedback-comment").value.trim();
  if (!courses.some((course) => course.id === courseId) || !Number.isInteger(score) || score < 0 || score > 20 || !comment) return;
  state.grades[courseId] = { score, comment, updatedAt: new Date().toISOString(), synced: false };
  $("#feedback-comment").value = "";
  saveState();
  showToast("Calificación guardada localmente.");
});

$("#message-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const text = $("#message-text").value.trim();
  if (!text) return;
  state.messages.push({ id: createEventId(), sender: $("#message-sender").value, text, createdAt: new Date().toISOString(), synced: false });
  $("#message-text").value = "";
  saveState();
  showToast("Mensaje guardado en este dispositivo.");
});

$("#tutor-toggle").addEventListener("click", () => {
  const isExpanded = $("#tutor-toggle").getAttribute("aria-expanded") === "true";
  $("#tutor-toggle").setAttribute("aria-expanded", String(!isExpanded));
  $("#tutor-content").classList.toggle("hidden", isExpanded);
  if (!isExpanded) $("#tutor-question").focus();
});

$("#tutor-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const question = $("#tutor-question").value.trim().toLocaleLowerCase("es");
  const normalizedQuestion = question.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const course = courses.find((item) => [item.title, item.subject, item.id, item.lesson, item.fact].some((value) => value.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(/\W+/).some((word) => word.length > 3 && normalizedQuestion.includes(word))));
  $("#tutor-answer").textContent = course
    ? `Repasemos ${course.title}: ${course.lesson} ${course.fact}`
    : "Prueba con «energía», «ecosistema», «multiplicar», «medidas» o «comprensión». Puedo ayudarte a encontrar una pista en los cursos guardados en este dispositivo.";
});

$("#download-library").addEventListener("click", async () => {
  if (!("caches" in window)) {
    showToast("Este navegador no permite preparar la biblioteca sin conexión.");
    return;
  }
  try {
    const cache = await caches.open("semilla-offline-v14");
    await cache.addAll(["./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./icon.svg"]);
    showToast("Biblioteca preparada para usar sin conexión en este dispositivo.");
  } catch (error) {
    console.error("No se pudo preparar la biblioteca sin conexión.", error);
    showToast("No pudimos guardar la aplicación en este dispositivo. Inténtalo otra vez.");
  }
});

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const lessonButton = event.target.closest("[data-open-lesson]");
  const answerButton = event.target.closest("[data-answer]");
  const speakButton = event.target.closest("[data-speak]");
  const printButton = event.target.closest("[data-print]");
  const saveNoteButton = event.target.closest("#save-note");
  if (saveNoteButton) {
    if (!activeCourse) return;
    state.notes[activeCourse.id] = $("#lesson-note").value.trim();
    saveState();
    showToast("Apuntes guardados en este dispositivo.");
  } else if (speakButton) {
    const course = courses.find((item) => item.id === speakButton.dataset.speak);
    if (!course || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      showToast("La voz de lectura no está disponible en este dispositivo.");
      return;
    }
    if (activeReading?.courseId === course.id) {
      if (activeReading.paused) {
        window.speechSynthesis.resume();
        activeReading.paused = false;
      } else {
        window.speechSynthesis.pause();
        activeReading.paused = true;
      }
      updateReadingButton(course.id);
      return;
    }
    window.speechSynthesis.cancel();
    const reading = new SpeechSynthesisUtterance(`${course.title}. ${course.lesson} ${course.fact}`);
    reading.lang = "es-PE";
    activeReading = { courseId: course.id, utterance: reading, paused: false };
    reading.onend = () => {
      if (activeReading?.utterance !== reading) return;
      activeReading = null;
      updateReadingButton(course.id);
    };
    reading.onerror = (error) => {
      if (activeReading?.utterance !== reading) return;
      activeReading = null;
      updateReadingButton(course.id);
      console.error("No se pudo completar la lectura en voz alta.", error);
      showToast("No se pudo completar la lectura en voz alta.");
    };
    try {
      window.speechSynthesis.speak(reading);
      updateReadingButton(course.id);
    } catch (error) {
      activeReading = null;
      updateReadingButton(course.id);
      console.error("No se pudo iniciar la lectura en voz alta.", error);
      showToast("No se pudo iniciar la lectura en voz alta.");
    }
  } else if (printButton) {
    const course = courses.find((item) => item.id === printButton.dataset.print);
    if (!course) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      showToast("Permite las ventanas emergentes para imprimir o guardar la lectura como PDF.");
      return;
    }
    const challengeHandout = course.challenges.map((challenge, index) => `<h3>Reto ${index + 1}</h3><p>${escapeHtml(challenge.prompt)}</p><ol>${challenge.answers.map((answer) => `<li>${escapeHtml(answer)}</li>`).join("")}</ol>`).join("");
    printWindow.document.write(`<!doctype html><html lang="es"><meta charset="utf-8"><title>${escapeHtml(course.title)}</title><body><h1>${escapeHtml(course.title)}</h1><h2>${escapeHtml(course.subject)}</h2><p>${escapeHtml(course.lesson)}</p><p><strong>¿Sabías que…?</strong> ${escapeHtml(course.fact)}</p>${challengeHandout}<script>window.onload=()=>window.print()<\/script></body></html>`);
    printWindow.document.close();
  } else if (viewButton) {
    event.preventDefault();
    openView(viewButton.dataset.view);
  } else if (lessonButton) {
    openLesson(lessonButton.dataset.openLesson);
  } else if (answerButton) {
    answerQuestion(answerButton.dataset.challengeId, Number(answerButton.dataset.answer));
  } else if (event.target.closest("[data-complete-challenge]")) {
    completeChallenge(event.target.closest("[data-complete-challenge]").dataset.completeChallenge);
  } else if (event.target.closest("#back-home")) {
    openView("inicio");
  } else if (event.target.closest("#sync-button, #progress-sync-button")) {
    saveState();
    showToast("Tu progreso está guardado en este dispositivo.");
  }
});

window.addEventListener("online", () => {
  updateConnection();
});
window.addEventListener("offline", updateConnection);

try {
  const savedUserId = localStorage.getItem(CURRENT_USER_KEY);
  const savedUser = readAccounts().find((account) => account.id === savedUserId);
  if (savedUser) initializeUser({ id: savedUser.id, name: savedUser.name, username: savedUser.username });
  else setAuthMode("login");
} catch (error) {
  console.error("No se pudieron leer las cuentas locales.", error);
  setAuthMode("login");
  $("#auth-error").textContent = "No se pudieron leer las cuentas de este dispositivo.";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("No se pudo registrar el modo sin conexión.", error);
      showToast("No pudimos preparar el modo sin conexión. Intenta volver a cargar la página.");
    });
  });
}
