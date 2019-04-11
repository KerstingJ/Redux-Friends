import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default props => {
    const {component: Component, ...rest} = props;

    return (
        <Route {...rest} render={props => {
            return window.localStorage.getItem('friendsToken') ? <Component {...props} /> : <Redirect to="/login" />
        }} />
    )
}