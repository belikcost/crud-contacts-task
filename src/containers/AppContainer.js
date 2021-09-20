import { connect } from "react-redux";

import { App } from "../components/App";


const AppContainer = () => {

    return (
        <App

        />
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);