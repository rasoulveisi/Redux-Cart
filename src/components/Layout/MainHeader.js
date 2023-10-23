import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const MainHeader = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Navbar className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/products" as={NavLink}>
            Products
          </Nav.Link>
          <Nav.Link to="/cart" as={NavLink}>
            Cart ({cart.totalQuantity})
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
