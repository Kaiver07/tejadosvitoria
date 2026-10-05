<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Analítica

5/10/2026: GA4 retirado por decisión del propietario; Vercel Web Analytics es
la medición. Hay que activarlo en el panel de Vercel (proyecto → Analytics →
Enable) o el script da 404. Mide visitas sin cookies ni almacenamiento en el
dispositivo, por eso la web no tiene banner de cookies; si se añade algo que
sí use cookies no técnicas, hay que volver a pedir consentimiento y actualizar
`politica-de-cookies.astro`. Los eventos `call_click` y `form_submit` se envían
con `window.va` (`BaseLayout.astro`), pero solo se registran en el plan Pro.
