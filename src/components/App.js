import { Redirect, Route, Switch } from "react-router-dom";

import FormContactContainer from "../containers/FormContactContainer";

import { Contacts } from "./Contacts";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


export const App = ({contacts, handleRemoveContactRequest}) => {

    return (
        <div className="app app_background">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/contacts"/>
                </Route>
                <Route exact path="/contacts">
                    <Contacts contacts={contacts} handleRemoveContact={handleRemoveContactRequest}/>
                </Route>
                <Route exact path="/contacts/edit/:id">
                    <FormContactContainer/>
                </Route>
                <Route path="/contacts/create">
                    <FormContactContainer/>
                </Route>
            </Switch>
        </div>
    );
}