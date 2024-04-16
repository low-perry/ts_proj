import { useContext, useEffect } from 'react'
import { Badge, Button, Container, Nav, Navbar} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { Store } from './Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

function App() {
  const {state: {mode, cart}, dispatch} = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
    // console.log(mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({type: 'SWITCH_MODE'});
  }
  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand>Typezone</Navbar.Brand>  
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <FontAwesomeIcon icon={mode === 'dark' ? faMoon : faSun} />
            </Button>
            <Link to="/cart" className='nav-link'>
              <i className='fas fa-shopping-cart'></i>
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            <a href="/signin" className='nav-link'>
              <i className='fas fa-user'></i>
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
