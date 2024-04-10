import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { initialProducts } from './data'

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
          <Row>
            {initialProducts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
                <img src={product.image} alt={product.name} className='product-imgage' />
                <h2>{product.name}</h2>
                <p>{product.price}</p>

              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        All rights reserved
      </footer>
    </div>
  )
}

export default App
