# 🎮 Gaming Zone | Catálogo de Equipos Gamer

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap-CSS-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
</p>

<p align="center">
  <b>💻 Explora el mundo del gaming y descubre diferentes equipos para llevar tu experiencia al siguiente nivel.</b>
</p>

---

## 🌐 Demo del proyecto

🚀 **Visita y explora nuestra página web:**

👉 [Gaming Zone - Ver proyecto en línea](https://bq2203.github.io/ReactT1/)

---

## 📌 Descripción del proyecto

**Gaming Zone** es una aplicación web desarrollada con React, enfocada en la presentación de laptops y equipos orientados al mundo del gaming.

El proyecto tiene como objetivo ofrecer una interfaz moderna, visualmente atractiva y organizada, donde los usuarios puedan conocer diferentes equipos, explorar sus características y descubrir opciones según sus necesidades.

Durante su desarrollo se implementaron componentes reutilizables, organización modular de archivos y diferentes herramientas del ecosistema de React, buscando mantener un código limpio, escalable y fácil de mantener.

Además, el proyecto incorpora una sección de autenticación con componentes para inicio de sesión, registro y gestión de contraseñas.

## ✨ Características principales

- 🎮 **Catálogo de equipos:** presentación de diferentes laptops y equipos gaming.
- 💻 **Información de productos:** descripciones y características de los equipos.
- 🔐 **Módulo de autenticación:** componentes de inicio de sesión, registro y contraseñas.
- 🧩 **Componentes reutilizables:** desarrollo basado en componentes funcionales de React.
- 🎨 **Interfaz visual:** diseño enfocado en una experiencia agradable y organizada.
- 📱 **Diseño adaptable:** estructura preparada para diferentes dispositivos.
- ⚡ **Desarrollo optimizado:** utilización de Vite para agilizar el entorno de desarrollo.
- 🗂️ **Arquitectura modular:** separación de funcionalidades mediante una estructura basada en features.

## 🛠️ Tecnologías utilizadas

Las siguientes tecnologías y herramientas fueron utilizadas durante el desarrollo:

| Tecnología | Uso dentro del proyecto |
|---|---|
| ⚛️ React 19 | Biblioteca principal para construir interfaces mediante componentes. |
| 🟨 JavaScript (ES6+) | Lenguaje utilizado para desarrollar la lógica y funcionalidad de la aplicación. |
| ⚡ Vite 8 | Herramienta para ejecutar el servidor de desarrollo y compilar el proyecto. |
| 🎨 Bootstrap | Framework CSS utilizado para facilitar la creación de interfaces. |
| 🧭 React Router DOM | Gestión de navegación y rutas entre las diferentes vistas. |
| 💅 Styled Components | Permite trabajar con estilos CSS asociados a componentes. |
| 📲 Vite PWA | Complemento para incorporar funcionalidades de Progressive Web App. |
| 🔍 Oxlint | Herramienta para analizar el código y detectar posibles errores o problemas. |
| 🐙 Git y GitHub | Control de versiones y alojamiento del repositorio. |
| 🌐 GitHub Pages | Plataforma utilizada para publicar la aplicación web. |

## 🧩 Conceptos de React aplicados

Durante el desarrollo se implementaron diferentes conceptos fundamentales de React:

- **Componentes funcionales:** permiten dividir la aplicación en secciones independientes y reutilizables.
- **JSX:** permite combinar estructuras similares a HTML con código JavaScript.
- **Props:** facilitan el envío de información entre componentes.
- **Renderizado dinámico:** permite generar elementos de la interfaz a partir de estructuras de datos.
- **Modularización:** organiza el código según las funcionalidades de la aplicación.
- **Reutilización de código:** permite aprovechar componentes en diferentes partes del proyecto.
- **Separación de responsabilidades:** mantiene organizados los elementos visuales, las páginas y los servicios.

## 📁 Estructura del proyecto

El proyecto utiliza una arquitectura modular basada en funcionalidades (*Feature-Based Architecture*), separando los componentes de autenticación y la página principal.

```text
ReactT1/
│
├── dist/                         # Versión compilada del proyecto
├── node_modules/                 # Dependencias instaladas
├── public/                       # Recursos públicos
│
├── src/
│   │
│   ├── assets/                   # Recursos gráficos e imágenes
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── features/                 # Funcionalidades principales
│   │   │
│   │   ├── auth/                 # Módulo de autenticación
│   │   │   ├── components/
│   │   │   │   ├── Contrasena.jsx
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Registrer.jsx
│   │   │   │
│   │   │   ├── hooks/            # Hooks personalizados
│   │   │   ├── services/         # Servicios de autenticación
│   │   │   └── pages/            # Páginas de autenticación
│   │   │
│   │   └── landing/              # Página principal
│   │       │
│   │       ├── components/       # Componentes de la página
│   │       │   ├── Footer.jsx
│   │       │   ├── Header.jsx
│   │       │   ├── Main.jsx
│   │       │   ├── Props.jsx
│   │       │   └── Rickandmorty.jsx
│   │       │
│   │       ├── hooks/            # Hooks personalizados
│   │       ├── pages/            # Páginas principales
│   │       └── services/         # Servicios de la página
│   │
│   ├── App.jsx                   # Componente principal
│   └── main.jsx                  # Punto de entrada de React
│
├── .gitignore                    # Archivos ignorados por Git
├── .oxlintrc.json                # Configuración de Oxlint
├── index.html                    # Documento HTML principal
├── package.json                  # Dependencias y scripts
├── package-lock.json             # Registro de versiones de dependencias
├── vite.config.js                # Configuración de Vite
└── README.md                     # Documentación del proyecto
```

### 🔎 Explicación de la estructura

**📂 src/assets**

Contiene los recursos gráficos utilizados en la aplicación, como imágenes e iconos.

**📂 src/features**

Es la carpeta principal de funcionalidades. Permite organizar el proyecto por módulos independientes.

- **auth:** contiene los componentes relacionados con la autenticación, como inicio de sesión, registro y contraseñas.
- **landing:** contiene los elementos que conforman la página principal, como el encabezado, contenido y pie de página.

**📂 components**

Almacena los componentes funcionales de React que construyen las diferentes secciones de la interfaz.

**📂 services**

Organiza la lógica relacionada con servicios y operaciones de cada funcionalidad.

**📂 pages**

Permite organizar las diferentes páginas de cada módulo.

**📄 App.jsx**

Componente principal encargado de organizar la estructura general de la aplicación.

**📄 main.jsx**

Punto de entrada de React, donde se inicializa y renderiza la aplicación.

### ⚙️ Archivos de configuración

| Archivo | Descripción |
|---|---|
| `index.html` | Documento HTML principal donde se monta la aplicación React. |
| `package.json` | Contiene la información del proyecto, dependencias y scripts disponibles. |
| `package-lock.json` | Registra las versiones exactas de las dependencias instaladas. |
| `vite.config.js` | Configura el entorno de desarrollo y compilación de Vite. |
| `.oxlintrc.json` | Contiene las reglas de configuración de Oxlint. |
| `.gitignore` | Define los archivos y carpetas que Git debe ignorar. |
| `README.md` | Documento principal de descripción y documentación del proyecto. |

## 🚀 Despliegue

La aplicación se encuentra publicada mediante **GitHub Pages**, lo que permite acceder al proyecto desde cualquier navegador a través de internet.

🔗 **Enlace del despliegue:**

https://bq2203.github.io/ReactT1/

El repositorio de GitHub permite consultar el código fuente, revisar los componentes y conocer la organización interna del proyecto.

<p align="center">
  <b>🎮 GAMING ZONE</b>
  <br/>
  💻 Tecnología, innovación y gaming en un solo lugar.
  <br/><br/>
  Desarrollado con ⚛️ React y mucha creatividad.
</p>