import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Contacto(){
    return (
        <div>
            <h1>Acerca de :  .......</h1>
            <Formik
                initialValues={{ nombre: '', email: ''}}
                validationSchema={Yup.object({
                    nombre: Yup.string().required('Nombre requerido'),
                    email: Yup.string().email('Email Invalido').required('Email requerido'),
                })}
                onSubmit={(values)=>{
                    console.log('Formulario enviado: ', values);
                    alert('Formulario enviado con éxito');
                }
                }
            >
            <Form>
                <label>Nombre: </label>
                <Field name="nombre" type="text"/>
                <ErrorMessage name='nombre' component="div" style={{ color: 'red' }} />
                <label>Email: </label>
                <Field name="email" type="email"/>
                <ErrorMessage name='email' component="div" style={{ color: 'red' }} />
                <button type='submit'>Enviar</button>
            </Form>
            </Formik>
            <p>Esta es la sección de CONTACTO</p>
        </div>
    );
}
export default Contacto;
