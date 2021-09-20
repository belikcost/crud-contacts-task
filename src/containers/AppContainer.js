import { useEffect } from "react";
import { connect } from "react-redux";

import { authorizationRequest, editContactRequest, getContactsRequest, setAuthorization } from "../redux/actions";

import { App } from "../components/App";
import { Authorization } from "../components/Authorization";


const AppContainer = ({auth, handleSetAuthorization, handleAuthorizationRequest, contacts, handleGetContactsRequest, handleEditContactRequest}) => {

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('auth'));

        if (!auth && localUser) {
            handleSetAuthorization(localUser);
        }
    }, [auth, handleSetAuthorization]);
    
    useEffect(() => {
        if (auth && !contacts) {
            handleGetContactsRequest();
        }
    }, [auth, contacts, handleGetContactsRequest]);


    if (auth) {
        return (
            <App contacts={contacts}/>
        );
    } else {
        return (
            <Authorization handleAuthorizationRequest={handleAuthorizationRequest}/>
        );
    }
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    contacts: state.contacts
});

const mapDispatchToProps = (dispatch) => ({
    handleSetAuthorization: (user) => dispatch(setAuthorization(user)),
    handleAuthorizationRequest: (data) => dispatch(authorizationRequest(data)),
    handleGetContactsRequest: () => dispatch(getContactsRequest()),
    handleEditContactRequest: (data) => dispatch(editContactRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);