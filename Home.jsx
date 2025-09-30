import { useState, useEffect } from "react";
function Home(){
    const [contador, setContador] = useState(0);
    useEffect(()=>{
        document.title = `clicks: ${contador}`;
        console.log('contador actualizado');
    },[contador]);
    return(
        <div>
            <h1>Principal Contador</h1>
            <p>Contador: {contador} </p>
            <button onClick={()=>setContador(contador+1)}>Incrementar</button>
        </div>
    );
}
export default Home;