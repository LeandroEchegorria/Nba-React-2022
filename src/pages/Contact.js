import { useState } from 'react';
import './Contact.css';
import { Formik, Field, Form , ErrorMessage} from 'formik';
import Loading from '../components/Loading/Loading';

const ContactPage = () => {
    const [formEnviado , setformEnviado] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <div className="form-container">
            <h2>Formulario de Contacto</h2>
            <Formik 
                initialValues={{name: "" , phone:"" , email:"", comment:""}}

                validate={ (values) => {
                    let error={};
                    //validacion nombre
                    if(!values.name){
                        error.name='Por favor, ingrese un nombre';
                    }
                    //validacion telefono
                    if(!values.phone){
                        error.phone='Por favor, ingrese un telefono';
                    }
                    //validacion email
                    if (!values.email) {
                        error.email = 'Por favor, ingrese un correo';
                      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        error.email = 'Correo inválido';
                      }
                    //validacion comentario
                    if(!values.comment){
                        error.comment='Por favor, escriba su mensaje';
                    }

                    return error;
                }}


                onSubmit={ async (values, {resetForm}) => {
                    setLoading(true);
                    await new Promise (resolve => setTimeout(resolve , 3000));
                    setformEnviado(true);
                    setTimeout(()=>setformEnviado(false) , 4000)
                    resetForm();
                    setLoading(false);
                }}
            >
                {({values, errors, handleBlur, handleChange})=>(
                    <Form >
                    <div className='formField'>
                        <label>Nombre completo </label>
                        <Field 
                            name="name" 
                            type="text" 
                            placeholder='Nombre completo' 
                        />
                        <ErrorMessage name='name' component={ ()=> (
                            <div className='errores'>{errors.name}</div>
                        )}/>
                    </div>
                    <div className='formField'>
                        <label>Telefono </label>
                        <Field 
                            name="phone"
                            type="number" 
                            placeholder='Telefono' 
                        />
                        <ErrorMessage name='phone' component={ ()=> (
                            <div className='errores'>{errors.phone}</div>
                        )}/>
                    </div>
                    <div className='formField'>
                        <label>Correo electronico </label>
                        <Field 
                            name="email" 
                            type="email" 
                            placeholder='E-mail' 
                        />
                        <ErrorMessage name='email' component={ ()=> (
                            <div className='errores'>{errors.email}</div>
                        )}/>
                    </div>
                    <div className='formField'>
                        <label>Comentario </label>
                        <textarea 
                            name='comment' 
                            placeholder="Escriba aquí su mensaje"
                            value={values.comment}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        ></textarea>
                        
                        <ErrorMessage name='comment' component={ ()=> (
                            <div className='errores'>{errors.comment}</div>
                        )}/>
                    </div>

                    <button className="submitBtn" type="submit">Enviar</button>
                    
                    { loading  && <Loading /> }
                    {formEnviado && <p className='exito'>Formulario enviado con éxito!</p>}
                
                </Form>

                )}
                
            </Formik>


      
        </div>
    )
}
export default ContactPage;