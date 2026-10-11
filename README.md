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

## Contact delivery and testing

Run `npm ci`, `npm test`, `npm run lint` and `npm run build` before review. The tests cover contact validation and email/WhatsApp handoff encoding without sending real enquiries. Use `npm run preview` to inspect the production build.

When `VITE_CONTACT_ENDPOINT` is absent, a validated contact form prepares a draft addressed to `infoadventyz@gmail.com`. The visitor must open and send it in their email app; the website does not claim delivery. The floating form opens a WhatsApp draft for the existing business number and includes a continuation link for blocked popups.

For automatic delivery, configure a **public HTTPS endpoint** as `VITE_CONTACT_ENDPOINT` in the build environment. Vite exposes this value in the browser; never put credentials in it. The client sends `POST` with `Content-Type: application/json` and trimmed string fields: `name`, `email`, `phone`, `company`, `website`, `service`, `budget`, `message`. Any successful HTTP status displays success; non-success statuses, network failures and a 15-second timeout retain details for retry. Pending requests disable edits and duplicate submissions; leaving Contact aborts the request. The endpoint must support the site's origin and JSON preflight, validate data independently, enforce abuse controls and perform delivery securely. No backend or secrets are bundled in this repository.

Required fields: name, email, listed service, message. Optional website accepts a domain or HTTP(S) URL without embedded credentials. Limits: name 100, email/company 150, phone 25, website 2048, message 2000 characters. The form never renders submitted HTML. Email and WhatsApp draft data are URL encoded; opening their drafts shares the data with the selected app/service.

See [the responsive audit](docs/responsive-audit.md) for defects, fixes, verification and remaining physical-device checks. This repair branch targets latest main as explicitly requested for this audit; review and approval precede merge/deployment.
