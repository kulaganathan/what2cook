// import logo from "../../logo.svg";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { GiCook } from "react-icons/gi";
import "../../App.css";

export default function Header() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <span>
          <a href="localhost:3000">
            <GiCook size={42} />
          </a>
        </span>
        <Navbar.Brand href="#">What2Cook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Recipes</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Vegetarian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Indian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Chinese</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
