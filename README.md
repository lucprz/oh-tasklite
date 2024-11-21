# Oh! TaskLite

¡Bienvenido a **TaskLite**! Una aplicación para la gestión de tareas simple y optimizada.

## Características

- **Gestión de tareas**: Crea tus tareas, organiza como desees entre las columnas y guarda tu sesión para cuando quieras cambiar algo o volver a abrir la app.
- **Modo oscuro**: Cambia entre temas claro y oscuro.
- **Navbar con íconos de accesibilidad**: Incluye el enlace al repositorio de GitHub y un toggle para el tema de la aplicación.
- **Footer informativo**: Información en la parte inferior.

## Requisitos

- **Node.js**: Versión 18.17.0 o superior.
- **npm**: Instalado junto con Node.js.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/username-here/oh-tasklite.git
   cd oh-tasklite

   ```

2. Instala las dependencias:

   ```bash
   npm install

   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev

   ```

4. Abre tu navegador en http://localhost:3000 para ver la aplicación.

## Scripts principales

`npm install`: Instala todas las dependencias del proyecto.

`npm run dev`: Inicia el servidor de desarrollo en modo local.

`npm run build`: Compila la aplicación para producción.

`npm start`: Sirve la aplicación construida en modo producción.

## Estructura del proyecto

```
tasklite/
├── public/
├── app/
│   ├── constants/
│   ├── context/
│   ├── hooks/
│   ├── styles/
│   ├── types/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Documentación

Estas son las documentaciones más importantes que he usado:

[Nextjs](https://nextjs.org/docs)

[Shadcn](https://ui.shadcn.com/docs)

[Tailwindcss](https://tailwindcss.com/docs/installation)

## Autor

Lucas Perez

[Github](https://github.com/lucprz) | [LinkedIn](https://www.linkedin.com/in/lucprzfs/)
