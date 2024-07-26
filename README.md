# Blog Application using React.js (Vite)

## Technologies used

- React.js
- Vite
- VS Code
- Tailwind CSS
- HTML
- AppWrite

### AppWrite Services - BACKEND

- [appwrite](https://cloud.appwrite.io/console/organization-6682d0da00151ac949ef) used for backend services of this project.

### packages used

```
npm install
npm i @reduxjs/toolkit react-redux react-router-dom appwrite react-hook-form
npm i @tinymce/tinymce-react
npm i html-react-parser
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

### add below config to the index.css file

```

@tailwindcss base;
@tailwindcss components;
@tailwindcss utilities;

```

### add below configuration to tailwind config file

```

content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",]

```

.env file not included, instead sample env file included to showcase the environment variables.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  "#Blog ReactJS"
