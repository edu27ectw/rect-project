# rect-project
React Project VIte
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project status (CI/CD + tests)

- Node.js version: 22.12.0+ (requerido para `vite@8` y `rolldown`)
- `npm install` se ejecutó con éxito y las dependencias están instaladas.
- `npm run lint` pasó sin errores.
- `npm run test -- --run` ejecuta 21 tests y está pasando.

### Cómo correr localmente

1. `nvm use 22.12.0`
2. `npm install`
3. `npm run dev`
4. Abrir `http://localhost:3000`
5. `npm run test -- --run`
6. `npm run lint`

### GitHub Actions

- Workflow implementado en `.github/workflows/test.yml`:
  - `checkout`
  - `setup-node` v18
  - `npm ci`
  - `npm run lint`
  - `npm run test -- --coverage --run`
  - `codecov` (opcional)

### Tips

- En commits a la rama `main/develop` o en PRs a esas ramas el workflow se ejecuta automáticamente.
- Si ves error EUSAGE en CI, sincroniza lockfile con `npm install` y empuja (`git add package-lock.json`).
