import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory, useRouteMatch } from "react-router-dom";

import { addContactRequest, editContactRequest } from "../redux/actions";

import { FormContact } from "../components/FormContact";
import { Spinner } from "react-bootstrap";


const FormContactContainer = ({contacts, handleEditContactRequest, handleAddContactRequest}) => {
    const match = useRouteMatch({
        path: "/contacts/edit/:id",
        exact: true,
    });
    const history = useHistory();

    const initialContact = {
        title: '',
        phone: '',
    };
    const findContact = (contacts, id) => contacts.find(contact => +contact.id === +id);
    const [data, setData] = useState(initialContact);

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handleEditContactRequest(data);
        history.push('/contacts');
    }

    const onSubmitCreate = (e) => {
        e.preventDefault();
        handleAddContactRequest(data);
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

        if (match) {
            return (
                <FormContact match={match} data={data} setData={setData} onSubmit={onSubmitEdit}/>
            );
        } else {
            return (
                <FormContact match={match} data={data} setData={setData} onSubmit={onSubmitCreate}/>
            );
        }

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
    handleAddContactRequest: (data) => dispatch(addContactRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContactContainer);