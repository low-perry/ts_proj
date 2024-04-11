# Frontend
## Tools
Created directory [frontend](frontend)
Using [vite](https://vitejs.dev/guide/) and react with typescript  for the frontend project
`npm create vite@latest frontend -- --template react-ts`

Using [React-Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction)
`npm install react-bootstrap bootstrap`

Using [React Router](https://reactrouter.com/en/main/start/overview) for client side routing
`npm i react-router-dom`

Using [axios](https://axios-http.com/docs/intro) for the http requests to the api.
`npm install axios`
        After setting the baseURL at [main.tsx](frontend/src/main.tsx) need to install
        node types via `npm i --save-dev @types/node`



## Development

The pages , components and types go into the following directories:
- [pages](frontend\src\pages)
- [components](frontend/src/components)
- [types](frontend/src/types)

At [Homepage.tsx](frontend/src/pages/Homfrontendepage.tsx) define the following types:

```typescript
type State = {
        products : Product[],
        loading: boolean,
        error: string
        }

type Action = {type: 'FETCH_REQUEST'} 
        | {type: 'FETCH_SUCCESS'; payload: string}
        | {type: 'FETCH_FAIL'; payload: string}
```
        
        `State` is used to represent the state of the Homepage <br>
        `Action` represents an action that can be dispatched in a Redux application
        Both serve as parameters for the reducer function.

Create [utils.ts](frontend/src/utils.ts) and define `getError` function.



                

### Types
- [Product](frontend/src/types/Product.ts) represents a product entity.
- [APIError](frontend/src/types/APIError.ts) represents the API error response

### Components
- [LoadingBox](frontend/src/components/LoadingBox.tsx) is a loading box used while data is being fetched
- [MessageBox](frontend/src/components/MessageBox.tsx) is a Message being displayed if a error occurs


### Pages
- [Homepage](frontend/src/pages/Homfrontendepage.tsx) , is the homepage of the app
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
7. Install cors `npm i cors` and the types of cors `npm i --save-dev @types/cors`