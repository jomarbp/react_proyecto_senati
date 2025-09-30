import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Badge, Nav } from "react-bootstrap";
function Home(){
    const [contador, setContador] = useState(0);
    useEffect(()=>{
        document.title = `clicks: ${contador}`;
        console.log('contador actualizado');
    },[contador]);
    return(
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #66aaeaff 0%, #764ba2 100%)'}}>
            <header className="bg-white shadow-sm">
                <Container>
                    <div className="d-flex justify-content-between align-item-center py-3">
                        <h1 className="h3 mb-0 text-primary fw-bold">Jb Store</h1>
                    </div>
                </Container>
            </header>
        </div>
    );
}
export default Home;
