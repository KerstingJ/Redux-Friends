import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default props => {
    let isAuthed = true;

    return <Route {...props} />
}