import { Button } from "@mui/material";
import './Contact.css';

const ContactPage = () => {
    return (
        <div className="form-container">
            <h2>Formulario de Contacto</h2>
            <form >
                <p>
                    <label>Nombre completo </label>
                    <input name="name" type="text" placeholder='Nombre completo' />
                </p>
                <p>
                    <label>Telefono </label>
                    <input name="phone" type="number" placeholder='Telefono' />
                </p>
                <p>
                    <label>Correo electronico </label>
                    <input name="email" type="mail" placeholder='E-mail' />
                </p>
                <p>
                    <label>Comentario </label>
                    <textarea placeholder="Escriba aquí su mensaje"></textarea>
                </p>

                <Button className="submitBtn" type="submit">Enviar</Button>

            </form>
        </div>
    )
}
export default ContactPage;