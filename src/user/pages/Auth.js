import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';

import './Auth.css';

const Auth = props => {

    const authContext = useContext(AuthContext);

    const [isCreateMode, setIsCreateMode] = useState(false);

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false,
        },
        password: {
            value: '',
            isValid: false,
        },

    }, false);

    const isSignupHandler = () => {
        if (isCreateMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false,
                }
            }, false);
        }
        setIsCreateMode(prevMode => !prevMode);
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        if (isCreateMode) {
            setIsCreateMode(false)
        }
        else {
            authContext.login();
        }
    }
    return (
        <Card className="authentication">
            <h2>Login required!</h2>
            <hr />
            <form onSubmit={formSubmitHandler}>
                {isCreateMode && <Input
                    element="input"
                    id="name"
                    type="text"
                    label="Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid name."
                    onInput={inputHandler}
                />}
                <Input
                    id="email"
                    type="email"
                    element="input"
                    label="E-mail"
                    placeholder="Enter an e-mail"
                    errorText="Please enter a valid e-mail."
                    validators={[VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    type="password"
                    element="input"
                    label="Password"
                    placeholder="Enter a password"
                    errorText="Please enter a valid name.(min 5 chars)"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>
                    {!isCreateMode ? 'LOGIN' : 'SIGNUP'}
                </Button>

            </form>
            <Button onClick={isSignupHandler} inverse>SWITCH TO {isCreateMode ? 'LOGIN' : 'SIGNUP'}</Button>
            <h3>Login or Create</h3>
        </Card>
    )
};

export default Auth;