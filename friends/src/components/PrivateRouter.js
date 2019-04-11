import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default props => {
    const {component: Component, ...rest} = props;

    let token = window.localStorage.getItem('friendsToken')
    return (
        <Route {...rest} render={props => {
            return token ? <Component {...props} /> : <Redirect to="/login" />
        }} />
    )
}