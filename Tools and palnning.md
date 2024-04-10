# Frontend
## Tools
Created directory [frontend](frontend)
Using [vite](https://vitejs.dev/guide/) and react with typescript  for the frontend project
`npm create vite@latest frontend -- --template react-ts`

Using [React-Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction)
`npm install react-bootstrap bootstrap`

Using [React Router](https://reactrouter.com/en/main/start/overview) for client side routing
`npm i react-router-dom`



## Development

The pages , components and types go into the following directories:
- [pages](frontend\src\pages)
- [components](frontend/src/components)
- [types](frontend/src/types)

### Types
- [Product](frontend/src/types/Product.ts) represents a product entity.

### Components

### Pages
- [Homepage](frontend/src/pages/Homepage.tsx) , is the homepage of the app
- [ProductPage](frontend/src/pages/ProductPage.tsx), is the page for the individual products

# Backend
 1. Created directory [backend](backend).
 2. Create node project via `npm init`.
 3. Configure typescript via `npm install --save-dev typescript ts-node-dev`
 4. Configure eslint via `npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
 5. Create express server:

        ```
        npm install express
        npm install --save-sev @types/express
        ```
6. Create [src](backend/src) directory with the [index](backend/src/index.ts) typescript file