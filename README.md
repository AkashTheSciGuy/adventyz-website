# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# Adventyz Website

React + Vite website for Adventyz.

## Requirements

- Node.js
- npm
- Git

## Install

npm install

## Development

npm run dev

## Lint

npm run lint

## Production Build

npm run build

## Production Preview

npm run preview

## Git Workflow

main
- production only

develop
- integration branch

feature/*
- feature work

perf/*
- performance work

chore/*
- maintenance/release preparation

Normal workflow:

git checkout develop
git pull origin develop
git checkout -b feature/<name>

Open pull requests into develop.

## Routes

/
 /about
 /services
 /work
 /process
 /contact

## Brand

Orange: #E9951A
White: #F7F7F7
Black: #000000

Primary brand font:
Gilroy ExtraBold

## Deployment

Build command:

npm run build

Output directory:

dist

SPA routing must fall back to index.html.

## Security

Do not commit:
- .env files
- private API keys
- SMTP credentials
- passwords