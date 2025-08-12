import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function AppNavbar({ isLoggedIn, role, onLogout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Job Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {!isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <>
                {role === 'candidate' && (
                  <Nav.Link as={Link} to="/dashboard/candidate">
                    Candidate Dashboard
                  </Nav.Link>
                )}
                {role === 'company' && (
                  <Nav.Link as={Link} to="/dashboard/company">
                    Company Dashboard
                  </Nav.Link>
                )}
                {role === 'admin' && (
                  <Nav.Link as={Link} to="/dashboard/admin">
                    Admin Dashboard
                  </Nav.Link>
                )}
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/" onClick={onLogout}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
