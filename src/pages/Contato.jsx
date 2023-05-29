import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contato(){
    return(
        <div>
            <Cabeca/>
            
            <div className="formulario">
                <h2>Nos envie uma mensagem</h2>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Coloque sua senha</Form.Label>
                    <Form.Control type="password" placeholder="senha" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Digite sua mensagem</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Seja notificado" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                </Form>
            </div>

            <Rodape/>
        </div>
    )
}

export default Contato