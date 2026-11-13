# Hotel Chirripó — sitio web (ES/EN)

Sitio estático del **Hotel Chirripó**, frente al Parque Central de San Isidro de El General,
Pérez Zeledón. Construido sobre la plantilla Astro del repositorio, con una identidad distinta:
azul profundo, cobre, Lora + Karla.

> Antes de publicar, leer **[PENDIENTES.md](./PENDIENTES.md)**. Este hotel no tiene fotos
> disponibles: todas las imágenes son marcadores de posición.

## Identidad

- **Tipografías:** Lora (títulos), Karla (texto), Space Mono (etiquetas).
- **Colores:** azul profundo `#0b1e2e` / `#14304a`, cobre `#995831`, papel `#f7f5f0`.
- **Detalles:** botones rectos, etiquetas con cuadrado cobre, hero tipográfico con curvas de nivel.

## Datos usados

| Dato | Valor | Fuente |
| --- | --- | --- |
| Dirección | Calle 1, entre Av. 2 y 4, costado sur del Parque Central | Tripadvisor |
| Teléfonos | 2771-0529 · 2771-0487 | Lista CONCITES 2022 |
| Correo | chirripohr13@gmail.com | Amarillas CR |
| Habitaciones | 22 | Petit Futé |
| Rating | 4.0/5 Google (196) · 3.8/5 Tripadvisor (45) | Google / Tripadvisor |
| Precios | desde US$35 (baño compartido) | Petit Futé |
| Servicios | Wi-Fi, parqueo, restaurante, desayuno, no fumadores | Tripadvisor |

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321 · /en/ para inglés
npm run build     # /dist
npm run preview
```

## Rutas

| Página | Español | Inglés |
| --- | --- | --- |
| Portada | `/` | `/en/` |
| Habitaciones | `/habitaciones/` | `/en/rooms/` |
| Económica | `/habitaciones/economica/` | `/en/rooms/economica/` |
| Doble | `/habitaciones/doble/` | `/en/rooms/doble/` |
| Familiar | `/habitaciones/familiar/` | `/en/rooms/familiar/` |

## Estructura

- `src/data/hotel.ts` — contenido ES/EN, precios, habitaciones y SEO.
- `src/data/ui.ts` — botones, formularios, navegación.
- `src/lib/i18n.ts` — rutas y cambio de idioma.
- `src/views/` — páginas compartidas.
- `src/components/` — secciones.
- `src/styles/global.css` — colores, tipografías y estilos.
- `public/img/` — vacío hasta recibir fotos.

## Cuando el hotel confirme datos

1. Editar `shared` en `src/data/hotel.ts` (teléfono, WhatsApp, correo, horarios).
2. Actualizar `rooms` en `hotels.es` y `hotels.en`.
3. Guardar fotos en `public/img/` y apuntar `image`.
4. Cambiar `site` en `astro.config.mjs` y el sitemap en `robots.txt`.
5. Revisar la traducción al inglés.
