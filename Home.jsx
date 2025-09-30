import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Badge, Nav } from "react-bootstrap";
function Home() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        document.title = `clicks: ${contador}`;
        console.log('contador actualizado');
    }, [contador]);
    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #66aaeaff 0%, #764ba2 100%)' }}>
            <header className="bg-white shadow-sm">
                <Container>
                    <div className="d-flex justify-content-between align-item-center py-3">
                        <h1 className="h3 mb-0 text-primary fw-bold">Jb Store</h1>
                        <Nav className="d-none d-md-flex">
                            <Nav.Link href="#" className="text-dark">Inicio</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Acerca</Nav.Link>
                            <Nav.Link href="#" className="text-dark">Contacto</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </header>
            <Container className="py-4">
                <Row className="g-4">
                    <Col lg={3} md={4}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Body>
                                <Card.Title className="h6 text-muted">Publicidad</Card.Title>
                                <div className="bg-gradient rounded p-3 text-center" style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)' }}>
                                    <p className="mb-1 fw-bold">!Oferta Increible!</p>
                                    <small>Descuento hasta el 50%</small>
                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Home;
