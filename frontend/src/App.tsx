import { useContext, useEffect } from 'react'
import { Badge, Button, Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Store } from './Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

function App() {
  const {state: {mode, cart, userInfo}, dispatch} = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
    // console.log(mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({type: 'SWITCH_MODE'});
  }

  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }

  return (
    <div className='d-flex flex-column vh-100'>
      <ToastContainer position="bottom-left" limit={1} autoClose={1000} />
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Typezone</Navbar.Brand>
            </LinkContainer>  
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
           {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  <i className='fas fa-user'></i>
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link className="nav-link" to="/signin">
                <i className='fas fa-user'></i>
                Sign In
              </Link>
            )}
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
