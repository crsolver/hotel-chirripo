# PENDIENTES — Hotel Chirripó

Sitio de demostración. Hay datos verificados y varios placeholders.
**No publicar sin resolver esta lista.**

## 1. Datos confirmados (con fuente)

| Dato | Valor | Fuente |
| --- | --- | --- |
| Dirección | Calle 1, entre Avenida 2 y 4, costado sur del Parque Central | Tripadvisor |
| Teléfonos | 2771-0529 · 2771-0487 | Lista CONCITES 2022 / Cámara Brunca |
| Correos | chirripohr13@gmail.com · hotelchirropo@ice.co.cr · melosca@hotmail.com | Amarillas CR / lista 2022 / Cámara 2021 |
| Facebook | facebook.com/hotelchirripopz | Google |
| Habitaciones | 22 | Petit Futé |
| Calificación | 4.0/5 (196 reseñas Google) · 3.8/5 (45 Tripadvisor) | Google / Tripadvisor |
| Servicios | Wi-Fi gratis, parqueo, restaurante, desayuno, no fumadores | Tripadvisor |
| Precios de referencia | doble con baño compartido US$35; hasta US$60 según comodidad | Petit Futé |
| Tarifas 2022 | 1 persona ₡8.300 · 2 personas ₡14.000 | Lista CONCITES 2022 |
| Horario | abierto 24 horas | Amarillas CR |

## 2. Placeholders y contradicciones

| Dato | Valor usado | Nota |
| --- | --- | --- |
| WhatsApp | 2771 0529 (fijo) | No confirmado. `wa.me` puede no funcionar con fijo. |
| Correo principal | chirripohr13@gmail.com | Hay tres correos históricos; confirmar cuál está activo. |
| Check-in / check-out | 14:00 / 12:00 | Inventados. |
| Precios | US$35 / 48 / 60 | Referencias de terceros, no tarifa oficial. |
| Tipos de habitación | Económica (baño compartido), Doble (baño privado), Familiar | Inferidos de las fuentes; los nombres y cantidades no están confirmados. |
| Tamaños | 14 / 18 / 24 m² | Estimados. |
| Desayuno | “Incluido” | **Contradicción:** Tripadvisor y Rough Guides dicen incluido; Petit Futé dice que se paga aparte. Confirmar. |
| Recepción 24 h | Sí | Basado en “abierto 24 horas” de Amarillas; confirmar que aplica a recepción. |
| A/C | “Abanico o A/C” | La lista 2022 menciona ambos; confirmar qué habitaciones tienen aire. |
| Dominio | hotelchirripo.cr | Supuesto. Cambiar en `astro.config.mjs` y `robots.txt`. |

## 3. Fotos: no hay

- No se encontraron fotos del hotel con permiso de uso. La página de Facebook no está
  disponible actualmente (“This page isn’t available right now”), Tripadvisor bloquea la
  descarga y el directorio local ya no tiene la ficha.
- **Todas las imágenes del sitio son marcadores de posición** (bloques azules con el nombre
  del espacio). El diseño está pensado para que se vean intencionales, pero deben reemplazarse.
- Pedir al hotel: fachada, recepción, restaurante, una foto por tipo de habitación y el baño
  compartido. También logo en alta resolución.
- Al recibirlas: guardarlas en `public/img/` y apuntar `image` en `src/data/hotel.ts`.

## 4. Cuidado con fuentes poco fiables

Varios sitios generados con IA (motelesencostarica.one, tsimer) afirman que el hotel tiene
**piscina, bar y suites**. No se usó nada de eso porque no aparece en Tripadvisor, Rough Guides
ni en la lista de precios. Confirmar antes de agregarlo.

## 5. Textos y reseñas

- Las dos reseñas son citas reales (Tripadvisor y un blog de viaje) traducidas al inglés.
  Confirmar que el hotel quiera mostrarlas y revisar la atribución.
- La calificación individual (4 estrellas) es una estimación, no el puntaje que dejó el huésped.
- Revisar la traducción al inglés con alguien del hotel.

## 6. Antes de entregar

- [ ] Confirmar WhatsApp, correo y tarifas.
- [ ] Resolver la contradicción del desayuno.
- [ ] Confirmar tipos de habitación y qué incluye cada una.
- [ ] Reemplazar todas las fotos.
- [ ] Cambiar dominio y sitemap.
- [ ] Probar formularios desde un teléfono (ES y EN).
- [ ] Verificar el pin del mapa en la puerta del hotel.
- [ ] Lighthouse en móvil.
