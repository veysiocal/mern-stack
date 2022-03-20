import React from 'react';

import Input from '../../shared/components/FormElements/Input';

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';

import './NewPlace.css'

const NewPlace = () => {

    // React knows concept of hooks, when we update the state inside of our cıustom hook, 
    // the component that uses our custom hook will update as well.
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false,
        },
        description: {
            value: '',
            isValid: false,
        },
        address: {
            value: '',
            isValid: false,
        },
    }, false
    );

    const placeAddHandler = event => {
        event.preventDefault();
        console.log(formState.inputs.title, formState.inputs.description);
    }
    return (
        <form className='place-form' onSubmit={placeAddHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Title is not valid."
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Description is not valid.(at least five characters)"
                onInput={inputHandler}
            />
            <Input
                id="address"
                element="input"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Address is not valid.)"
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
    )
};

export default NewPlace;