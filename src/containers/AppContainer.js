import { useEffect } from "react";
import { connect } from "react-redux";

import { authorizationRequest, getContactsRequest, setAuthorization } from "../redux/actions";

import { App } from "../components/App";


const AppContainer = ({auth, handleSetAuthorization, handleAuthorizationRequest, contacts, handleGetContactsRequest}) => {

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

    return (
        <App
            auth={auth}
            handleAuthorizationRequest={handleAuthorizationRequest}
            contacts={contacts}
        />
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    contacts: state.contacts
});

const mapDispatchToProps = (dispatch) => ({
    handleSetAuthorization: (user) => dispatch(setAuthorization(user)),
    handleAuthorizationRequest: (data) => dispatch(authorizationRequest(data)),
    handleGetContactsRequest: () => dispatch(getContactsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);