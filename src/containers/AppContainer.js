import { useEffect } from "react";
import { connect } from "react-redux";

import {
    authorizationRequest,
    getContactsRequest,
    removeContactRequest,
    setAuthorization
} from "../redux/actions";

import { App } from "../components/App";
import { Authorization } from "../components/Authorization";


const AppContainer = ({auth, handleSetAuthorization, handleAuthorizationRequest, contacts, handleGetContactsRequest, handleRemoveContactRequest}) => {
    const localUser = JSON.parse(localStorage.getItem('auth'));
    
    useEffect(() => {
        if (!auth && localUser) {
            handleSetAuthorization(localUser);
        }
    }, [auth, handleSetAuthorization, localUser]);
    
    useEffect(() => {
        if (auth && !contacts) {
            handleGetContactsRequest();
        }
    }, [auth, contacts, handleGetContactsRequest]);


    if (auth || localUser) {
        return (
            <App contacts={contacts} handleRemoveContactRequest={handleRemoveContactRequest}/>
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
    handleRemoveContactRequest: (id) => dispatch(removeContactRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);