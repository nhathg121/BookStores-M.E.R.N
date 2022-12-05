import {
  DropdownButton,
  Dropdown,
  Form,
  Navbar,
  Container,
  Nav,
  Badge,
  Button,
  InputGroup,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg md sm" bg="dark" variant="dark">
      <Container>
        {/* Right content */}
        <Nav>
          <LinkContainer to="/">
            <Navbar.Brand href="/">BOOK ONLY</Navbar.Brand>
          </LinkContainer>
          <InputGroup>
            <DropdownButton
              variant="primary"
              title="All"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item>Romantic Book</Dropdown.Item>
              <Dropdown.Item>Story Book</Dropdown.Item>
              <Dropdown.Item>Another Book</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <Form.Control type="text" placeholder="Normal text" />
            <Button variant="warning">
              <i className="bi bi-search text"></i>
            </Button>
          </InputGroup>
        </Nav>
        {/* //left  */}
        <Nav className="fs-5">
          <LinkContainer to="/admin/orders">
            <Nav.Link>
              Admin
              <span className="position-absolute top-1 start-10  translate-middle p-2 bg-danger border border-light rounded-circle"></span>
            </Nav.Link>
          </LinkContainer>
          <Nav.Link href="#pricing">Pricing</Nav.Link>

          <NavDropdown
            id="nav-dropdown-dark-example"
            title="UserName"
            menuVariant="dark"
          >
            <NavDropdown.Item
              eventKey="/user/my-orders"
              as={Link}
              to="/user/my-orders"
            >
              My Orders
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="/user" as={Link} to="/user">
              My Profile
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="/login" as={Link} to="/login">
              Log out
            </NavDropdown.Item>
          </NavDropdown>

          <LinkContainer to="/admin/orders">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/orders">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          <Nav.Link href="#pricing" className="position-relative px-3">
            <Badge className="position-absolute top-1  start-100  translate-middle  badge border border-light rounded-circle bg-danger p-2">
              9
            </Badge>
            <i className="bi bi-cart3 fs-5"></i>
            <span className="ps-1">CART</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
