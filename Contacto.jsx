import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Form, Button } from 'react-bootstrap';

function Contacto() {
    return (
        <Container className="mt-5">
            <h1 className="mb-4">Acerca de : .......</h1>
            <Formik
                initialValues={{ nombre: '', email: '' }}
                validationSchema={Yup.object({
                    nombre: Yup.string().required('Nombre requerido'),
                    email: Yup.string().email('Email inválido').required('Email requerido'),
                })}
                onSubmit={(values) => {
                    console.log('Formulario enviado: ', values);
                    alert('Formulario enviado con éxito');
                }}
            >
                {({ handleSubmit }) => (
                    <FormikForm onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Field name="nombre" type="text" as={Form.Control} />
                            <ErrorMessage name="nombre" component="div" className="text-danger" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Field name="email" type="email" as={Form.Control} />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </FormikForm>
                )}
            </Formik>
            <p className="mt-4">Esta es la sección de CONTACTO</p>
        </Container>
    );
}

export default Contacto;
