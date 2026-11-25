# 🦸 Marvel Explorer — Vite + React + TypeScript

Aplicación web que consume una API pública de superhéroes, muestra los **personajes de Marvel** en una grilla y permite buscarlos para ver su ficha de detalle.

🔗 **Demo:** https://vite-react-api-prueba.vercel.app

---

## ✨ Funcionalidades

- **Consumo de API pública:** obtiene los datos de [Superhero API (akabab)](https://akabab.github.io/superhero-api/), sin clave de acceso.
- **Filtro por editorial:** muestra solo los personajes publicados por *Marvel Comics*, con un contador del total.
- **Grilla responsive:** las tarjetas se reorganizan solas según el ancho de la pantalla (CSS Grid con `auto-fill` + `minmax`).
- **Buscador:**
  - Se activa con la tecla **Enter**.
  - No distingue mayúsculas de minúsculas y acepta nombres parciales (por ejemplo, `spider` encuentra a Spider-Man).
  - Muestra un mensaje si no encuentra al personaje y lo oculta al volver a escribir.
  - Ignora las búsquedas vacías.
- **Ficha de detalle (modal):** imagen en grande con nombre real, alias, estadísticas (inteligencia, fuerza y velocidad) y apariencia (género, raza, altura, peso, color de ojos y de cabello).
  - Scroll interno y botón **Volver** fijo (`sticky`) cuando el contenido es largo.
  - En pantallas angostas, la imagen se coloca arriba y la información debajo.

## 🛠️ Tecnologías

| Herramienta | Uso |
|-------------|-----|
| [React](https://react.dev) | Interfaz basada en componentes y estado |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático |
| [Vite](https://vitejs.dev) | Servidor de desarrollo y empaquetado para producción |
| CSS (Grid, Flexbox, variables) | Estilos y diseño responsive |
| [Vercel](https://vercel.com) | Despliegue continuo desde GitHub |

## 🚀 Ejecutar en local

**Requisitos:** [Node.js](https://nodejs.org) y Git instalados.

```bash
# 1. Clonar el repositorio
git clone https://github.com/Miguezx21/vite-react-api-prueba.git
cd vite-react-api-prueba

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abre `http://localhost:5173` en el navegador.

### Otros comandos

| Comando | Descripción |
|---------|-------------|
| `npm run build` | Revisa los tipos con TypeScript y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve en local la versión de producción ya compilada |

## 🔄 Flujo de despliegue

```
Código local → git push → GitHub → Vercel detecta el push → npm run build → publicación
```

Cada `push` a la rama `main` genera un despliegue automático en Vercel. Si el build falla, Vercel mantiene publicada la última versión que funcionaba.

## 📁 Estructura principal

```
src/
├── App.tsx      # Lógica: estados, fetch a la API, búsqueda y renderizado
├── App.css      # Estilos de la grilla, las tarjetas, el buscador y el modal
├── index.css    # Paleta de colores (variables CSS) y estilos globales
└── main.tsx     # Punto de entrada: monta <App /> en el #root del index.html
```

## 🧠 Conceptos aplicados

- **`useState`** para guardar los personajes, el texto de búsqueda, el personaje seleccionado y el estado de "no encontrado".
- **`useEffect`** con arreglo de dependencias vacío (`[]`) para pedir los datos una sola vez al montar el componente.
- **`fetch`** con promesas encadenadas (`.then`).
- Métodos de arrays: **`filter`**, **`find`**, **`map`**, **`slice`** y **`join`**.
- **Renderizado condicional** con `&&` y **listas con `key`** única.
- **Input controlado** (`value` + `onChange`) y formulario con `onSubmit` + `preventDefault()`.
- **CSS:** selectores descendientes, especificidad, herencia, variables (`var(--...)`), `position: fixed` / `sticky`, `z-index` y media queries.

## ♿ Accesibilidad

- Texto alternativo (`alt`) con el nombre de cada personaje.
- `aria-label` en el buscador.
- Indicador de foco visible para quienes navegan con teclado.
- Respeta la preferencia de movimiento reducido del sistema (`prefers-reduced-motion`).

## 👤 Autor

**Miguel Ángel Peña Rodríguez** — Estudiante de Ingeniería de Software, UDLA
GitHub: [@Miguezx21](https://github.com/Miguezx21)

---

*Los datos de los personajes provienen de [Superhero API](https://github.com/akabab/superhero-api). Marvel y sus personajes son marcas de sus respectivos propietarios. Proyecto con fines educativos.*
