import React, { useState } from 'react';

import { StyledLoginForm, StyledLoginInput, StyledLoginButton } from './login.scss';

import useForm from '../../shared/hooks/useForm';

const Login = ({ loginUser }) => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const formInitialState = {
        Username: {
            value: '',
            isValid: false,
            isTouched: false
        },
        Password: {
            value: '',
            isValid: false,
            isTouched: false
        }
    };

    const { formState, changeHandler, blurHandler } = useForm(formInitialState);

    const submitHandler = (e) => {
        e.preventDefault();
        let dataToSend = {};

        Object.keys(formState).forEach(element => {
            if (isLoginMode) {
                if (element === 'fullName') {
                    return
                }
            }
            if (element === 'isFormValid') {
                return
            }
            dataToSend[element] = formState[element].value;
        });

        loginUser(dataToSend, !isLoginMode);
    };

    return (
        <div>
            <StyledLoginForm
                onSubmit={submitHandler}
            >
                <h3>{isLoginMode ? 'login' : 'sign up'} to My Player</h3>
                <StyledLoginInput
                    placeholder='name'
                    name='Username'
                    invalid={!formState.Username.isValid && formState.Username.isTouched}
                    value={formState.Username.value}
                    onChange={changeHandler}
                    onBlur={() => blurHandler('Username')}
                />
                <StyledLoginInput
                    placeholder='Password'
                    type='password'
                    name='Password'
                    invalid={!formState.Password.isValid && formState.Password.isTouched}
                    value={formState.Password.value}
                    onChange={changeHandler}
                    onBlur={() => blurHandler('Password')}
                />
                <StyledLoginButton
                    type='submit'
                    disabled={!formState.isFormValid}
                >{isLoginMode ? 'login' : 'sign up'}</StyledLoginButton>
            </StyledLoginForm>
            <StyledLoginButton
                onClick={() => setIsLoginMode(!isLoginMode)}
            >switch to {isLoginMode ? 'SIGN UP' : 'LOGIN'}</StyledLoginButton>
        </div>
    )
}

export default Login;