🏎️ F1 Standings UI Simulator DEMO:https://f1-ui-simulator.netlify.app/

A React + Vite based UI-only project that displays Formula 1 teams, drivers, and standings in a clean and interactive layout.

⚠️ Important Notice

This project does NOT use any API.

All data is static and hardcoded

Standings will not update automatically

The purpose of this project is UI design & React practice only

If you’re looking for live F1 data, this project is not meant for that.

✨ Features

Driver standings (2026 – all points set to zero)

Team-wise driver mapping

Team colors & car images

Clean UI built with Tailwind CSS

Component-based React structure

📁 Project Structure
src/
├─ data/
│  ├─ calendar.js
│  ├─ drivers.js
│  ├─ standings.js
│  └─ teams.js
│
├─ pages/
│  ├─ Home.jsx
│  ├─ Standings.jsx
│  ├─ Drivers.jsx
│  ├─ Teams.jsx
│  └─ Calendar.jsx
│
├─ components/
│  └─ Navbar.jsx
│
├─ App.jsx
└─ main.jsx

🛠 Tech Stack

React

Vite

Tailwind CSS

JavaScript (ES6+)






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
