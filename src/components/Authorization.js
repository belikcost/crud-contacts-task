import { Button, Form } from "react-bootstrap";

export const Authorization = ({handleAuthorizationRequest}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        handleAuthorizationRequest({login: e.target[0].value, password: e.target[1].value});
    }

    return (
        <div className="app app_background">
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
        </div>
    );
}