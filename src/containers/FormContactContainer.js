import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory, useRouteMatch } from "react-router-dom";

import { editContactRequest } from "../redux/actions";

import { FormContact } from "../components/FormContact";
import { Spinner } from "react-bootstrap";


const FormContactContainer = ({contacts, handleEditContactRequest}) => {
    const match = useRouteMatch();
    const history = useHistory();

    const initialContact = {
        title: '',
        phone: '',
    };
    const findContact = (contacts, id) => contacts.find(contact => +contact.id === +id);
    const [data, setData] = useState(initialContact);

    const onSubmit = (e) => {
        e.preventDefault();
        handleEditContactRequest(data);
        history.push('/contacts');
    }

    useEffect(() => {
        if (contacts && match) {
            const contact = findContact(contacts, match.params.id);
            if (contact) {
                setData(contact);
            }
        }
    }, [contacts]);

    if (contacts) {
        return (
            <FormContact data={data} setData={setData} onSubmit={onSubmit}/>
        );
    } else {
        return (
            <Spinner animation="border" variant="light"/>
        );
    }
};

const mapStateToProps = (state) => ({
    contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
    handleEditContactRequest: (data) => dispatch(editContactRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContactContainer);