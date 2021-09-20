import { Redirect, Route, Switch } from "react-router-dom";

import FormContactContainer from "../containers/FormContactContainer";

import { Contacts } from "./Contacts";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


export const App = ({contacts}) => {

    return (
        <div className="app app_background">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/contacts"/>
                </Route>
                <Route exact path="/contacts">
                    <Contacts contacts={contacts}/>
                </Route>
                <Route path="/contacts/:id">
                    <FormContactContainer/>
                </Route>
            </Switch>
        </div>
    );
}