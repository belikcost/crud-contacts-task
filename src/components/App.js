import { Button, Form, ListGroup, Spinner } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


export const App = ({auth, handleAuthorizationRequest, contacts}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        handleAuthorizationRequest({login: e.target[0].value, password: e.target[1].value});
    }

    return (
        <div className="app app_background">
            {auth ? (
                <div className="app_modal">
                    <h3>Контакты</h3>
                    {contacts ? contacts.length !== 0 ? (
                        <ListGroup variant="flush">
                            {contacts.map(contact => (
                                <ListGroup.Item key={contact.id}>
                                    <h5>{contact.title}</h5>
                                    <p>{contact.phone}</p>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <p>Список контактов пуст</p>
                    ) : (
                        <Spinner animation="border" variant="primary" />
                    )}
                </div>
            ) : (
                <Form className="app_modal auth" onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="text" placeholder="Введите логин" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" required/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="app_background">Войти</Button>
                </Form>
            )}
        </div>
    );
}