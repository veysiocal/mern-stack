import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

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

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return (
        <PlaceList items={loadedPlaces}/>
    )
};

export default UserPlaces;