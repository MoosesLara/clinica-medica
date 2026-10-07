# Guideline de Desarrollo

## Estructura de Directorios (Propuesta para Refactor)
- `src/components/`: Componentes aislados (Botones, Inputs, Cards).
- `src/sections/`: Secciones grandes de la página (Hero, Clínicas, Especialidades).
- `src/hooks/`: Custom hooks para lógica de UI.
- `tests/`: Pruebas de Playwright E2E.

## Convenciones de Código
- **TypeScript**: Estricto. Definir las interfaces para todas las props.
- **Estilos**: Centralizados en el framework de Tailwind (v4) para consistencia global.
- **Git**: Commits descriptivos y features aisladas en ramas.
