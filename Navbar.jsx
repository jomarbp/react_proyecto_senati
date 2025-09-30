import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { RUTAS } from '../routes.js';

function Navbar() {
    return (
        <BootstrapNavbar bg="white" expand="lg" className="shadow-sm" fixed="top">
            <Container>
                <BootstrapNavbar.Brand as={Link} to={RUTAS.INICIO} className="fw-bold text-primary" >
                    MiApp-JBStore
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav.Link as={Link} to={RUTAS.INICIO} className="fw-medium">
                        Principal
                    </Nav.Link>

                    <Nav.Link as={Link} to={RUTAS.ABOUT} className="fw-medium">
                        Acerca
                    </Nav.Link>

                    <Nav.Link as={Link} to={RUTAS.CONTACTO} className="fw-medium">
                        Contacto
                    </Nav.Link>

                    <Nav.Link as={Link} to="/usuario/123" className="fw-medium">
                        Usuario
                    </Nav.Link>
                </BootstrapNavbar.Collapse>

            </Container>
        </BootstrapNavbar>
    );
}
export default Navbar;
