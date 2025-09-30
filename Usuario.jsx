import { useParams, useNavigate } from "react-router-dom";
function Usuario(){
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Acerca de :  .......</h1>
            <p>Esta es la sección USUARIO: {id} </p>
            <button onClick={()=> navigate('/')}>Volver a Principal</button>
        </div>
    );
}
export default Usuario;