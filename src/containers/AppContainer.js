import { connect } from "react-redux";

import { authorizationRequest, setAuthorization } from "../redux/actions";

import { App } from "../components/App";
import { useEffect } from "react";


const AppContainer = ({auth, handleSetAuthorization, handleAuthorizationRequest}) => {

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('auth'));

        if (!auth && localUser) {
            handleSetAuthorization(localUser);
        }
    }, [auth, handleSetAuthorization]);

    return (
        <App
            auth={auth}
            handleAuthorizationRequest={handleAuthorizationRequest}
        />
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    handleSetAuthorization: (user) => dispatch(setAuthorization(user)),
    handleAuthorizationRequest: (data) => dispatch(authorizationRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);