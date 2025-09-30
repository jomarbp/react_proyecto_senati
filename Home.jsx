import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Badge, Nav } from "react-bootstrap";

function Home() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${contador}`;
    console.log("contador actualizado");
  }, [contador]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #66aaeaff 0%, #764ba2 100%)",
      }}
    >
      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <Container>
          <div className="d-flex justify-content-between align-items-center py-3">
            <h1 className="h3 mb-0 text-primary fw-bold">Mi App React</h1>
            <Nav className="d-none d-md-flex">
              <Nav.Link href="#" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                Contacto
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                Usuario Ejemplo
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </header>

      {/* CONTENIDO */}
      <Container className="py-4">
        <Row className="g-4">
          {/* Publicidad */}
          <Col lg={3} md={4}>
  <Card className="shadow-sm">
    <Card.Body>
      <Card.Title className="h6 text-muted">Publicidad</Card.Title>
      <div
        className="text-center p-3 rounded"
        style={{
          background: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
        }}
      >
        <h5 className="fw-bold mb-2">🔥 Oferta Especial 🔥</h5>
        <p className="mb-1">¡Descuentos de hasta el</p>
        <h3>
          <Badge bg="danger">50%</Badge>
        </h3>
        <p className="mb-2">en productos seleccionados</p>
        <Button variant="warning" size="sm">
          Comprar Ahora
        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

          {/* Contador */}
          <Col lg={6} md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="h5 fw-bold">
                  Home - Contador con Estado
                </Card.Title>
                <Card.Text>
                  Interactúa con el contador y observa cómo cambia el título de
                  la página.
                </Card.Text>
                <h4>
                  Contador: <Badge bg="primary">{contador}</Badge>
                </h4>
                <Button onClick={() => setContador(contador + 1)}>
                  Incrementar
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Estadísticas */}
          <Col lg={3} md={12}>
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Card.Title className="h6 text-muted">Estadísticas</Card.Title>
                <h2 className="text-primary">{contador}</h2>
                <p className="mb-0">Clicks totales</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-2">
          {/* Síguenos */}
          <Col lg={3} md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="h6">Síguenos</Card.Title>
                <div className="d-flex gap-2">
                  <Badge bg="primary">FB</Badge>
                  <Badge bg="danger">IG</Badge>
                  <Badge bg="info">TW</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* ¿Qué aprenderás hoy? */}
          <Col lg={6} md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="h5 fw-bold">
                  ¿Qué aprenderás hoy?
                </Card.Title>
                <Card.Text>
                  Explora nuestras guías y tutoriales para mejorar tus
                  habilidades en React y desarrollo web.
                </Card.Text>
                <Button variant="success">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Noticias */}
          <Col lg={3} md={12}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="h6">Noticias</Card.Title>
                <ul className="mb-0">
                  <li>Nuevo hook disponible</li>
                  <li>Mejora en rendimiento</li>
                  <li>Actualización de seguridad</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p className="mb-0">
          © 2024 Mi App React. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Home;
