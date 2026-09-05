# Picket — Landing Page

Landing page estático de Picket, preparado para GitHub Pages.

## Estructura
- `index.html` — contenido y estructura.
- `styles.css` — identidad visual, responsive y animaciones.
- `script.js` — menú móvil y animaciones.
- `images/` — fotografías optimizadas en WebP suministradas para el landing.

## Formulario
El formulario está preparado para Formspree + Cloudflare Turnstile.
Antes de publicar, sustituye en `index.html`:
- `YOUR_FORMSPREE_FORM_ID`
- `YOUR_TURNSTILE_SITE_KEY`

El destinatario del formulario se configura en Formspree. El landing muestra `ventas@picket.app` como contacto comercial.

## Publicación
Sube todo el contenido de esta carpeta al repositorio de GitHub y activa GitHub Pages desde `Settings → Pages → Deploy from a branch → main → /(root)`.

## Imágenes
Las cinco imágenes se incluyen localmente para evitar depender de los enlaces externos de Base44 una vez publicado el sitio.
