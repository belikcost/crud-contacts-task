import { connect } from "react-redux";

import { setAuthorization } from "../redux/actions";

import { App } from "../components/App";
import { useEffect } from "react";


const AppContainer = ({auth, handleSetAuthorization}) => {
    
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('auth'));
        
        if (!auth && localUser) {
            handleSetAuthorization(localUser);
        }
    },[auth, handleSetAuthorization]);
    
    return (
        <App
            
        />
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    handleSetAuthorization: (user) => dispatch(setAuthorization(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);