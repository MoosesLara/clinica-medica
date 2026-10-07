# 🏥 Buenas Prácticas y Guía de Desarrollo para Aura Surgical (Vite + React)

Guía condensada de arquitectura, rendimiento, SEO y UX para aplicaciones del sector salud y clínicas de alta precisión.

## 🏗️ 1. Arquitectura y Código
*   **Vite + React SPA:** Aprovechar la rapidez de Vite. Mantener componentes funcionales enfocados y reutilizables.
*   **Estructura por Funcionalidad (Feature-First):** Agrupar código por contexto médico (`/features/appointments`, `/features/specialties`, `/features/clinics`) en lugar de amontonarlo todo en `components/` para mantener escalabilidad.
*   **Separación de Preocupaciones:** Mantener la lógica de estado, validación de formularios y llamadas a APIs (`AppointmentService`) separadas estrictamente de la UI.
*   **Tipado Estricto:** Usar TypeScript rigurosamente, esto es especialmente crítico para estructurar datos médicos, perfiles de pacientes y manejo de fechas de citas.

## ⚡ 2. Rendimiento (Core Web Vitals)
*   **Optimización de Imágenes LCP:** 
    *   Servir imágenes en formatos modernos (WebP/AVIF).
    *   Precargar la imagen principal del "Hero" y usar el atributo `loading="lazy"` para galerías, perfiles médicos o logos debajo del primer scroll.
*   **Code Splitting:** Usar `React.lazy()` y `Suspense` para cargar dinámicamente componentes pesados (ej. mapas interactivos de las clínicas) solo cuando el usuario haga scroll hacia ellos.
*   **Skeleton Loaders:** Mostrar esqueletos de carga durante la validación de disponibilidad de horarios de citas para reducir la ansiedad del paciente.

## 🔗 3. SEO, Metadatos y Accesibilidad (a11y)
*   **SEO en React (React Helmet o SSG):** Inyectar meta etiquetas dinámicas por vista para asegurar la indexación correcta de los servicios médicos.
*   **URLs Descriptivas para Salud:**
    *   ✅ **Bien:** `/especialidades/cirugia-laparoscopica-avanzada`
    *   ❌ **Mal:** `/servicios/id-1234`
*   **Schema.org (JSON-LD):** Insertar marcado estructurado de tipo `MedicalClinic`, `Physician`, y `MedicalProcedure`. Esto es vital para que Google destaque perfiles de doctores, horarios y reseñas locales de la clínica directamente en las búsquedas.
*   **Accesibilidad Médica (Crucial):** Contraste impecable, etiquetas ARIA en el formulario de citas y navegación 100% por teclado para pacientes con limitaciones visuales o motoras.

## 🎨 4. UX y Diseño Premium (Pixel-Perfect)
*   **Tailwind CSS v4:** Aprovechar las variables del bloque `@theme` nativo para mantener consistencia absoluta en los colores corporativos de la clínica (`brand-navy`, `brand-emerald`).
*   **Flujos de Cita sin Fricción:** El agendamiento debe ser asíncrono y con validación inline de errores (ej. formato de teléfono erróneo) para que el paciente sienta un sistema robusto y moderno.
*   **Micro-animaciones (Feedback Visual):** Animaciones suaves y transiciones (ej. botón de "Confirmar Cita" o alertas de éxito) que transmitan profesionalismo, higiene técnica y tranquilidad.
*   **Responsive y Mobile-First:** El 70-80% de las citas médicas se reservan por el móvil. Los selectores de sede y los botones deben ser "touch-friendly" (grandes y bien espaciados).

## 💾 5. Manejo de Datos y Testing
*   **Seguridad (RGPD / Privacidad Médica):** Nunca exponer datos sensibles. Toda petición del formulario debe cifrarse y enviarse de manera segura a la API.
*   **Testing E2E con Playwright:** Cubrir obligatoriamente el flujo crítico: un script automatizado que pruebe que el formulario de citas funciona y no se rompe en producción bajo ninguna circunstancia.

## 💡 6. Roadmap y Funciones Clave Prioritarias
*   **[ ] Backend de Agendamiento:** Conectar el formulario de citas actual con una API para correos (SendGrid/Resend) o un CRM de reservas.
*   **[ ] Mapas Interactivos:** Implementar un mapa enriquecido para ubicar la "Clínica Metropolitana" y el "Hospital San Gabriel".
*   **[ ] Portal del Paciente (Fase 2):** Área de autenticación segura para descargar reportes posoperatorios.
*   **[ ] Soporte Multi-idioma (i18n):** Adaptar el sitio para el turismo médico (traducción Inglés/Español).
