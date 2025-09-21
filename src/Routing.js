import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Electronics';
import Jwellery from './Jwellery';
import item from './Item';

function Routing() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="/">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/jwellery">Jwellery</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' Component={Home}></Route>
         <Route path='/electronics' Component={Electronics}></Route>
          <Route path='/jwellery' Component={Jwellery}></Route>
          <Route path='/item' Component={item}></Route>
      </Routes>
      <br />
      
    </>
  );
}

export default Routing;