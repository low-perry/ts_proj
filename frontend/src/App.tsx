import { Container, Nav, Navbar} from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand>Typezone</Navbar.Brand>  
          </Container>
          <Nav>
            <a href="/cart" className='nav-link'>
              {/* <i className='fas fa-shopping-cart'></i> */}
              Cart
            </a>
            <a href="/signin" className='nav-link'>
              {/* <i className='fas fa-user'></i> */}
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
         <Outlet></Outlet>
        </Container>
      </main>
      <footer>
        All rights reserved
      </footer>
    </div>
  )
}

export default App
