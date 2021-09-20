import { Button, Form } from "react-bootstrap";


export const FormContact = ({match, data, setData, onSubmit}) => {

    return (
        <div className="app_modal">
            <h2>{match ? 'Редактирование' : 'Создание'} контакта</h2>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Название контакта</Form.Label>
                    <Form.Control
                        value={data.title}
                        onChange={(e) => setData({...data, title: e.target.value})}
                        type="text"
                        placeholder="Введите название"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control
                        value={data.phone}
                        onChange={(e) => setData({...data, phone: e.target.value})}
                        type="text"
                        placeholder="Введите телефон"
                    />
                </Form.Group>

                <Button className="app_background" variant="primary" type="submit">
                    Сохранить
                </Button>
            </Form>
        </div>
    );
}