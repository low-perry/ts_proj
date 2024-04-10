import './App.css'
import { initialProducts } from './data'

function App() {

  return (
    <>
    <header>Typezone</header>
    <main>
      <ul>
        {initialProducts.map((product) => (
          <li key={product.slug}>
            <img src={product.image} alt={product.name} className='product-img' />
            <h2>{product.name}</h2>
            <p>{product.price}</p>

          </li>
        ))}
      </ul>
    </main>
    <footer>All rights reserved</footer>
    </>
  )
}

export default App
