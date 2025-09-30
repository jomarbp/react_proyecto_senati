import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Form, Button } from 'react-bootstrap';

function Contacto() {
    return (
        <Container className="mt-5">
            <h1 className="mb-4">Acerca de : .......</h1>
            <Formik
                initialValues={{
                    nombres: '',
                    apellidos: '',
                    direccion: '',
                    celular: '',
                    edad: '',
                    email: '',
                    sexo: '',
                }}
                validationSchema={Yup.object({
                    nombres: Yup.string().required('Nombres requeridos'),
                    apellidos: Yup.string().required('Apellidos requeridos'),
                    direccion: Yup.string().required('Dirección requerida'),
                    celular: Yup.string()
                        .matches(/^\d{9,}$/, 'Celular inválido')
                        .required('Celular requerido'),
                    edad: Yup.number()
                        .typeError('Edad debe ser un número')
                        .positive('Edad debe ser positiva')
                        .integer('Edad debe ser un número entero')
                        .required('Edad requerida'),
                    email: Yup.string().email('Email inválido').required('Email requerido'),
                    sexo: Yup.string().required('Sexo requerido'),
                })}
                onSubmit={(values) => {
                    console.log('Formulario enviado: ', values);
                    alert('Formulario enviado con éxito');
                }}
            >
                {({ handleSubmit }) => (
                    <FormikForm onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formNombres">
                            <Form.Label>Nombres</Form.Label>
                            <Field name="nombres" type="text" as={Form.Control} />
                            <ErrorMessage name="nombres" component="div" className="text-danger" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formApellidos">
                            <Form.Label>Apellidos</Form.Label>
                            <Field name="apellidos" type="text" as={Form.Control} />
                            <ErrorMessage name="apellidos" component="div" className="text-danger" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDireccion">
                            <Form.Label>Dirección</Form.Label>
                            <Field name="direccion" type="text" as={Form.Control} />
                            <ErrorMessage name="direccion" component="div" className="text-danger" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCelular">
                            <Form.Label>Celular</Form.Label>
                            <Field name="celular" type="text" as={Form.Control} />
                            <ErrorMessage name="celular" component="div" className="text-danger" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEdad">
                            <Form.Label>Edad</Form.Label>
                            <Field name="edad" type="number" as={Form.Control} />
                            <ErrorMessage name="edad" component="div" className="text-danger" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Field name="email" type="email" as={Form.Control} />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSexo">
                            <Form.Label>Sexo</Form.Label>
                            <Field name="sexo" as={Form.Select}>
                                <option value="">Seleccione...</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </Field>
                            <ErrorMessage name="sexo" component="div" className="text-danger" />
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