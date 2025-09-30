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
            
        </div>
    );
}
export default Home;
