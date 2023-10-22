import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MainHeader = (props) => {
  const cart = useSelector((state) => state.cart);

  return (
    <Navbar className="bg-white shadow-sm">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
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
