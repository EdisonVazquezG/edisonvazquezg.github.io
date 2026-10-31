# Publicar un ensayo

Los PDF de los ensayos se guardan en esta carpeta y se enlazan desde la sección **Essays / Ensayos** de la página principal.

## Desde GitHub

1. Abre esta carpeta en el repositorio y selecciona **Add file → Upload files**.
2. Sube el PDF con un nombre sencillo, sin espacios ni acentos, por ejemplo `libre-albedrio.pdf`, y guarda el cambio en `main`.
3. Edita `index.html` en la raíz del repositorio y busca `<section id="essays"`.
4. Copia el siguiente bloque dentro de esa sección, fuera del comentario HTML. Sustituye el título, la fecha, el idioma, la descripción y las dos rutas por los datos del ensayo.
5. Al publicar el primero, elimina el párrafo con `id="essays-empty"`. Guarda el cambio en `main` y espera a que GitHub Pages termine de publicar.

```html
<article class="history-item" lang="es">
  <h3>Título del ensayo</h3>
  <p class="meta"><time datetime="2026-10-31">31 de octubre de 2026</time> · Español</p>
  <p>Una breve descripción del ensayo.</p>
  <ul class="links-list">
    <li><a href="essays/nombre-del-ensayo.pdf" target="_blank" rel="noopener noreferrer">Leer PDF</a></li>
    <li><a href="essays/nombre-del-ensayo.pdf" download>Descargar PDF</a></li>
  </ul>
</article>
```

Pon los ensayos más recientes primero. Para un ensayo en inglés, usa `lang="en"` y adapta las etiquetas a `Read PDF` y `Download PDF`.

El enlace público tendrá esta forma: `https://edisonvazquezg.github.io/essays/nombre-del-ensayo.pdf`. Ese ejemplo funcionará cuando se haya subido un archivo con ese nombre.

## Actualizar un PDF

Reemplaza el archivo conservando el nombre para mantener su enlace. Si publicas versiones distintas que quieras conservar, usa nombres diferentes y actualiza la entrada correspondiente.

## Alternativa: Google Drive

También puedes usar un enlace de Google Drive en la entrada. Configura el archivo como **Cualquier persona con el enlace → Lector**, comprueba que abre sin iniciar sesión y sustituye los enlaces del ejemplo por el enlace compartido. En ese caso usa un único enlace `Leer PDF` y omite el enlace de descarga, cuyo atributo `download` está pensado aquí para archivos del mismo sitio.

Para una colección personal de ensayos, alojar los PDF junto con la web mantiene los enlaces bajo el mismo dominio y evita tener que gestionar permisos en otro servicio.
