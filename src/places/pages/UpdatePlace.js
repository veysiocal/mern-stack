import React from 'react';

import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';

import './NewPlace.css'

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire",
        description: "DASDASDADA",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
        address: "New York ",
        location: {
            lat: 24.4854228,   //google mapsden alunacak latitude @ işaretinden sonra gelen sayı
            lng: 53.7975573,   //longitude lat'dan sonra gelen sayı.
        },
        creator: "u1",
    },
    {
        id: "p2",
        title: "Empire",
        description: "DASDASDADA",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
        address: "New York ",
        location: {
            lat: 24.4854228,   //google mapsden alunacak latitude @ işaretinden sonra gelen sayı
            lng: 53.7975573,   //longitude lat'dan sonra gelen sayı.
        },
        creator: "u2",
    }
];

const UpdatePlace = props => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true,
        },
        description: {
            value: identifiedPlace.description,
            isValid: true,
        }
    }, true);

    if (!identifiedPlace) {
        return (
            <div className='center'>
                <h2>Could not find place!</h2>
            </div>
        )
    }

    const placeUpdateHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }
    return (
        <form className='place-form' onSubmit={placeUpdateHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textares"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description(min 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button
                type="submit"
                disabled={!formState.isValid}
            >UPDATE PLACE</Button>
        </form>
    )
};

export default UpdatePlace;