import { Link } from "react-router-dom";
import { ListGroup, Spinner } from "react-bootstrap";

import trashIcon from '../img/trash.svg';
import pencilIcon from '../img/pencil.svg';


export const Contacts = ({contacts}) => {


    return (
        <div className="app_modal">
            {contacts ? contacts.length !== 0 ? (
                <ListGroup variant="flush">
                    {contacts.map(contact => (
                        <ListGroup.Item key={contact.id}>
                            <h5>{contact.title}</h5>
                            <p>{contact.phone}</p>
                            <Link to={`/contacts/${contact.id}`}>
                                <img className="app_icon" src={pencilIcon} alt="Редактировать"/>
                            </Link>
                            <img className="app_icon" src={trashIcon} alt="Удалить"/>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) : (
                <p>Список контактов пуст</p>
            ) : (
                <Spinner animation="border" variant="primary"/>
            )}
        </div>
    );
}