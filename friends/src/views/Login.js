import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

export function LoginView(props){
    const [cred, setCred] = useState({
        username: "",
        password: ""
    })

    const handleInput = event => {
        setCred({
            ...cred,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Login>
            <h1>Login</h1>
            <form>
                <input
                    name="username"
                    value={cred.username}
                    onChange={handleInput} 
                />
                <input
                    name="password"
                    value={cred.password}
                    onChange={handleInput} 
                />
                <button onClick={event => event.preventDefault()}>Login</button>
            </form>
        </Login>
    )
}

const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`

export default connect(null, {})(LoginView)