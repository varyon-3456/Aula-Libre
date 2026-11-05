# Aula Libre — aprender sin Internet

Aula Libre es una muestra de una aplicación educativa web **offline-first**. Incluye 9 cursos y 27 retos autocorregibles de Ciencia, Matemática y Comunicación.

## Probar la aplicación

La aplicación debe abrirse desde `localhost` o desde un sitio HTTPS. No abras `index.html` directamente como archivo, porque el navegador restringe funciones como el almacenamiento y el Service Worker.

### Publicar una demostración con GitHub Pages

1. Crea un repositorio público en GitHub.
2. Sube el contenido de esta carpeta a la raíz del repositorio.
3. En GitHub, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub Pages publique el sitio y abre la URL que aparece en esa sección.

La primera visita necesita conexión a Internet. Después de cargar la aplicación correctamente, el Service Worker puede almacenar los archivos de la interfaz para visitas posteriores sin conexión, sujeto al soporte y las políticas del navegador.

### Probar localmente

También puedes servir la carpeta con un servidor local. Si tienes Python instalado, abre una terminal en esta carpeta y ejecuta:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Funciones incluidas

- 9 cursos y 27 retos autocorregibles con lecturas y actividades.
- Aplicación web progresiva (PWA) con caché de la interfaz y el contenido.
- Apuntes, respuestas, mensajes y progreso guardados localmente.
- Lectura en voz alta con las voces disponibles en el dispositivo.
- Impresión o guardado de lecturas como PDF.
- Tutor guiado local basado en el contenido incluido.

## Límites de esta demostración

- Las cuentas y el progreso se guardan en el almacenamiento local del navegador y en ese dispositivo.
- Las cuentas no se comparten ni sincronizan entre diferentes dispositivos.
- No existe servidor, base de datos en la nube ni sincronización real.
- Borrar los datos del navegador puede eliminar las cuentas y el progreso.
- La protección local de contraseña no sustituye un sistema de autenticación de servidor para información sensible.
- La disponibilidad de la lectura en voz alta depende del navegador y del dispositivo.
- No se incluyen archivos externos de audio o video.

Esta publicación es una demostración del prototipo, no un servicio multiusuario en producción.
